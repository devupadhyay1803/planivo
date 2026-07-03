// src/features/dashboard/pages/DashboardPage.tsx
import { useAuth } from '../../auth/hooks/useAuth';

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Welcome back!
        </h2>
        <p className="text-slate-500 mt-1">
          You are signed in as <span className="font-medium text-slate-700">{user?.email}</span>
        </p>
      </div>

      <div className="p-12 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-400">
        <p>Dashboard widgets and business modules will be implemented here.</p>
      </div>
    </div>
  );
}