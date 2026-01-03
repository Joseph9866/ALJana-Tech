import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Our Team', path: '/team' },
    { name: 'Testimonials', path: '/Testimonials' },
    { name: 'Blogs', path: '/Blogs' },
    { name: 'About Us', path: '/About' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-900/95 backdrop-blur-md shadow-lg' : 'bg-primary-900/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img
              src="/Images/Aljana logo.png"
              alt="ALJana Tech Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-white">
              ALJana Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="lg:hidden overflow-hidden bg-primary-800 border-t border-primary-700"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-white bg-primary-700'
                    : 'text-gray-300 hover:text-white hover:bg-primary-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;