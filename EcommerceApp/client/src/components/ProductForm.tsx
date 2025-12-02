// src/components/ProductForm.tsx
import React, { useState } from "react";
import axios from "axios";
import { useAuthStore } from "../stores/authStore";

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [message, setMessage] = useState("");
  const userInfo = useAuthStore((state) => state.userInfo);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Creating product...");
    try {
      // Prepare product payload
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        countInStock: 5,
      };

      // CRITICAL: send cookie-based JWT (server expects cookie, not Authorization header)
      // Use absolute backend URL and withCredentials so the browser attaches the HttpOnly cookie.
      const { data } = await axios.post(
        "/api/products", // Use the relative path to leverage the Vite proxy
        productData,
        {
          withCredentials: true,
        }
      );

      setMessage(`Product "${data.name}" created successfully!`);
      setFormData({ name: "", price: "", description: "" }); // Clear form with empty strings
    } catch (error) {
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "Error creating product. You may not be authorized.";
      setMessage(errorMessage);
      console.error(error);
    }
  };

  return (
    <div className="my-12 p-8 bg-white shadow-2xl rounded-xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-3">
        Create New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            required
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            required
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 h-28 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg shadow-md text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition duration-200 ease-in-out transform hover:scale-[1.005]"
        >
          Create Product
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 p-3 text-sm rounded ${
            message.includes("Error")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default ProductForm;
