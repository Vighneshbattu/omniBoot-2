import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TargetAudience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const audiences = [
    {
      emoji: '☕',
      title: 'Cafes & Restaurants',
      description: 'Menu display, online ordering, customer reviews management'
    },
    {
      emoji: '👗',
      title: 'Fashion Boutiques',
      description: 'Product showcase, Instagram selling, festival campaigns'
    },
    {
      emoji: '🏥',
      title: 'Clinics & Healthcare',
      description: 'Appointment booking, patient management, online presence'
    },
    {
      emoji: '🏠',
      title: 'Real Estate Agents',
      description: 'Property listings, lead generation, client management'
    },
    {
      emoji: '🎯',
      title: 'Seasonal Sellers',
      description: 'Festival marketing, inventory management, seasonal campaigns'
    },
    {
      emoji: '🛒',
      title: 'Kirana Stores',
      description: 'Online catalog, delivery management, customer loyalty'
    },
    {
      emoji: '📚',
      title: 'Coaching Centers',
      description: 'Student enrollment, course promotion, parent communication'
    },
    {
      emoji: '💅',
      title: 'Salons & Spas',
      description: 'Service booking, customer reminders, promotional offers'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We <span className="text-blue-600">Help</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in helping small and medium businesses across Tier-2 & 3 cities in India go digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {audience.emoji}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {audience.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-blue-600 text-sm font-medium hover:text-blue-700 cursor-pointer">
                  See Success Stories →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-600">Businesses Transformed</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <p className="text-gray-600">Cities Served</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-yellow-600 mb-2">95%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <p className="text-gray-600">Support Available</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">Is Your Business Type Not Listed?</h3>
            <p className="text-blue-100 mb-6">
              Don't worry! We work with all types of businesses. Let's discuss your unique needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;