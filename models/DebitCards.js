import mongoose from "mongoose";

const debitCardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  avatar: {
    type: String,
    required: true,
  },
  cardType: {
    type: String,
    required: true,
  },
  cardNo: {
    type: Number,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
  nameOnCard: {
    type: String,
    required: true,
  },
});

export const Order = mongoose.model("DebitCard", debitCardSchema);
