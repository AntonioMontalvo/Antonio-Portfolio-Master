// src/components/Header.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

const Header: React.FC = () => {
  // Select each value separately to avoid accidentally destructuring a transient object
  const userInfo = useAuthStore((state) => state.userInfo);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout function from the store
    logout();
    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-extrabold text-indigo-600 hover:text-indigo-800 tracking-wide"
        >
          E-Commerce
        </Link>
        <div>
          {userInfo ? (
            <>
              <span className="px-4">Welcome, {userInfo.name}</span>
              <button
                onClick={handleLogout}
                className="px-4 hover:text-gray-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="px-4 hover:text-gray-300">
                Home
              </Link>
              <Link
                to="/login"
                className="px-4 text-gray-700 hover:text-indigo-600 font-medium"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
