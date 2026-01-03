# Admin User Management

## Method 1: Using the Script (Recommended)

Run the interactive script to add a new admin:

```bash
npm run add-admin
```

The script will prompt you for:
- Email address
- Password
- Role (admin or super_admin)

## Method 2: Direct SQL Insert

You can also add admins directly in Supabase SQL Editor:

### Step 1: Generate Password Hash

Use this Node.js code to generate a password hash:

```javascript
const crypto = require('crypto');
const password = 'your-password-here';
const hash = crypto.createHash('sha256').update(password).digest('hex');
console.log(hash);
```

Or use an online SHA-256 hash generator.

### Step 2: Insert into Database

Run this SQL in your Supabase SQL Editor:

```sql
INSERT INTO admin_users (email, password_hash, role, is_active)
VALUES ('newadmin@example.com', 'YOUR_PASSWORD_HASH_HERE', 'admin', true);
```

## Method 3: Using Browser Console

Generate a password hash in your browser console:

```javascript
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  console.log('Password hash:', hash);
  return hash;
}

// Usage:
hashPassword('your-password-here');
```

Then use the hash in SQL as shown in Method 2.

## Roles

- `admin`: Regular admin access to manage content
- `super_admin`: Full admin access (for future features)

## Security Notes

- Never share password hashes
- Use strong passwords (min 8 characters, mix of letters, numbers, symbols)
- Passwords are hashed using SHA-256
- Keep your Supabase credentials secure
