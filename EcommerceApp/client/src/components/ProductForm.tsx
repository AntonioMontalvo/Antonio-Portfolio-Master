// src/components/ProductForm.tsx
import React, { useState } from "react";
import axios from "axios";

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value =
      e.target.name === "price" ? parseFloat(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Creating product...");
    try {
      const { data } = await axios.post("http://localhost:54321/api/products", {
        ...formData,
        countInStock: 5, // Default for testing
      });
      setMessage(`Product "${data.name}" created successfully!`);
      setFormData({ name: "", price: 0, description: "" }); // Clear form
    } catch (error) {
      setMessage("Error creating product. Check server console.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-12 p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-800">
        Create New Product (CRUD: Create)
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 h-20"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition duration-150"
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
