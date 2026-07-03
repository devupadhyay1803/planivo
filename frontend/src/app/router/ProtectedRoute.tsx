// src/app/router/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { Spinner } from '../../components/ui/spinner';

export function ProtectedRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Spinner className="w-8 h-8 text-slate-400" />
      </div>
    );
  }

  // If the user is not authenticated, redirect them to the login page.
  // The 'replace' prop ensures they don't get stuck in a redirect loop if they hit the back button.
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If the user IS authenticated, render the child routes (e.g., DashboardLayout).
  return <Outlet />;
}