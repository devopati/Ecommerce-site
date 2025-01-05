import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    Orders: [],
  },
  { timestamp: true }
);

export default mongoose.model("Order", OrderSchema); //export the model
