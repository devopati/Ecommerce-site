import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: String,
    Orders: [],
  },
  { timestamp: true }
);

export default mongoose.model("Order", OrderSchema); //export the model
