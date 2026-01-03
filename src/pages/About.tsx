import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Award,
  Zap,
  Globe,
  Heart,
  Rocket
} from 'lucide-react';

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver exceptional results.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every project is a labor of love. We pour our hearts into creating meaningful brand experiences.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership. Your success is our success.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never settle for good enough. Excellence is our standard, not our goal.',
      color: 'from-primary-500 to-primary-600'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed', icon: Rocket },
    { number: '90+', label: 'Transformed brands', icon: Users },
    { number: '13+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Client Satisfaction', icon: Heart }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="py-24 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={heroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium mb-8">
                <Globe className="w-4 h-4 mr-2" />
                Creative & Tech-Driven Agency
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                We Are{' '}
                <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                  ALJana Tech
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A creative and tech-driven branding agency based in Nairobi, Kenya. We specialize in 
                transforming businesses through innovative design, strategic thinking, and cutting-edge technology.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Our mission is simple: to help brands tell their stories in ways that resonate, 
                inspire, and drive meaningful connections with their audiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={heroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-500 p-1 rounded-3xl">
                <div className="bg-white p-8 rounded-3xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">Strategic</h3>
                      <p className="text-sm text-gray-600">Data-driven approach</p>
                    </div>
                    <div className="text-center">
                      <Zap className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">Innovative</h3>
                      <p className="text-sm text-gray-600">Cutting-edge solutions</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">Collaborative</h3>
                      <p className="text-sm text-gray-600">Partnership focused</p>
                    </div>
                    <div className="text-center">
                      <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
                      <p className="text-sm text-gray-600">Quality guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={valuesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={statsInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <stat.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              "To empower businesses with innovative design and technology solutions that 
              create meaningful connections, drive growth, and transform brands into 
              powerful forces for positive change."
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;