/*
  # Add password hash column to admin_users

  1. Changes
    - Add `password_hash` column to store hashed passwords
    - Update existing admin user with hashed password for 'admin123'
    
  2. Security
    - Password is hashed using SHA-256
*/

-- Add password_hash column
ALTER TABLE admin_users ADD COLUMN IF NOT EXISTS password_hash text;

-- Hash for 'admin123' password (SHA-256)
UPDATE admin_users 
SET password_hash = '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9'
WHERE email = 'admin@example.com';
