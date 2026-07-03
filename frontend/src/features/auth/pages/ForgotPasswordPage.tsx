// src/features/auth/pages/ForgotPasswordPage.tsx
import { ForgotPasswordForm } from '../../auth/components/ForgotPasswordForm';

export function ForgotPasswordPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-slate-900 text-center mb-2">
        Reset your password
      </h2>
      <p className="text-slate-500 text-center text-sm mb-6">
        Enter your email address and we will send you a link to reset your password.
      </p>
      <ForgotPasswordForm />
    </div>
  );
}