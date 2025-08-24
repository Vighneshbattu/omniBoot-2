import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Kumar Sweets & Snacks',
      location: 'Indore, MP',
      rating: 5,
      image: '👨‍💼',
      quote: 'OmniBoost doubled our Diwali sales! The WhatsApp automation handles 80% of our orders now. Best investment we made for our business.',
      results: '+150% Festival Sales'
    },
    {
      name: 'Priya Sharma',
      business: 'Elegant Boutique',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      image: '👩‍💼',
      quote: 'Instagram presence helped us reach customers across the city. The website gets us 20+ inquiries daily. Amazing team to work with!',
      results: '+300% Online Inquiries'
    },
    {
      name: 'Dr. Amit Patel',
      business: 'Patel Family Clinic',
      location: 'Surat, Gujarat',
      rating: 5,
      image: '👨‍⚕️',
      quote: 'Patient appointment booking became so easy. No more phone calls during consultation hours. Patients love the convenience!',
      results: '70% Less Manual Work'
    },
    {
      name: 'Sunita Devi',
      business: 'Home Tiffin Service',
      location: 'Patna, Bihar',
      rating: 5,
      image: '👩‍🍳',
      quote: 'Started with just 10 customers, now serving 200+ families! The social media posts and WhatsApp system made everything professional.',
      results: '+2000% Business Growth'
    }
  ];

  const stats = [
    {
      number: 100,
      label: 'Businesses Digitally Transformed',
      suffix: '+'
    },
    {
      number: 250,
      label: 'Average % Increase in Customer Inquiries',
      suffix: '%'
    },
    {
      number: 95,
      label: 'Client Satisfaction Rate',
      suffix: '%'
    },
    {
      number: 7,
      label: 'Days Average Setup Time',
      suffix: ''
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real businesses, real results. See how OmniBoost helped small businesses across India grow digitally
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 text-blue-200" size={24} />
              
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium">{testimonial.business}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              <p className="text-gray-700 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center">
                <TrendingUp className="text-green-600 mr-2" size={16} />
                <span className="text-green-700 font-semibold text-sm">{testimonial.results}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact in Numbers</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2}
                      delay={index * 0.2}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-8">Trusted by businesses across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">
              Kumar Sweets
            </div>
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">
              Elegant Boutique
            </div>
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">
              Patel Clinic
            </div>
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">
              City Coaching
            </div>
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">
              Fresh Tiffin
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-green-100 mb-6 text-lg">
              Get the same results for your business. Start your digital transformation today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all text-lg"
            >
              Book Your Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;