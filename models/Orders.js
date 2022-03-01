import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  productId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "ProductId",
  },
  qty: {
    type: Number,
    required: true,
  },
  orderedOn: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  deliveredOn: {
    type: String,
  },
});

export const Order = mongoose.model("order", OrderSchema);
