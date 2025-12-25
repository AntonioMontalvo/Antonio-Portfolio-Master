// src/App.tsx

/**
 * Main application component
 */

import React from 'react';
import { Board } from './components/Board';
import { LayoutDashboard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="text-blue-600" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Kanban Board
              </h1>
              <p className="text-sm text-gray-500">
                Drag and drop to organize your tasks
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Board />
      </main>

      {/* Footer */}
      <footer className="mt-12 pb-6 text-center text-sm text-gray-500">
        <p>Built with React, TypeScript, and @dnd-kit</p>
        <p className="mt-1">
          By{' '}
          <a
            href="https://github.com/AntonioMontalvo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Antonio Montalvo
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
