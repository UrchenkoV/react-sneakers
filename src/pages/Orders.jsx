import { useContext, useState, useEffect } from "react";
import AppContext from "../context";
import axios from "axios";

import BaseInfo from "../components/BaseInfo";
import ProductCard from "../components/ProductCard";

export default function Orders() {
  const {isLoading, setIsLoading} = useContext(AppContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get(
          "https://6347f6c30484786c6e8e09ee.mockapi.io/orders"
        );
   
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов.");
        console.error(error);
      }
    })();
  }, []);

  const renderItems = () => {
    return (isLoading ? [...Array(8)] : orders).map((item, index) => (
      <ProductCard
        key={index}
        id={item?.product_id}
        title={item?.title}
        price={item?.price}
        image={item?.image}
      />
    ));
  };

  return (
    <div className="px-11 py-10">
      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-3xl font-bold">Мои покупки</h2>
      </div>

      {isLoading || orders.length > 0 ? (
        <div className="grid grid-cols-4 gap-10">{renderItems()}</div>
      ) : (
        <BaseInfo
          image="/img/smile-sad-2.png"
          title="У вас нет заказов"
          description="Вы нищеброд?  Оформите хотя бы один заказ."
        />
      )}
    </div>
  );
}
