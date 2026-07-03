// src/app/providers/QueryProvider.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import type { ReactNode } from 'react';

interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  // We use useState to ensure the QueryClient is only initialized once per component lifecycle.
  // This is especially important if you ever implement Server-Side Rendering (SSR) later.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
            retry: 1, // Retry failed requests once by default
            refetchOnWindowFocus: false, // Prevents excessive refetching on tab switching
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}