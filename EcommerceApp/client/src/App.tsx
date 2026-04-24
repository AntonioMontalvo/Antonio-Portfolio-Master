// EcommerceApp/client/src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ProductDetailScreen from "./screens/ProductDetailScreen"; // Ensure this file exists
import { useAuthStore } from "./stores/authStore";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";

function App() {
  const { userInfo } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* This <main> tag helps center the content based on our styling phase */}
        <main className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
          {/* 🛑 CONDITIONAL RENDERING FOR ADMIN: Show form only to admins */}
          {userInfo && userInfo.isAdmin && <ProductForm />}

          <Routes>
            {/* Route for the Product List (Homepage) */}
            <Route path="/" element={<ProductList />} />
            {/* Route for a Single Product Detail (UNCOMMENTED!) */}
            <Route path="/product/:id" element={<ProductDetailScreen />} />
            {/* Route for the Login Form */}
            <Route path="/login" element={<LoginForm />} />
            {/* Route for the Register Form */}
            <Route path="/register" element={<RegisterForm />} />
            {/* Route for the Cart Screen */}
            <Route path="/cart" element={<CartScreen />} />
            {/* Routes for Shipping  */}
            <Route path="/shipping" element={<ShippingScreen />} />
            {/* Routes for Payment Screens */}
            <Route path="/payment" element={<PaymentScreen />} />
            {/* The final step will be /placeorder */}
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            {/* Route for order details */}
            <Route path="/order/:id" element={<OrderDetailScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
