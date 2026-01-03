import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  location?: string;
  year?: string;
  image_url?: string;
  description: string;
  services: string[];
  results: string[];
  technologies: string[];
  project_url?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  duration?: string;
  image_url?: string;
  overview: string;
  methodology: string;
  key_findings: string[];
  statistics: Array<{
    metric: string;
    value: string;
    description: string;
    icon: string;
  }>;
  detailed_analysis: Record<string, any>;
  conclusion: string;
  recommendations: string[];
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image_url?: string;
  skills: string[];
  social_links: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  company: string;
  role?: string;
  image_url?: string;
  rating: number;
  testimonial_text: string;
  project_title?: string;
  results: string[];
  category?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  author: string;
  category: string;
  image_url?: string;
  content?: string;
  download_url?: string;
  read_time?: string;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface SiteSetting {
  id: string;
  setting_key: string;
  setting_value: any;
  description?: string;
  updated_at: string;
}