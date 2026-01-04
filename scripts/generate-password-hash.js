// Helper script to generate SHA-256 password hashes for admin users
// Run this with: node scripts/generate-password-hash.js

const crypto = require('crypto');

const passwords = {
  'josekeam01@gmail.com': 'Josejk9866:@AT',
  'maingijulius001@gmail.com': 'Maingi01:@AT'
};

console.log('Password Hashes for Admin Users:\n');

Object.entries(passwords).forEach(([email, password]) => {
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  console.log(`Hash: ${hash}`);
  console.log('---');
});
