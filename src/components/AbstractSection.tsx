import { BookOpen } from "lucide-react";

const AbstractSection = () => {
  return (
    <section id="abstract" className="bg-card border-y border-border">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h2 className="section-title mb-0">What is Phoneme?</h2>
        </div>

        <div className="card-soft max-w-4xl">
          <p className="text-foreground leading-relaxed text-lg">
            Stuttering, also known as childhood-onset fluency disorder, affects approximately 5% of children worldwide, 
            often leading to significant educational challenges, social anxiety, and reduced self-esteem during 
            critical developmental years. Traditional speech therapy, while effective, faces limitations in 
            accessibility, consistency, and personalization.
          </p>
          
          <p className="text-foreground leading-relaxed text-lg mt-4">
            <strong className="text-primary">Phoneme</strong>, an innovative AI-powered mobile application designed 
            to provide personalized, engaging, and accessible stammer therapy for children through leveled story 
            library. Leveraging advanced speech recognition models, the application analyzes speech patterns in 
            real-time, identifies disfluencies, and delivers targeted speech control tips as a feedback.
          </p>
          
          <p className="text-foreground leading-relaxed text-lg mt-4">
            The expected outcomes include measurable improvement in speech fluency, increased therapy engagement 
            through child-friendly interfaces, and valuable insights for speech therapists through comprehensive 
            progress tracking. This research contributes to the growing field of AI-assisted healthcare, 
            demonstrating the potential of technology to democratize access to quality speech therapy services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;
