import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Palette, 
  PenTool, 
  ArrowRight, 
  Zap, 
  Target, 
  Sparkles,
  Code,
  Cloud,
  Search
} from 'lucide-react';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    {
      icon: PenTool,
      title: 'Brand Identity',
      description: 'Complete brand systems that tell your story and connect with your audience through compelling visual narratives.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-primary-600 to-primary-700'
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that deliver measurable results and drive sustainable business growth.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers with seamless user experiences.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-secondary-600 to-secondary-700'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud solutions that grow with your business and optimize your operational efficiency.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-primary-700 to-primary-800'
    },
    {
      icon: Sparkles,
      title: 'Social Media',
      description: 'Engaging social media presence that builds communities and drives meaningful customer engagement.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Improve your online visibility and drive organic traffic with strategic search engine optimization.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-primary-600 to-primary-700'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={heroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-100 to-accent-200 text-accent-800 rounded-full text-sm font-medium mb-8"
              >
                <Zap className="w-4 h-4 mr-2" />
                Creative. Tech-Driven. Results-Focused.
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Transform Your{' '}
                <span className="bg-gradient-to-r from-primary-900 via-secondary-600 to-accent-500 bg-clip-text text-transparent">
                  Brand
                </span>{' '}
                with Innovation
              </h1>

              <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                We're ALJana Tech, a creative and tech-driven branding agency based in Nairobi.
                We transform businesses through innovative design, cutting-edge technology, and strategic thinking.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-primary-900 text-primary-900 font-semibold rounded-xl hover:bg-primary-900 hover:text-white transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={heroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-8">
                {services.slice(0, 4).map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ y: 50, opacity: 0 }}
                    animate={heroInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 0,
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform overflow-hidden cursor-pointer ${
                      index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                    } hover:rotate-0 group`}
                  >
                    {/* Service Image */}
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-900 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description.slice(0, 80)}...
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core{' '}
              <span className="bg-gradient-to-r from-primary-900 to-secondary-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From brand identity to cloud computing, we offer comprehensive solutions
              that drive your business forward in the digital age.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-900 font-medium hover:text-primary-800 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={ctaInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                Business?
              </span>
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              Let's discuss your project and create something extraordinary together.
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;