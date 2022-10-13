import { useState, useEffect } from "react";

import TheHeader from "./components/TheHeader";
import TheCart from "./components/TheCart";
import ProductCard from "./components/ProductCard";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

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

  return (
    <div className="wrapper">
      {isCartOpen && (
        <TheCart products={cartProducts} onClose={() => setIsCartOpen(false)} />
      )}

      <TheHeader onCloseCart={() => setIsCartOpen(true)} />

      <div className="px-11 py-10">
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Все кроссовки</h2>

          <div className="relative flex items-center">
            <img
              src="/svg/search.svg"
              className="absolute left-5"
              alt="Поиск"
            />
            <input
              type="text"
              className="border border-gray-100 rounded-xl pl-12 pr-5 py-3 focus:border-gray-300 placeholder:text-gray-200 focus:outline-none text-gray-300"
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">
          {/* {[1, 1, 1, 1, 5].map((product) => (
            <ProductCard
              title="Мужские Кроссовки Nike Blazer Mid Suede"
              price={12999}
              image="/img/sneakers/1.jpg"
            />
          ))} */}
          {products.map((p) => (
            <ProductCard
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
