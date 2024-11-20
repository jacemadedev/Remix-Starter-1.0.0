import { Sparkles } from 'lucide-react';

export function PricingHeader() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 dark:from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:6rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-20" />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-border bg-card text-sm font-medium text-card-foreground">
          <Sparkles className="w-4 h-4 mr-2 text-blue-600 dark:text-primary" />
          Special Launch Pricing
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Choose Your Perfect Plan
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get started with our production-ready templates and build your next project faster. 
          All plans include lifetime access and free updates.
        </p>

        {/* Pricing Toggle or Additional Info */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <span>Regular Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <span>Discord Community</span>
          </div>
        </div>
      </div>
    </section>
  );
} 