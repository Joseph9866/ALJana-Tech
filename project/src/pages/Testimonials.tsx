import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Quote,
  Award,
  TrendingUp,
  Users
} from 'lucide-react';

const Testimonials = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Wanjiku',
      company: 'TechHub Kenya',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'ALJana Tech completely transformed our brand identity. Their understanding of the tech ecosystem and ability to translate our vision into a compelling brand story was exceptional. The new identity has significantly improved our market position and investor confidence.',
      project: 'Complete Brand Transformation',
      results: ['85% increase in brand recognition', '200% increase in investor inquiries', '150% increase in startup applications'],
      category: 'Brand Identity'
    },
    {
      name: 'Michael Ochieng',
      company: 'EcoFarm Initiative',
      role: 'Program Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The digital marketing campaign created by ALJana Tech exceeded all our expectations. Their strategic approach to social media and content marketing helped us reach farmers across Kenya and significantly increased program enrollment. The results speak for themselves.',
      project: 'Digital Marketing Campaign',
      results: ['300% increase in social engagement', '250% increase in farmer enrollment', '400% increase in website traffic'],
      category: 'Digital Marketing'
    },
    {
      name: 'Grace Nyong\'o',
      company: 'Nairobi Fashion Week',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with ALJana Tech was a dream come true. They captured the essence of African fashion and created a brand identity that truly represents our vision. The website and digital platform they built has attracted international attention and elevated our event to new heights.',
      project: 'Event Branding & Digital Platform',
      results: ['180% increase in international visitors', '220% increase in designer applications', '160% increase in ticket sales'],
      category: 'Branding & Web Development'
    },
    {
      name: 'Rev. David Kimani',
      company: 'ACK Guest House Nyeri',
      role: 'General Manager',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The new website and booking system developed by ALJana Tech has revolutionized our business. We\'ve seen a dramatic increase in direct bookings and our online presence has improved significantly. Their attention to detail and understanding of the hospitality industry was impressive.',
      project: 'Website Development & Booking System',
      results: ['190% increase in direct bookings', '250% improvement in search rankings', '170% increase in user engagement'],
      category: 'Web Development'
    },
    {
      name: 'Amina Hassan',
      company: 'Kilifi Artisan Collective',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'ALJana Tech helped us build a strong online presence that showcases our artisans\' work beautifully. Their social media strategy and e-commerce platform have opened up new markets for our products. We\'ve gone from local sales to international orders.',
      project: 'E-commerce Platform & Social Media Strategy',
      results: ['300% increase in online sales', '500% growth in social media following', '150% increase in international orders'],
      category: 'E-commerce & Social Media'
    },
    {
      name: 'Dr. James Mwangi',
      company: 'Nairobi Medical Center',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The digital transformation of our medical center by ALJana Tech has improved patient experience significantly. The new appointment system, patient portal, and digital marketing strategy have modernized our operations and attracted new patients.',
      project: 'Healthcare Digital Transformation',
      results: ['200% increase in online appointments', '150% improvement in patient satisfaction', '180% increase in new patient registrations'],
      category: 'Healthcare Technology'
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // 8 seconds per testimonial for comfortable reading
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="py-24 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-green-100 text-purple-700 rounded-full text-sm font-medium mb-8">
              <Award className="w-4 h-4 mr-2" />
              Success Stories & Client Feedback
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Transformed{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                Brands
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across Kenya and beyond achieve remarkable transformations. 
              These are the stories of brands that dared to dream bigger and achieved extraordinary results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Testimonial Slider */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Testimonial Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-accent-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {currentTestimonial.category}
                  </span>
                </div>

                <div className="relative mb-8">
                  <Quote className="w-12 h-12 text-primary-200 absolute -top-4 -left-2" />
                  <p className="text-2xl text-gray-700 leading-relaxed pl-8 italic">
                    {currentTestimonial.text}
                  </p>
                </div>

                <div className="flex items-center mb-8">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</div>
                    <div className="text-primary-600 font-medium">{currentTestimonial.role}</div>
                    <div className="text-gray-600">{currentTestimonial.company}</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-secondary-600" />
                    Project: {currentTestimonial.project}
                  </h4>
                  <ul className="space-y-2">
                    {currentTestimonial.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual Elements */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-500 p-1 rounded-3xl">
                  <div className="bg-white p-8 rounded-3xl">
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Client Success</h3>
                      <p className="text-gray-600">Measurable Results</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-primary-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-primary-600">100%</div>
                        <div className="text-sm text-gray-600">Satisfaction Rate</div>
                      </div>
                      <div className="text-center bg-secondary-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-secondary-600">6+</div>
                        <div className="text-sm text-gray-600">Success Stories</div>
                      </div>
                      <div className="text-center bg-accent-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-accent-600">200%</div>
                        <div className="text-sm text-gray-600">Avg. Growth</div>
                      </div>
                      <div className="text-center bg-primary-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-primary-600">24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 space-x-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white hover:from-primary-700 hover:to-primary-800 transition-all duration-200 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-full flex items-center justify-center text-white hover:from-secondary-700 hover:to-secondary-800 transition-all duration-200 transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Testimonial {currentIndex + 1} of {testimonials.length} • Auto-advancing every 8 seconds
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to transforming brands and delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">75+</div>
              <div className="text-gray-600 font-medium">Brands Transformed</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">200%</div>
              <div className="text-gray-600 font-medium">Average Growth</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5.0</div>
              <div className="text-gray-600 font-medium">Client Rating</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Success Stories?
              </span>
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              Let's create your transformation story. Our team is ready to help you achieve 
              the same remarkable results as our other clients.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-500 text-gray-900 font-semibold rounded-xl hover:from-accent-500 hover:to-accent-600 transition-all duration-300"
            >
              Start Your Transformation
              <TrendingUp className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;