import ProductCard from "../components/ProductCard";

export default function Home({
  searchInput,
  products = [],
  cartProducts = [],
  favorites = [],
  onSearchInput,
  setSearchInput,
  onAddToCart,
  onAddFavorite,
}) {
  return (
    <div className="px-11 py-10">
      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          {searchInput
            ? `Кроссовки по запросу: "${searchInput}"`
            : "Все кроссовки"}
        </h2>

        <div className="relative flex items-center">
          <img src="/svg/search.svg" className="absolute left-5" alt="Поиск" />
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
              onClick={() => setSearchInput("")}
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
              onFavorie={() => onAddFavorite(p, p.id)}
              onAdd={() => onAddToCart(p)}
              isAdded={cartProducts.some(
                (cartProduct) => +cartProduct.product_id === +p.id
              )}
              isFavorite={favorites.some((f) => +f.product_id === +p.id)}
            />
          ))}
      </div>
    </div>
  );
}
