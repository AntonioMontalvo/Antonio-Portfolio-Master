// client/src/screens/ShippingScreen.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

const ShippingScreen = () => {
  const navigate = useNavigate();
  const { shippingAddress, saveShippingAddress } = useCartStore();

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    saveShippingAddress({ address, city, postalCode, country });
    navigate("/payment");
  };

  return (
    <div className="max-w-2xl mx-auto my-10">
      {/* Checkout Progress */}
      <div className="mb-8 flex items-center justify-center space-x-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style={{backgroundColor: 'var(--color-primary)'}}>
            1
          </div>
          <span className="ml-2 text-sm font-medium" style={{color: 'var(--color-primary)'}}>Shipping</span>
        </div>
        <div className="w-16 h-0.5 bg-gray-300"></div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
            2
          </div>
          <span className="ml-2 text-sm text-gray-500">Payment</span>
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
        <h1 className="heading-2 text-gray-900 mb-6">
          Shipping Address
        </h1>

      <form onSubmit={submitHandler} className="space-y-5">
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition"
            placeholder="123 Main St"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition"
              placeholder="New York"
            />
          </div>

          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition"
              placeholder="10001"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition"
            placeholder="United States"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-medium text-white transition transform hover:scale-[1.02]"
          style={{backgroundColor: 'var(--color-primary)'}}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
        >
          Continue to Payment
        </button>
      </form>
    </div>
    </div>
  );
};

export default ShippingScreen;
