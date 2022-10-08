function App() {
  return (
    <div className="wrapper">
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

      <div className="px-11 py-10">
        <h2 className="mb-10 text-3xl font-bold">Все кроссовки</h2>

        <div className="grid grid-cols-4 gap-10">
          <div className="border border-gray-100 rounded-[40px] p-8 hover:shadow-lg duration-300">
            <div className="">
              <button>
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
        </div>
      </div>
    </div>
  );
}

export default App;
