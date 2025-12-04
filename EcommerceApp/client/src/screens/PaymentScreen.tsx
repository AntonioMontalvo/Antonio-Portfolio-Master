// client/src/screens/PaymentScreen.tsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

const PaymentScreen: React.FC = () => {
  const navigate = useNavigate();
  const { shippingAddress, paymentMethod, savePaymentMethod } = useCartStore();

  // Enforce shipping step before payment
  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  // Initialize state from store or default to PayPal
  const [selectedMethod, setSelectedMethod] = useState(
    paymentMethod?.method || "PayPal"
  );

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    savePaymentMethod({
      method: selectedMethod as "PayPal" | "Stripe" | "CreditCard",
    });
    navigate("/placeorder"); // Move to the final step
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white shadow-2xl rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3">
        Payment Method
      </h1>

      <form onSubmit={submitHandler} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
            <input
              type="radio"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked={selectedMethod === "PayPal"}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="PayPal"
              className="ml-3 block text-base font-medium text-gray-700"
            >
              PayPal or Credit Card
            </label>
          </div>

          <div className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
            <input
              type="radio"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              checked={selectedMethod === "Stripe"}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="Stripe"
              className="ml-3 block text-base font-medium text-gray-700"
            >
              Stripe (Future Integration)
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg shadow-md text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Continue to Place Order
        </button>
      </form>
    </div>
  );
};

export default PaymentScreen;
