export default function TheCart() {
  return (
    <div>
      <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0 z-10"></div>

      <div className="bg-white w-96 h-full0 bottom-0 absolute z-20 top-0 right-0 shadow-lg p-8 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-2xl">Корзина</h3>

          <button className="shrink-0 opacity-50 hover:opacity-100">
            <img
              src="/svg/cart-button-remove.svg"
              width="32"
              height="32"
              alt="Remove from cart."
            />
          </button>
        </div>

        <div className="flex flex-col gap-5 grow overflow-y-auto">
          <div className="border border-gray-100 rounded-[20px] p-5 flex gap-4">
            <img
              src="/img/sneakers/1.jpg"
              width="70"
              height="70"
              alt="cart product"
            />

            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-normal">
                Мужские Кроссовки Nike Air Max 270
              </h4>
              <span className="text-sm font-bold">12 999 руб.</span>
            </div>

            <button className="shrink-0 opacity-50 hover:opacity-100">
              <img
                src="/svg/cart-button-remove.svg"
                width="32"
                height="32"
                alt="Remove from cart."
              />
            </button>
          </div>
        </div>

        <div className="text-base">
          <div className="flex justify-between gap-2 mb-5">
            <span className="shrink-0">Итого:</span>
            <span className="border-b border-gray-200 border-dashed w-full"></span>
            <span className="font-semibold shrink-0">21 498 руб.</span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="shrink-0">Налог 5%:</span>
            <span className="border-b border-gray-200 border-dashed w-full"></span>
            <span className="font-semibold shrink-0">1 074 руб.</span>
          </div>

          <button className="group mt-6 font-semibold bg-green-400 hover:bg-green-500 duration-300 text-white py-4 px-7 w-full rounded-[18px] relative flex items-center">
            <span className="grow">Оформить заказ</span>
            <img
              src="/svg/arrow-right.svg"
              className="absolute right-7 group-hover:translate-x-2 transition-transform"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
