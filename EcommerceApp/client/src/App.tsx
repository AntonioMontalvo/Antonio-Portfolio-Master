import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">E-Commerce Store</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProductForm />
          </div>
          <div className="lg:col-span-2">
            <ProductList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
