import FavoriteEmpty from "../components/FavoriteEmpty";
import ProductCard from "../components/ProductCard";

export default function Favorites({
  items,
  onAddToCart,
  onAddFavorite,
  cartProducts,
  isLoading,
}) {

  const renderItems = () => {
    return (isLoading ? [...Array(8)] : items).map((favorite, index) => (
      <ProductCard
        key={favorite?.id || index}
        title={favorite?.title}
        price={favorite?.price}
        image={favorite?.image}
        onFavorie={() => onAddFavorite(favorite, favorite.product_id)}
        onAdd={() => onAddToCart(favorite, favorite.product_id)}
        isFavorite={true}
        isAdded={cartProducts.some(
          (cartProduct) => +cartProduct.product_id === +favorite.product_id
        )}
        isLoading={isLoading}
      />
    ));
  };

  return (
    <div className="px-11 py-10">
      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-3xl font-bold">Мои закладки</h2>
      </div>

      {items.length > 0 || isLoading ? (
        <div className="grid grid-cols-4 gap-10">{renderItems()}</div>
      ) : (
        <FavoriteEmpty />
      )}
    </div>
  );
}
