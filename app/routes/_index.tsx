import { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { DemoProjects } from "~/components/DemoProjects";
import { Pricing } from "~/components/Pricing";
import { Footer } from "~/components/Footer";
import { useDarkMode } from "~/hooks/useDarkMode";

export const meta: MetaFunction = () => {
  return [
    { title: "Composers.dev - Build Better Websites" },
    { name: "description", content: "Create modern, resilient user experiences with web fundamentals." },
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
        <div className="container mx-auto px-4 py-6">
          <Header />
          <Hero />
        </div>

        <DemoProjects />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}