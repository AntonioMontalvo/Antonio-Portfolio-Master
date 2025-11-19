// server/server.js
import productRoutes from "./routes/productRoutes.js";
//snippet to test that the schema connects and saves data correctly to your Atlas database.
import Product from "./models/ProductModel.js";

import express from "express";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

const app = express();
// Use provided PORT, otherwise let the OS pick an ephemeral port (0) to avoid local port conflicts
const PORT = Number(process.env.PORT) || 0;

// Middleware
app.use(express.json()); // Allows parsing of JSON request bodies
app.use(cors()); // Enables cross-origin requests

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Basic Test Route
app.get("/", (req, res) => {
  res.send("E-Commerce API is running!");
});

// TEMPORARY TEST BLOCK: Create and save a single product
app.get("/api/test-product", async (req, res) => {
  try {
    // Remove any previous test products to keep results consistent
    await Product.deleteMany({ name: "Test Product" });

    const testProduct = new Product({
      name: "Test Product",
      description: "This is a test product for schema verification.",
      price: 49.99,
      countInStock: 10,
      rating: 0,
      numReviews: 0,
    });

    const createdProduct = await testProduct.save();
    res.status(201).json({
      message: "Test product created successfully!",
      product: createdProduct,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Product creation failed", error: error.message });
  }
});

// Mount the product routes to the /api/products path
app.use("/api/products", productRoutes);

// Start Server with error handling and graceful shutdown
const pidFile = path.resolve(process.cwd(), "server.pid");
const server = app.listen(PORT, () => {
  const addr = server.address();
  const boundPort = typeof addr === "object" && addr ? addr.port : PORT;
  console.log(`Server running on port ${boundPort}`);
  try {
    fs.writeFileSync(pidFile, String(process.pid), { flag: "w" });
  } catch (err) {
    console.warn("Could not write PID file:", err.message);
  }
});

server.on("error", (err) => {
  if (err && err.code === "EADDRINUSE") {
    console.error(
      `Port ${PORT} is already in use. Choose a different PORT or stop the process using it.`
    );
    process.exit(1);
  }
  console.error("Server error:", err);
  process.exit(1);
});

const shutdown = () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("HTTP server closed.");
    mongoose.connection
      .close(false)
      .then(() => {
        console.log("MongoDB connection closed.");
        try {
          if (fs.existsSync(pidFile)) fs.unlinkSync(pidFile);
        } catch (e) {
          console.warn("Failed to remove PID file:", e.message);
        }
        process.exit(0);
      })
      .catch((err) => {
        console.error("Error closing MongoDB connection:", err);
        try {
          if (fs.existsSync(pidFile)) fs.unlinkSync(pidFile);
        } catch (e) {
          console.warn("Failed to remove PID file:", e.message);
        }
        process.exit(1);
      });
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
