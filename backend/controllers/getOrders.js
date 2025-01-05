import { StatusCodes } from "http-status-codes";
import OrderSch from "../models/OrderSch.js";

const getOrders = async (req, res, next) => {
  try {
    const orders = await OrderSch.findOne({ userId: req.query.userId });
    res.status(StatusCodes.OK).json({ ms: "Success", orders });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default getOrders;
