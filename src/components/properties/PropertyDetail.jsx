import React, { useState } from 'react';
import {
  LuMapPin,
  LuBed,
  LuBath,
  LuSquare,
  LuCar,
  LuCalendar,
  LuHeart,
  LuShare,
  LuChevronLeft,
  LuChevronRight
} from 'react-icons/lu';

const PropertyDetail = ({ property, agent }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  const setImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Images */}
      <div className="relative">
        <div className="h-[400px] md:h-[500px] relative">
          <img
            src={property.images[currentImageIndex]}
            alt={`Property image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition duration-300"
            aria-label="Previous image"
          >
            <LuChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition duration-300"
            aria-label="Next image"
          >
            <LuChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 right-4 bg-black/50 text-white py-1 px-3 rounded-full text-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex overflow-x-auto scrollbar-hide p-2 space-x-2 bg-gray-100">
          {property.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setImage(index)}
              className={`w-20 h-20 flex-shrink-0 cursor-pointer border-2 ${
                currentImageIndex === index ? 'border-teal-600' : 'border-transparent'
              }`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                property.type === 'sale' ? 'bg-teal-100 text-teal-800' : 'bg-blue-100 text-blue-800'
              } mb-3`}
            >
              {property.type === 'sale' ? 'For Sale' : 'For Rent'}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{property.title}</h1>
            <div className="flex items-center mt-2 text-gray-600">
              <LuMapPin className="h-5 w-5 mr-2 text-teal-600" />
              <span>
                {property.location.address}, {property.location.city}, {property.location.state}{' '}
                {property.location.zip}
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
              <LuHeart className="h-5 w-5 text-gray-600 hover:text-red-500" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
              <LuShare className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Price & Date */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-6 mb-6">
          <p className="text-3xl font-bold text-gray-900">
            ${property.price.toLocaleString()}
            {property.type === 'rent' && '/mo'}
          </p>
          <div className="flex items-center text-gray-600 text-sm">
            <LuCalendar className="h-4 w-4 mr-1" />
            <span>Listed on {new Date(property.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <LuBed className="h-6 w-6 text-teal-600 mb-2" />
            <span className="text-sm text-gray-500">Bedrooms</span>
            <span className="font-semibold text-lg">{property.features.bedrooms}</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <LuBath className="h-6 w-6 text-teal-600 mb-2" />
            <span className="text-sm text-gray-500">Bathrooms</span>
            <span className="font-semibold text-lg">{property.features.bathrooms}</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <LuSquare className="h-6 w-6 text-teal-600 mb-2" />
            <span className="text-sm text-gray-500">Area</span>
            <span className="font-semibold text-lg">{property.features.area.toLocaleString()} sq ft</span>
          </div>
          {property.features.garage !== undefined && (
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <LuCar className="h-6 w-6 text-teal-600 mb-2" />
              <span className="text-sm text-gray-500">Garage</span>
              <span className="font-semibold text-lg">
                {property.features.garage} {property.features.garage === 1 ? 'Space' : 'Spaces'}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
          <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
        </div>

        {/* Property Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Property Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center border-b border-gray-100 py-2">
              <span className="text-gray-600 w-1/2">Property ID</span>
              <span className="font-medium">{property.id}</span>
            </div>
            <div className="flex items-center border-b border-gray-100 py-2">
              <span className="text-gray-600 w-1/2">Property Type</span>
              <span className="font-medium capitalize">{property.category}</span>
            </div>
            <div className="flex items-center border-b border-gray-100 py-2">
              <span className="text-gray-600 w-1/2">Property Status</span>
              <span className="font-medium capitalize">
                {property.type === 'sale' ? 'For Sale' : 'For Rent'}
              </span>
            </div>
            {property.features.yearBuilt && (
              <div className="flex items-center border-b border-gray-100 py-2">
                <span className="text-gray-600 w-1/2">Year Built</span>
                <span className="font-medium">{property.features.yearBuilt}</span>
              </div>
            )}
          </div>
        </div>

        {/* Agent Info */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={agent.image}
              alt={agent.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
              <p className="text-teal-600 mb-2">{agent.role}</p>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4">
                <a href={`mailto:${agent.email}`} className="text-gray-600 hover:text-teal-600 transition duration-300">
                  {agent.email}
                </a>
                <a href={`tel:${agent.phone}`} className="text-gray-600 hover:text-teal-600 transition duration-300">
                  {agent.phone}
                </a>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md transition duration-300">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
