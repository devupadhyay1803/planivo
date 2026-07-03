// src/config/env.ts
import { z } from 'zod';

const envSchema = z.object({
  VITE_SUPABASE_URL: z.string().url('https://esqwtdlpqhqmoejnlslp.supabase.co'),
  VITE_SUPABASE_ANON_KEY: z.string().min(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzcXd0ZGxwcWhxbW9lam5sc2xwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzA2NDcwNiwiZXhwIjoyMDk4NjQwNzA2fQ.VgTdgOHNXsR6IxQpXaxwI-CwOHqATs9ASUqkr9AxJKQ'),
});

// We parse `import.meta.env` which is Vite's way of exposing environment variables.
const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error(
    '❌ Invalid environment variables:',
    parsedEnv.error.flatten().fieldErrors
  );
  throw new Error('Invalid environment variables. Check the console for details.');
}

export const env = parsedEnv.data;