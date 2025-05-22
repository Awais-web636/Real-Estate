import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  AiFillHome as Home,
  AiOutlineMenu as MenuIcon,
  AiOutlineClose as X,
  AiOutlinePhone as PhoneCall
} from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close menu on scroll or route change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinkClasses = (isActive, isDark) =>
    `transition duration-200 ${isActive
      ? isDark ? 'text-white font-medium' : 'text-teal-600 font-medium'
      : isDark ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-teal-600'}`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen || location.pathname !== '/'
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Home
            className={`h-8 w-8 ${
              isScrolled || location.pathname !== '/'
                ? 'text-teal-600'
                : 'text-white'
            }`}
          />
          <span
            className={`text-xl font-bold ${
              isScrolled || location.pathname !== '/'
                ? 'text-gray-800'
                : 'text-white'
            }`}
          >
            LuxeRealty
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['/', '/properties', '/agents', '/about', '/contact'].map((path, idx) => {
            const label = ['Home', 'Properties', 'Agents', 'About', 'Contact'][idx];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  navLinkClasses(isActive, !(isScrolled || location.pathname !== '/'))
                }
              >
                {label}
              </NavLink>
            );
          })}
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-md transition duration-300 flex items-center space-x-2"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-black'}`} />
          ) : (
            <MenuIcon className={`h-6 w-6 ${isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-black'}`} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {['/', '/properties', '/agents', '/about', '/contact'].map((path, idx) => {
              const label = ['Home', 'Properties', 'Agents', 'About', 'Contact'][idx];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md ${isActive
                      ? 'bg-teal-50 text-teal-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'}`
                  }
                >
                  {label}
                </NavLink>
              );
            })}

            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-md transition duration-300 flex items-center justify-center space-x-2 mt-2"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
