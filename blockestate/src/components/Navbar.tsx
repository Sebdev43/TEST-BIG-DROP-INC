import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen bg-[#1B2434]">
      <div className="w-full h-[64px] flex items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          BlockEstate
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/properties" className="text-white hover:text-gray-300 transition-colors">
            Properties
          </Link>
          <Link to="/how-it-works" className="text-white hover:text-gray-300 transition-colors">
            How It Works
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
            About
          </Link>

          {/* Sign In Button */}
          <Link
            to="/signin"
            className="bg-[#3E4C63] hover:bg-[#2D3748] text-white px-5 py-2 rounded transition-colors ml-2"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          {isOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-[64px] left-0 w-full bg-[#1B2434] md:hidden">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <Link
                to="/properties"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Properties
              </Link>
              <Link
                to="/how-it-works"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/signin"
                className="bg-[#3E4C63] hover:bg-[#2D3748] text-white px-4 py-2 rounded text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
