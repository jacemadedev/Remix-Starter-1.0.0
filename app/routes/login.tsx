import { MetaFunction } from '@remix-run/node';
import { Auth } from '~/components/Auth';

export const meta: MetaFunction = () => {
  return [
    { title: 'Login - Composers.dev' },
    { 
      name: 'description', 
      content: 'Sign in to your Composers.dev account' 
    },
  ];
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome Back</h1>
        <Auth />
      </div>
    </div>
  );
} 