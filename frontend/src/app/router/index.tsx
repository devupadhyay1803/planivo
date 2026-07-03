// src/app/router/index.tsx
import { Routes, Route, Navigate } from 'react-router';

// Layouts
import { AuthLayout } from '../../components/layout/AuthLayout';
import { DashboardLayout } from '../../components/layout/DashboardLayout';

// Guards
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

// Pages
import { LoginPage } from '../../features/auth/pages/LoginPage';
import { ForgotPasswordPage } from '../../features/auth/pages/ForgotPasswordPage';
import { ResetPasswordPage } from '../../features/auth/pages/ResetPasswordPage';
import { SignupPage } from '../../features/auth/pages/SignupPage'; // <-- Added this!
import { DashboardPage } from '../../features/dashboard/pages/DashboardPage';

export function AppRouter() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} /> {/* <-- Added this! */}
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>
      </Route>
        {/* Reset Password */}
    <Route
        path="/reset-password"
        element={<ResetPasswordPage />}
    />
      {/* PROTECTED ROUTES */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </Route>

      {/* CATCH-ALL ROUTE */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}