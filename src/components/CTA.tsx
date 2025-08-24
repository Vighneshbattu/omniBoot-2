import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Phone, MessageCircle, Calendar, Gift, Clock, Users } from 'lucide-react';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showOffer, setShowOffer] = useState(true);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>

      <div className="container mx-auto px-4 relative">
        {/* Festival Offer Banner */}
        {showOffer && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-blue-900 p-4 rounded-2xl mb-12 relative"
          >
            <button 
              onClick={() => setShowOffer(false)}
              className="absolute top-2 right-4 text-blue-900 hover:text-blue-700 text-xl font-bold"
            >
              ×
            </button>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Gift className="mr-2" size={24} />
                <span className="text-xl font-bold">🎉 Diwali Special Offer 🎉</span>
              </div>
              <p className="text-lg font-semibold">20% OFF on all website packages + FREE WhatsApp Automation!</p>
              <div className="flex items-center justify-center mt-2 text-sm">
                <Clock size={16} className="mr-1" />
                <span>Limited Time: Only 10 slots left this month!</span>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Take Your Business Digital in Just <span className="text-yellow-400">7 Days!</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Don't let your competitors get ahead. Start your digital transformation today and see results within a week.
          </p>
        </motion.div>

        {/* Urgency indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="bg-white bg-opacity-20 rounded-full px-6 py-3 flex items-center">
            <Users size={20} className="mr-2" />
            <span>15 businesses joined this week</span>
          </div>
          <div className="bg-white bg-opacity-20 rounded-full px-6 py-3 flex items-center">
            <Clock size={20} className="mr-2" />
            <span>Quick 7-day setup guaranteed</span>
          </div>
          <div className="bg-red-500 rounded-full px-6 py-3 flex items-center animate-pulse">
            <span className="font-bold">🔥 Only 5 slots left!</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 transition-all flex items-center justify-center shadow-2xl"
          >
            <Phone size={24} className="mr-3" />
            Book Free Call Now
            <ArrowRight size={24} className="ml-3" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-green-400 transition-all flex items-center justify-center shadow-2xl"
          >
            <MessageCircle size={24} className="mr-3" />
            WhatsApp Us
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 border-2 border-white px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center shadow-2xl"
          >
            <Calendar size={24} className="mr-3" />
            See Pricing
          </motion.button>
        </motion.div>

        {/* Lead Magnet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white bg-opacity-10 rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Get Your FREE 15-Minute Digital Audit</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Discover exactly how to grow your business online. No commitment required.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Enter your WhatsApp number"
              className="flex-1 px-6 py-3 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all"
            >
              Get Free Audit
            </motion.button>
          </div>
          
          <p className="text-blue-200 text-sm mt-4">
            ✓ No spam ✓ Results within 24 hours ✓ Actionable recommendations
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap justify-center gap-8 text-blue-200">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>100+ Happy Clients</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>7-Day Setup Guarantee</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Money-Back Promise</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;