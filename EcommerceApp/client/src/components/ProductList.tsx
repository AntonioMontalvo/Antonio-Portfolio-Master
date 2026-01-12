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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          // Compact Card Layout matching KanbanBoard aesthetic
          <div
            key={product._id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col"
          >
            {/* Product Image - Compact 4:3 ratio */}
            {product.image ? (
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-3"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-[4/3] bg-gray-100 flex items-center justify-center text-gray-400 text-sm font-medium">
                No Image
              </div>
            )}

            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-base font-semibold text-gray-900 mb-1 truncate">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
                {product.description}
              </p>
              {/* Price and Stock */}
              <div className="flex justify-between items-center mb-3 pt-2 border-t border-gray-200">
                <p className="text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                <p
                  className={`text-xs font-medium ${
                    product.countInStock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.countInStock > 0 ? "In Stock" : "Sold Out"}
                </p>
              </div>
              {/* Button Group */}
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="flex-1 py-2 px-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
                >
                  View Details
                </button>
                {/* The Delete Button */}
                {userInfo && userInfo.isAdmin && (
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="py-2 px-3 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition"
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
