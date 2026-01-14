// client/src/screens/PaymentScreen.tsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const { shippingAddress, paymentMethod, savePaymentMethod } = useCartStore();

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const [selectedMethod, setSelectedMethod] = useState(
    paymentMethod?.method || "PayPal"
  );

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    savePaymentMethod({
      method: selectedMethod as "PayPal" | "Stripe" | "CreditCard",
    });
    navigate("/placeorder");
  };

  return (
    <div className="max-w-2xl mx-auto my-10">
      {/* Checkout Progress */}
      <div className="mb-8 flex items-center justify-center space-x-4">
        <div className="flex items-center">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
            style={{ backgroundColor: "var(--color-success)" }}
          >
            ✓
          </div>
          <span className="ml-2 text-sm text-gray-500">Shipping</span>
        </div>
        <div
          className="w-16 h-0.5"
          style={{ backgroundColor: "var(--color-primary)" }}
        ></div>
        <div className="flex items-center">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            2
          </div>
          <span
            className="ml-2 text-sm font-medium"
            style={{ color: "var(--color-primary)" }}
          >
            Payment
          </span>
        </div>
        <div className="w-16 h-0.5 bg-gray-300"></div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
            3
          </div>
          <span className="ml-2 text-sm text-gray-500">Review</span>
        </div>
      </div>

      <div className="p-8 bg-white shadow-xl rounded-lg">
        <h1 className="heading-2 text-gray-900 mb-6">Payment Method</h1>

        <form onSubmit={submitHandler} className="space-y-5">
          <div className="space-y-3">
            <label
              className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition hover:bg-gray-50"
              style={{
                borderColor:
                  selectedMethod === "PayPal"
                    ? "var(--color-primary)"
                    : "#d1d5db",
              }}
            >
              <input
                type="radio"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked={selectedMethod === "PayPal"}
                onChange={(e) =>
                  setSelectedMethod(
                    e.target.value as "PayPal" | "Stripe" | "CreditCard"
                  )
                }
                className="h-4 w-4 border-gray-300"
              />
              <span className="ml-3 text-base font-medium text-gray-700">
                PayPal or Credit Card
              </span>
            </label>

            <label
              className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition hover:bg-gray-50"
              style={{
                borderColor:
                  selectedMethod === "Stripe"
                    ? "var(--color-primary)"
                    : "#d1d5db",
              }}
            >
              <input
                type="radio"
                id="Stripe"
                name="paymentMethod"
                value="Stripe"
                checked={selectedMethod === "Stripe"}
                onChange={(e) =>
                  setSelectedMethod(
                    e.target.value as "PayPal" | "Stripe" | "CreditCard"
                  )
                }
                className="h-4 w-4 border-gray-300"
              />
              <span className="ml-3 text-base font-medium text-gray-700">
                Stripe (Future Integration)
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-medium text-white transition transform hover:scale-[1.02]"
            style={{ backgroundColor: "var(--color-primary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--color-primary-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-primary)")
            }
          >
            Continue to Review Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
