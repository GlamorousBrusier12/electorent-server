import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
    image: [
      {
        type: String,
        required: true,
      },
    ],
  rating: {
    rate: {
      type: Number,
      required: true,
      default: 0,
    },
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  //   reviews: [
  //     {
  //       type: String,
  //       required: true,
  //       default: []
  //     },
  //   ],
  //   faqs: [
  //     {
  //       type: String,
  //       required: true,
  //       default: []
  //     },
  //   ],
});

export default mongoose.model("Products",productSchema);