import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  ArrowRight, 
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  DollarSign,
  Shield,
  Zap,
  Globe,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { useRealTimeData } from '../lib/useRealTimeData';

const CaseStudies = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [studiesRef, studiesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedStudy, setSelectedStudy] = useState(0);
  const { data: caseStudiesData } = useRealTimeData('case_studies');

  // Use database case studies if available, otherwise use fallback
  const caseStudies = useMemo(() => {
    if (caseStudiesData && caseStudiesData.length > 0) {
      return caseStudiesData;
    }

    // Fallback case studies
    return [
      {
        title: 'Cloud Computing vs Traditional Infrastructure: Cost Analysis Study',
        category: 'Cloud Computing Research',
        duration: '6-month study',
        image_url: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
        overview: 'Comprehensive analysis of 150 companies comparing cloud adoption costs versus traditional on-premise infrastructure over a 3-year period.',
        methodology: 'We analyzed financial data from 150 companies (75 cloud-first, 75 traditional infrastructure) across various industries including healthcare, finance, retail, and manufacturing.',
        key_findings: [
          'Companies using cloud infrastructure save an average of 23% on IT operational costs',
          'Cloud adoption reduces time-to-market for new products by 40%',
          'Traditional infrastructure requires 3x more IT staff for maintenance',
          'Cloud users experience 99.9% uptime vs 97.2% for traditional setups'
        ],
        statistics: [
          { metric: 'Cost Savings', value: '23%', description: 'Average reduction in IT operational costs', icon: DollarSign },
          { metric: 'Faster Deployment', value: '40%', description: 'Reduction in time-to-market', icon: Zap },
          { metric: 'Staff Efficiency', value: '3x', description: 'Less IT staff needed for maintenance', icon: Users },
          { metric: 'Uptime Improvement', value: '2.7%', description: 'Better system availability', icon: Shield }
        ],
        detailed_analysis: {
          costBreakdown: [
            { category: 'Hardware Costs', traditional: '$120,000', cloud: '$45,000', savings: '62%' },
            { category: 'Maintenance', traditional: '$80,000', cloud: '$25,000', savings: '69%' },
            { category: 'Staff Costs', traditional: '$200,000', cloud: '$75,000', savings: '62%' },
            { category: 'Energy Costs', traditional: '$35,000', cloud: '$8,000', savings: '77%' }
          ],
          industries: [
            { name: 'Healthcare', cloudAdoption: '78%', avgSavings: '28%' },
            { name: 'Finance', cloudAdoption: '85%', avgSavings: '31%' },
            { name: 'Retail', cloudAdoption: '72%', avgSavings: '25%' },
            { name: 'Manufacturing', cloudAdoption: '65%', avgSavings: '20%' }
          ]
        },
        conclusion: 'Cloud computing demonstrates clear financial and operational advantages, with most companies seeing ROI within 18 months of migration.',
        recommendations: [
          'Start with non-critical applications for cloud migration',
          'Invest in staff training for cloud technologies',
          'Implement proper cloud governance and cost monitoring',
          'Consider hybrid cloud solutions for sensitive data'
        ]
      },
      {
        title: 'Digital Marketing ROI: Traditional vs Digital Advertising Effectiveness',
        category: 'Digital Marketing Research',
        duration: '12-month study',
        image_url: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        overview: 'Analysis of advertising effectiveness across 200 businesses comparing traditional marketing channels with digital marketing strategies.',
        methodology: 'Tracked marketing spend and conversion rates across 200 businesses over 12 months, comparing traditional advertising (TV, radio, print) with digital channels (social media, search, email).',
        key_findings: [
          'Digital marketing generates 2.8x higher ROI than traditional advertising',
          'Social media advertising has the highest engagement rate at 3.2%',
          'Email marketing delivers the best ROI at 4200% return on investment',
          'Digital campaigns can be optimized in real-time, improving performance by 45%'
        ],
        statistics: [
          { metric: 'ROI Advantage', value: '2.8x', description: 'Higher returns from digital marketing', icon: TrendingUp },
          { metric: 'Email Marketing ROI', value: '4200%', description: 'Return on email marketing investment', icon: DollarSign },
          { metric: 'Real-time Optimization', value: '45%', description: 'Performance improvement capability', icon: BarChart3 },
          { metric: 'Targeting Precision', value: '85%', description: 'Accuracy in reaching target audience', icon: Users }
        ],
        detailed_analysis: {
          channelComparison: [
            { channel: 'Social Media Ads', avgROI: '320%', engagementRate: '3.2%', costPerLead: '$12' },
            { channel: 'Google Ads', avgROI: '280%', engagementRate: '2.8%', costPerLead: '$15' },
            { channel: 'Email Marketing', avgROI: '4200%', engagementRate: '18%', costPerLead: '$2' },
            { channel: 'Traditional TV', avgROI: '120%', engagementRate: '0.8%', costPerLead: '$45' },
            { channel: 'Print Advertising', avgROI: '95%', engagementRate: '0.3%', costPerLead: '$65' }
          ],
          industryPerformance: [
            { industry: 'E-commerce', digitalROI: '450%', traditionalROI: '150%' },
            { industry: 'Healthcare', digitalROI: '380%', traditionalROI: '180%' },
            { industry: 'Education', digitalROI: '520%', traditionalROI: '120%' },
            { industry: 'Real Estate', digitalROI: '340%', traditionalROI: '200%' }
          ]
        },
        conclusion: 'Digital marketing consistently outperforms traditional advertising across all metrics, offering better targeting, measurability, and cost-effectiveness.',
        recommendations: [
          'Allocate 70-80% of marketing budget to digital channels',
          'Implement comprehensive analytics and tracking systems',
          'Focus on email marketing for highest ROI',
          'Use A/B testing for continuous campaign optimization'
        ]
      },
    {
      title: 'Website Performance Impact: Loading Speed vs Conversion Rates Study',
      category: 'Web Development Research',
      duration: '8-month study',
      image_url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'Comprehensive analysis of how website loading speeds affect user behavior, conversion rates, and business revenue across 300 e-commerce websites.',
      methodology: 'Monitored 300 e-commerce websites with varying loading speeds, tracking user behavior, bounce rates, conversion rates, and revenue over 8 months.',
      key_findings: [
        'Every 1-second delay in page load time reduces conversions by 7%',
        'Websites loading in under 2 seconds have 15% higher conversion rates',
        '40% of users abandon websites that take more than 3 seconds to load',
        'Mobile users are 5x more likely to abandon slow-loading sites'
      ],
      statistics: [
        { metric: 'Conversion Impact', value: '7%', description: 'Reduction per second of delay', icon: TrendingUp },
        { metric: 'Optimal Load Time', value: '<2s', description: 'For maximum conversions', icon: Clock },
        { metric: 'Abandonment Rate', value: '40%', description: 'Users leaving after 3+ seconds', icon: AlertTriangle },
        { metric: 'Mobile Sensitivity', value: '5x', description: 'Higher abandonment on mobile', icon: Globe }
      ],
      detailed_analysis: {
        speedImpact: [
          { loadTime: '0-1 seconds', conversionRate: '25.6%', bounceRate: '15%', revenueImpact: '+35%' },
          { loadTime: '1-2 seconds', conversionRate: '22.1%', bounceRate: '22%', revenueImpact: '+18%' },
          { loadTime: '2-3 seconds', conversionRate: '18.7%', bounceRate: '35%', revenueImpact: 'Baseline' },
          { loadTime: '3-4 seconds', conversionRate: '15.2%', bounceRate: '45%', revenueImpact: '-12%' },
          { loadTime: '4+ seconds', conversionRate: '11.8%', bounceRate: '58%', revenueImpact: '-25%' }
        ],
        deviceComparison: [
          { device: 'Desktop', avgLoadTime: '2.1s', conversionRate: '20.3%', bounceRate: '28%' },
          { device: 'Mobile', avgLoadTime: '3.4s', conversionRate: '16.8%', bounceRate: '42%' },
          { device: 'Tablet', avgLoadTime: '2.8s', conversionRate: '18.5%', bounceRate: '35%' }
        ]
      },
      conclusion: 'Website speed is directly correlated with business success. Even small improvements in loading time can significantly impact revenue and user experience.',
      recommendations: [
        'Optimize images and use modern formats (WebP, AVIF)',
        'Implement content delivery networks (CDN)',
        'Minimize HTTP requests and use browser caching',
        'Prioritize mobile optimization for speed'
      ]
    },
    {
      title: 'Brand Identity Consistency: Impact on Customer Trust and Revenue',
      category: 'Brand Strategy Research',
      duration: '10-month study',
      image_url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'Research study analyzing the relationship between brand consistency across touchpoints and its impact on customer trust, loyalty, and revenue generation.',
      methodology: 'Evaluated 180 companies across different industries, measuring brand consistency scores and correlating them with customer trust metrics, retention rates, and revenue growth.',
      key_findings: [
        'Consistent brand presentation increases revenue by up to 23%',
        'Companies with strong brand consistency see 3.5x more brand visibility',
        'Brand-consistent companies have 1.9x higher customer retention rates',
        '90% of consumers expect consistent brand experience across all channels'
      ],
      statistics: [
        { metric: 'Revenue Increase', value: '23%', description: 'From consistent branding', icon: DollarSign },
        { metric: 'Brand Visibility', value: '3.5x', description: 'Higher visibility with consistency', icon: Globe },
        { metric: 'Customer Retention', value: '1.9x', description: 'Better retention rates', icon: Users },
        { metric: 'Consumer Expectation', value: '90%', description: 'Expect cross-channel consistency', icon: CheckCircle }
      ],
      detailed_analysis: {
        consistencyImpact: [
          { metric: 'Brand Recognition', consistent: '85%', inconsistent: '45%', improvement: '89%' },
          { metric: 'Customer Trust', consistent: '78%', inconsistent: '42%', improvement: '86%' },
          { metric: 'Purchase Intent', consistent: '71%', inconsistent: '38%', improvement: '87%' },
          { metric: 'Word-of-Mouth', consistent: '65%', inconsistent: '28%', improvement: '132%' }
        ],
        industryAnalysis: [
          { industry: 'Technology', consistencyScore: '82%', revenueGrowth: '28%' },
          { industry: 'Healthcare', consistencyScore: '75%', revenueGrowth: '22%' },
          { industry: 'Retail', consistencyScore: '78%', revenueGrowth: '25%' },
          { industry: 'Financial', consistencyScore: '88%', revenueGrowth: '31%' }
        ]
      },
      conclusion: 'Brand consistency is a critical driver of business success, directly impacting customer perception, trust, and ultimately revenue generation.',
      recommendations: [
        'Develop comprehensive brand guidelines and enforce them',
        'Regular brand audits across all touchpoints',
        'Train all staff on brand standards and values',
        'Invest in brand management tools and systems'
      ]
    }
  ];
  }, [caseStudiesData]);

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
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium mb-8">
              <Briefcase className="w-4 h-4 mr-2" />
              Data-Driven Research & Analysis
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Research{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive research studies that analyze the impact and effectiveness of different 
              technology solutions and digital strategies. Each study is backed by real data, extensive analysis, 
              and actionable insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Study Navigation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setSelectedStudy(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 text-sm ${
                  selectedStudy === index
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {study.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Study */}
      <section ref={studiesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={selectedStudy}
            initial={{ opacity: 0, y: 50 }}
            animate={studiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Study Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                {caseStudies[selectedStudy].category} • {caseStudies[selectedStudy].duration}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {caseStudies[selectedStudy].title}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {caseStudies[selectedStudy].overview}
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {caseStudies[selectedStudy].statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{stat.metric}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Study Details */}
              <div>
                {/* Methodology */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <BarChart3 className="w-6 h-6 mr-3 text-primary-600" />
                    Methodology
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {caseStudies[selectedStudy].methodology}
                  </p>
                </div>

                {/* Key Findings */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-secondary-600" />
                    Key Findings
                  </h3>
                  <div className="space-y-4">
                    {caseStudies[selectedStudy].key_findings.map((finding, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{finding}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-primary-600" />
                    Recommendations
                  </h3>
                  <ul className="space-y-3">
                    {caseStudies[selectedStudy].recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Detailed Analysis */}
              <div>
                <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <PieChart className="w-6 h-6 mr-3 text-accent-600" />
                    Detailed Analysis
                  </h3>
                  
                  {/* Render different analysis based on study type */}
                  {caseStudies[selectedStudy].detailed_analysis.costBreakdown && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Cost Breakdown Analysis</h4>
                      <div className="space-y-3">
                        {caseStudies[selectedStudy].detailed_analysis.costBreakdown.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium text-gray-700">{item.category}</span>
                            <div className="text-right">
                              <div className="text-sm text-gray-600">
                                Traditional: {item.traditional} → Cloud: {item.cloud}
                              </div>
                              <div className="text-green-600 font-semibold">{item.savings} savings</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {caseStudies[selectedStudy].detailed_analysis.channelComparison && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Channel Performance Comparison</h4>
                      <div className="space-y-3">
                        {caseStudies[selectedStudy].detailed_analysis.channelComparison.map((channel, index) => (
                          <div key={index} className="p-4 bg-gray-50 rounded-lg">
                            <div className="font-medium text-gray-900 mb-2">{channel.channel}</div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="text-gray-600">ROI: </span>
                                <span className="font-semibold text-secondary-600">{channel.avgROI}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Engagement: </span>
                                <span className="font-semibold text-primary-600">{channel.engagementRate}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Cost/Lead: </span>
                                <span className="font-semibold text-primary-600">{channel.costPerLead}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {caseStudies[selectedStudy].detailed_analysis.speedImpact && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Speed Impact Analysis</h4>
                      <div className="space-y-3">
                        {caseStudies[selectedStudy].detailed_analysis.speedImpact.map((speed, index) => (
                          <div key={index} className="p-4 bg-gray-50 rounded-lg">
                            <div className="font-medium text-gray-900 mb-2">{speed.loadTime}</div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-600">Conversion: </span>
                                <span className="font-semibold text-secondary-600">{speed.conversionRate}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Revenue Impact: </span>
                                <span className={`font-semibold ${speed.revenueImpact.includes('+') ? 'text-secondary-600' : speed.revenueImpact.includes('-') ? 'text-red-600' : 'text-gray-600'}`}>
                                  {speed.revenueImpact}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-gradient-to-r from-primary-100 to-secondary-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Study Conclusion</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudies[selectedStudy].conclusion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Apply These{' '}
              <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Insights?
              </span>
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              Let our research-backed strategies help transform your business. Contact us to discuss 
              how these findings can be applied to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-500 text-gray-900 font-semibold rounded-xl hover:from-accent-500 hover:to-accent-600 transition-all duration-300"
              >
                Get Strategic Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Our Services
                <LineChart className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudies;