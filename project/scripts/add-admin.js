import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

async function addAdmin() {
  console.log('\n=== Add New Admin User ===\n');

  const email = await question('Enter admin email: ');
  const password = await question('Enter password: ');
  const role = await question('Enter role (admin/super_admin) [admin]: ') || 'admin';

  if (!email || !password) {
    console.error('Email and password are required!');
    rl.close();
    process.exit(1);
  }

  if (!['admin', 'super_admin'].includes(role)) {
    console.error('Role must be either "admin" or "super_admin"');
    rl.close();
    process.exit(1);
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials. Make sure .env file exists.');
    rl.close();
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const passwordHash = hashPassword(password);

  const { data, error } = await supabase
    .from('admin_users')
    .insert({
      email,
      password_hash: passwordHash,
      role,
      is_active: true
    })
    .select();

  if (error) {
    console.error('\nError adding admin:', error.message);
    if (error.message.includes('duplicate')) {
      console.error('An admin with this email already exists.');
    }
  } else {
    console.log('\n✓ Admin user added successfully!');
    console.log('\nDetails:');
    console.log('  Email:', email);
    console.log('  Role:', role);
    console.log('  Password Hash:', passwordHash);
  }

  rl.close();
}

addAdmin().catch(console.error);
