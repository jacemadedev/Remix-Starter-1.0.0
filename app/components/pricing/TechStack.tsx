import { Badge } from "~/components/ui/badge";

const technologies = [
  {
    category: "Development Tools",
    items: [
      { name: "Cursor IDE", description: "Advanced Edits", status: "Paid: $20/m" },
      { name: "v0 by Vercel", description: "React Components", status: "Freemium" },
      { name: "Bolt by Stackblitz", description: "Scaffolding", status: "Freemium" },
    ]
  },
  {
    category: "Core Framework",
    items: [
      { name: "Vite", description: "Framework", status: "Free" },
      { name: "Next.js", description: "Framework", status: "Free" },
      { name: "Typescript", description: "Clean Codebase", status: "Free" },
    ]
  },
  {
    category: "UI & Styling",
    items: [
      { name: "Tailwind CSS", description: "Styling", status: "Free" },
      { name: "Shadcn", description: "Build Components", status: "Free" },
      { name: "Framer", description: "Website", status: "Paid: $10/m" },
    ]
  },
  {
    category: "Backend & Infrastructure",
    items: [
      { name: "Supabase", description: "Auth & Database", status: "Freemium" },
      { name: "Stripe", description: "Collecting Payments", status: "Freemium" },
      { name: "Mailgun", description: "Automated Emails", status: "Pay as you go" },
    ]
  },
  {
    category: "AI Integration",
    items: [
      { name: "ChatGPT", description: "AI Assistant", status: "Completed" },
      { name: "Claude API", description: "AI Integration", status: "Pay as you go" },
    ]
  },
  {
    category: "Deployment",
    items: [
      { name: "Vercel", description: "Hosting", status: "Coming Soon" },
      { name: "Netlify", description: "Alternative Hosting", status: "Completed" },
    ]
  }
];

export function TechStack() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with the best tools in the industry to ensure scalability and maintainability
          </p>
        </div>

        <div className="grid gap-8">
          {technologies.map((category) => (
            <div key={category.category} className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-start justify-between p-4 rounded-lg border border-border bg-background/50"
                  >
                    <div>
                      <h4 className="font-medium mb-1">{tech.name}</h4>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                    <Badge 
                      variant={
                        tech.status === "Free" ? "default" :
                        tech.status === "Freemium" ? "secondary" :
                        tech.status.includes("Paid") ? "destructive" :
                        tech.status === "Coming Soon" ? "outline" :
                        "default"
                      }
                      className="ml-2 whitespace-nowrap"
                    >
                      {tech.status}
                    </Badge>
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