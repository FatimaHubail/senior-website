const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-sm">UoB</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">University of Bahrain</p>
              <p className="text-xs text-muted-foreground">College of Information Technology</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Senior Project 2025/2026 — Semester 1
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © 2025 Phoneme Project. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
