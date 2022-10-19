export default function FavoriteEmpty() {
  return (
    <div className="flex items-center flex-col mt-10 mb-60">
      <img src="/img/smile-sad.png" alt="Закладок нет :(" />

      <h2 className="text-2xl font-semibold mt-6 mb-3">Закладок нет :(</h2>

      <p className="text-base">Вы ничего не добавляли в закладки</p>

      <button
        className="group mt-14 font-semibold bg-green-400 hover:bg-green-500 duration-300 text-white py-4 px-7 w-full rounded-[18px] relative flex items-center w-60"
      >
        <img
          src="/svg/arrow-left.svg"
          className="absolute left-7 group-hover:-translate-x-2 transition-transform"
          alt="arrow"
        />
        <span className="grow">Вернуться назад</span>
      </button>
    </div>
  );
}
