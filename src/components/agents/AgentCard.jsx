import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';

const AgentCard = ({ agent }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      {/* Agent Image */}
      <div className="h-64 overflow-hidden">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Agent Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{agent.name}</h3>
        <p className="text-teal-600 mb-4">{agent.role}</p>

        {/* Contact Info */}
        <div className="space-y-2 mb-6">
          <a
            href={`mailto:${agent.email}`}
            className="flex items-center text-gray-600 hover:text-teal-600 transition duration-300"
          >
            <FaEnvelope className="h-4 w-4 mr-2" />
            <span>{agent.email}</span>
          </a>
          <a
            href={`tel:${agent.phone}`}
            className="flex items-center text-gray-600 hover:text-teal-600 transition duration-300"
          >
            <FaPhone className="h-4 w-4 mr-2" />
            <span>{agent.phone}</span>
          </a>
        </div>

        {/* Agent Stats */}
        <div className="flex justify-between mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{agent.listingCount}</p>
            <p className="text-sm text-gray-600">Listings</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{agent.experience}</p>
            <p className="text-sm text-gray-600">Years Exp.</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{agent.languages.length}</p>
            <p className="text-sm text-gray-600">Languages</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-3">
          {agent.socialMedia.facebook && (
            <a
              href={agent.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition duration-300"
              aria-label={`${agent.name}'s Facebook`}
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
          )}
          {agent.socialMedia.twitter && (
            <a
              href={agent.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-400 transition duration-300"
              aria-label={`${agent.name}'s Twitter`}
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          )}
          {agent.socialMedia.instagram && (
            <a
              href={agent.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition duration-300"
              aria-label={`${agent.name}'s Instagram`}
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          )}
          {agent.socialMedia.linkedin && (
            <a
              href={agent.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition duration-300"
              aria-label={`${agent.name}'s LinkedIn`}
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
