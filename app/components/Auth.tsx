import { useState } from 'react';
import { useNavigate } from '@remix-run/react';
import { useSupabase } from '~/hooks/useSupabase';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Auth() {
  const navigate = useNavigate();
  const { supabase } = useSupabase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!supabase) {
    return null; // or loading indicator
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      navigate('/pricing');
    }
    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
    } else {
      navigate('/pricing');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <form className="space-y-4" onSubmit={handleSignIn}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={loading}
            className="flex-1"
          >
            {loading ? 'Loading...' : 'Sign In'}
          </Button>
          <Button
            type="button"
            onClick={handleSignUp}
            disabled={loading}
            variant="outline"
            className="flex-1"
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </Button>
        </div>
      </form>
    </div>
  );
} 