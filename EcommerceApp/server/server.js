// server/server.js

//snippet to test that the schema connects and saves data correctly to your Atlas database.
import Product from "./models/ProductModel.js";

import express from "express";
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

// Start Server with error handling and graceful shutdown
const server = app.listen(PORT, () => {
  const addr = server.address();
  const boundPort = typeof addr === "object" && addr ? addr.port : PORT;
  console.log(`Server running on port ${boundPort}`);
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
    mongoose.connection.close(false, () => {
      console.log("MongoDB connection closed.");
      process.exit(0);
    });
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
