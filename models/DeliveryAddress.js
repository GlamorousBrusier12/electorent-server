import mongoose from "mongoose";

const deliveryAddressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  address: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Address",
  },
  avatar: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  locationName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
});

export const deliveryAddress = mongoose.model(
  "DeliveryAddress",
  deliveryAddressSchema
);
