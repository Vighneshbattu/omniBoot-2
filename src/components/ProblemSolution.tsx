import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertCircle, CheckCircle, X, ArrowRight } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: '🏪',
      title: 'No Digital Presence',
      description: 'Your business is invisible online while customers search for services like yours'
    },
    {
      icon: '📱',
      title: 'Missing Social Media',
      description: 'Competitors are engaging customers on Instagram, Facebook while you are offline'
    },
    {
      icon: '📞',
      title: 'Manual Customer Management',
      description: 'Wasting hours on phone calls, WhatsApp messages that could be automated'
    },
    {
      icon: '🎯',
      title: 'No Targeted Marketing',
      description: 'Missing out on festival seasons and local customers who need your services'
    }
  ];

  const solutions = [
    {
      icon: '🌐',
      title: 'Professional Website',
      description: 'Get found on Google with a mobile-friendly website that converts visitors to customers'
    },
    {
      icon: '📲',
      title: 'Social Media Management',
      description: 'We create and manage your Instagram, Facebook to build brand awareness'
    },
    {
      icon: '🤖',
      title: 'WhatsApp Automation',
      description: 'Automated responses, booking confirmations, and customer follow-ups'
    },
    {
      icon: '🚀',
      title: 'Targeted Ads & Campaigns',
      description: 'Reach local customers during festivals, seasons with strategic advertising'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Small Businesses <span className="text-red-600">Struggle</span> Online
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most small businesses face the same digital challenges. We solve them all with one comprehensive solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mb-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="text-red-500 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-red-700">Current Problems</h3>
              </div>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white border border-red-200 p-6 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{problem.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-red-700">{problem.title}</h4>
                        <X className="text-red-500" size={20} />
                      </div>
                      <p className="text-gray-600">{problem.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl mb-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-green-700">OmniBoost Solutions</h3>
              </div>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white border border-green-200 p-6 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{solution.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-green-700">{solution.title}</h4>
                        <CheckCircle className="text-green-500" size={20} />
                      </div>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 text-white p-8 rounded-3xl inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6">Let's solve these problems together with our proven digital solutions</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center mx-auto"
            >
              Get Your Free Digital Audit
              <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;