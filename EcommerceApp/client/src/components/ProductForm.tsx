// src/components/ProductForm.tsx
import React, { useState } from "react";
import axios from "axios";
// Note: we do not read the token from the store here because the server
// expects the JWT in an HttpOnly cookie. The browser will attach it
// automatically when `withCredentials: true` is used and the request
// targets the backend URL below.

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [imageUrl, setImageUrl] = useState(""); // <-- NEW: To store Cloudinary URL
  const [uploading, setUploading] = useState(false); // <-- NEW: For loading state

  const [message, setMessage] = useState("");

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
      // Check if an image was uploaded
      if (!imageUrl) {
        setMessage("Error: Please upload an image first.");
        return;
      }

      // Prepare product payload
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        countInStock: 5,
        image: imageUrl, // 🚨 INCLUDE THE CLOUDINARY URL
      };

      // CRITICAL: send cookie-based JWT (server expects cookie, not Authorization header)
      // Use the absolute backend URL and `withCredentials: true` so the
      // browser attaches the HttpOnly cookie to the request.
      const { data } = await axios.post(
        "https://ecommerce-backend-cap6.onrender.com/api/products",
        productData,
        { withCredentials: true }
      );

      // Clear form on success
      setImageUrl(""); // Clear image URL state on successful creation
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

  // src/components/ProductForm.tsx (New Function)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;

    setImageFile(file);
    setUploading(true);
    const form = new FormData();
    form.append("image", file); // 'image' must match the name used in uploadController.js

    try {
      // Must use withCredentials for protected upload route
      const { data } = await axios.post(
        "https://ecommerce-backend-cap6.onrender.com/api/upload",
        form,
        { withCredentials: true }
      );

      setImageUrl(data.imageUrl); // Store the returned URL
      setMessage("Image uploaded successfully.");
    } catch (error) {
      setMessage("Image upload failed.");
      console.error(error);
    } finally {
      setUploading(false);
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
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Product Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleFileUpload}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
          {uploading && (
            <p className="text-sm text-gray-500 mt-2">Uploading...</p>
          )}
          {imageUrl && (
            <div className="mt-2 flex items-center space-x-3">
              <p className="text-xs text-green-600 font-medium">Image Ready</p>
              <img
                src={imageUrl}
                alt="Preview"
                className="w-12 h-12 object-cover rounded"
              />
            </div>
          )}
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
