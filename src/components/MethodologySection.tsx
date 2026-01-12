import { Workflow, Code2, Cpu } from "lucide-react";

const methodologyItems = [
  {
    icon: Workflow,
    title: "Development Approach",
    description: "Agile methodology with iterative sprints, enabling continuous feedback integration from speech therapy experts and end-user testing sessions.",
  },
  {
    icon: Code2,
    title: "Tools & Frameworks",
    description: "Cross-platform mobile development using React Native, with Python-based backend services for AI model serving and data processing.",
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="bg-muted/30 border-y border-border">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-highlight/10 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-highlight" />
          </div>
          <h2 className="section-title mb-0">Methodology</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Methodology Items */}
          <div className="space-y-6">
            {methodologyItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-card shadow-soft flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: System Architecture Diagram */}
          <div className="card-soft">
            <h3 className="font-semibold text-foreground mb-6">System Architecture</h3>
            <div className="space-y-4">
              {/* Child User */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-card border-2 border-border rounded-xl p-4 text-center shadow-sm">
                  <p className="text-sm font-semibold text-foreground">Child User (Ages 4-12)</p>
                </div>
                <div className="w-0.5 h-6 bg-primary/40 my-1" />
              </div>

              {/* Mobile Application */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-primary/10 border-2 border-primary/40 rounded-xl p-4 shadow-sm">
                  <p className="text-sm font-semibold text-foreground mb-2 text-center">Mobile Application (Flutter App)</p>
                  <ul className="text-xs text-muted-foreground space-y-1 text-left pl-4">
                    <li>• Child-friendly UI</li>
                    <li>• Leveled Story Library</li>
                    <li>• Breathing Exercises</li>
                    <li>• Bilingual Support</li>
                    <li>• Audio Recording</li>
                  </ul>
                </div>
                <div className="w-0.5 h-6 bg-accent/40 my-1" />
              </div>

              {/* Backend Server */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-accent/10 border-2 border-accent/40 rounded-xl p-4 shadow-sm">
                  <p className="text-sm font-semibold text-foreground mb-2 text-center">Backend Server (Python)</p>
                  <ul className="text-xs text-muted-foreground space-y-1 text-left pl-4">
                    <li>• Handles requests from app</li>
                    <li>• Processes speech data</li>
                    <li>• Therapy logic & scoring</li>
                    <li>• Communicates with AI models</li>
                  </ul>
                </div>
                <div className="w-0.5 h-6 bg-success/40 my-1" />
              </div>

              {/* OpenAI Models */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-success/10 border-2 border-success/40 rounded-xl p-4 shadow-sm">
                  <p className="text-sm font-semibold text-foreground mb-2 text-center">OpenAI Speech & Language Models</p>
                  <ul className="text-xs text-muted-foreground space-y-1 text-left pl-4">
                    <li>• Speech-to-Text Transcription</li>
                    <li>• Disfluency Detection</li>
                    <li>• Personalized Feedback Generation</li>
                  </ul>
                </div>
                <div className="w-0.5 h-6 bg-muted-foreground/40 my-1" />
              </div>

              {/* Database */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-muted border-2 border-border rounded-xl p-4 shadow-sm">
                  <p className="text-sm font-semibold text-foreground mb-2 text-center">Database / Cloud Storage</p>
                  <ul className="text-xs text-muted-foreground space-y-1 text-left pl-4">
                    <li>• User Profiles</li>
                    <li>• Session History</li>
                    <li>• Progress & Scores</li>
                  </ul>
                </div>
                <div className="w-0.5 h-6 bg-highlight/40 my-1" />
              </div>

              {/* Speech Therapist */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-highlight/10 border-2 border-highlight/40 rounded-xl p-4 shadow-sm">
                  <p className="text-sm font-semibold text-foreground mb-2 text-center">Speech Therapist / Supervisor</p>
                  <ul className="text-xs text-muted-foreground space-y-1 text-left pl-4">
                    <li>• Views Progress Reports</li>
                    <li>• Monitors Improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
