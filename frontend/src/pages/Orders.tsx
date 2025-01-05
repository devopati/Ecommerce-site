import React, { useEffect } from "react";
import API from "../api/api";

const Orders = () => {
  const getOrdersHandler = async () => {
    try {
      const res = await API.get("product/orders");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrdersHandler();
  }, []);
  return <div>Orders</div>;
};

export default Orders;
