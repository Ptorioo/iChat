import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Team', path: '/team' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-2xl z-50">
            <span className="text-primary-400">iChat</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide ${
                  location.pathname === link.path
                    ? 'text-primary-400'
                    : 'text-white/80 hover:text-white transition-colors'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md transition-colors duration-300 flex items-center"
            >
              <span>Contact Us</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed inset-0 bg-neutral-900/95 backdrop-blur-lg lg:hidden z-40 flex flex-col"
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-medium ${
                location.pathname === link.path ? 'text-primary-400' : 'text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md transition-colors duration-300 flex items-center"
          >
            <span>Contact Us</span>
            <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Navigation;