import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import AppContext from "./context";

import TheHeader from "./components/TheHeader";
import TheCart from "./components/TheCart";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setFavorite] = useState(false);
  const [cartResultPrice, setCartResultPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const dataProducts = await axios.get(
        "https://6347f6c30484786c6e8e09ee.mockapi.io/products"
      );
      const dataCartProducts = await axios.get(
        "https://6347f6c30484786c6e8e09ee.mockapi.io/cart"
      );
      const dataFavorites = await axios.get(
        "https://6347f6c30484786c6e8e09ee.mockapi.io/favorites"
      );

      setProducts(dataProducts.data);
      setCartProducts(dataCartProducts.data);
      setFavorites(dataFavorites.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setCartResultPrice(getResultPrice());
  }, [cartProducts]);

  const onAddToCart = async (product, productId) => {
    try {
      const hasProduct = cartProducts.find((p) => +p.product_id === +productId);

      if (hasProduct) {
        onRemoveProduct(hasProduct.id);
      } else {
        const dataProduct = Object.assign(product, { product_id: productId });
        const { data } = await axios.post(
          "https://6347f6c30484786c6e8e09ee.mockapi.io/cart",
          dataProduct
        );

        setCartProducts((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("При добавлении в корзину произошла ошибка.");
      console.error(error);
    }
  };

  const onRemoveProduct = async (id) => {
    try {
      await axios.delete(
        `https://6347f6c30484786c6e8e09ee.mockapi.io/cart/${id}`
      );
      setCartProducts((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (e) {
      alert("Ошибка при удалении из корзины.");
      console.error(e);
    }
  };

  const onSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const onAddFavorite = async (product, productId) => {
    try {
      const hasProduct = favorites.find((p) => +p.product_id === +productId);
      if (!hasProduct) {
        const { data } = await axios.post(
          `https://6347f6c30484786c6e8e09ee.mockapi.io/favorites`,
          Object.assign(product, { product_id: productId })
        );
        setFavorite(true);
        setFavorites((prev) => [...prev, data]);
        return;
      }

      deleteFavorite(hasProduct.id);
    } catch (error) {
      alert("Ошибка.");
      console.error(error);
    }
  };

  const deleteFavorite = async (favoriteId) => {
    try {
      const { data } = await axios.delete(
        `https://6347f6c30484786c6e8e09ee.mockapi.io/favorites/${favoriteId}`
      );
      setFavorites((prev) =>
        prev.filter((favorite) => +favorite.id !== +favoriteId)
      );
      setFavorite(false);
    } catch (error) {
      alert("Ошибка.");
      console.error(error);
    }
  };

  const getResultPrice = () => {
    return cartProducts.reduce((accum, current) => accum + current.price, 0);
  };

  const isProductAdded = (productId) => {
    return cartProducts.some(
      (obj) => Number(obj.product_id) === Number(productId)
    );
  };

  return (
    <AppContext.Provider
      value={{ products, favorites, cartProducts, isProductAdded, isLoading }}
    >
      <div className="wrapper">
        {isCartOpen && (
          <TheCart
            onClose={() => setIsCartOpen(false)}
            onRemove={onRemoveProduct}
            cartResultPrice={cartResultPrice}
            setCartProducts={setCartProducts}
          />
        )}

        <TheHeader
          onOpenCart={() => setIsCartOpen(true)}
          cartResultPrice={cartResultPrice}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchInput={searchInput}
                onSearchInput={onSearchInput}
                setSearchInput={setSearchInput}
                onAddToCart={onAddToCart}
                onAddFavorite={onAddFavorite}
                isFavorite={isFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                onFavorie={onAddFavorite}
                onAddFavorite={onAddFavorite}
                onAddToCart={onAddToCart}
                isFavorite={isFavorite}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
