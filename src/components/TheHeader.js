export default function TheHeader() {
  return (
    <header className="border-gray-100 border-b">
      <div className="py-11 px-11 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="./img/logo.png" alt="" className="w-10 h-10" />
          <div className="">
            <h3 className="text-xl font-bold">REACT SNEAKERS</h3>
            <p className="text-sm text-gray-700">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="flex items-center gap-7">
          <li className="flex items-center gap-3 text-sm font-semibold">
            <button>
              <img src="/svg/cart.svg" width="20" height="20" alt="Cart" />
            </button>

            <span>1205 руб.</span>
          </li>
          <li>
            <button>
              <img
                src="/svg/favorite.svg"
                width="22"
                height="19"
                alt="Favorite"
              />
            </button>
          </li>
          <li>
            <button>
              <img src="/svg/user.svg" width="20" height="20" alt="User" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
