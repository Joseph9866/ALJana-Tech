/*
  # Admin Panel Database Schema

  1. New Tables
    - `admin_users` - Admin authentication and roles
    - `projects` - Our work/portfolio projects
    - `case_studies` - Research case studies
    - `team_members` - Team member profiles
    - `testimonials` - Client testimonials
    - `blog_posts` - Blog articles and resources
    - `site_settings` - General website settings

  2. Security
    - Enable RLS on all tables
    - Admin-only access policies
    - Secure authentication flow
*/

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  created_at timestamptz DEFAULT now(),
  last_login timestamptz,
  is_active boolean DEFAULT true
);

-- Projects table (Our Work)
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  client text NOT NULL,
  category text NOT NULL,
  location text,
  year text,
  image_url text,
  description text,
  services jsonb DEFAULT '[]',
  results jsonb DEFAULT '[]',
  technologies jsonb DEFAULT '[]',
  project_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Case studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  duration text,
  image_url text,
  overview text,
  methodology text,
  key_findings jsonb DEFAULT '[]',
  statistics jsonb DEFAULT '[]',
  detailed_analysis jsonb DEFAULT '{}',
  conclusion text,
  recommendations jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  image_url text,
  skills jsonb DEFAULT '[]',
  social_links jsonb DEFAULT '{}',
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  role text,
  image_url text,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  testimonial_text text NOT NULL,
  project_title text,
  results jsonb DEFAULT '[]',
  category text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  author text NOT NULL,
  category text NOT NULL,
  image_url text,
  content text,
  download_url text,
  read_time text,
  featured boolean DEFAULT false,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Site settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key text UNIQUE NOT NULL,
  setting_value jsonb,
  description text,
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Admin policies - only authenticated admin users can access
CREATE POLICY "Admin users can manage admin_users"
  ON admin_users
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users WHERE is_active = true));

CREATE POLICY "Admin users can manage projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users WHERE is_active = true));

CREATE POLICY "Admin users can manage case_studies"
  ON case_studies
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users WHERE is_active = true));

CREATE POLICY "Admin users can manage team_members"
  ON team_members
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users WHERE is_active = true));

CREATE POLICY "Admin users can manage testimonials"
  ON testimonials
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users WHERE is_active = true));

CREATE POLICY "Admin users can manage blog_posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users WHERE is_active = true));

CREATE POLICY "Admin users can manage site_settings"
  ON site_settings
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users WHERE is_active = true));

-- Public read policies for published content
CREATE POLICY "Anyone can view published projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view case_studies"
  ON case_studies
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view active team_members"
  ON team_members
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Anyone can view testimonials"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view published blog_posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Anyone can view site_settings"
  ON site_settings
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert default admin user (you'll need to update this with your email)
INSERT INTO admin_users (email, role) VALUES ('maingijulius001@gmail.com', 'super_admin') ON CONFLICT DO NOTHING;

-- Insert default site settings
INSERT INTO site_settings (setting_key, setting_value, description) VALUES 
('company_info', '{"name": "ALJana Tech", "email": "maingijulius001@gmail.com", "phone": "+254 705 494 094", "location": "Nairobi, Kenya"}', 'Company contact information'),
('social_links', '{"instagram": "#", "facebook": "#", "twitter": "#", "linkedin": "#"}', 'Social media links'),
('hero_section', '{"title": "Transform Your Brand with Innovation", "subtitle": "Creative. Tech-Driven. Results-Focused.", "description": "We are ALJana Tech, a creative and tech-driven branding agency based in Nairobi. We transform businesses through innovative design, cutting-edge technology, and strategic thinking."}', 'Homepage hero section content')
ON CONFLICT (setting_key) DO NOTHING;