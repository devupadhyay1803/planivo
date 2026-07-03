// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Make sure this matches your existing global CSS file name (sometimes App.css or globals.css)
import { App } from './app/App';
import { QueryProvider } from './app/providers';
import { AuthProvider } from './features/auth/context/AuthProvider';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </StrictMode>
);