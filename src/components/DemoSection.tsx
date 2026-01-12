import { Play, ExternalLink, Video } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demo" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Demo</h2>
        <p className="section-subtitle mx-auto">
          Watch our elevator pitch and see the application in action
        </p>
      </div>

      {/* Main Video Embed */}
      <div className="max-w-4xl mx-auto">
        <div className="card-soft p-0 overflow-hidden border-2 border-primary/20">
          <div className="aspect-video bg-gradient-to-br from-primary/10 via-highlight/10 to-success/10 flex items-center justify-center relative">
            {/* Video placeholder - replace with actual embed */}
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-elevated cursor-pointer hover:scale-105 transition-transform duration-300">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Elevator Pitch Video
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                1-3 minute overview of Phoneme
              </p>
              <p className="text-xs text-muted-foreground">
                (Embed your video here using YouTube, Vimeo, or direct upload)
              </p>
            </div>
          </div>
        </div>

        {/* Additional Demo Resources */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card-soft flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center shrink-0">
              <Video className="w-6 h-6 text-highlight" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Full Demo Walkthrough</h4>
              <p className="text-sm text-muted-foreground">Detailed feature demonstration</p>
            </div>
          </div>
          
          <div className="card-soft flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
              <ExternalLink className="w-6 h-6 text-success" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Live Demo</h4>
              <p className="text-sm text-muted-foreground">Try the deployed application</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
