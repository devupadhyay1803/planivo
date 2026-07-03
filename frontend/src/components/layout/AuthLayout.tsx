// src/components/layouts/AuthLayout.tsx
import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        {/* Branding/Logo can go here in the future */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Planivo</h1>
          <p className="text-slate-500 mt-2">Enterprise Workforce Management</p>
        </div>

        {/* This is where the specific page (e.g. LoginPage) will be rendered */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}