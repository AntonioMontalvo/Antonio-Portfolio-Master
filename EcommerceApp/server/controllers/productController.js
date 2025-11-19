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

// @desc    Create a new product
// @route   POST /api/products
// @access  Public (Will be Private/Admin later)
const createProduct = asyncHandler(async (req, res) => {
  // req.body contains the JSON data sent from the front-end form
  const { name, description, price, countInStock, image, category } = req.body;

  // Simple validation check
  if (!name || !price || !description) {
    res.status(400); // Bad Request
    throw new Error("Please include name, price, and description fields");
  }

  // Create a new product instance based on the Mongoose model
  const product = await Product.create({
    name,
    description,
    price,
    countInStock, // Defaults to 0 if not provided
    image,
    category,
    rating: 0,
    numReviews: 0,
  });

  // Send back a 201 Created status and the new product data
  res.status(201).json(product);
});

export { getProducts, getProductById, createProduct }; // <-- EXPORT NEW FUNCTION
