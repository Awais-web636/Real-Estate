import React, { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { agents } from '../data/agents';
import AgentCard from '../components/agents/AgentCard';

const AgentsPage = () => {
  useEffect(() => {
    document.title = 'Our Agents | LuxeRealty';
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="flex items-center text-sm text-gray-600 mb-6">
           <Link to="/" className="hover:text-teal-600 transition duration-300 flex items-center">
            <FaHome className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Expert Agents</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced real estate professionals is dedicated to providing you with
            exceptional service and guidance throughout your property journey.
          </p>
        </div>

        {/* Team Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 mb-4">
                At LuxeRealty, our agents are more than just real estate professionals. They're local market
                experts, skilled negotiators, and dedicated advisors committed to your success.
              </p>
              <p className="text-gray-600 mb-4">
                Each member of our team brings unique experience and specialized knowledge to serve your specific needs.
                Whether you're buying your first home, selling a luxury property, or investing in real estate,
                we have the expertise to guide you through every step.
              </p>
              <p className="text-gray-600">
                Our agents stay ahead of market trends and continuously expand their knowledge through ongoing
                education and training, ensuring they provide the most current and valuable insights to our clients.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7578982/pexels-photo-7578982.jpeg"
                alt="LuxeRealty Team"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* Join Our Team */}
        <div className="mt-16 bg-teal-700 text-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl font-bold mb-2">Join Our Team</h2>
              <p className="text-teal-100 max-w-xl">
                Are you a passionate real estate professional looking to grow your career with a supportive team?
                We're always looking for talented individuals to join LuxeRealty.
              </p>
            </div>
            <button className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-3 rounded-md transition duration-300 whitespace-nowrap">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;
