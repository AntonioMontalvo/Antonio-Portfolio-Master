// server/controllers/productController.js

import Product from "../models/ProductModel.js";
import asyncHandler from "express-async-handler"; // Used to simplify error handling

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  // Find all products in the database
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  // Find a product by the ID provided in the URL parameter
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    // Send a 404 (Not Found) status if the ID doesn't exist
    res.status(404).json({ message: "Product not found" });
  }
});

export { getProducts, getProductById };
