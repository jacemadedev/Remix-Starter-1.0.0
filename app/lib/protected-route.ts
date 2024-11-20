import { redirect } from '@remix-run/node';
import { createServerClient } from '@supabase/auth-helpers-remix';

export async function protectRoute(request: Request) {
  const response = new Response();
  
  const supabaseClient = createServerClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
    { request, response }
  );

  const { data: { session } } = await supabaseClient.auth.getSession();

  if (!session) {
    throw redirect('/login', {
      headers: response.headers,
    });
  }

  return { session, headers: response.headers };
} 