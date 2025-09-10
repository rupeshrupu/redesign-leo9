import React from 'react';
import { motion } from 'framer-motion';

const OurExpertise = () => {
  const expertiseAreas = [
    {
      title: 'UX/UI Design',
      description: 'Creating intuitive and engaging user experiences that drive conversions and user satisfaction.',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    },
    {
      title: 'Web Development',
      description: 'Building fast, scalable, and secure web applications using modern technologies.',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
      features: ['React/Next.js', 'Node.js', 'Cloud Solutions', 'API Integration'],
    },
    {
      title: 'Mobile Apps',
      description: 'Developing native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      color: 'from-green-500 to-teal-500',
      features: ['React Native', 'Flutter', 'iOS Native', 'Android Native'],
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions that amplify your brand and drive growth.',
      icon: '📊',
      color: 'from-orange-500 to-red-500',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics'],
    },
    {
      title: 'Brand Identity',
      description: 'Crafting memorable brand identities that resonate with your target audience.',
      icon: '🚀',
      color: 'from-indigo-500 to-purple-500',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Brand Strategy'],
    },
    {
      title: 'E-commerce',
      description: 'Building powerful online stores that convert visitors into customers.',
      icon: '🛒',
      color: 'from-emerald-500 to-blue-500',
      features: ['Shopify', 'WooCommerce', 'Payment Integration', 'Inventory Management'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-semibold text-sm mb-4"
          >
            ✨ Our Expertise
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What We Do{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Best
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We combine creativity, technology, and strategy to deliver exceptional 
            digital solutions that drive business growth and user engagement.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-4xl mb-4 inline-block"
                >
                  {area.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-200">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                <div className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${area.color} mr-3`}></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 px-6 py-3 bg-gradient-to-r ${area.color} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            Ready to Start Your Project?
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurExpertise;