import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import PropertySearch from '../components/properties/PropertySearch';
import PropertyGrid from '../components/properties/PropertyGrid';
import { properties } from '../data/properties';

const PropertiesPage = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.title = 'Properties | LuxeRealty';

    const params = new URLSearchParams(location.search);
    const typeParam = params.get('type');
    const categoryParam = params.get('category');

    if (typeParam || categoryParam) {
      const filtered = properties.filter((property) => {
        if (typeParam && property.type !== typeParam) return false;
        if (categoryParam && property.category !== categoryParam) return false;
        return true;
      });
      setFilteredProperties(filtered);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.search]);

  const handleSearch = (filters) => {
    setIsLoading(true);

    setTimeout(() => {
      const filtered = properties.filter((property) => {
        if (
          filters.keyword &&
          !property.title.toLowerCase().includes(filters.keyword.toLowerCase()) &&
          !property.location.city.toLowerCase().includes(filters.keyword.toLowerCase()) &&
          !property.location.address.toLowerCase().includes(filters.keyword.toLowerCase())
        ) {
          return false;
        }

        if (filters.type && property.type !== filters.type) return false;
        if (filters.category && property.category !== filters.category) return false;
        if (filters.minPrice && property.price < filters.minPrice) return false;
        if (filters.maxPrice && property.price > filters.maxPrice) return false;
        if (filters.beds && property.features.bedrooms < filters.beds) return false;
        if (filters.baths && property.features.bathrooms < filters.baths) return false;

        return true;
      });

      setFilteredProperties(filtered);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-teal-600 transition duration-300 flex items-center">
            <FaHome className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
        </div>


        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Our Properties</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive collection of handpicked properties.
            Use the filters to find the perfect property that matches your requirements.
          </p>
        </div>

        <PropertySearch onSearch={handleSearch} />

        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            {isLoading
              ? 'Searching...'
              : `Showing ${filteredProperties.length} ${
                  filteredProperties.length === 1 ? 'property' : 'properties'
                }`}
          </p>
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-gray-600">
              Sort by:
            </label>
            <select
              id="sort"
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <PropertyGrid properties={filteredProperties} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default PropertiesPage;
