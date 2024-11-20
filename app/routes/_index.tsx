import { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { DemoProjects } from "~/components/DemoProjects";
import { Footer } from "~/components/Footer";
import { useDarkMode } from "~/hooks/useDarkMode";

export const meta: MetaFunction = () => {
  return [
    { title: "Composers.dev - Build Better Websites with Modern Boilerplates" },
    { 
      name: "description", 
      content: "Create modern, resilient web applications with our professional boilerplates. Featuring React, TypeScript, Tailwind CSS, and more. Get started quickly with our battle-tested templates." 
    },
    { 
      property: "og:title", 
      content: "Composers.dev - Build Better Websites with Modern Boilerplates" 
    },
    { 
      property: "og:description", 
      content: "Create modern, resilient web applications with our professional boilerplates. Featuring React, TypeScript, Tailwind CSS, and more. Get started quickly with our battle-tested templates." 
    },
  ];
};

export default function HomePage() {
  const { isDark } = useDarkMode();

  return (
    <div className={`min-h-screen w-full bg-background text-foreground ${isDark ? 'dark' : ''}`}>
      {/* Grid Background with Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-transparent dark:from-background dark:via-background">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:100px_100px] opacity-20">
        </div>
      </div>
      
      <div className="relative">
        <div className="container mx-auto px-4">
          <Header />
          <div className="h-[90vh] flex items-center justify-center">
            <Hero />
          </div>
        </div>

        <DemoProjects />
        <Footer />
      </div>
    </div>
  );
}