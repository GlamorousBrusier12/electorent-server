import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  data: [
    {
      id: {
        type: String,
        required: true,
      },
      userName: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
      mobileNumber: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      locationName: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      },
    },
  ],
});
export default mongoose.model("Addresses", addressSchema);
