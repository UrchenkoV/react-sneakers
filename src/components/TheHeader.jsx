import { Link } from "react-router-dom";

export default function TheHeader(props) {
  return (
    <header className="border-gray-100 border-b">
      <div className="py-11 px-11 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-4">
            <img src="./img/logo.png" alt="" className="w-10 h-10" />
            <div className="">
              <h3 className="text-xl font-bold">REACT SNEAKERS</h3>
              <p className="text-sm text-gray-700">Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>

        <ul className="flex items-center gap-7">
          <li
            onClick={props.onCloseCart}
            className="flex items-center gap-3 text-sm font-semibold cursor-pointer"
          >
            <img src="/svg/cart.svg" width="20" height="20" alt="Cart" />

            <span>1205 руб.</span>
          </li>
          <li>
            <Link to="/favorites">
              <img
                src="/svg/favorite.svg"
                width="22"
                height="19"
                alt="Favorite"
              />
            </Link>
          </li>
          <li className="cursor-pointer">
            <img src="/svg/user.svg" width="20" height="20" alt="User" />
          </li>
        </ul>
      </div>
    </header>
  );
}
