export default function BaseInfo({image, title, description, onClose}) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <img
          src={image}
          alt={title}
          className="inline-block"
        />
        <h3 className="font-semibold text-xl mt-5 mb-3">{title}</h3>
        <p className="text-base">
          {description}
        </p>

        <button
          onClick={onClose}
          className="group mt-10 font-semibold bg-green-500 hover:bg-green-600 duration-300 text-white py-4 px-7 w-full rounded-[18px] relative flex items-center"
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
