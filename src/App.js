import { useState, useEffect } from "react";

import TheHeader from "./components/TheHeader";
import TheCart from "./components/TheCart";
import ProductCard from "./components/ProductCard";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://6347f6c30484786c6e8e09ee.mockapi.io/products"
        );

        setProducts(await res.json());
      } catch (e) {
        console.error(e);
      }
    };
    getProducts();
  }, []);

  const onAddToCart = (product) => {
    if (cartProducts.some((p) => p.id === product.id)) {
      setCartProducts(cartProducts.filter((p) => p.id !== product.id));
    } else {
      setCartProducts((prev) => [...prev, product]);
    }
  };

  const onSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="wrapper">
      {isCartOpen && (
        <TheCart products={cartProducts} onClose={() => setIsCartOpen(false)} />
      )}

      <TheHeader onCloseCart={() => setIsCartOpen(true)} />

      <div className="px-11 py-10">
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            {searchInput
              ? `Кроссовки по запросу: "${searchInput}"`
              : "Все кроссовки"}
          </h2>

          <div className="relative flex items-center">
            <img
              src="/svg/search.svg"
              className="absolute left-5"
              alt="Поиск"
            />
            <input
              onChange={onSearchInput}
              type="text"
              value={searchInput}
              className="border border-gray-100 rounded-xl pl-12 pr-11 py-3 focus:border-gray-300 placeholder:text-gray-200 focus:outline-none text-gray-300"
              placeholder="Поиск..."
            />
            {searchInput && (
              <img
                src="/svg/cart-button-remove.svg"
                className="absolute right-4 w-5 cursor-pointer"
                alt="Clear"
                onClick={() => setSearchInput('')}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">
          {products
            .filter((item) =>
              item.title.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((p) => (
              <ProductCard
                key={p.id}
                title={p.title}
                price={p.price}
                image={p.image}
                onFavorie={() => console.log("onFavorite")}
                onAdd={() => onAddToCart(p)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
