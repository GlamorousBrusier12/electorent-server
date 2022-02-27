import mongoose from "mongoose";

const faqSchema = mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  data: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
      upvotes: {
        type: Number,
        required: true,
      },
    },
  ],
});

export default mongoose.model("Faqs", faqSchema);
