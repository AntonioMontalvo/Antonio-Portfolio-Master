// portfoliosite/src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";

const Header: React.FC = () => (
  <header className="bg-white shadow-md">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-indigo-600">
        Antonio Montalvo | Portfolio
      </div>
      <div className="space-x-6">
        <Link
          to="/"
          className="text-gray-600 hover:text-indigo-600 font-medium transition"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="text-gray-600 hover:text-indigo-600 font-medium transition"
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="text-gray-600 hover:text-indigo-600 font-medium transition"
        >
          My Story
        </Link>
      </div>
    </nav>
  </header>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
