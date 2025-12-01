// client/src/components/LoginForm.tsx

import React, { useState } from "react";
import axios, { isAxiosError } from "axios";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Get the setUserInfo function from the global store
  const setUserInfo = useAuthStore((state) => state.setUserInfo);
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      // Login request (send credentials and accept cookie from server)
      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        { withCredentials: true }
      );

      // Use the global store function to update state and localStorage
      setUserInfo(data);

      // Redirect to the homepage on successful login
      navigate("/");
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(
          err.response?.data?.message || "An unexpected server error occurred"
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login Failed");
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-white shadow-lg rounded-lg border-t-4 border-blue-500">
      <h2 className="text-2xl font-bold mb-4">Sign In (JWT Test)</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={submitHandler} className="space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
