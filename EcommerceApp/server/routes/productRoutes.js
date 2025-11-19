// server/routes/productRoutes.js
// server/routes/productRoutes.js (Updated)

import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct, // <-- NEW IMPORTS
} from "../controllers/productController.js";

// Route for ALL products (GET, POST)
router.route("/").get(getProducts).post(createProduct);

// Route for a SINGLE product (GET, PUT, DELETE)
router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct) // <-- ADDED PUT ROUTE
  .delete(deleteProduct); // <-- ADDED DELETE ROUTE

export default router;
