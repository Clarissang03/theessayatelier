import { Construction, BookOpen, FileText, Sparkles } from "lucide-react";

const NotesBankSection = () => {
  return (
    <section id="notes-bank" className="py-24 md:py-32 relative texture-paper overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans">Resources</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
              Notes & Essays Bank
            </h2>
            <div className="section-divider" />
          </div>

          {/* Under Construction Card */}
          <div className="relative animate-fade-in [animation-fill-mode:both]" style={{ animationDelay: '0.2s' }}>
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-sm blur-3xl" />
            
            <div className="relative bg-gradient-card rounded-sm border border-primary/30 p-12 md:p-16 text-center shadow-card">
              {/* Animated construction icon */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto animate-pulse">
                  <Construction className="w-12 h-12 text-primary" />
                </div>
                {/* Orbiting icons */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <BookOpen className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 text-primary/40" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                  <FileText className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 text-primary/40" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif mb-4">
                Currently Under Construction
              </h3>
              
              <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
                We're building something special — a curated collection of notes, essay samples, 
                and study resources to help you excel in your writing journey.
              </p>

              {/* Coming soon features */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-foreground/70">GP Notes</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-foreground/70">Model Essays</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-foreground/70">Study Guides</span>
                </div>
              </div>

              <p className="text-sm text-primary italic">
                Check back soon or follow our Telegram for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesBankSection;
