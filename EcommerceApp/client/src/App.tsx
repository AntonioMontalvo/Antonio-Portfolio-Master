// src/App.tsx (Updated for Routing)

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductDetailScreen from "./screens/ProductDetailScreen"; // Will create this next

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* The Form is always visible for testing CRUD (Create) */}
        <ProductForm />

        <Routes>
          {/* Route for the Product List (Homepage) */}
          <Route path="/" element={<ProductList />} />

          {/* Route for a Single Product Detail (Note the dynamic :id parameter) */}
          <Route path="/product/:id" element={<ProductDetailScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
