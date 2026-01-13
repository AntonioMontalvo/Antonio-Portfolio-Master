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
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Product Catalog</h1>
      {/* Sweetwater-style grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          // Vertical card - Sweetwater style
          <div
            key={product._id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col"
          >
            {/* Product Image - Square, centered */}
            {product.image ? (
              <div className="relative w-full aspect-square overflow-hidden bg-white flex-shrink-0 border-b border-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-6"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center text-gray-400 text-sm font-medium border-b border-gray-200">
                No Image
              </div>
            )}

            {/* Content Section - Sweetwater style */}
            <div className="p-4 flex flex-col">
              {/* Product Name */}
              <h2 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                {product.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* BIG RED PRICE - Sweetwater style */}
              <div className="mb-3">
                <p className="text-3xl font-bold text-red-600">
                  ${product.price.toFixed(2)}
                </p>
                <p
                  className={`text-sm font-medium mt-1 ${
                    product.countInStock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.countInStock > 0 ? "In Stock" : "Sold Out"}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 mt-auto">
                <button
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="w-full py-2.5 px-4 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
                >
                  View Details
                </button>
                {/* Admin Delete Button */}
                {userInfo && userInfo.isAdmin && (
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="w-full py-2 px-4 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition"
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
