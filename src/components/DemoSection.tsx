import { Play, Video } from "lucide-react";

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
      <div className="max-w-5xl mx-auto">
        <div className="card-soft p-0 overflow-hidden border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="aspect-video bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative group">
            <video 
              className="w-full h-full object-contain"
              controls
              preload="metadata"
            >
              <source 
                src={`${import.meta.env.BASE_URL}English-Elevator-Children's Stuttering Control Application.mp4`} 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
          <div className="p-6 sm:p-8 bg-gradient-to-br from-card via-card to-muted/5 border-t border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Play className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Elevator Pitch Video
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  1-3 minute overview of Phoneme
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Demo Resources */}
        <div className="mt-8">
          <div className="max-w-5xl mx-auto">
            <div className="card-soft p-0 overflow-hidden border-2 border-highlight/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative group">
                <video 
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                >
                  <source 
                    src={`${import.meta.env.BASE_URL}AppDemo-Children's Stuttering Control Application.mp4`} 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6 sm:p-8 bg-gradient-to-br from-card via-card to-muted/5 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center">
                    <Video className="w-5 h-5 text-highlight" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-foreground">Full Demo Walkthrough</h4>
                    <p className="text-muted-foreground text-sm mt-1">Detailed feature demonstration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
