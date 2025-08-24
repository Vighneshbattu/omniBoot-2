import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    // Show notification for 5 seconds
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "919876543210"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in OmniBoost digital services. Can you help me?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 2 
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 relative"
        >
          <MessageCircle size={28} />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></div>
          
          {/* Notification dot */}
          {showNotification && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
            >
              1
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl w-80 max-w-[calc(100vw-3rem)]"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">OmniBoost Support</h3>
                  <p className="text-xs opacity-80">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 bg-gray-50 min-h-[200px]">
              <div className="space-y-4">
                {/* Bot message */}
                <div className="flex">
                  <div className="bg-white rounded-2xl rounded-bl-sm p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-800">
                      👋 Hi there! How can we help you grow your business digitally?
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Just now</p>
                  </div>
                </div>

                {/* Quick options */}
                <div className="space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppClick}
                    className="w-full bg-blue-500 text-white p-3 rounded-xl text-sm font-medium hover:bg-blue-600 transition-all"
                  >
                    💻 I need a website
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppClick}
                    className="w-full bg-purple-500 text-white p-3 rounded-xl text-sm font-medium hover:bg-purple-600 transition-all"
                  >
                    📱 Social media help
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppClick}
                    className="w-full bg-yellow-500 text-white p-3 rounded-xl text-sm font-medium hover:bg-yellow-600 transition-all"
                  >
                    🚀 Complete digital package
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-white rounded-b-2xl">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center"
              >
                <MessageCircle size={18} className="mr-2" />
                Chat on WhatsApp
              </motion.button>
              <p className="text-xs text-gray-500 text-center mt-2">
                We'll respond within 5 minutes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Initial notification popup */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ delay: 3 }}
            className="fixed bottom-24 right-6 z-40 bg-white rounded-xl shadow-xl p-4 max-w-xs"
          >
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <MessageCircle size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Need help with digital marketing?</p>
                <p className="text-xs text-gray-500 mt-1">Chat with us for free consultation!</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;