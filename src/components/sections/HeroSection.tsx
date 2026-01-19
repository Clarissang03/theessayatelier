import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RetroGrid from "@/components/ui/retro-grid";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Retro Grid Background */}
      <RetroGrid 
        gridColor="#c9a227" 
        showScanlines={true} 
        glowEffect={true} 
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none z-[1]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float opacity-30 z-[1]" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-primary/20 rounded-full animate-float opacity-20 z-[1]" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 animate-fade-in [animation-fill-mode:both]" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans">The Essay Atelier</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight animate-fade-in-up [animation-fill-mode:both]" style={{ animationDelay: '0.4s' }}>
            Fast, Affordable{" "}
            <span className="text-gradient-gold italic">Essay Feedback</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed animate-fade-in-up [animation-fill-mode:both]" style={{ animationDelay: '0.6s' }}>
            Detailed essay feedback in 72 hours — not months. 
            <br className="hidden md:block" />
            Expert guidance that won't break the bank.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up [animation-fill-mode:both]" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="gold" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              Get Feedback
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="gold-outline" 
              size="lg"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto animate-fade-in [animation-fill-mode:both]" style={{ animationDelay: '1s' }}>
            <div className="text-center backdrop-blur-sm bg-background/20 rounded-sm p-4">
              <p className="text-3xl md:text-4xl font-serif text-primary">$30</p>
              <p className="text-sm text-muted-foreground mt-1">per essay</p>
            </div>
            <div className="text-center border-x border-border/50 backdrop-blur-sm bg-background/20 rounded-sm p-4">
              <p className="text-3xl md:text-4xl font-serif text-primary">72h</p>
              <p className="text-sm text-muted-foreground mt-1">turnaround</p>
            </div>
            <div className="text-center backdrop-blur-sm bg-background/20 rounded-sm p-4">
              <p className="text-3xl md:text-4xl font-serif text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">detailed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in [animation-fill-mode:both] z-10" style={{ animationDelay: '1.2s' }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
