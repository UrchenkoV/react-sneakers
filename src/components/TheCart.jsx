import { useContext, useState } from "react";
import AppContext from "../context";
import axios from "axios";
import { useCart } from "../hooks/useCart";

import BaseInfo from "./BaseInfo";

export default function TheCart({ onClose, onRemove }) {
  const { cartProducts } = useContext(AppContext);
  const { cartResultPrice, setCartProducts } = useCart();

  const [isOrdered, setIsOrdered] = useState(false);
  const [isOrderLoading, setIsOrderLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const createOrder = async () => {
    try {
      setIsOrderLoading(true);
      const { data } = await axios.post(
        "https://6347f6c30484786c6e8e09ee.mockapi.io/orders",
        { items: cartProducts }
      );

      setIsOrdered(true);
      setOrderId(data.id);
      setCartProducts([]);

      for (const item of cartProducts) {
        await onRemove(item.id);
        await delay(1000);
      }
    } catch (error) {
      alert("Произошка ошибка при оформлении заказа.");
      console.error(error);
    }
    setIsOrderLoading(false);
  };

  return (
    <div>
      <div
        onClick={onClose}
        className="w-full h-full bg-black opacity-50 absolute top-0 left-0 z-10"
      ></div>

      <div className="bg-white w-96 bottom-0 absolute z-20 top-0 right-0 shadow-lg p-8 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-2xl">Корзина</h3>

          <button
            onClick={onClose}
            className="shrink-0 opacity-50 hover:opacity-100"
          >
            <img
              src="/svg/cart-button-remove.svg"
              width="32"
              height="32"
              alt="Remove from cart."
            />
          </button>
        </div>

        {cartProducts.length > 0 ? (
          <div className="flex flex-col flex-1 gap-8 overflow-y-auto">
            <div className="flex flex-col gap-5 grow overflow-y-auto">
              {cartProducts.map((p, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-[20px] p-5 flex gap-4 mr-2"
                >
                  <img src={p.image} width="70" height="70" alt={p.title} />

                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-normal">{p.title}</h4>
                    <span className="text-sm font-bold">
                      {p.price.toLocaleString()} руб.
                    </span>
                  </div>

                  <button
                    onClick={() => onRemove(p.id)}
                    className="shrink-0 opacity-50 hover:opacity-100"
                  >
                    <img
                      src="/svg/cart-button-remove.svg"
                      width="32"
                      height="32"
                      alt="Remove from cart."
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="text-base">
              <div className="flex justify-between gap-2 mb-5">
                <span className="shrink-0">Итого:</span>
                <span className="border-b border-gray-200 border-dashed w-full"></span>
                <span className="font-semibold shrink-0">
                  {cartResultPrice.toLocaleString()} руб.
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="shrink-0">Налог 5%:</span>
                <span className="border-b border-gray-200 border-dashed w-full"></span>
                <span className="font-semibold shrink-0">
                  {(cartResultPrice * 0.05).toLocaleString()} руб.
                </span>
              </div>

              <button
                onClick={createOrder}
                className={[
                  "mt-6 font-semibold duration-300 text-white py-4 px-7 w-full rounded-[18px] relative flex items-center",
                  isOrderLoading
                    ? "bg-gray-600"
                    : "group bg-green-400 hover:bg-green-500",
                ].join(" ")}
                disabled={isOrderLoading}
              >
                <span className="grow">Оформить заказ</span>
                <img
                  src="/svg/arrow-right.svg"
                  className="absolute right-7 group-hover:translate-x-2 transition-transform"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        ) : (
          <BaseInfo
            title={isOrdered ? "Заказ оформлен!" : "Корзина"}
            image={
              isOrdered ? "/img/order-completed.png" : "/img/cart-empty.png"
            }
            description={
              isOrdered
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
