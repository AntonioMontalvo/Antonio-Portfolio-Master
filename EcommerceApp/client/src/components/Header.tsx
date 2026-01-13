// src/components/Header.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { useCartStore } from "../stores/cartStore";

const Header: React.FC = () => {
  // Select each value separately to avoid accidentally destructuring a transient object
  const userInfo = useAuthStore((state) => state.userInfo);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const { cartItems } = useCartStore(); // <-- Get cart items for count
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0); // Calculate total quantity

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
          className="text-2xl font-extrabold tracking-wide transition-colors\"\n          style={{color: 'var(--color-primary)'}}\n          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-hover)'}\n          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary)'}\n        >\n          E-Commerce\n        </Link>
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
                className="px-4 text-gray-700 font-medium"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Sign In
              </Link>
              <Link
                to="/cart"
                className="px-4 text-gray-700 font-medium relative"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l1.2-5H7m0 5a2 2 0 100 4 2 2 0 000-4zm10 4a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 rounded-full" style={{backgroundColor: 'var(--color-error)'}}>
                    {cartCount}
                  </span>
                )}
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
