import { useOutletContext } from '@remix-run/react';
import { SupabaseClient } from '@supabase/supabase-js';

type ContextType = {
  supabase: SupabaseClient | null;
};

export const useSupabase = () => {
  return useOutletContext<ContextType>();
}; 