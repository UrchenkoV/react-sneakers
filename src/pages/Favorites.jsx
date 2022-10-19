import FavoriteEmpty from "../components/FavoriteEmpty";
import ProductCard from "../components/ProductCard";

export default function Favorites({ items, onAddToCart, onAddFavorite }) {
  return (
    <div className="px-11 py-10">
      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-3xl font-bold">Мои закладки</h2>
      </div>

      {items.length > 0 ? (
        <div className="grid grid-cols-4 gap-10">
          {items.map((favorite) => (
            <ProductCard
              key={favorite.id}
              title={favorite.title}
              price={favorite.price}
              image={favorite.image}
              onFavorie={() => onAddFavorite(favorite, favorite.product_id)}
              onAdd={() => onAddToCart(favorite)}
              favorited={true}
            />
          ))}
        </div>
      ) : (
        <FavoriteEmpty />
      )}
    </div>
  );
}
