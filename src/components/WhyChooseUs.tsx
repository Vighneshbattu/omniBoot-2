import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Clock, Globe, Headphones, Zap, Heart } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: CheckCircle,
      title: 'Affordable Fixed Packages',
      description: 'No hidden costs, no surprises. Clear pricing that fits small business budgets.',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'Regional Language Support',
      description: 'We speak your language - Hindi, Tamil, Telugu, Bengali, Marathi and more.',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Quick 7-Day Setup',
      description: 'Your business will be online and running within a week, guaranteed.',
      color: 'yellow'
    },
    {
      icon: Zap,
      title: 'Automation Saves Manpower',
      description: 'Reduce manual work by 70% with our smart automation solutions.',
      color: 'purple'
    },
    {
      icon: Heart,
      title: 'One-Stop Solution',
      description: 'Website, social media, ads, and automation - everything under one roof.',
      color: 'red'
    },
    {
      icon: Headphones,
      title: '24/7 Dedicated Support',
      description: 'Always available to help you grow. Call, WhatsApp, or email anytime.',
      color: 'indigo'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    green: 'bg-green-100 text-green-600 border-green-200',
    yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    red: 'bg-red-100 text-red-600 border-red-200',
    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
  };

  return (
    <section id="why-us" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">OmniBoost</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges of Indian small businesses and have built solutions specifically for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${colorClasses[reason.color as keyof typeof colorClasses]}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${colorClasses[reason.color as keyof typeof colorClasses]}`}>
                <reason.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              OmniBoost vs Traditional Agencies
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Agencies */}
              <div className="bg-white rounded-2xl p-6 border-2 border-red-200">
                <h4 className="text-xl font-semibold text-red-700 mb-4 text-center">Traditional Agencies</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    High costs (₹50,000+)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    3-6 months delivery time
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Only English communication
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Separate vendors for different services
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Limited post-launch support
                  </li>
                </ul>
              </div>

              {/* OmniBoost */}
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
                <h4 className="text-xl font-semibold text-green-700 mb-4 text-center">OmniBoost</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Affordable packages (₹15,000+)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    7-day quick setup
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Regional language support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Complete one-stop solution
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    24/7 ongoing support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">Our Success Promise</h3>
            <p className="text-blue-100 mb-6 text-lg">
              If you don't see an increase in customer inquiries within 30 days, we'll work for free until you do!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all text-lg"
            >
              Start Risk-Free Today!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;