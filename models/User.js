// models
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
  },
  panNumber: {
    type: String,
  },
  dob: {
    type: String,
  },
  avatar: {
    type: String,
    required: true,
    default: "https://cdn-icons-png.flaticon.com/128/1177/1177568.png",
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  deliveryAddress: {
    type: String,
    default: "",
  },
  debitCards: {
    type: Array,
    default: [],
  },
  upi: {
    type: Array,
    default: [],
  },
  myOrders: {
    type: Array,
    default: [],
  },
  cart: {
    type: Array,
    default: [],
  },
});

export const User = mongoose.model("user", userSchema);
