// src/App.tsx (Updated for Routing)

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import { useAuthStore } from "./stores/authStore";
import ProductForm from "./components/ProductForm";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
// import ProductDetailScreen from "./screens/ProductDetailScreen"; // Will create this next

function App() {
  const { userInfo } = useAuthStore(); // <-- Get user info
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        {/* 🛑 CONDITIONAL RENDERING FOR ADMIN */}
        {userInfo && userInfo.isAdmin && <ProductForm />}
        <Routes>
          {/* Route for the Product List (Homepage) */}
          <Route
            path="/"
            element={
              <>
                <ProductList />
              </>
            }
          />

          {/* Route for a Single Product Detail (Note the dynamic :id parameter) */}
          {/* <Route path="/product/:id" element={<ProductDetailScreen />} /> */}

          {/* Route for the Login Form */}
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
