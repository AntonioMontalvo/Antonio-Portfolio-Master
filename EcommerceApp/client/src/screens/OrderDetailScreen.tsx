// client/src/screens/OrderDetailScreen.tsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface OrderItem {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: string;
  _id: string;
}

interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface Order {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: string;
  isDelivered: boolean;
  deliveredAt?: string;
  createdAt: string;
}

const OrderDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:54321/api/orders/${id}`,
          { withCredentials: true }
        );
        setOrder(data);
        setLoading(false);
      } catch (err) {
        const errorMessage =
          axios.isAxiosError(err) && err.response?.data?.message
            ? err.response.data.message
            : "Failed to fetch order details.";
        setError(errorMessage);
        setLoading(false);
      }
    };

    if (id) {
      fetchOrder();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-xl text-indigo-600">Loading order...</p>
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
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  if (!order) {
    return <div className="p-4 text-gray-500">Order not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto my-10 p-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-4">
        Order {order._id}
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Order Details (Col 1-2) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">
              Shipping
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Name: </span>
              {order.user.name}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email: </span>
              {order.user.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Address: </span>
              {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
              {order.shippingAddress.postalCode},{" "}
              {order.shippingAddress.country}
            </p>
            {order.isDelivered ? (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
                Delivered on {new Date(order.deliveredAt!).toLocaleDateString()}
              </div>
            ) : (
              <div className="mt-4 p-3 bg-yellow-100 text-yellow-700 rounded">
                Not Delivered
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">
              Payment
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Method: </span>
              {order.paymentMethod}
            </p>
            {order.isPaid ? (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
                Paid on {new Date(order.paidAt!).toLocaleDateString()}
              </div>
            ) : (
              <div className="mt-4 p-3 bg-yellow-100 text-yellow-700 rounded">
                Not Paid
              </div>
            )}
          </div>

          {/* Order Items */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">
              Order Items
            </h2>
            <div className="space-y-4">
              {order.orderItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center space-x-4 border-b pb-2 last:border-b-0 last:pb-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <p className="grow text-gray-700">{item.name}</p>
                  <p className="font-medium text-gray-900">
                    {item.qty} x ${item.price.toFixed(2)} = $
                    {(item.qty * item.price).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
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
                  ${order.itemsPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-semibold">
                  ${order.shippingPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span className="font-semibold">
                  ${order.taxPrice.toFixed(2)}
                </span>
              </div>

              <div className="pt-4 border-t border-gray-300 flex justify-between text-xl font-bold text-indigo-700">
                <span>Total:</span>
                <span>${order.totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Ordered on {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailScreen;
