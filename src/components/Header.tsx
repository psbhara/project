import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-4">
          {/* K.R. Mangalam University Logo - Made Bigger */}
          <div className="flex items-center gap-4">
            <img
              src="https://raw.githubusercontent.com/psbhara/img/refs/heads/main/krmu.png"
              alt="K.R. Mangalam University Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
            <img
              src="https://raw.githubusercontent.com/psbhara/img/refs/heads/main/csi.png"
              alt="CSI Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Events
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Team
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Gallery
          </NavLink>
          <NavLink to="/register" className="btn btn-primary ml-4">
            Register
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t mt-2 animate-slide-down">
          <div className="container py-4 flex flex-col space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Team
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Gallery
            </NavLink>
            <NavLink to="/register" className="btn btn-primary self-start mt-2">
              Register
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;