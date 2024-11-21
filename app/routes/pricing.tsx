import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { protectRoute } from '~/lib/protected-route';
import { PricingHeader } from '~/components/pricing/PricingHeader';
import { Pricing } from '~/components/Pricing';
import { Features } from '~/components/pricing/Features';
import { Comparison } from '~/components/pricing/Comparison';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { TechStack } from '~/components/pricing/TechStack';

export const loader: LoaderFunction = async ({ request }) => {
  const { session, headers } = await protectRoute(request);
  return json({ session }, { headers });
};

export default function PricingPage() {
  const { session } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PricingHeader />

      {/* Pricing Cards */}
      <section className="py-20">
        <Pricing />
      </section>

      {/* Features Section */}
      <Features />

      {/* Comparison Table */}
      <Comparison />

      {/* Tech Stack */}
      <TechStack />

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-600/20 dark:from-primary/20 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers building better applications with our templates.
          </p>
          <Button 
            size="lg"
            className="h-12 px-8 text-lg bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary/90"
          >
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Regular Updates • Discord Community
          </p>
        </div>
      </section>
    </div>
  );
} 