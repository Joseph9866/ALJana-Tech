import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });

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
              <Shield className="w-4 h-4 mr-2" />
              Data Protection & Privacy
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Privacy{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 15, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="w-8 h-8 mr-3 text-primary-600" />
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Fill out contact forms or request quotes</li>
              <li>Subscribe to our newsletter</li>
              <li>Download our blogs, articles, or resources</li>
              <li>Engage with our services</li>
              <li>Communicate with us via email or phone</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Types of Information:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name</li>
              <li><strong>Project Information:</strong> Business requirements, project details, budget preferences</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
              <li><strong>Usage Information:</strong> Pages visited, time spent on site, download history</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 mr-3 text-secondary-600" />
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and fulfill your requests</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Send you newsletters and marketing communications (with your consent)</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="w-8 h-8 mr-3 text-primary-600" />
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
              <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve user experience and website functionality</li>
              <li>Provide personalized content and advertisements</li>
            </ul>
            <p className="text-gray-600 mb-8">
              You can control cookies through your browser settings, but disabling cookies may affect website functionality.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your information</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Objection:</strong> Object to processing of your information</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
            <p className="text-gray-600 mb-8">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. We will delete or anonymize your information when it is no longer needed.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. International Data Transfers</h2>
            <p className="text-gray-600 mb-8">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Children's Privacy</h2>
            <p className="text-gray-600 mb-8">
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-8">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">maingijulius001@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">+254 705 494 094</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;