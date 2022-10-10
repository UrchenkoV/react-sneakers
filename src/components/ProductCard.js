export default function ProductCard() {
  return (
    <div className="border border-gray-100 rounded-[40px] p-8 hover:shadow-lg duration-300 hover:-translate-y-1">
      <div className="">
        <button className="absolute">
          <img src="/svg/favorite-active.svg" alt="" />
        </button>

        <div className="flex flex-col gap-4">
          <img src="/img/sneakers/1.jpg" alt="" />
          <h3 className="text-sm font-normal">
            Мужские Кроссовки Nike Blazer Mid Suede
          </h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs uppercase text-gray-400 font-medium">
                Цена:
              </p>
              <span className="text-sm font-bold">12 999 руб.</span>
            </div>
            <button>
              <img src="/svg/cart-plus.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
