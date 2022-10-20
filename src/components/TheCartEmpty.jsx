export default function TheCartEmpty({onClose}) {
  return (
    <div className="flex items-center h-full">
      <div className="text-center">
        <img
          src="/img/cart-empty.png"
          alt="Cart empty"
          className="inline-block"
        />
        <h3 className="font-semibold text-xl mt-5 mb-3">Корзина</h3>
        <p className="text-base">
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </p>

        <button
          onClick={onClose}
          className="group mt-10 font-semibold bg-green-400 hover:bg-green-500 duration-300 text-white py-4 px-7 w-full rounded-[18px] relative flex items-center"
        >
          <img
            src="/svg/arrow-left.svg"
            className="absolute left-7 group-hover:-translate-x-2 transition-transform"
            alt="arrow"
          />
          <span className="grow">Вернуться назад</span>
        </button>
      </div>
    </div>
  );
}
