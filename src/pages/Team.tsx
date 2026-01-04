import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Users,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Palette,
  Target,
  Zap
} from 'lucide-react';
import { useRealTimeData } from '../lib/useRealTimeData';

const Team = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { data: teamData, isLoading, error } = useRealTimeData('team_members', { column: 'is_active', value: true });

  // Sort and format the data
  const teamMembers = useMemo(() => {
    return teamData
      .sort((a, b) => a.order_index - b.order_index)
      .map((member: any) => ({
        name: member.name,
        role: member.role,
        bio: member.bio || '',
        image: member.image_url || '',
        skills: member.skills || [],
        social: member.social_links || { linkedin: '#', twitter: '#', email: '' }
      }));
  }, [teamData]);

  const getSkillIcon = (skill: string) => {
    if (skill.includes('Design') || skill.includes('Brand')) return Palette;
    if (skill.includes('Development') || skill.includes('Cloud')) return Code;
    if (skill.includes('Marketing') || skill.includes('SEO')) return Target;
    return Zap;
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
              <Users className="w-4 h-4 mr-2" />
              Meet Our Amazing Team
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              The{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                People
              </span>{' '}
              Behind ALJana Tech
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our diverse team of creative professionals, strategists, and technologists work together 
              to bring your vision to life. Get to know the people who make the magic happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={teamRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          ) : teamMembers.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No team members found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                animate={teamInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-purple-600 to-green-500 p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => {
                      const SkillIcon = getSkillIcon(skill);
                      return (
                        <div
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs font-medium"
                        >
                          <SkillIcon className="w-3 h-3 mr-1" />
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center text-white hover:from-primary-700 hover:to-primary-800 transition-all duration-200 transform hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white hover:from-primary-600 hover:to-primary-700 transition-all duration-200 transform hover:scale-110"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center text-white hover:from-secondary-600 hover:to-secondary-700 transition-all duration-200 transform hover:scale-110"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our{' '}
                <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  Culture
                </span>
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                We believe in fostering a collaborative, creative, and inclusive environment where 
                every team member can thrive and contribute their unique talents.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Innovation First</h3>
                    <p className="text-primary-200">We encourage creative thinking and bold ideas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Team Collaboration</h3>
                    <p className="text-primary-200">Together we achieve more than we ever could alone</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">100%</div>
                <div className="text-primary-200">Remote Friendly</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-2">24/7</div>
                <div className="text-primary-200">Support Culture</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">∞</div>
                <div className="text-primary-200">Learning Opportunities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">1</div>
                <div className="text-primary-200">Team, One Vision</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;