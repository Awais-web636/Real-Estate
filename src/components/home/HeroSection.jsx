import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaBuilding, FaBriefcase } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="relative h-screen min-h-[600px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/30 z-0"></div>
      </div>

      {/* Content - Added pt-16 (4rem) for mobile and pt-0 for larger screens */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col justify-center pt-16 sm:pt-0">
        <div className="max-w-3xl w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Find Your <span className="text-teal-400">Dream Home</span> With Ease
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl">
            Discover the perfect property from our exclusive selection of premium
            listings. Your journey to exceptional living starts here.
          </p>

          {/* Property Type Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Link
              to="/properties?type=sale"
              className="bg-white text-gray-800 hover:bg-teal-50 hover:text-teal-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center transition duration-300 text-sm sm:text-base"
            >
              <FaHome className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span>Buy</span>
            </Link>
            <Link
              to="/properties?type=rent"
              className="bg-teal-600 text-white hover:bg-teal-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center transition duration-300 text-sm sm:text-base"
            >
              <FaBuilding className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span>Rent</span>
            </Link>
            <Link
              to="/properties?category=office"
              className="bg-transparent text-white border border-white hover:bg-white hover:text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center transition duration-300 text-sm sm:text-base"
            >
              <FaBriefcase className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span>Commercial</span>
            </Link>
          </div>

          {/* Search Box */}
          {/* <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg max-w-3xl">
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="City, neighborhood, or address"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                />
              </div>
              <div className="w-full md:w-auto md:min-w-[160px]">
                <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  id="property-type"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                >
                  <option value="all">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="office">Office</option>
                </select>
              </div>
              <div className="w-full md:w-auto md:min-w-[160px]">
                <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <select
                  id="price-range"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                >
                  <option value="all">Any Price</option>
                  <option value="0-500000">$0 - $500k</option>
                  <option value="500000-1000000">$500k - $1M</option>
                  <option value="1000000-2000000">$1M - $2M</option>
                  <option value="2000000+">$2M+</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 py-2 rounded-md transition duration-300 flex items-center justify-center text-sm sm:text-base">
                  <FaSearch className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>

    </div>
  );
};

export default HeroSection;