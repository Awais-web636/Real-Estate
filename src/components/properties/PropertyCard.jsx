import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaHeart } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  const { id, title, price, type, location, features, images } = property;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative">
        <Link to={`/properties/${id}`}>
          <img
            src={images[0]}
            alt={title}
            className="w-full h-60 object-cover transition duration-500 hover:scale-105"
          />
        </Link>

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            type === 'sale' ? 'bg-teal-600 text-white' : 'bg-blue-600 text-white'
          }`}>
            {type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-white text-gray-600 hover:text-red-500 hover:bg-gray-100 transition-colors duration-300"
          aria-label="Add to favorites"
        >
          <FaHeart className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        {/* Price */}
        <div className="mb-2">
          <span className="text-xl font-bold text-gray-900">
            ${price.toLocaleString()}
            {type === 'rent' && '/mo'}
          </span>
        </div>

        {/* Title */}
        <Link to={`/properties/${id}`} className="group">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
            {title}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <FaMapMarkerAlt className="h-4 w-4 mr-1 text-teal-600 flex-shrink-0" />
          <span className="text-sm truncate">{location.address}, {location.city}, {location.state}</span>
        </div>

        {/* Features */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
          <div className="flex items-center text-gray-700">
            <FaBed className="h-4 w-4 mr-1" />
            <span className="text-sm">{features.bedrooms} {features.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaBath className="h-4 w-4 mr-1" />
            <span className="text-sm">{features.bathrooms} {features.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaRulerCombined className="h-4 w-4 mr-1" />
            <span className="text-sm">{features.area.toLocaleString()} sq ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
