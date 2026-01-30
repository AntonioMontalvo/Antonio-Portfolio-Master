import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    {/* Hero Section */}
    <div className="text-center py-16">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Antonio Montalvo
      </h1>
      <p className="text-2xl text-gray-700 mb-4">Full-Stack Developer</p>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Building production applications with React, Next.js, PostgreSQL, and
        Python. Systems programming background in C++ and Java.
      </p>
    </div>

    {/* Quick Stats */}
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
        <div className="text-3xl font-bold text-indigo-600 mb-2">7</div>
        <div className="text-gray-700">Production Projects</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
        <div className="text-3xl font-bold text-green-600 mb-2">4</div>
        <div className="text-gray-700">Tech Stacks</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
        <div className="text-3xl font-bold text-purple-600 mb-2">27</div>
        <div className="text-gray-700">Passing Tests</div>
      </div>
    </div>

    {/* Featured Highlights */}
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Work</h2>
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="font-bold text-lg text-indigo-700 mb-2">
            Next.js Kanban Board
          </h3>
          <p className="text-gray-600 mb-2">
            Full-stack application with PostgreSQL, Google OAuth, and
            server-side rendering. Deployed serverless on Vercel with multi-user
            data isolation.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
              Next.js 16
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              PostgreSQL
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              OAuth
            </span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="font-bold text-lg text-indigo-700 mb-2">
            MERN E-commerce
          </h3>
          <p className="text-gray-600 mb-2">
            Complete shopping experience with MongoDB, Express API, JWT
            authentication, and Stripe payment integration.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              MongoDB
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
              Express
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              React
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/projects"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View All Projects →
        </Link>
      </div>
    </div>

    {/* How I Work */}
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">How I Work</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        I use AI-augmented development—GitHub Copilot and Claude as pair
        programming partners—to accelerate implementation while applying my
        judgment to architecture decisions. AI handles boilerplate and syntax; I
        handle security patterns, technology selection, and code review.
      </p>
      <p className="text-gray-700 leading-relaxed">
        This workflow let me build seven production-quality projects spanning
        multiple tech stacks in months rather than years, while maintaining
        comprehensive test coverage and TypeScript strict mode throughout.
      </p>
      <div className="mt-6">
        <Link
          to="/about"
          className="text-indigo-600 hover:text-indigo-700 font-semibold"
        >
          Read more about my approach →
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
