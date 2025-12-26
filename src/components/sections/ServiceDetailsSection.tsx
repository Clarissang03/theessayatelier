import { Check, Clock, DollarSign, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Grammar & punctuation corrections",
  "Structure and flow analysis",
  "Argument strength evaluation",
  "Thesis statement review",
  "Evidence & example assessment",
  "Specific improvement suggestions",
  "Inline annotations & comments",
  "Overall score with rationale",
];

const ServiceDetailsSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative texture-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans">Services</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
              What You Get
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pricing Card */}
            <div className="animate-slide-in-left [animation-fill-mode:both]" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
                
                <div className="relative bg-gradient-card rounded-sm border border-primary/30 p-8 md:p-12 shadow-card hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <span className="text-sm tracking-widest uppercase text-primary">Essay Feedback</span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl md:text-6xl font-serif text-primary">$30</span>
                    <span className="text-muted-foreground">per essay</span>
                  </div>

                  <div className="flex items-center gap-4 py-6 border-y border-border/50 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground/90">72-hour turnaround</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    Comprehensive feedback that helps you actually improve — not just a grade with vague comments.
                  </p>

                  <Button 
                    variant="gold" 
                    size="lg" 
                    className="w-full"
                    onClick={() => document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Submit via Telegram or Email
                  </p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="animate-slide-in-right [animation-fill-mode:both]" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-serif mb-8">Everything Included</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-4 rounded-sm bg-secondary/30 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Comparison Box */}
              <div className="mt-8 p-6 rounded-sm bg-accent/20 border border-accent/30">
                <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Why This Is Different
                </h4>
                <div className="space-y-3 text-sm text-foreground/80">
                  <p>
                    <span className="text-primary">vs. Tutoring ($200+/month):</span> Get targeted feedback on actual essays, not generic lessons.
                  </p>
                  <p>
                    <span className="text-primary">vs. School Marking (1-2 months):</span> Feedback in 72 hours, while the content is still fresh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
