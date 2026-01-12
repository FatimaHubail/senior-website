const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}UOB_LOGO.png`}
                alt="University of Bahrain Logo"
                className="w-full h-full object-contain"
              />
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
