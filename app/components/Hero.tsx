import { ArrowUpRight } from "lucide-react";
import { JobCard } from "~/components/JobCard";
import { EmailForm } from "~/components/EmailForm";
import { leftJobCards, rightJobCards } from "~/data";

export function Hero() {
  return (
    <div className="flex justify-between items-start gap-8 mb-24">
      {/* Left Job Cards */}
      <div className="hidden lg:flex flex-col gap-5 w-80">
        {leftJobCards.map((card, index) => (
          <JobCard key={index} {...card} index={index} position="left" />
        ))}
      </div>

      {/* Center Content */}
      <div className="flex-1 max-w-2xl mx-auto text-center">
        {/* Product Hunt Badge */}
        <div className="flex justify-center gap-3 mb-16">
          <button className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-card-foreground hover:bg-muted transition-colors">
            Product Hunt
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>
          <button className="inline-flex items-center px-4 py-1.5 rounded-full bg-muted text-sm font-medium text-muted-foreground hover:bg-muted/80 transition-colors">
            Beta phase access
          </button>
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8">
          The easiest way to develop in bolt
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12">
          #1 Composers.dev & Cursor Boilerplates
        </p>

        <EmailForm />

        {/* Modern Tech Stacks Section */}
        <div>
          <p className="text-sm text-muted-foreground mb-8">Modern Tech Stacks</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['Vite', 'Remix', 'Shadcn', 'React', 'Vercel'].map((tech) => (
              <div key={tech} className="text-lg text-muted-foreground font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Job Cards */}
      <div className="hidden lg:flex flex-col gap-5 w-80">
        {rightJobCards.map((card, index) => (
          <JobCard key={index} {...card} index={index} position="right" />
        ))}
      </div>
    </div>
  );
}