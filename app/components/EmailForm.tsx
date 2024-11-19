import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <form 
        onSubmit={handleSubmit}
        className="group flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-card shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]"
      >
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-14 px-6 text-lg border-none bg-transparent focus:ring-0 focus:outline-none placeholder:text-muted-foreground"
          required
        />
        <Button
          type="submit"
          className={`w-full sm:w-auto h-14 px-8 text-lg font-medium bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-primary-foreground rounded-xl transition-all duration-300 transform hover:scale-105 ${
            isSubmitting ? 'animate-pulse' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce"></div>
            </div>
          ) : (
            <span className="flex items-center gap-2">
              I want to get it
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          )}
        </Button>
      </form>
      <div className="flex justify-center">
        <div className="mt-4 px-4 py-1.5 text-sm font-medium text-green-500 bg-green-500/20 dark:bg-green-500/10 rounded-full">
          33 people joined today!
        </div>
      </div>
    </div>
  );
};