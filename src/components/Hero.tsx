import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Websites', 'Social Media', 'Automation', 'Ads', 'Growth 🚀'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = texts[currentIndex];
    let currentLength = 0;
    
    const typeInterval = setInterval(() => {
      if (currentLength <= text.length) {
        setCurrentText(text.substring(0, currentLength));
        currentLength++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <Sparkles className="text-yellow-500 mr-2" size={24} />
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                #1 Digital Partner for Small Businesses
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Helping Small Businesses Go{' '}
              <span className="text-blue-600">Big</span>, Digitally!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              We build websites, run ads, automate sales & grow profits – all in one place.
            </p>

            {/* Typewriter Effect */}
            <div className="mb-8">
              <span className="text-lg text-gray-700">We specialize in: </span>
              <span className="text-lg font-semibold text-blue-600 border-r-2 border-blue-600 pr-1">
                {currentText}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center"
              >
                <Play size={20} className="mr-2" />
                Book Free Demo
              </motion.button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Quick 7-day Setup
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                100+ Businesses Served
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Regional Language Support
              </div>
            </div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-200 rounded-full opacity-50"></div>
              
              {/* Main illustration content */}
              <div className="text-center">
                <div className="text-6xl mb-4">🏪➡️📱</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Traditional to Digital</h3>
                <p className="text-gray-600">Transforming Indian businesses with modern digital solutions</p>
                
                {/* Feature icons */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">🌐</div>
                    <p className="text-sm font-medium">Website</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">📱</div>
                    <p className="text-sm font-medium">Social Media</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">🤖</div>
                    <p className="text-sm font-medium">Automation</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">📈</div>
                    <p className="text-sm font-medium">Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;