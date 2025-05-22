import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { HiChevronRight } from 'react-icons/hi';
import PropertyDetail from '../components/properties/PropertyDetail';
import PropertyCard from '../components/properties/PropertyCard';
import { properties } from '../data/properties';
import { agents } from '../data/agents';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [agent, setAgent] = useState(null);
  const [similarProperties, setSimilarProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    window.scrollTo(0, 0);

    setIsLoading(true);
    setTimeout(() => {
      const foundProperty = properties.find(p => p.id === parseInt(id, 10));
      if (foundProperty) {
        setProperty(foundProperty);

        const propertyAgent = agents.find(a => a.id === foundProperty.agent);
        if (propertyAgent) {
          setAgent(propertyAgent);
        }

        const similar = properties
          .filter(p =>
            p.id !== foundProperty.id &&
            (p.category === foundProperty.category || p.location.city === foundProperty.location.city)
          )
          .slice(0, 3);
        setSimilarProperties(similar);

        document.title = `${foundProperty.title} | LuxeRealty`;
      }
      setIsLoading(false);
    }, 800);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="h-[600px] bg-gray-200 animate-pulse rounded-lg mb-8"></div>
          <div className="h-10 bg-gray-200 animate-pulse rounded-md w-3/4 mb-4"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded-md w-1/2 mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-20 bg-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
          <div className="h-40 bg-gray-200 animate-pulse rounded-lg mb-8"></div>
        </div>
      </div>
    );
  }

  if (!property || !agent) {
    return (
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition duration-300">
            Browse All Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-teal-600 transition duration-300 flex items-center">
            <FaHome className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
          <HiChevronRight className="h-4 w-4 mx-2" />
          <Link to="/properties" className="hover:text-teal-600 transition duration-300">
            Properties
          </Link>
          <HiChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-800 font-medium truncate max-w-[200px] md:max-w-none">
            {property.title}
          </span>
        </div>

        {/* Property Detail */}
        <PropertyDetail property={property} agent={agent} />

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetailPage;
