import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 hero-gradient"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' 
        }}
      />
      
      <div className="container relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-slide-up">
            Computer Society of India
            <span className="block text-secondary-300">Student Chapter KRMU</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Empowering students through technology, innovation, and community.
            Join us in exploring the endless possibilities of computing.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/register" className="btn btn-primary">
              Join Now
            </Link>
            <Link to="/events" className="btn bg-white text-primary-700 hover:bg-gray-100 flex items-center gap-2">
              Explore Events <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="container mt-12 md:mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { count: '500+', label: 'Members' },
            { count: '50+', label: 'Events' },
            { count: '20+', label: 'Workshops' },
            { count: '10+', label: 'Awards' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-lg text-center shadow-md animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-600">{stat.count}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;