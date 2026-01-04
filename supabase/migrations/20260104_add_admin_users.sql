/*
  # Add admin users: josekeam01@gmail.com and maingijulius001@gmail.com

  1. Changes
    - Add two new admin users to admin_users table
    - Both set as super_admin role
    - Password hashes generated for provided passwords
*/

-- Insert the two admin users with custom passwords
-- Password for josekeam01@gmail.com: Josejk9866:@AT
-- Password for maingijulius001@gmail.com: Maingi01:@AT
INSERT INTO admin_users (email, role, password_hash, is_active) 
VALUES 
  ('josekeam01@gmail.com', 'super_admin', '60c1943fdf6bbf5aee19ea1b6b11c20736dd65c27d25a477f5a504ab4ebd1723', true),
  ('maingijulius001@gmail.com', 'super_admin', 'b2f160299db3df5e2dd39f0a64d421708f38674a3632b9d1f6f4184249287009', true)
ON CONFLICT (email) DO NOTHING;
