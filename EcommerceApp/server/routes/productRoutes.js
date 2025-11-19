// server/routes/productRoutes.js

import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// Route for ALL products
// The .route() method allows chaining GET, POST, PUT, etc., on the same path
router.route("/").get(getProducts);

// Route for a SINGLE product (using the dynamic :id parameter)
router.route("/:id").get(getProductById);

export default router;
