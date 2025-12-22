// seedProducts.js - Run this once to populate your database with sample products
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Define Product schema inline
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    countInStock: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

const sampleProducts = [
  {
    name: "Wireless Headphones",
    description:
      "Premium noise-cancelling wireless headphones with superior sound quality",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    countInStock: 15,
  },
  {
    name: "Smart Watch",
    description:
      "Feature-packed smartwatch with fitness tracking and notifications",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    countInStock: 8,
  },
  {
    name: "Laptop Backpack",
    description:
      "Durable water-resistant backpack with padded laptop compartment",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    countInStock: 25,
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker with 12-hour battery life",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    countInStock: 12,
  },
  {
    name: "USB-C Hub",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f",
    countInStock: 30,
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    countInStock: 20,
  },
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing products
    console.log("Clearing existing products...");
    await Product.deleteMany({});
    console.log("✅ Cleared existing products");

    // Insert sample products
    console.log("Inserting sample products...");
    await Product.insertMany(sampleProducts);
    console.log("✅ Successfully added sample products!");
    console.log(`📦 Added ${sampleProducts.length} products to the database`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
