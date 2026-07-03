// src/features/auth/components/ForgotPasswordForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '../../../lib/supabase/client';
import { Spinner } from '../../../components/ui/spinner';
import { Link } from 'react-router';

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const resetMutation = useMutation({
    mutationFn: async (credentials: ForgotPasswordValues) => {
      const { error } = await supabase.auth.resetPasswordForEmail(
        credentials.email,
        {
          redirectTo: `${window.location.origin}/reset-password`,
        }
      );
      if (error) throw error;
    },
    onSuccess: () => {
      setIsSuccess(true);
    },
    onError: (error: Error) => {
      setServerError(error.message);
    },
  });

  const onSubmit = (data: ForgotPasswordValues) => {
    setServerError(null);
    resetMutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
        <h3 className="text-lg font-medium text-slate-900 mb-2">Check your email</h3>
        <p className="text-slate-600 mb-6">
          We have sent a password reset link to your email address.
        </p>
        <Link
          to="/login"
          className="text-sm font-medium text-slate-900 hover:underline"
        >
          Return to login
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {serverError && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
            {serverError}
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={resetMutation.isPending}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {resetMutation.isPending ? (
            <Spinner className="w-5 h-5 text-white" />
          ) : (
            'Send reset link'
          )}
        </button>

        <div className="text-center mt-4">
          <Link
            to="/login"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
}