import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import {
  BarChart3,
  Users,
  FileText,
  Briefcase,
  MessageSquare,
  BookOpen,
  Settings,
  LogOut,
  Plus
} from 'lucide-react';
import ContentManager from '../../components/admin/ContentManager';

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState({
    projects: 0,
    caseStudies: 0,
    teamMembers: 0,
    testimonials: 0,
    blogPosts: 0,
    newsletterSubscribers: 0
  });
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    loadStats();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('adminToken');
    const userStr = localStorage.getItem('adminUser');

    if (!token || !userStr) {
      navigate('/admin/login');
      return;
    }

    try {
      const userData = JSON.parse(userStr);
      setUser(userData);
    } catch {
      navigate('/admin/login');
    }
  };

  const loadStats = async () => {
    try {
      const [
        { count: projects },
        { count: caseStudies },
        { count: teamMembers },
        { count: testimonials },
        { count: blogPosts },
        { count: newsletterSubscribers }
      ] = await Promise.all([
        supabase.from('projects').select('*', { count: 'exact', head: true }),
        supabase.from('case_studies').select('*', { count: 'exact', head: true }),
        supabase.from('team_members').select('*', { count: 'exact', head: true }),
        supabase.from('testimonials').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true })
      ]);

      setStats({
        projects: projects || 0,
        caseStudies: caseStudies || 0,
        teamMembers: teamMembers || 0,
        testimonials: testimonials || 0,
        blogPosts: blogPosts || 0,
        newsletterSubscribers: newsletterSubscribers || 0
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const statCards = [
    { title: 'Projects', count: stats.projects, icon: Briefcase, color: 'from-blue-500 to-blue-600' },
    { title: 'Case Studies', count: stats.caseStudies, icon: BarChart3, color: 'from-green-500 to-green-600' },
    { title: 'Team Members', count: stats.teamMembers, icon: Users, color: 'from-purple-500 to-purple-600' },
    { title: 'Testimonials', count: stats.testimonials, icon: MessageSquare, color: 'from-yellow-500 to-yellow-600' },
    { title: 'Blog Posts', count: stats.blogPosts, icon: BookOpen, color: 'from-pink-500 to-pink-600' },
    { title: 'Subscribers', count: stats.newsletterSubscribers, icon: FileText, color: 'from-indigo-500 to-indigo-600' }
  ];

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'projects', label: 'Our Work', icon: Briefcase },
    { id: 'case-studies', label: 'Case Studies', icon: FileText },
    { id: 'team', label: 'Team Members', icon: Users },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'blogs', label: 'Blog Posts', icon: BookOpen },
  ];

  const contentFields = {
    projects: [
      { name: 'title', label: 'Title', type: 'text' as const, required: true },
      { name: 'client', label: 'Client', type: 'text' as const, required: true },
      { name: 'category', label: 'Category', type: 'text' as const, required: true },
      { name: 'description', label: 'Description', type: 'textarea' as const, required: true },
      { name: 'image_url', label: 'Image URL', type: 'url' as const, required: true },
      { name: 'project_url', label: 'Project URL', type: 'url' as const },
      { name: 'location', label: 'Location', type: 'text' as const },
      { name: 'year', label: 'Year', type: 'text' as const },
      { name: 'featured', label: 'Featured', type: 'checkbox' as const },
    ],
    'case_studies': [
      { name: 'title', label: 'Title', type: 'text' as const, required: true },
      { name: 'category', label: 'Category', type: 'text' as const, required: true },
      { name: 'duration', label: 'Duration', type: 'text' as const },
      { name: 'image_url', label: 'Image URL', type: 'url' as const, required: true },
      { name: 'overview', label: 'Overview', type: 'textarea' as const, required: true },
      { name: 'methodology', label: 'Methodology', type: 'textarea' as const, required: true },
      { name: 'conclusion', label: 'Conclusion', type: 'textarea' as const },
    ],
    team_members: [
      { name: 'name', label: 'Name', type: 'text' as const, required: true },
      { name: 'role', label: 'Role', type: 'text' as const, required: true },
      { name: 'bio', label: 'Bio', type: 'textarea' as const },
      { name: 'image_url', label: 'Image URL', type: 'url' as const, required: true },
      { name: 'order_index', label: 'Display Order', type: 'number' as const },
      { name: 'is_active', label: 'Active', type: 'checkbox' as const },
    ],
    testimonials: [
      { name: 'client_name', label: 'Client Name', type: 'text' as const, required: true },
      { name: 'company', label: 'Company', type: 'text' as const, required: true },
      { name: 'role', label: 'Role', type: 'text' as const },
      { name: 'testimonial_text', label: 'Testimonial', type: 'textarea' as const, required: true },
      { name: 'image_url', label: 'Image URL', type: 'url' as const },
      { name: 'rating', label: 'Rating (1-5)', type: 'number' as const },
      { name: 'project_title', label: 'Project Title', type: 'text' as const },
      { name: 'category', label: 'Category', type: 'text' as const },
      { name: 'featured', label: 'Featured', type: 'checkbox' as const },
    ],
    blog_posts: [
      { name: 'title', label: 'Title', type: 'text' as const, required: true },
      { name: 'slug', label: 'Slug', type: 'text' as const, required: true },
      { name: 'author', label: 'Author', type: 'text' as const, required: true },
      { name: 'category', label: 'Category', type: 'text' as const, required: true },
      { name: 'excerpt', label: 'Excerpt', type: 'textarea' as const },
      { name: 'content', label: 'Content', type: 'textarea' as const, required: true },
      { name: 'image_url', label: 'Image URL', type: 'url' as const, required: true },
      { name: 'download_url', label: 'Download URL', type: 'url' as const },
      { name: 'read_time', label: 'Read Time', type: 'text' as const },
      { name: 'featured', label: 'Featured', type: 'checkbox' as const },
      { name: 'published', label: 'Published', type: 'checkbox' as const },
    ],
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img
                src="/Images/Aljana logo.png"
                alt="ALJana Tech"
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-sm p-6">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {statCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{card.title}</p>
                          <p className="text-3xl font-bold text-gray-900">{card.count}</p>
                        </div>
                        <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center`}>
                          <card.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {menuItems.slice(1).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className="flex items-center space-x-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Manage {item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <ContentManager
                contentType="projects"
                title="Manage Projects"
                fields={contentFields.projects}
              />
            )}

            {activeTab === 'case-studies' && (
              <ContentManager
                contentType="case_studies"
                title="Manage Case Studies"
                fields={contentFields.case_studies}
              />
            )}

            {activeTab === 'team' && (
              <ContentManager
                contentType="team_members"
                title="Manage Team Members"
                fields={contentFields.team_members}
              />
            )}

            {activeTab === 'testimonials' && (
              <ContentManager
                contentType="testimonials"
                title="Manage Testimonials"
                fields={contentFields.testimonials}
              />
            )}

            {activeTab === 'blogs' && (
              <ContentManager
                contentType="blog_posts"
                title="Manage Blog Posts"
                fields={contentFields.blog_posts}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
