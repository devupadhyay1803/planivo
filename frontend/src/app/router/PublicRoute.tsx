// src/app/router/PublicRoute.tsx
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { Spinner } from '../../components/ui/spinner';

export function PublicRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Spinner className="w-8 h-8 text-slate-400" />
      </div>
    );
  }

  // If the user IS already authenticated, redirect them to the dashboard.
  // We don't want them sitting on the login screen.
  if (user) {
    return <Navigate to="/" replace />;
  }

  // If the user is NOT authenticated, allow them to see the auth routes.
  return <Outlet />;
}