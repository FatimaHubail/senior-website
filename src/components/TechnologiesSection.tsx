import { Code, Layers, Brain, Cloud, Database, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-primary",
    bg: "bg-primary/10",
    items: ["Python", "Dart"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "text-highlight",
    bg: "bg-highlight/10",
    items: ["React Native", "FastAPI", "TensorFlow", "PyTorch"],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "text-success",
    bg: "bg-success/10",
    items: ["Whisper ASR", "Wav2Vec 2.0", "Custom CNN Models", "BERT"],
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    color: "text-primary",
    bg: "bg-secondary",
    items: ["AWS", "Google Cloud", "Firebase", "Supabase"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-accent-foreground",
    bg: "bg-accent",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    color: "text-muted-foreground",
    bg: "bg-muted",
    items: ["Git", "Docker", "Jupyter", "VS Code"],
  },
];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Technologies Used</h2>
        <p className="section-subtitle mx-auto">
          A robust technology stack powering intelligent speech therapy
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, index) => (
          <div key={index} className="card-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl ${category.bg} flex items-center justify-center`}>
                <category.icon className={`w-5 h-5 ${category.color}`} />
              </div>
              <h3 className="font-semibold text-foreground">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item, itemIndex) => (
                <span 
                  key={itemIndex} 
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md bg-gradient-to-r from-primary/10 via-highlight/10 to-success/10 border border-primary/20 hover:border-primary/40 text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
