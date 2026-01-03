import { createClient } from 'npm:@supabase/supabase-js@2.55.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

function verifyToken(token: string): any {
  try {
    const decoded = JSON.parse(atob(token));
    if (decoded.exp < Date.now()) {
      throw new Error('Token expired');
    }
    return decoded;
  } catch {
    throw new Error('Invalid token');
  }
}

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

    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const token = authHeader.replace('Bearer ', '');
    verifyToken(token);

    const url = new URL(req.url);
    const pathParts = url.pathname.split('/').filter(p => p);
    const contentType = pathParts[1];
    const id = pathParts[2];

    const validTypes = ['team_members', 'testimonials', 'projects', 'case_studies', 'blog_posts'];
    if (!validTypes.includes(contentType)) {
      return new Response(
        JSON.stringify({ error: 'Invalid content type' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (req.method === 'GET') {
      if (id) {
        const { data, error } = await supabase
          .from(contentType)
          .select('*')
          .eq('id', id)
          .maybeSingle();

        if (error) throw error;

        return new Response(
          JSON.stringify({ data }),
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      } else {
        const { data, error } = await supabase
          .from(contentType)
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        return new Response(
          JSON.stringify({ data }),
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }
    }

    if (req.method === 'POST') {
      const body = await req.json();
      
      const { data, error } = await supabase
        .from(contentType)
        .insert(body)
        .select()
        .single();

      if (error) throw error;

      return new Response(
        JSON.stringify({ data }),
        {
          status: 201,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (req.method === 'PUT' && id) {
      const body = await req.json();
      
      const { data, error } = await supabase
        .from(contentType)
        .update(body)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      return new Response(
        JSON.stringify({ data }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (req.method === 'DELETE' && id) {
      const { error } = await supabase
        .from(contentType)
        .delete()
        .eq('id', id);

      if (error) throw error;

      return new Response(
        JSON.stringify({ success: true }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
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