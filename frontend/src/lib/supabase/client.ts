// src/lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js';
import { env } from '../../config/env';

// Initialize the Supabase client with validated environment variables
export const supabase = createClient(
  env.VITE_SUPABASE_URL,
  env.VITE_SUPABASE_ANON_KEY
);