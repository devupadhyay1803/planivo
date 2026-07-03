// src/features/auth/pages/ResetPasswordPage.tsx
import { ResetPasswordForm } from '../../auth/components/ResetPasswordForm';

export function ResetPasswordPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-slate-900 text-center mb-2">
        Create new password
      </h2>
      <p className="text-slate-500 text-center text-sm mb-6">
        Please enter and confirm your new password below.
      </p>
      <ResetPasswordForm />
    </div>
  );
}