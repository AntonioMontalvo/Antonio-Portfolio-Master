// client/src/screens/PlaceOrderScreen.tsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";
import axios from "axios";
import type { ICartItem } from "../types";

const PlaceOrderScreen: React.FC = () => {
  const navigate = useNavigate();
  const cart = useCartStore(); // Get all cart state

  // Enforce shipping and payment steps
  useEffect(() => {
    if (!cart.shippingAddress) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.shippingAddress, cart.paymentMethod, navigate]);

  const placeOrderHandler = async () => {
    try {
      const orderData = {
        orderItems: cart.cartItems.map((item: ICartItem) => ({
          name: item.name,
          qty: item.qty,
          image: item.image,
          price: item.price,
          product: item._id, // Use the product ID for the server
        })),
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod?.method,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      };

      console.log("Sending order data:", orderData); // DEBUG

      const { data } = await axios.post(
        "https://ecommerce-backend-cap6.onrender.com/api/orders",
        orderData,
        { withCredentials: true } // Must send JWT cookie
      );

      console.log("Order created successfully:", data); // DEBUG
      console.log("Order ID:", data._id); // DEBUG

      // Success: Redirect to the newly created order's details page
      if (data._id) {
        navigate(`/order/${data._id}`);
      } else {
        console.error("No _id in response:", data);
        alert("Order created but no ID returned");
      }
      // 🛑 NOTE: You'll need an action to clear the cart after a successful order.
      // If you haven't added clearCart to cartStore yet, you can add it now.
      // Example: cart.clearCart();
    } catch (error) {
      console.error("Order creation error:", error); // DEBUG
      alert("Order Placement Failed. Please check the server console.");
      console.error(error);
    }
  };

  // If redirection is pending (useEffect), don't render content
  if (!cart.shippingAddress || !cart.paymentMethod) return null;

  return (
    <div className="max-w-6xl mx-auto my-10 p-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-4">
        Place Order
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Order Details (Col 1-2) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">
              Shipping
            </h2>
            <p className="text-gray-700">
              <span className="font-semibold">Address: </span>
              {cart.shippingAddress.address}, {cart.shippingAddress.city},{" "}
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </p>
          </div>

          {/* Payment Method */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">
              Payment
            </h2>
            <p className="text-gray-700">
              <span className="font-semibold">Method: </span>
              {cart.paymentMethod.method}
            </p>
          </div>

          {/* Order Items */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">
              Order Items
            </h2>
            {cart.cartItems.length === 0 ? (
              <p className="text-red-600">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center space-x-4 border-b pb-2 last:border-b-0 last:pb-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <p className="flex-grow text-gray-700">{item.name}</p>
                    <p className="font-medium text-gray-900">
                      {item.qty} x ${item.price.toFixed(2)} = $
                      {(item.qty * item.price).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Order Summary (Col 3) */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-xl border border-gray-200 sticky top-4">
            <h2 className="text-2xl font-bold mb-4 border-b pb-3 text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-3 text-lg">
              <div className="flex justify-between">
                <span>Items:</span>
                <span className="font-semibold">
                  ${cart.itemsPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-semibold">
                  ${cart.shippingPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span className="font-semibold">
                  ${cart.taxPrice.toFixed(2)}
                </span>
              </div>

              <div className="pt-4 border-t border-gray-300 flex justify-between text-xl font-bold text-indigo-700">
                <span>Total:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={placeOrderHandler}
              className="w-full mt-6 py-3 px-4 rounded-lg shadow-md text-white text-lg font-semibold bg-green-600 hover:bg-green-700 transition"
              disabled={cart.cartItems.length === 0}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
