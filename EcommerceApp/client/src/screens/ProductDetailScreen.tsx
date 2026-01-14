// client/src/screens/ProductDetailScreen.tsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import type { IProduct, ICartItem } from "../types.ts"; // Import IProduct and ICartItem interfaces from types file
import { useCartStore } from "../stores/cartStore";

const ProductDetailScreen: React.FC = () => {
  const { id: productId } = useParams<{ id: string }>(); // Get the ID from the URL
  const navigate = useNavigate();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [qty, setQty] = useState(1); //  Quantity state
  // Get the addToCart function from the store
  const { addToCart } = useCartStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (product) {
      // Create a cart item from the product with the selected quantity
      const cartItem: ICartItem = {
        _id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty: qty,
      };
      addToCart(cartItem, qty);
      // Redirect to the cart page after adding
      navigate("/cart");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setError("Product ID is missing.");
        setLoading(false);
        return;
      }
      try {
        const { data } = await axios.get(
          `https://ecommerce-backend-cap6.onrender.com/api/products/${productId}`
        );
        setProduct(data);
        setLoading(false);
      } catch (err) {
        const errorMessage =
          axios.isAxiosError(err) && err.response?.data?.message
            ? err.response.data.message
            : "Failed to fetch product details.";
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[--color-primary]"></div>
          <p className="text-xl text-[--text-primary]">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-700 bg-red-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Error</h2>
        <p>{error}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-[--color-primary] text-white rounded hover:bg-[--color-primary-hover] transition transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    );
  }

  // If product is null despite no error (shouldn't happen, but for safety)
  if (!product) {
    return <div className="p-4 text-gray-500">Product not found.</div>;
  }

  // Final Product Display JSX
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-xl rounded-lg">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-4 text-[--text-muted]">
        <button
          onClick={() => navigate("/")}
          className="text-[--color-primary] hover:text-[--color-primary-hover] font-medium transition"
        >
          Home
        </button>
        <span className="mx-2">›</span>
        <button
          onClick={() => navigate("/")}
          className="text-[--color-primary] hover:text-[--color-primary-hover] font-medium transition"
        >
          Products
        </button>
        <span className="mx-2">›</span>
        <span className="text-[--text-primary]">{product.name}</span>
      </nav>

      <button
        onClick={() => navigate("/")}
        className="text-[--color-primary] hover:text-[--color-primary-hover] mb-6 font-medium transition"
      >
        ← Back to Products
      </button>

      <div className="md:flex md:space-x-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-contain p-6"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-green-700 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <div className="space-y-4">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Status: </span>
              {product.countInStock > 0 ? (
                <span className="text-green-600">
                  In Stock ({product.countInStock})
                </span>
              ) : (
                <span className="text-red-600">Out Of Stock</span>
              )}
            </p>

            <div className="text-gray-700">
              <span className="font-semibold">Description:</span>
              <p className="mt-1 text-gray-600">{product.description}</p>
            </div>
          </div>
          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mb-6 mt-6">
            <span className="font-semibold text-[--text-primary]">Qty:</span>
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded-lg focus:ring-[--color-primary] focus:border-[--color-primary] w-20 text-center font-medium"
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={product.countInStock === 0}
            className={`w-full py-3 px-4 rounded-lg shadow-md text-white text-lg font-semibold transition transform ${
              product.countInStock > 0
                ? "bg-[--color-primary] hover:bg-[--color-primary-hover] hover:scale-105"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {product.countInStock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
