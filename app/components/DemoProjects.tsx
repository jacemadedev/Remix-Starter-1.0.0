import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ProjectCard } from "~/components/ProjectCard";
import { demoProjects } from "~/data";

export function DemoProjects() {
  return (
    <section className="py-24 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="w-full max-w-4xl mx-auto text-center mb-16">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-card-foreground">
                New templates available
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Composer Kits
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Commercial use included with all our premium templates and components
            </p>
            <div className="flex gap-3">
              <Button className="group flex items-center gap-2 px-8 h-14 text-lg font-medium bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-primary-foreground rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20 dark:hover:shadow-primary/20 transform hover:scale-105">
                Request early access
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="px-8 h-14 text-lg font-medium">
                View all kits
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {demoProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}