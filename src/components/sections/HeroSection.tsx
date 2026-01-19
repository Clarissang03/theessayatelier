import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import IntroAnimation from "@/components/IntroAnimation";

const HeroSection = () => {
  const [introComplete, setIntroComplete] = useState(false);

  const scrollToContact = () => {
    document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden texture-paper">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          {/* Radial gradient from center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_0%_8%)_0%,_hsl(0_0%_4%)_70%)]" />
          
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(0_0%_0%/0.4)_100%)]" />
          
          {/* Very subtle line decoration */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
        </div>

        {/* Content */}
        <div className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 ${
          introComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Brand name */}
            <div 
              className="animate-fade-in [animation-fill-mode:both]" 
              style={{ animationDelay: introComplete ? '0.2s' : '0s' }}
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-[0.2em] uppercase">
                The Essay Atelier
              </h1>
              
              {/* Decorative divider */}
              <div className="flex items-center justify-center mt-6">
                <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-accent/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent mx-4" />
                <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-accent/60" />
              </div>
            </div>

            {/* Main Heading */}
            <div
              className="animate-fade-in-up [animation-fill-mode:both]"
              style={{ animationDelay: introComplete ? '0.5s' : '0s' }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight">
                <span className="font-sans font-light text-foreground">Fast, Affordable</span>{" "}
                <span className="font-serif italic text-accent">Essay Feedback</span>
              </h2>
            </div>

            {/* Subtitle */}
            <p 
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-sans font-light leading-relaxed animate-fade-in-up [animation-fill-mode:both]" 
              style={{ animationDelay: introComplete ? '0.7s' : '0s' }}
            >
              Detailed essay feedback in 72 hours — not months.
              <br className="hidden md:block" />
              Expert guidance that won't break the bank.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up [animation-fill-mode:both]" 
              style={{ animationDelay: introComplete ? '0.9s' : '0s' }}
            >
              <Button 
                variant="burgundy" 
                size="xl" 
                onClick={scrollToContact}
                className="group min-w-[180px]"
              >
                Get Feedback
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="burgundy-outline" 
                size="lg"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="min-w-[160px]"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-4 md:gap-8 pt-16 max-w-lg mx-auto animate-fade-in [animation-fill-mode:both]" 
              style={{ animationDelay: introComplete ? '1.1s' : '0s' }}
            >
              <div className="text-center relative">
                <p className="text-3xl md:text-4xl font-serif text-white">$30</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wider uppercase">per essay</p>
              </div>
              <div className="text-center relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-12 before:w-px before:bg-gradient-to-b before:from-transparent before:via-accent/30 before:to-transparent after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-px after:bg-gradient-to-b after:from-transparent after:via-accent/30 after:to-transparent">
                <p className="text-3xl md:text-4xl font-serif text-white">72h</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wider uppercase">turnaround</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif text-white">100%</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wider uppercase">detailed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
            introComplete ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: introComplete ? '1.3s' : '0s' }}
        >
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
