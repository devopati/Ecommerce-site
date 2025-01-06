import { useEffect, useState } from "react";
import API from "../api/api";
import { OrderCard } from "../components/OrderCard";
import { ProductType } from "../types/types";

const Orders = () => {
  const user: {
    user: { email: string; fullName: string; _id: string };
    token: string;
  } = JSON.parse(localStorage.getItem("user")); //get token and user from local storage

  const [orders, setOrders] = useState<ProductType[]>([]);
  const getOrdersHandler = async () => {
    try {
      const res = await API.get("product/orders", {
        params: {
          userId: user.user._id,
        },
      });
      setOrders(res.data.orders.Orders);
      console.log(res.data.orders.Orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrdersHandler();
  }, []);
  return (
    <div className="pt-10">
      <h1>Orders</h1>

      <div className="grid grid-cols-4 gap-10 pt-5">
        <div className="w-full col-span-3">
          {orders.map((o, i) => {
            return <OrderCard order={o} key={i} />;
          })}
        </div>
        <div className="bg-white border"></div>
      </div>
    </div>
  );
};

export default Orders;
