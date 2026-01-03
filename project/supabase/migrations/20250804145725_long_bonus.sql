/*
  # Newsletter and Blog Subscribers Schema

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `name` (text, optional)
      - `subscribed_at` (timestamp)
      - `is_active` (boolean, default true)
    
    - `blog_downloads`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `blog_title` (text)
      - `blog_id` (text)
      - `downloaded_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public insert access (for forms)
    - Add policies for authenticated admin access (for management)
*/

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

-- Blog downloads tracking table
CREATE TABLE IF NOT EXISTS blog_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  blog_title text NOT NULL,
  blog_id text NOT NULL,
  downloaded_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_downloads ENABLE ROW LEVEL SECURITY;

-- Newsletter subscribers policies
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view all newsletter subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Blog downloads policies
CREATE POLICY "Anyone can submit blog download request"
  ON blog_downloads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view all blog downloads"
  ON blog_downloads
  FOR SELECT
  TO authenticated
  USING (true);