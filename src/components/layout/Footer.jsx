import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <FaHome className="h-7 w-7 text-teal-500" />
              <span className="text-xl font-bold">LuxeRealty</span>
            </Link>
            <p className="text-gray-400 mb-4">
              We're dedicated to helping you find the perfect property that matches your needs,
              preferences, and budget. With our extensive experience and knowledge of the local market,
              we ensure a smooth process from search to closing.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Our Agents
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Apartments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Houses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Villas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Office Spaces
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-500 transition duration-300 flex items-center">
                  <FaArrowRight className="h-4 w-4 mr-2" />
                  Land
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  1234 Luxury Avenue<br />
                  Suite 567<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-teal-500 mr-3" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-teal-500 transition duration-300">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-teal-500 mr-3" />
                <a href="mailto:info@luxerealty.com" className="text-gray-400 hover:text-teal-500 transition duration-300">
                  info@luxerealty.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-md transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} LuxeRealty. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-teal-500 transition duration-300">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-teal-500 transition duration-300">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-teal-500 transition duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
