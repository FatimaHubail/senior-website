import { CheckCircle, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const achievements = [
  "Successfully developed a working prototype with real-time speech analysis",
  "Achieved 87% accuracy in disfluency detection during preliminary testing",
  "Created an engaging, child-friendly interface validated by target users",
  "Established partnerships with local speech therapy clinics for data collection",
];

const futureWork = [
  {
    icon: TrendingUp,
    title: "Enhanced AI Models",
    description: "Implement transformer-based architectures for improved accuracy",
  },
  {
    icon: Lightbulb,
    title: "Multilingual Support",
    description: "Extend support to Arabic and other regional languages",
  },
  {
    icon: Rocket,
    title: "Therapist Dashboard",
    description: "Develop comprehensive web portal for professional monitoring",
  },
];

const ConclusionSection = () => {
  return (
    <section id="conclusion" className="bg-muted/30 border-y border-border">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Conclusion & Future Work</h2>
          <p className="section-subtitle mx-auto">
            Reflecting on achievements and charting the path forward
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Summary & Achievements */}
          <div className="card-soft">
            <h3 className="text-xl font-semibold text-foreground mb-4">Project Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This project successfully demonstrates the feasibility of using AI-powered 
              applications to provide accessible, personalized stammer therapy for children. 
              Through iterative development and close collaboration with speech therapy experts, 
              we have created a solution that addresses key limitations of traditional therapy methods.
            </p>
            
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Work */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">Future Enhancements</h3>
            {futureWork.map((item, index) => (
              <div key={index} className="card-soft">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="card-soft border-2 border-dashed border-highlight/30 bg-highlight/5">
              <h4 className="font-semibold text-foreground mb-2">Research Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                This project opens avenues for further research in pediatric speech disorders, 
                AI-assisted healthcare accessibility, and the efficacy of gamified therapeutic 
                interventions for children.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
