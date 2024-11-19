import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "~/components/ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  highlighted = false,
}) => (
  <div
    className={`rounded-lg ${
      highlighted ? 'bg-card shadow-lg ring-2 ring-blue-600 dark:ring-primary' : 'bg-muted/50'
    } p-8 flex flex-col`}
  >
    <div className="mb-8">
      <h3 className={`text-xl font-semibold mb-2 ${highlighted ? 'text-primary' : 'text-primary'}`}>
        {name}
      </h3>
      <div className="text-[2.5rem] font-bold text-foreground mb-2">
        {price}
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
    <div className="flex-grow space-y-4 mb-8">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-3">
          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
          <span className="text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>
    <Button
      className={`w-full ${
        highlighted
          ? 'bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary/90'
          : 'bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary/90'
      } text-white dark:text-primary-foreground rounded-md h-12 text-base font-medium`}
    >
      {name === "Enterprise" ? "Contact Sales" : "Get Started"}
    </Button>
  </div>
);