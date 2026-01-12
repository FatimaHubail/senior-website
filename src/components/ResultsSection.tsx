import { BarChart2, TrendingUp, Smartphone, CheckCircle2 } from "lucide-react";

const results = [
  {
    title: "App Interface",
    description: "Child-friendly home screen with therapy modules",
    icon: Smartphone,
  },
  {
    title: "Speech Analysis",
    description: "Real-time disfluency detection visualization",
    icon: BarChart2,
  },
  {
    title: "Progress Charts",
    description: "Weekly fluency improvement metrics",
    icon: TrendingUp,
  },
  {
    title: "Testing Results",
    description: "User satisfaction and accuracy scores",
    icon: CheckCircle2,
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="bg-card border-y border-border">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Results</h2>
          <p className="section-subtitle mx-auto">
            Visual demonstrations of the application's capabilities and testing outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <div key={index} className="group">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/5 via-highlight/5 to-success/5 border-2 border-dashed border-border flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors duration-300">
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <result.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {result.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    (Insert screenshot/chart)
                  </p>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{result.title}</h3>
              <p className="text-sm text-muted-foreground">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
