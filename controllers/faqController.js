import Faq from "../models/Faq.js";

export const getFaqs = async (req, res) => {
  try {
    const productId = req.params.productId;
    const faqs = await Faq.find({ productId: productId });
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFaqs = async (req, res) => {
  try {
    // const productId = req.body.productId;
    console.log(req.body);
    const newFaq = await Faq.create(req.body);
    res.status(201).json({ newFaq, message: "Posted a Faq!" });
  } catch (error) {
    console.log("Error while posting Review ", error.message);
    res.status(400).end();
  }
};
