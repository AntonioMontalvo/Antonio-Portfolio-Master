// src/components/ProductList.tsx
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthStore } from "../stores/authStore";

// 1. Define the TypeScript Interface for Product (Crucial for strong typing)
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  countInStock: number;
}

const ProductList: React.FC = () => {
  // 2. State Hooks for Data and Loading Status
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userInfo } = useAuthStore(); // <-- Get user info here
  // 3. Effect Hook to Fetch Data on Component Mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get<Product[]>(
          "https://ecommerce-backend-cap6.onrender.com/api/products"
        );
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching products from API.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs only once on mount

  // Delete Handler for Admins
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        // DELETE request to the server API
        await axios.delete(
          `https://ecommerce-backend-cap6.onrender.com/api/products/${id}`
        );

        // Remove the product from the local state
        setProducts(products.filter((product) => product._id !== id));
      } catch (error) {
        alert("Error deleting product. Check console.");
        console.error(error);
      }
    }
  };

  // 4. Conditional Rendering (Loading/Error States)
  if (loading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-600 font-bold">{error}</div>
    );
  }

  // 5. Success Rendering (Display the list)
  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-10 text-green-600 text-center">
        Explore Our Catalog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          // Simple Card Layout using Tailwind
          <div
            key={product._id}
            className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            {product.image ? (
              <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center text-gray-400 font-semibold">
                No Image
              </div>
            )}

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-900 mb-2 truncate">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-3 text-sm h-12 overflow-hidden">
                {product.description}
              </p>
              {/* Price and Stock */}
              <div className="flex justify-between items-center mb-4 pt-2 border-t border-gray-100">
                <p className="text-2xl font-extrabold text-green-700">
                  ${product.price.toFixed(2)}
                </p>
                <p
                  className={`text-sm font-medium ${
                    product.countInStock > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.countInStock > 0 ? "In Stock" : "Sold Out"}
                </p>
              </div>
              {/* Button Group */}
              <div className="flex gap-3 mt-4">
                {/* Use a flex container for buttons */}
                <button
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="flex-1 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition"
                >
                  View Details
                </button>
                {/* The Delete Button */}
                {/* 🛑 CONDITIONAL RENDERING FOR ADMIN */}
                {userInfo && userInfo.isAdmin && (
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="flex-1 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
