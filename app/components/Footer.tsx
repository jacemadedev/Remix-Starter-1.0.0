export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-tight">Composers.dev</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</a>
            <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Composers.dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}