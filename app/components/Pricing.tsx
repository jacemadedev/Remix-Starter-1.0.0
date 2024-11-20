import { Button } from './ui/button';
import { Check, Sparkles } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Basic',
    price: '$49',
    description: 'Perfect for side projects and small applications',
    features: [
      'All core features',
      'Authentication system',
      'Database integration',
      'Basic support',
      'Free updates'
    ],
    highlighted: false,
    badge: null
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'Best for professional developers and teams',
    features: [
      'Everything in Basic',
      'AI integration',
      'Payment processing',
      'Priority support',
      'Advanced features'
    ],
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale applications and custom needs',
    features: [
      'Everything in Pro',
      'Custom development',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee'
    ],
    highlighted: false,
    badge: 'Custom'
  }
];

export function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl p-8 transition-all duration-300 ${
              plan.highlighted 
                ? 'bg-card shadow-lg ring-2 ring-blue-600 dark:ring-primary transform-gpu' 
                : 'bg-muted/50 hover:scale-105'
            } ${hoveredPlan && hoveredPlan !== plan.name ? 'opacity-75' : ''}`}
            onMouseEnter={() => setHoveredPlan(plan.name)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            {plan.badge && (
              <div className="absolute -top-3 right-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white dark:bg-primary dark:text-primary-foreground">
                  {plan.badge === 'Most Popular' && <Sparkles className="w-3 h-3 mr-1" />}
                  {plan.badge}
                </div>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-end gap-2 mb-2">
                <div className="text-4xl font-bold">{plan.price}</div>
                {plan.price !== 'Custom' && <div className="text-muted-foreground mb-1">/project</div>}
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-blue-600/10 dark:bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-blue-600 dark:text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className={`w-full ${
                plan.highlighted
                  ? 'bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary/90'
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary/90'
              } text-white dark:text-primary-foreground h-12 text-base`}
            >
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          All plans include: Regular Updates • Discord Community
        </p>
      </div>
    </div>
  );
}