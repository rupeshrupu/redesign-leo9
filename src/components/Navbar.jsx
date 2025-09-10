import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Leo9Studio
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-purple-600'
                      : 'text-black hover:text-purple-300'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div variants={itemVariants} className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <motion.div
                animate={isOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="w-6 h-0.5 bg-current block transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
                />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={{
                    closed: { opacity: 0, x: -50 },
                    open: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1 },
                    },
                  }}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                variants={{
                  closed: { opacity: 0, x: -50 },
                  open: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: navItems.length * 0.1 },
                  },
                }}
                className="w-full text-left bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 mt-2 rounded-lg font-medium"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
