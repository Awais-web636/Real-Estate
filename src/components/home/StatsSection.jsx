import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaUserFriends, FaAward, FaMapMarkerAlt } from 'react-icons/fa';

const stats = [
  {
    id: 1,
    value: 1500,
    label: 'Properties Sold',
    icon: <FaHome className="h-10 w-10 text-teal-600" />
  },
  {
    id: 2,
    value: 950,
    label: 'Happy Clients',
    icon: <FaUserFriends className="h-10 w-10 text-teal-600" />
  },
  {
    id: 3,
    value: 18,
    label: 'Years Experience',
    icon: <FaAward className="h-10 w-10 text-teal-600" />
  },
  {
    id: 4,
    value: 42,
    label: 'Cities Covered',
    icon: <FaMapMarkerAlt className="h-10 w-10 text-teal-600" />
  }
];

const StatsSection = () => {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          animateNumbers();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateNumbers = () => {
    const duration = 2000; // milliseconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setAnimatedValues(
        stats.map((stat) => Math.floor(progress * stat.value))
      );

      if (frame === totalFrames) {
        clearInterval(timer);
        setAnimatedValues(stats.map(stat => stat.value));
      }
    }, frameDuration);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {animatedValues[index].toLocaleString()}
                {stat.id === 3 && '+'}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
