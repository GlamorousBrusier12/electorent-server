import { Product } from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
      category: req.body.category.toLowerCase(),
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.log("Error while posting product ", error.message);
    res.status(400).end();
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).end();
  }
};

export const updateProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).end();
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product Not Found" });
    }
    await product.remove();
    res.status(200).json(`Product with id ${req.params.id} has been deleted.`);
  } catch (error) {
    res.status(500).end();
  }
};

export const getCategoryProducts = async (req, res) => {
  try {
    const categoryName = req.params.categoryName;
    console.log(req.params);
    const products = await Product.find({ category: categoryName });
    res.status(200).json({
      message: `products related to  ${categoryName}category`,
      products,
    });
  } catch (error) {
    console.log("error in fetching the products related to category: ", error);
    res.status(500).end();
  }
};
