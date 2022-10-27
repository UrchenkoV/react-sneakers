import { useContext } from "react";
import AppContext from "../context";

import ProductCard from "../components/ProductCard";
import BaseInfo from "../components/BaseInfo";

export default function Favorites({ onAddToCart, onAddFavorite }) {
  const { favorites, isLoading } = useContext(AppContext);

  const renderItems = () => {
    return (isLoading ? [...Array(8)] : favorites).map((favorite, index) => (
      <ProductCard
        key={favorite?.id || index}
        id={favorite?.product_id}
        title={favorite?.title}
        price={favorite?.price}
        image={favorite?.image}
        onFavorie={() => onAddFavorite(favorite, favorite.product_id)}
        onAdd={() => onAddToCart(favorite, favorite.product_id)}
        isFavorite={true}
      />
    ));
  };

  return (
    <div className="px-11 py-10">
      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-3xl font-bold">Мои закладки</h2>
      </div>

      {favorites.length > 0 || isLoading ? (
        <div className="grid grid-cols-4 gap-10">{renderItems()}</div>
      ) : (
        <div className='mb-20'>
          <BaseInfo
            image="/img/smile-sad.png"
            title="Закладок нет :("
            description="Вы ничего не добавляли в закладки"
          />
        </div>
      )}
    </div>
  );
}
