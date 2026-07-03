// src/components/layouts/DashboardLayout.tsx
import { Outlet } from 'react-router';
import { useAuth } from '../../features/auth/hooks/useAuth';

export function DashboardLayout() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Global Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-slate-900">Planivo</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600 hidden sm:block">
              {user?.email}
            </span>
            <button
              onClick={signOut}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}