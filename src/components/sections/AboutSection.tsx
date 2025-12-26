import { BookOpen, GraduationCap, Clock, AlertCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative texture-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans">About</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
              Meet Your Essay Coach
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Bio */}
            <div className="space-y-6 animate-slide-in-left [animation-fill-mode:both]" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif">Clarissa</h3>
                  <p className="text-muted-foreground">Law School Student & Essay Coach</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-foreground/90">
                Hey everyone! I've started a side hustle while studying in law school—marking GP essays with detailed feedback.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The problem? Students want feedback and practice to improve their essays. But your options are frustrating:
              </p>

              <div className="space-y-4 py-4">
                <div className="flex items-start gap-4 p-4 rounded-sm bg-secondary/30 border border-border/50">
                  <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">
                    Pay a few hundred for tuition + sit through 2 hours of content where you start to daydream
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-sm bg-secondary/30 border border-border/50">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">
                    Wait 1-2 months for your teacher to mark your entire class' essay
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                By then, you've moved on and forgotten what you learned. You're stuck in a cycle: <span className="text-primary italic">write → wait → get feedback → move on</span>. No real improvement.
              </p>

              <p className="text-lg text-foreground/90 font-medium pt-4">
                That's why I created The Essay Atelier — to break this cycle with fast, affordable, and actionable feedback.
              </p>
            </div>

            {/* Right Column - Visual */}
            <div className="animate-slide-in-right [animation-fill-mode:both]" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-primary/20 rounded-sm" />
                <div className="absolute -inset-8 border border-primary/10 rounded-sm" />
                
                <div className="relative bg-gradient-card rounded-sm p-8 md:p-12 border border-border shadow-card">
                  <BookOpen className="w-12 h-12 text-primary mb-6" />
                  
                  <h4 className="text-xl font-serif mb-4">What I Offer</h4>
                  
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">Detailed grammar & structure analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">Argument strength evaluation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">Specific improvement suggestions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">72-hour turnaround guaranteed</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">Just $30 per essay</span>
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic">
                      "Feedback that actually helps you improve — not just a grade."
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
