import { createClient } from 'npm:@supabase/supabase-js@2.55.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const url = new URL(req.url);
    const path = url.pathname;

    // TEST ENDPOINT - DELETE THIS AFTER DEBUGGING
    if (path.endsWith('/test') && req.method === 'POST') {
      const { password } = await req.json();
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      
      return new Response(
        JSON.stringify({ inputPassword: password, computedHash: hash }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (path.endsWith('/login') && req.method === 'POST') {
      const { email, password } = await req.json();

      console.log('Login attempt for email:', email);

      if (!email || !password) {
        return new Response(
          JSON.stringify({ error: 'Email and password are required' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      const { data: admin, error } = await supabase
        .from('admin_users')
        .select('id, email, role, is_active, password_hash')
        .eq('email', email)
        .eq('is_active', true)
        .maybeSingle();

      console.log('Admin lookup error:', error);
      console.log('Admin found:', !!admin);
      if (admin) console.log('Admin data:', { id: admin.id, email: admin.email, password_hash: admin.password_hash });

      if (error || !admin) {
        return new Response(
          JSON.stringify({ error: 'Invalid credentials - user not found', details: { error: error?.message, adminFound: !!admin } }),
          {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const passwordHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

      console.log('Provided password:', password);
      console.log('Computed hash:', passwordHash);
      console.log('Stored hash:', admin.password_hash);
      console.log('Match:', passwordHash === admin.password_hash);

      if (passwordHash !== admin.password_hash) {
        return new Response(
          JSON.stringify({ error: 'Invalid credentials', debug: { provided: passwordHash, stored: admin.password_hash } }),
          {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      await supabase
        .from('admin_users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', admin.id);

      const sessionToken = btoa(JSON.stringify({
        id: admin.id,
        email: admin.email,
        role: admin.role,
        exp: Date.now() + (24 * 60 * 60 * 1000)
      }));

      return new Response(
        JSON.stringify({
          success: true,
          admin: {
            id: admin.id,
            email: admin.email,
            role: admin.role,
          },
          token: sessionToken,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (path.endsWith('/verify') && req.method === 'POST') {
      const { token } = await req.json();

      if (!token) {
        return new Response(
          JSON.stringify({ error: 'Token is required' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      try {
        const decoded = JSON.parse(atob(token));
        
        if (decoded.exp < Date.now()) {
          return new Response(
            JSON.stringify({ error: 'Token expired' }),
            {
              status: 401,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            }
          );
        }

        return new Response(
          JSON.stringify({
            success: true,
            admin: {
              id: decoded.id,
              email: decoded.email,
              role: decoded.role,
            },
          }),
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      } catch {
        return new Response(
          JSON.stringify({ error: 'Invalid token' }),
          {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }
    }

    return new Response(
      JSON.stringify({ error: 'Not found' }),
      {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
