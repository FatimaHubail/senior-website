import { BarChart2, TrendingUp, Smartphone, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const results = [
  {
    title: "App Interface",
    description: "Child-friendly home screen with leveled story library therapy module",
    icon: Smartphone,
    image: "/app-interface.png", // Image should be in: public/app-interface.png
  },
  {
    title: "Speech Analysis",
    description: "Real-time disfluency detection visualization with hints as feedback",
    icon: BarChart2,
    image: "/speech-analysis.png", // Image should be in: public/speech-analysis.png
  },
  {
    title: "Progress Charts",
    description: "Fluency improvement and achievement metrics",
    icon: TrendingUp,
    image: "/progress-charts.png", // Image should be in: public/progress-charts.png
  },
  {
    title: "Breathing Exercise",
    description: "Animated inhale/exhale breathing controllment",
    icon: CheckCircle2,
    image: "/testing-results.png", // Image should be in: public/testing-results.png
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

        <div className="flex flex-wrap justify-center gap-6">
          {results.map((result, index) => {
            const ResultCard = () => {
              const [imageError, setImageError] = useState(false);
              const imagePath = result.image ? `${import.meta.env.BASE_URL}${result.image.replace(/^\//, '')}` : null;
              
              return (
                <div className="group flex-shrink-0 w-[200px] sm:w-[240px]">
                  <div className={`${result.image ? 'w-[200px] sm:w-[240px] h-[360px] sm:h-[420px]' : 'aspect-video w-full'} rounded-2xl ${result.image ? 'bg-gradient-to-br from-background via-background to-muted/20 border-2 border-border shadow-lg p-3' : 'bg-gradient-to-br from-primary/5 via-highlight/5 to-success/5 border-2 border-dashed border-border'} flex items-center justify-center mb-4 group-hover:border-primary/40 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300 overflow-hidden relative`}>
                    {result.image && !imageError ? (
                      <img 
                        src={imagePath || ''}
                        alt={result.title}
                        className="w-full h-full object-contain rounded-xl shadow-md"
                        onError={() => {
                          console.error('Image failed to load. Path:', imagePath);
                          console.error('BASE_URL:', import.meta.env.BASE_URL);
                          console.error('Full URL would be:', `${window.location.origin}${imagePath}`);
                          setImageError(true);
                        }}
                      />
                    ) : (
                      <div className="text-center p-6 w-full">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          {imageError ? (
                            <ImageIcon className="w-7 h-7 text-primary" />
                          ) : (
                            <result.icon className="w-7 h-7 text-primary" />
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {result.title}
                        </p>
                        {imageError ? (
                          <div className="text-xs text-muted-foreground mt-1 space-y-1">
                            <p>Image not found at: {imagePath}</p>
                            <p className="text-primary">Add file to: public{result.image}</p>
                            <p className="text-[10px]">Or check browser console (F12) for details</p>
                          </div>
                        ) : (
                          <p className="text-xs text-muted-foreground mt-1">
                            (Insert screenshot/chart)
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 break-words">{result.title}</h3>
                  <p className="text-sm text-muted-foreground break-words">{result.description}</p>
                </div>
              );
            };
            
            return <ResultCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
