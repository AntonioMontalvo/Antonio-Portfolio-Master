// src/screens/ProductDetailScreen.tsx

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // useParams hooks the ID from the URL
import axios from "axios";
import type { Product } from "../components/ProductList"; // Re-use the Product interface (type-only import)

const ProductDetailScreen: React.FC = () => {
  // Get the 'id' parameter from the current URL path
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Use the dynamic ID to call the back-end
        const { data } = await axios.get<Product>(
          `http://localhost:54321/api/products/${id}`
        );
        setProduct(data);
      } catch (err) {
        setError("Product not found or API error.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]); // Re-fetch if the URL ID changes

  if (loading)
    return <div className="text-center py-16">Loading product details...</div>;
  if (error)
    return (
      <div className="text-center py-16 text-red-600 font-bold">{error}</div>
    );
  if (!product)
    return <div className="text-center py-16">No product data available.</div>;

  return (
    <div className="container mx-auto p-8 max-w-4xl bg-white shadow-lg rounded-xl my-12">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block font-medium"
      >
        ← Back to Products
      </Link>
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
        {product.name}
      </h1>
      <p className="text-3xl font-semibold text-green-700 mb-6">
        ${product.price.toFixed(2)}
      </p>

      <div className="border-t pt-6">
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <h2 className="text-xl font-bold mb-2">Inventory Status</h2>
        <p
          className={`text-lg font-semibold ${
            product.countInStock > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.countInStock > 0
            ? `In Stock: ${product.countInStock}`
            : "Out of Stock"}
        </p>
        {/* Add more details here */}
      </div>
    </div>
  );
};

export default ProductDetailScreen;
