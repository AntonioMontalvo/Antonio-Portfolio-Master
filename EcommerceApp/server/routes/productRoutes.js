// server/routes/productRoutes.js

import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js"; // <-- IMPORT createProduct

// Route for ALL products (handles both GET and POST)
router.route("/").get(getProducts).post(createProduct); // <-- ADD THE POST ROUTE HERE

// Route for a SINGLE product
router.route("/:id").get(getProductById);

export default router;
