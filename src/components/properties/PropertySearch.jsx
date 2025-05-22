import React, { useState } from 'react';
import { FiSearch, FiX, FiSliders } from 'react-icons/fi';

const PropertySearch = ({ onSearch }) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [filters, setFilters] = useState({
    keyword: '',
    type: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    baths: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (['minPrice', 'maxPrice', 'beds', 'baths'].includes(name)) {
      setFilters({ ...filters, [name]: value ? Number(value) : '' });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleClear = () => {
    const cleared = {
      keyword: '',
      type: '',
      category: '',
      minPrice: '',
      maxPrice: '',
      beds: '',
      baths: '',
    };
    setFilters(cleared);
    onSearch({});
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
      <form onSubmit={handleSubmit}>
        {/* Basic Search */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                name="keyword"
                value={filters.keyword}
                onChange={handleInputChange}
                placeholder="Search by location, property name, or keyword"
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          {/* Toggle Advanced */}
          <button
            type="button"
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            className="px-4 py-3 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-300"
          >
            <FiSliders className="h-5 w-5 mr-2 text-gray-600" />
            <span>Filters</span>
          </button>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition duration-300 flex items-center justify-center"
          >
            <FiSearch className="h-5 w-5 mr-2" />
            <span>Search</span>
          </button>
        </div>

        {/* Advanced Filters */}
        {isAdvancedOpen && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Any type</option>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </select>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={filters.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Any category</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="office">Office</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div>
                <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Min Price
                </label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleInputChange}
                  placeholder="No minimum"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Max Price
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleInputChange}
                  placeholder="No maximum"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="beds" className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <select
                  id="beds"
                  name="beds"
                  value={filters.beds}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <div>
                <label htmlFor="baths" className="block text-sm font-medium text-gray-700 mb-1">
                  Bathrooms
                </label>
                <select
                  id="baths"
                  name="baths"
                  value={filters.baths}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={handleClear}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-300"
                >
                  <FiX className="h-4 w-4 mr-2" />
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default PropertySearch;
