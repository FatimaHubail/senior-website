import { Mic, Brain, Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32">
      {/* Enhanced Background decoration with gradient mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-success/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,transparent_0%,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="section-container text-center relative z-10 max-w-5xl">
        {/* Enhanced University Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-secondary-foreground/10 text-secondary-foreground text-sm font-medium mb-10 animate-fade-in shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span>Final Year Senior Project 2025/2026</span>
          <Sparkles className="w-3.5 h-3.5 text-success" />
        </div>

        {/* Enhanced Main Title with better typography */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            <span className="gradient-text block">Phoneme</span>
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-highlight to-success rounded-full mx-auto mt-4" />
        </div>

        {/* Enhanced Subtitle */}
        <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-serif mb-6 font-semibold animate-slide-up" style={{ animationDelay: "0.1s" }}>
          AI-Powered Stammer Therapy for Children
        </p>

        {/* Enhanced Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Empowering young voices through intelligent, compassionate speech therapy — 
          helping children overcome stammering with personalized AI assistance.
        </p>

        {/* Enhanced Feature Cards with hover effects */}
        <div className="flex flex-wrap justify-center gap-5 mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-card">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mic className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">Speech Recognition</span>
          </div>
          <div className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-highlight/30 hover:bg-card">
            <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center group-hover:bg-highlight/20 transition-colors">
              <Brain className="w-5 h-5 text-highlight" />
            </div>
            <span className="text-sm font-semibold text-foreground">AI Analysis</span>
          </div>
          <div className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-success/30 hover:bg-card">
            <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
              <Heart className="w-5 h-5 text-success" />
            </div>
            <span className="text-sm font-semibold text-foreground">Child-Friendly</span>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <a 
          href="#abstract" 
          className="inline-flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 animate-float group"
          aria-label="Scroll to abstract section"
        >
          <span className="text-sm font-medium group-hover:translate-y-1 transition-transform">Explore Project</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5 group-hover:border-primary transition-colors">
            <div className="w-1.5 h-3 rounded-full bg-current animate-bounce group-hover:bg-primary transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
