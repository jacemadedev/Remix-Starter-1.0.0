import { Check } from 'lucide-react';

const features = [
  {
    category: "Development",
    items: [
      "Modern React patterns and best practices",
      "Type-safe API calls with TypeScript",
      "Responsive layouts with Tailwind CSS",
      "Component-driven development with Storybook",
    ]
  },
  {
    category: "Authentication & Security",
    items: [
      "Authentication and user management",
      "Role-based access control",
      "Protected API routes",
      "Security best practices implementation",
    ]
  },
  {
    category: "Backend Integration",
    items: [
      "Database integration with Supabase",
      "RESTful API endpoints",
      "Real-time subscriptions",
      "File storage and CDN setup",
    ]
  }
];

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Everything You Need</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Built with modern tools and best practices to help you ship faster
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((category) => (
            <div key={category.category} className="bg-card rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-600/10 dark:bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-blue-600 dark:text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 