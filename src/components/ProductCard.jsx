import { useState } from "react";

export default function ProductCard({title, image, price, onFavorie, onAdd, favorited = false}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setFavorite] = useState(favorited);

  const onClickAdd = () => {
    onAdd()
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorie()
    setFavorite(!isFavorite);
  };

  return (
    <div className="border border-gray-100 rounded-[40px] p-8 hover:shadow-lg duration-300 hover:-translate-y-1">
      <div className="">
        <button className="absolute" onClick={onClickFavorite}>
          <img
            src={isFavorite ? "/svg/favorite-active.svg" : "/svg/favorite-inactive.svg"}
            alt=""
          />
        </button>

        <div className="flex flex-col gap-4">
          <img src={image} alt={title} />
          <h3 className="text-sm font-normal">{title}</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs uppercase text-gray-400 font-medium">
                Цена:
              </p>
              <span className="text-sm font-bold">
                {price.toLocaleString()} руб.
              </span>
            </div>
            <button onClick={onClickAdd}>
              <img
                src={
                  isAdded ? "/svg/cart-plus-active.svg" : "/svg/cart-plus.svg"
                }
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
