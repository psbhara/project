import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              {/* University and CSI Logos - Made KRMU Logo Bigger */}
              <div className="flex items-center gap-3">
                <img 
                  src="https://raw.githubusercontent.com/psbhara/img/refs/heads/main/krmu.png" 
                  alt="K.R. Mangalam University Logo" 
                  className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white rounded-lg p-1"
                />
                <img 
                  src="https://raw.githubusercontent.com/psbhara/img/refs/heads/main/csi.png" 
                  alt="CSI Logo" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-white leading-tight">Computer Society of India Student Chapter KRMU</span>
                  <span className="text-xs text-gray-400 leading-tight">K.R. Mangalam University</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Computer Society of India Student Chapter KRMU, fostering technical knowledge and innovation among students.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/computer-society-of-india-student-chapter-krmu-473934366/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white transition-colors">Register</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-primary-400" />
                <span>K.R. Mangalam University, Sohna Road, Gurugram, Haryana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-primary-400" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-primary-400" />
                <span>csikrmuchapter@krmangalam.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on events and activities.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary-500"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-center text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Computer Society of India Student Chapter KRMU. All rights reserved.
            </p>
            
            {/* Footer Logos - Made KRMU Logo Bigger */}
            <div className="flex items-center gap-4">
              <img 
                src="https://raw.githubusercontent.com/psbhara/img/refs/heads/main/krmu.png" 
                alt="K.R. Mangalam University Logo" 
                className="w-12 h-12 object-contain bg-white rounded p-1"
              />
              <img 
                src="/src/assets/csi_logo (1) copy.png" 
                alt="CSI Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;