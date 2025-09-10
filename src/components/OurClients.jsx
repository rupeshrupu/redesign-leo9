import React from 'react';
import { motion } from 'framer-motion';

const OurClients = () => {
  const clients = [
    { name: 'TechCorp', logo: '🏢', industry: 'Technology' },
    { name: 'StartupX', logo: '🚀', industry: 'Fintech' },
    { name: 'HealthPlus', logo: '🏥', industry: 'Healthcare' },
    { name: 'EduLearn', logo: '📚', industry: 'Education' },
    { name: 'RetailMax', logo: '🛍️', industry: 'E-commerce' },
    { name: 'FoodieApp', logo: '🍕', industry: 'Food & Beverage' },
    { name: 'TravelGo', logo: '✈️', industry: 'Travel' },
    { name: 'SportsFit', logo: '⚽', industry: 'Sports & Fitness' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechCorp',
      content: 'Leo9Studio transformed our vision into a stunning digital experience. Their attention to detail and innovative approach exceeded our expectations.',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      position: 'CTO, StartupX',
      content: 'The team delivered a robust platform that scales beautifully. Their technical expertise and creative solutions made all the difference.',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, HealthPlus',
      content: 'Working with Leo9Studio was a game-changer. They created a brand identity that truly resonates with our audience.',
      avatar: '👩‍⚕️',
      rating: 5,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4"
          >
            🤝 Our Clients
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted by{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We've partnered with companies of all sizes, from innovative startups 
            to established enterprises, delivering exceptional results every time.
          </motion.p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={logoVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-4xl mb-3 inline-block group-hover:animate-bounce"
                  >
                    {client.logo}
                  </motion.div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors duration-200">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{client.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          >
            What Our Clients Say
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-yellow-400 text-lg"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl mr-4"
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '260+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '15+', label: 'Countries Served' },
            { number: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;