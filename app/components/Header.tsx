import { Button } from "~/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "~/hooks/useDarkMode";

interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <header className={`flex items-center justify-between pt-8 pb-4 ${className}`}>
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold tracking-tight">Composers.dev</span>
      </div>
      <div className="hidden md:block flex-grow"></div>
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 rounded-full px-6 transition-colors">
          Get started
        </Button>
      </div>
    </header>
  );
}