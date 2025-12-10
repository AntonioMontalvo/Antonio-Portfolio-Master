// src/components/Header.tsx

import { Link } from "react-router-dom";

// Tailwind classes are used for styling:
// bg-gray-900 (dark background), text-white (white text), p-4 (padding)
const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center p-4 max-w-7xl">
        {/* Logo/Name Link */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wider hover:text-green-400 transition-colors"
        >
          Antonio Montalvo
        </Link>

        {/* Navigation Links */}
        <div className="space-x-8 text-lg">
          <Link
            to="/projects"
            className="hover:text-green-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-400 transition-colors"
          >
            Contact
          </Link>
          {/* External Link for GitHub */}
          <a
            href="https://github.com/AntonioMontalvo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 font-medium"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
