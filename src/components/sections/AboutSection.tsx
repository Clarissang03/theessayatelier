import { BookOpen, GraduationCap, Clock, AlertCircle, DollarSign } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative texture-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-sans">About</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6 text-white">
              Meet Your Essay Coach
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Bio */}
            <div className="space-y-6 animate-slide-in-left [animation-fill-mode:both]" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white">Clarissa</h3>
                  <p className="text-muted-foreground">Law School Student & Essay Coach</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-foreground">
                Hey everyone! I've started a side hustle while studying in law school—marking GP essays with detailed feedback.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The problem? Students want feedback and practice to improve their essays. But your options are frustrating:
              </p>

              <div className="space-y-4 py-4">
                <div className="flex items-start gap-4 p-4 rounded-sm bg-secondary/50 border border-border">
                  <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">
                    Pay a few hundred for tuition + sit through 2 hours of content where you start to daydream
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-sm bg-secondary/50 border border-border">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">
                    Wait 1-2 months for your teacher to mark your entire class' essay
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                By then, you've moved on and forgotten what you learned. You're stuck in a cycle: <span className="text-accent italic">write → wait → get feedback → move on</span>. No real improvement.
              </p>

              <p className="text-lg text-foreground font-medium pt-4">
                That's why I created The Essay Atelier — to break this cycle with fast, affordable, and actionable feedback.
              </p>
            </div>

            {/* Right Column - Why This Is Different */}
            <div className="animate-slide-in-right [animation-fill-mode:both]" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-accent/10 rounded-sm" />
                <div className="absolute -inset-8 border border-accent/5 rounded-sm" />
                
                <div className="relative bg-gradient-card rounded-sm p-8 md:p-12 border border-border shadow-card">
                  <div className="flex items-center gap-3 mb-6">
                    <DollarSign className="w-8 h-8 text-accent" />
                    <h4 className="text-xl font-serif text-white">Why This Is Different</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-5 rounded-sm bg-secondary/50 border border-border">
                      <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="text-primary">vs. Tutoring</span>
                        <span className="text-xs bg-primary/30 px-2 py-0.5 rounded-full text-primary-foreground">$200+/month</span>
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Get targeted feedback on your actual essays, not generic lessons that may not address your specific weaknesses.
                      </p>
                    </div>

                    <div className="p-5 rounded-sm bg-secondary/50 border border-border">
                      <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="text-primary">vs. School Marking</span>
                        <span className="text-xs bg-primary/30 px-2 py-0.5 rounded-full text-primary-foreground">1-2 months wait</span>
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Receive feedback in 72 hours while the content is still fresh in your mind. Apply it immediately.
                      </p>
                    </div>

                    <div className="p-5 rounded-sm bg-accent/10 border border-accent/30">
                      <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="text-accent">The Essay Atelier</span>
                        <span className="text-xs bg-accent/30 px-2 py-0.5 rounded-full text-accent-foreground">$30 · 72h</span>
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Fast, affordable, comprehensive feedback that actually helps you improve — not just a grade with vague comments.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic text-center">
                      "Feedback that helps you improve — not just a grade."
                    </p>
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

export default AboutSection;
