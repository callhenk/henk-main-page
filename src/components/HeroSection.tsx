import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-voice-ai.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-90" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Meet <span className="text-primary">Henk</span>,
                <br />
                Your AI Fundraising
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Champion
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Transform your charity's fundraising with AI that speaks
                naturally, understands donors deeply, and works tirelessly to
                advance your mission.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-elegant transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://calendly.com/jerome-callhenk/30min",
                    "_blank"
                  )
                }
              >
                💬 See Henk in Action
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>24/7 operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>GDPR compliant</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-glow transform hover:scale-105 transition-all duration-500">
              <img
                src={heroImage}
                alt="Henk Voice Technology for Fundraising"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>

              {/* Animated overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
            </div>

            {/* Enhanced floating feature cards */}
            <div className="absolute -top-6 -left-6 bg-card/95 backdrop-blur-sm p-6 rounded-xl shadow-glow border border-primary/20 animate-fade-in hover-scale">
              <div className="text-3xl font-bold text-primary mb-2">🎤</div>
              <div className="text-sm font-semibold text-foreground">
                Voice AI
              </div>
              <div className="text-xs text-muted-foreground">
                Natural Conversations
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-sm p-6 rounded-xl shadow-glow border border-accent/20 animate-fade-in hover-scale">
              <div className="text-3xl font-bold text-accent mb-2">📞</div>
              <div className="text-sm font-semibold text-foreground">
                24/7 Calls
              </div>
              <div className="text-xs text-muted-foreground">
                Always Available
              </div>
            </div>

            <div className="absolute top-1/2 -left-8 bg-card/95 backdrop-blur-sm p-4 rounded-full shadow-elegant border border-primary/20 animate-fade-in">
              <div className="text-xl text-primary">💝</div>
            </div>

            <div className="absolute top-1/4 -right-8 bg-card/95 backdrop-blur-sm p-4 rounded-full shadow-elegant border border-accent/20 animate-fade-in">
              <div className="text-xl text-accent">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
