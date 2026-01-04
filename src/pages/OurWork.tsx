import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  ExternalLink, 
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  //Monitor,
  Palette,
  Code,
  Search,
  Target,
  Cloud,
  Sparkles
} from 'lucide-react';
import { useRealTimeData } from '../lib/useRealTimeData';

const OurWork = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { data: projectsData } = useRealTimeData('projects');

  const categories = ['All', 'Brand Identity', 'Web Development', 'Digital Marketing', 'Cloud Solutions', 'E-commerce'];

  // Use database projects if available, otherwise use fallback
  const projects = useMemo(() => {
    if (projectsData && projectsData.length > 0) {
      return projectsData;
    }

    // Fallback projects
    return [
      {
        id: 1,
        title: 'TechHub Kenya Brand Transformation',
        category: 'Brand Identity',
        client: 'TechHub Kenya',
        location: 'Nairobi, Kenya',
        year: '2024',
        image_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Complete brand identity redesign for Kenya\'s leading tech incubator, including logo, visual identity, and brand guidelines.',
        services: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
        results: [
          '85% increase in brand recognition',
          '200% increase in startup applications',
          '150% growth in investor inquiries'
        ],
        technologies: ['Adobe Creative Suite', 'Figma', 'Brand Guidelines'],
        project_url: '#',
        featured: true
      },
      {
        id: 2,
        title: 'ACK Guest House Booking System',
        category: 'Web Development',
        client: 'ACK Guest House Nyeri',
        location: 'Nyeri, Kenya',
        year: '2024',
        image_url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Modern booking system and website redesign for a leading hospitality business in Central Kenya.',
        services: ['Web Development', 'Booking System', 'SEO Optimization', 'Mobile Optimization'],
        results: [
          '190% increase in direct bookings',
          '250% improvement in search rankings',
          '170% increase in user engagement'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        project_url: '#',
        featured: true
      },
      {
        id: 3,
        title: 'EcoFarm Initiative Digital Campaign',
        category: 'Digital Marketing',
        client: 'EcoFarm Initiative',
        location: 'Kenya',
        year: '2024',
        image_url: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Comprehensive digital marketing campaign to connect with farmers across Kenya and promote sustainable farming practices.',
        services: ['Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Analytics'],
        results: [
          '300% increase in social engagement',
          '250% increase in farmer enrollment',
          '400% increase in website traffic'
        ],
        technologies: ['Facebook Ads', 'Google Analytics', 'Mailchimp', 'Hootsuite'],
        project_url: '#',
        featured: false
      },
      
      {
        id: 6,
        title: 'Nairobi Medical Center Digital Transformation',
        category: 'Cloud Solutions',
        client: 'Nairobi Medical Center',
        location: 'Nairobi, Kenya',
        year: '2023',
        image_url: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Complete digital transformation including patient portal, appointment system, and cloud infrastructure.',
        services: ['Cloud Migration', 'Patient Portal', 'Appointment System', 'Data Security'],
        results: [
          '200% increase in online appointments',
        '150% improvement in patient satisfaction',
        '180% increase in new patient registrations'
      ],
      technologies: ['AWS', 'React', 'Node.js', 'PostgreSQL'],
      project_url: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Green Energy Solutions Brand Identity',
      category: 'Brand Identity',
      client: 'Green Energy Solutions',
      location: 'Mombasa, Kenya',
      year: '2023',
      image_url: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sustainable energy company brand identity reflecting innovation and environmental consciousness.',
      services: ['Brand Strategy', 'Logo Design', 'Marketing Materials', 'Website Design'],
      results: [
        '120% increase in brand awareness',
        '180% increase in lead generation',
        '90% improvement in brand perception'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'WordPress'],
      project_url: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Startup Accelerator Digital Marketing',
      category: 'Digital Marketing',
      client: 'Innovation Hub',
      location: 'Kisumu, Kenya',
      year: '2023',
      image_url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Digital marketing strategy to attract startups and investors to Western Kenya\'s innovation ecosystem.',
      services: ['Digital Strategy', 'Content Marketing', 'SEO', 'Social Media Management'],
      results: [
        '250% increase in startup applications',
        '300% growth in social media engagement',
        '180% increase in investor interest'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'SEMrush', 'Buffer'],
      project_url: '#',
      featured: false
    }
    ];
  }, [projectsData]);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getServiceIcon = (service: string) => {
    if (service.includes('Brand') || service.includes('Logo') || service.includes('Identity')) return Palette;
    if (service.includes('Web') || service.includes('Development')) return Code;
    if (service.includes('Marketing') || service.includes('Social')) return Target;
    if (service.includes('SEO') || service.includes('Search')) return Search;
    if (service.includes('Cloud') || service.includes('System')) return Cloud;
    if (service.includes('E-commerce') || service.includes('Booking')) return Smartphone;
    return Sparkles;
  };

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
              <Briefcase className="w-4 h-4 mr-2" />
              Portfolio & Success Stories
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects across Kenya and beyond. From brand transformations 
              to digital solutions, see how we've helped businesses achieve remarkable growth and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 text-sm ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600">Our most impactful and transformative work</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <a
                      href={project.project_url}
                      className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center text-white hover:from-primary-700 hover:to-secondary-600 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-primary-600 font-medium mb-4">{project.client}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Services Provided</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => {
                        const ServiceIcon = getServiceIcon(service);
                        return (
                          <div
                            key={serviceIndex}
                            className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                          >
                            <ServiceIcon className="w-3 h-3 mr-1" />
                            {service}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-secondary-600" />
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full mr-3"></div>
                          {result}
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

      {/* All Projects Grid */}
      <section ref={portfolioRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              All{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our complete portfolio of successful projects and transformations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                animate={portfolioInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
                    {project.category}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-3 h-3 mr-1" />
                      {project.location}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">{project.client}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description.slice(0, 120)}...
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="w-2 h-2 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full"
                        ></div>
                      ))}
                    </div>
                    <a
                      href={project.project_url}
                      className="inline-flex items-center text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that showcase the success of our collaborative efforts with clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">40+</div>
              <div className="text-gray-700 font-medium">Happy Clients</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-accent-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">Countries Served</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
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
              Ready to Create Your{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              Let's work together to transform your business and achieve remarkable results. 
              Your success story could be our next featured project.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-500 text-gray-900 font-semibold rounded-xl hover:from-accent-500 hover:to-accent-600 transition-all duration-300"
            >
              Start Your Project
              <ExternalLink className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurWork;