import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const services = [
    { name: 'Design', color: 'from-pink-500 to-rose-500' },
    { name: 'Technology', color: 'from-blue-500 to-cyan-500' },
    { name: 'Marketing', color: 'from-purple-500 to-indigo-500' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Services Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-6 py-2 rounded-full text-white font-medium text-sm bg-gradient-to-r ${service.color} shadow-lg backdrop-blur-sm border border-white/20`}
              >
                {service.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            We are a{' '}
            <motion.span
              className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              global creative
            </motion.span>
            <br />
            agency
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            that combines design expertise with technology and intelligence to{' '}
            <motion.span
              className="text-purple-400 font-semibold"
              whileHover={{ scale: 1.05, color: '#a855f7' }}
            >
              simplify, strengthen, and transform
            </motion.span>{' '}
            businesses worldwide.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            As global leaders in UX/UI, technology, and marketing solutions, we partner 
            with clients to create exceptional digital experiences.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                260+
              </motion.div>
              <div className="text-gray-400">projects delivered</div>
            </motion.div>
            <div className="hidden md:block w-px h-12 bg-gray-600"></div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                and counting more...
              </div>
              <div className="text-gray-400">with excellence</div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:border-white/50 transition-all duration-300"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating illustration */}
        <motion.div
          animate={floatingAnimation}
          className="absolute -right-20 top-20 hidden lg:block opacity-20"
        >
          <div className="w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
        </motion.div>

        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }}
          className="absolute -left-20 bottom-20 hidden lg:block opacity-20"
        >
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;