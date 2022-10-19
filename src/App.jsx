import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

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

  useEffect(() => {
    axios
      .get("https://6347f6c30484786c6e8e09ee.mockapi.io/products")
      .then((res) => setProducts(res.data))
      .catch((e) => console.error(e));
    axios
      .get("https://6347f6c30484786c6e8e09ee.mockapi.io/cart")
      .then((res) => setCartProducts(res.data))
      .catch((e) => console.error(e));
    axios
      .get("https://6347f6c30484786c6e8e09ee.mockapi.io/favorites")
      .then((res) => setFavorites(res.data))
      .catch((e) => console.error(e));
  }, []);

  const onAddToCart = async (product) => {
    try {
      const hasProduct = cartProducts.find(
        (p) => +p.product_id === +product.id
      );
      if (hasProduct) {
        onRemoveProduct(hasProduct.id);
      } else {
        const dataProduct = Object.assign(product, { product_id: product.id });
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
      console.log(product, productId, favorites);
      const hasProduct = favorites.find((p) => p.product_id == productId);
      if (!hasProduct) {
        const { data } = await axios.post(
          `https://6347f6c30484786c6e8e09ee.mockapi.io/favorites`,
          Object.assign(product, { product_id: productId })
        );
        setFavorites((prev) => [...prev, data]);
        return;
      }
      deleteFavorite(product.id);
    } catch (error) {
      alert("Ошибка.");
      console.error(error);
    }
  };

  const deleteFavorite = async (favoriteId) => {
    try {
      console.log(favoriteId, favorites);
      const { data } = await axios.delete(
        `https://6347f6c30484786c6e8e09ee.mockapi.io/favorites/${favoriteId}`
      );
      setFavorites((prev) => prev.filter((favorite) => +favorite.id != +favoriteId));
      console.log(data, favorites);
    } catch (error) {
      alert("Ошибка.");
      console.error(error);
    }
  };

  return (
    <div className="wrapper">
      {isCartOpen && (
        <TheCart
          products={cartProducts}
          onClose={() => setIsCartOpen(false)}
          onRemove={onRemoveProduct}
        />
      )}

      <TheHeader onCloseCart={() => setIsCartOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              searchInput={searchInput}
              onSearchInput={onSearchInput}
              setSearchInput={setSearchInput}
              onAddToCart={onAddToCart}
              onAddFavorite={onAddFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favorites}
              onFavorie={onAddFavorite}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
