import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { Product } from "../components/ProductList";

const ProductDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get<Product>(`/api/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading product...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;
  if (!product)
    return <div className="p-6 text-center">Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-gray-100 h-64 flex items-center justify-center">
          {/* placeholder image area */}
          <span className="text-gray-400">Image</span>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-extrabold text-green-700 mb-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            In stock: {product.countInStock}
          </p>

          <div className="flex gap-3">
            <button className="py-2 px-4 bg-indigo-600 text-white rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
