import { useState } from 'react';
import { useNavigate } from '@remix-run/react';
import { useSupabase } from '~/hooks/useSupabase';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const EmailForm = () => {
  const navigate = useNavigate();
  const { supabase } = useSupabase();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!supabase) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Check if user is already logged in
      const { data: { session: existingSession } } = await supabase.auth.getSession();
      
      if (existingSession) {
        setSuccess(true);
        navigate('/pricing');
        return;
      }

      // Try to sign in first
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password: email,
      });

      if (signInError && signInError.message.includes('Invalid login credentials')) {
        // If sign in fails, try to sign up
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email,
          password: email,
          options: {
            emailRedirectTo: `${window.location.origin}/pricing`
          }
        });

        if (signUpError) {
          // If user exists, try signing in again
          const { error: finalSignInError } = await supabase.auth.signInWithPassword({
            email,
            password: email,
          });

          if (finalSignInError) {
            setError('Unable to sign in. Please try again.');
          } else {
            setSuccess(true);
            navigate('/pricing');
          }
        } else {
          setSuccess(true);
          navigate('/pricing');
        }
      } else if (signInData.session) {
        setSuccess(true);
        navigate('/pricing');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          type="email"
          placeholder="Enter your email..."
          className="h-14 pl-6 pr-32 rounded-full bg-card"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <Button
          type="submit"
          className="absolute right-2 top-2 h-10 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white dark:text-white"
          disabled={loading}
        >
          {loading ? (
            'Loading...'
          ) : (
            <>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      {error && (
        <p className="mt-2 text-sm text-red-500 text-center">
          {error}
        </p>
      )}
      
      {success && (
        <div className="mt-2 text-sm text-green-500 text-center">
          Success! Redirecting to pricing...
        </div>
      )}

      <div className="flex justify-center">
        <div className="mt-4 px-4 py-1.5 text-sm font-medium text-green-500 bg-green-500/20 dark:bg-green-500/10 rounded-full">
          33 people joined today!
        </div>
      </div>
    </div>
  );
};