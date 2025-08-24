import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Smartphone, Bot, TrendingUp, Search, Target, MessageCircle, Calendar } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const basicServices = [
    {
      icon: Globe,
      title: 'Professional Website',
      description: 'Mobile-responsive website with hosting, SSL certificate, and maintenance',
      price: '₹15,000',
      features: ['Mobile Responsive', '5 Pages', '1 Year Hosting', 'SSL Certificate', 'Basic SEO']
    },
    {
      icon: Smartphone,
      title: 'Social Media Setup',
      description: 'Complete social media presence with branded profiles and content strategy',
      price: '₹8,000',
      features: ['Facebook Page', 'Instagram Business', 'Logo Design', 'Bio Optimization', 'Content Calendar']
    },
    {
      icon: Bot,
      title: 'WhatsApp Automation',
      description: 'Automated customer responses and booking management via WhatsApp Business',
      price: '₹12,000',
      features: ['Auto Responses', 'Booking System', 'Customer Database', 'Follow-up Messages', 'Analytics']
    },
    {
      icon: MessageCircle,
      title: 'Complete Digital Package',
      description: 'Everything you need to establish strong digital presence',
      price: '₹25,000',
      features: ['Website + Hosting', 'Social Media', 'WhatsApp Bot', 'Logo + Branding', 'Training Included']
    }
  ];

  const advancedServices = [
    {
      icon: Search,
      title: 'SEO & Local Marketing',
      description: 'Get found on Google when customers search for your services',
      price: '₹18,000',
      features: ['Google My Business', 'Local SEO', 'Keyword Optimization', 'Google Analytics', 'Monthly Reports']
    },
    {
      icon: Target,
      title: 'Facebook & Instagram Ads',
      description: 'Targeted advertising to reach your ideal customers in your city',
      price: '₹20,000',
      features: ['Ad Strategy', 'Creative Design', 'Audience Targeting', 'Campaign Management', 'Performance Reports']
    },
    {
      icon: TrendingUp,
      title: 'Festival Campaigns',
      description: 'Special promotional campaigns for festivals and seasonal sales',
      price: '₹15,000',
      features: ['Festival Strategy', 'Creative Assets', 'Social Media Posts', 'WhatsApp Campaigns', 'Performance Tracking']
    },
    {
      icon: Calendar,
      title: 'Growth Package',
      description: 'Complete marketing solution with ongoing support and optimization',
      price: '₹35,000',
      features: ['Everything Above', 'Monthly Strategy', 'Content Creation', 'Lead Generation', 'Dedicated Support']
    }
  ];

  const ServiceCard: React.FC<{ service: any; index: number; isAdvanced?: boolean }> = ({ service, index, isAdvanced }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 ${isAdvanced ? 'border-yellow-200 hover:border-yellow-400' : 'border-blue-200 hover:border-blue-400'}`}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${isAdvanced ? 'bg-yellow-100' : 'bg-blue-100'}`}>
        <service.icon className={`${isAdvanced ? 'text-yellow-600' : 'text-blue-600'}`} size={32} />
      </div>
      
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
        <span className={`text-2xl font-bold ${isAdvanced ? 'text-yellow-600' : 'text-blue-600'}`}>
          {service.price}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      <ul className="space-y-2 mb-6">
        {service.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-sm text-gray-700">
            <div className={`w-2 h-2 rounded-full mr-3 ${isAdvanced ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
            {feature}
          </li>
        ))}
      </ul>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 rounded-full font-semibold transition-all ${
          isAdvanced 
            ? 'bg-yellow-600 text-white hover:bg-yellow-700' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Choose This Package
      </motion.button>
    </motion.div>
  );

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Digital Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted packages designed specifically for small businesses in India
          </p>
        </motion.div>

        {/* Basic Services */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl mb-8"
          >
            <h3 className="text-2xl font-bold text-blue-700">Essential Digital Services</h3>
            <p className="text-blue-600">Perfect for businesses starting their digital journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {basicServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Advanced Services */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl mb-8"
          >
            <h3 className="text-2xl font-bold text-yellow-700">Growth & Marketing Services</h3>
            <p className="text-yellow-600">Advanced solutions to scale your business and increase sales</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} isAdvanced={true} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Every business is unique. Let's discuss your specific needs and create a tailored package.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all text-lg"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;