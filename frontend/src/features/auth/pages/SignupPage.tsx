// src/features/auth/pages/SignupPage.tsx
import { SignupForm } from '../components/SignupForm';

export function SignupPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-slate-900 text-center mb-6">
        Create an account
      </h2>
      <SignupForm />
    </div>
  );
}