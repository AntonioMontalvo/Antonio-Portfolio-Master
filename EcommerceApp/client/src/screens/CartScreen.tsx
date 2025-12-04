// client/src/screens/CartScreen.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

const CartScreen: React.FC = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    addToCart,
    removeFromCart,
  } = useCartStore();

  const handleQtyChange = (item, qty) => {
    // Re-use addToCart logic to handle quantity changes
    addToCart(item, qty);
  };

  const handleCheckout = () => {
    // Placeholder for future checkout route (e.g., shipping, payment)
    navigate("/login?redirect=/shipping");
  };

  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-4">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="p-8 bg-indigo-50 border border-indigo-200 rounded-lg text-center">
          <p className="text-xl text-indigo-700 font-medium">
            Your cart is empty.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Go Shopping
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-12 gap-8">
          {/* Cart Items List (Col 1-8) */}
          <div className="md:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center p-4 bg-white shadow-lg rounded-lg border border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />

                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-xl font-bold text-green-700">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Selector */}
                <select
                  value={item.qty}
                  onChange={(e) =>
                    handleQtyChange(item, Number(e.target.value))
                  }
                  className="p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-16 mx-4"
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="p-2 text-red-600 hover:text-red-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.86 12.14A2 2 0 0116.14 21H7.86a2 2 0 01-1.99-1.86L5 7m5-2h4M9 7v10m6-10v10"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary (Col 9-12) */}
          <div className="md:col-span-4 bg-gray-50 p-6 rounded-lg shadow-xl border border-gray-200 h-fit">
            <h2 className="text-2xl font-bold mb-4 border-b pb-3 text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-3 text-lg">
              <div className="flex justify-between">
                <span>Items:</span>
                <span className="font-semibold">${itemsPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span
                  className={`font-semibold ${
                    shippingPrice === 0 ? "text-green-600" : "text-gray-900"
                  }`}
                >
                  {shippingPrice === 0
                    ? "FREE"
                    : `$${shippingPrice.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax (15%):</span>
                <span className="font-semibold">${taxPrice.toFixed(2)}</span>
              </div>

              <div className="pt-4 border-t border-gray-300 flex justify-between text-xl font-bold text-gray-900">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-6 py-3 px-4 rounded-lg shadow-md text-white text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 transition"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
