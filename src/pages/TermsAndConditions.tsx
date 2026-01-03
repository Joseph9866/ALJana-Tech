import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Shield, Users, Mail, Phone, MapPin } from 'lucide-react';

const TermsAndConditions = () => {
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
              <FileText className="w-4 h-4 mr-2" />
              Legal Information
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Terms &{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services or downloading our content.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 15, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8">
              By accessing and using ALJana Tech's website, services, or downloading our content, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Services Description</h2>
            <p className="text-gray-600 mb-4">
              ALJana Tech provides the following services:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Brand Identity Design & Strategy</li>
              <li>Personal Brand Strategy</li>
              <li>Digital Marketing Services</li>
              <li>Web Development & Design</li>
              <li>Cloud Computing & Integration</li>
              <li>Social Media Management</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Educational content and resources</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Content Downloads and Usage</h2>
            <p className="text-gray-600 mb-4">
              When you download our blogs, articles, or other content:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Content is provided for educational and informational purposes only</li>
              <li>You may not redistribute, sell, or commercially exploit our content without written permission</li>
              <li>You agree to provide accurate information when downloading content</li>
              <li>We may use your contact information to send relevant updates about our services</li>
              <li>You can unsubscribe from our communications at any time</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Collection and Privacy</h2>
            <p className="text-gray-600 mb-4">
              We collect and process personal information as described in our Privacy Policy. By using our services, you consent to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Collection of contact information for service delivery</li>
              <li>Use of cookies and tracking technologies for website improvement</li>
              <li>Communication regarding our services and industry insights</li>
              <li>Data processing in accordance with applicable privacy laws</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-8">
              All content, designs, logos, and materials created by ALJana Tech remain our intellectual property unless explicitly transferred to the client through a signed agreement. Client-specific work becomes the property of the client upon full payment completion.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Payment Terms</h2>
            <p className="text-gray-600 mb-8">
              Payment terms are specified in individual service agreements. Generally, we require a 50% deposit before project commencement and the remaining balance upon completion. Late payments may incur additional charges.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-8">
              ALJana Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Termination</h2>
            <p className="text-gray-600 mb-8">
              We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Governing Law</h2>
            <p className="text-gray-600 mb-8">
              These Terms shall be interpreted and governed by the laws of Kenya. Any disputes arising from these terms shall be resolved in the courts of Kenya.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Changes to Terms</h2>
            <p className="text-gray-600 mb-8">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms and Conditions, please contact us:
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

export default TermsAndConditions;