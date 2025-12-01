// src/App.tsx (Updated for Routing)

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
// import ProductDetailScreen from "./screens/ProductDetailScreen"; // Will create this next

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <Routes>
          {/* Route for the Product List (Homepage) */}
          <Route
            path="/"
            element={
              <>
                {/* The Form is now only visible on the homepage */}
                <ProductForm />
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
