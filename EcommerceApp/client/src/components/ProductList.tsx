// src/components/ProductList.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";

// 1. Define the TypeScript Interface for Product (Crucial for strong typing)
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  countInStock: number;
}

const ProductList: React.FC = () => {
  // 2. State Hooks for Data and Loading Status
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Effect Hook to Fetch Data on Component Mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get<Product[]>(
          "http://localhost:54321/api/products"
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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        E-Commerce Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          // Simple Card Layout using Tailwind
          <div
            key={product._id}
            className="bg-white border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4 h-12 overflow-hidden">
                {product.description}
              </p>
              <p className="text-2xl font-bold text-green-600 mb-3">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">
                In Stock: {product.countInStock}
              </p>
              <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
