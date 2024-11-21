import * as React from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import { Tooltip } from '~/components/ui/tooltip';

const features = [
  {
    category: "Core Features",
    items: [
      {
        name: "Development Features",
        basic: true,
        pro: true,
        enterprise: true,
        tooltip: "Access to all core development features and components"
      },
      {
        name: "Authentication System",
        basic: true,
        pro: true,
        enterprise: true,
        tooltip: "Complete authentication system with multiple providers"
      },
      {
        name: "Database Integration",
        basic: true,
        pro: true,
        enterprise: true,
        tooltip: "Full database integration with Supabase"
      }
    ]
  },
  {
    category: "Advanced Features",
    items: [
      {
        name: "Payment Processing",
        basic: false,
        pro: true,
        enterprise: true,
        tooltip: "Stripe integration with subscription management"
      },
      {
        name: "AI Integration",
        basic: false,
        pro: true,
        enterprise: true,
        tooltip: "OpenAI API integration and AI features"
      },
      {
        name: "Priority Support",
        basic: false,
        pro: false,
        enterprise: true,
        tooltip: "24/7 priority support with dedicated team"
      }
    ]
  }
];

export function Comparison() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Compare Plans</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Choose the perfect plan for your needs
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6">Features</th>
                <th className="text-center py-4 px-6">Basic</th>
                <th className="text-center py-4 px-6">Pro</th>
                <th className="text-center py-4 px-6">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((category) => (
                <React.Fragment key={category.category}>
                  <tr className="bg-muted/50">
                    <td colSpan={4} className="py-3 px-6 font-medium">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature) => (
                    <tr key={feature.name} className="border-b border-border">
                      <td className="py-4 px-6 flex items-center gap-2">
                        {feature.name}
                        <Tooltip content={feature.tooltip}>
                          <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                        </Tooltip>
                      </td>
                      <td className="text-center py-4 px-6">
                        {feature.basic ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-6">
                        {feature.pro ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-6">
                        {feature.enterprise ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
} 