// src/features/auth/pages/LoginPage.tsx
import { LoginForm } from '../../auth/components/LoginForm';

export function LoginPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-slate-900 text-center mb-6">
        Sign in to your account
      </h2>
      <LoginForm />
    </div>
  );
}