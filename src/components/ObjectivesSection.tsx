import { Globe, Mic, Sparkles, BarChart3, Book, Wind } from "lucide-react";

const objectives = [
  {
    icon: Mic,
    title: "Real-Time AI-Powered Speech Analysis",
    description: "Develop an accurate speech recognition system capable of detecting and classifying various types of disfluencies in children's speech.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "Child-Friendly Interface",
    description: "Design an interface that is intuitive, engaging, and visually appealing to children, reducing anxiety and encouraging consistent use of the therapy app.",
    color: "text-highlight",
    bg: "bg-highlight/10",
  },
  {
    icon: Book,
    title: "Leveled Story Library",
    description: "Develop a library of stories organized by difficulty levels, enabling gradual practice of reading and speaking skills to improve speech fluency in a structured, gamified manner.",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Progress Tracking",
    description: "Create detailed analytics and reporting features for therapists and parents to monitor improvement over time.",
    color: "text-accent-foreground",
    bg: "bg-accent",
  },
  {
    icon: Wind,
    title: "Breathing Exercise",
    description: "Implement interactive animated breathing exercises to enhance breath control, improve speech rhythm, and help children manage disfluencies confidently.",
    color: "text-secondary-foreground",
    bg: "bg-secondary",
  },
  {
    icon: Globe,
    title: "Bilingual Navigation",
    description: "Support navigation and therapy in both Arabic and English languages increasing accessibility, catering to diverse users, and supporting more effective language-specific speech therapy exercises.",
    color: "text-primary",
    bg: "bg-muted",
  },
];

const ObjectivesSection = () => {
  return (
    <section id="objectives" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Project Objectives</h2>
        <p className="section-subtitle mx-auto">
          Clear, measurable goals guiding the development of an effective therapeutic solution
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="card-soft group hover:shadow-elevated transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-2xl ${objective.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <objective.icon className={`w-7 h-7 ${objective.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {objective.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {objective.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ObjectivesSection;
