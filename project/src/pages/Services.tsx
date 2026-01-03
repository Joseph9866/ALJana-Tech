import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  PenTool, 
  Target, 
  Code, 
  Cloud, 
  Sparkles, 
  Search,
  User,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      icon: PenTool,
      title: 'Brand Identity, Design & Strategy',
      description: 'Complete brand systems that tell your story and connect with your audience.',
      features: [
        'Logo Design & Brand Guidelines',
        'Visual Identity Systems',
        'Brand Strategy & Positioning',
        'Print & Digital Collateral',
        'Brand Audits & Refreshes'
      ],
      color: 'from-primary-600 to-primary-700',
      bgColor: 'from-primary-50 to-primary-100'
    },
    {
      icon: User,
      title: 'Personal Brand Strategy',
      description: 'Build a powerful personal brand that opens doors and creates opportunities.',
      features: [
        'Personal Brand Audit',
        'LinkedIn Profile Optimization',
        'Content Strategy Development',
        'Professional Photography Direction',
        'Thought Leadership Positioning'
      ],
      color: 'from-secondary-600 to-secondary-700',
      bgColor: 'from-secondary-50 to-secondary-100'
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that deliver measurable results.',
      features: [
        'Digital Marketing Strategy',
        'Content Marketing',
        'Email Marketing Campaigns',
        'PPC Advertising Management',
        'Analytics & Performance Tracking'
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100'
    },
    {
      icon: Code,
      title: 'Web Development & Design',
      description: 'Modern, responsive websites that convert visitors into customers.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Mobile-First Design',
        'CMS Integration',
        'Website Maintenance & Support'
      ],
      color: 'from-secondary-600 to-secondary-700',
      bgColor: 'from-secondary-50 to-secondary-100'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing & Integration',
      description: 'Scalable cloud solutions that grow with your business.',
      features: [
        'Cloud Migration Services',
        'AWS/Azure/GCP Setup',
        'Cloud Architecture Design',
        'DevOps Implementation',
        'Cloud Security & Monitoring'
      ],
      color: 'from-primary-700 to-primary-800',
      bgColor: 'from-primary-50 to-primary-100'
    },
    {
      icon: Sparkles,
      title: 'Social Media Management',
      description: 'Engaging social media presence that builds communities and drives engagement.',
      features: [
        'Social Media Strategy',
        'Content Creation & Curation',
        'Community Management',
        'Influencer Partnerships',
        'Social Media Advertising'
      ],
      color: 'from-primary-600 to-primary-700',
      bgColor: 'from-primary-50 to-primary-100'
    },
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Improve your online visibility and drive organic traffic to your website.',
      features: [
        'Technical SEO Audits',
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Link Building Campaigns',
        'Local SEO Services'
      ],
      color: 'from-secondary-600 to-secondary-700',
      bgColor: 'from-secondary-50 to-secondary-100'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-100 to-accent-200 text-accent-800 rounded-full text-sm font-medium mb-8">
              <Target className="w-4 h-4 mr-2" />
              Comprehensive Digital Solutions
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-900 via-secondary-600 to-accent-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From brand identity to cloud computing, we offer comprehensive solutions that transform 
              your business and drive sustainable growth in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-900 to-secondary-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business, goals, and challenges' },
              { step: '02', title: 'Strategy', description: 'Developing a comprehensive plan tailored to your needs' },
              { step: '03', title: 'Execution', description: 'Bringing the strategy to life with precision and creativity' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and performance monitoring' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-900 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
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
              Ready to Get{' '}
              <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                Started?
              </span>
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              Let's discuss your project and create a customized solution that drives results for your business.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;