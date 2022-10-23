import ContentLoader from "react-content-loader";

export default function ProductCard({
  title,
  image,
  price,
  onFavorie,
  onAdd,
  isFavorite = false,
  isAdded = false,
  isLoading = true,
}) {
  return (
    <div className="border border-gray-100 rounded-[40px] p-8 hover:shadow-lg duration-300 hover:-translate-y-1">
      {isLoading ? (
        <ContentLoader
          speed={2}
          width="100%"
          height="100%"
          viewBox="0 0 210 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="210" height="115" />
          <rect x="0" y="140" rx="3" ry="3" width="210" height="15" />
          <rect x="0" y="161" rx="3" ry="3" width="110" height="15" />
          <rect x="0" y="225" rx="8" ry="8" width="110" height="24" />
          <rect x="178" y="221" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <div className="">
          <button className="absolute" onClick={onFavorie}>
            <img
              src={
                isFavorite
                  ? "/svg/favorite-active.svg"
                  : "/svg/favorite-inactive.svg"
              }
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
              <button onClick={onAdd}>
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
      )}
    </div>
  );
}
