import { Upload, Edit3, FileCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Submit Your Essay",
    description: "Send your essay through our Telegram channel or email. Include any specific areas you'd like me to focus on.",
  },
  {
    icon: Edit3,
    number: "02",
    title: "Detailed Review",
    description: "I'll analyze your essay for grammar, structure, argument strength, and clarity — leaving comprehensive annotations.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Receive Feedback",
    description: "Within 72 hours, you'll receive your marked essay with detailed comments and specific improvement suggestions.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Revise & Improve",
    description: "Apply the feedback while it's fresh in your mind. Watch your writing skills grow with each submission.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans">Process</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
              How It Works
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A simple, streamlined process designed to get you quality feedback fast.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group animate-fade-in-up [animation-fill-mode:both]"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="card-academia h-full relative">
                  {/* Step Number */}
                  <span className="absolute -top-4 -left-2 text-6xl font-serif text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif mb-3 relative z-10">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>

                  {/* Connector Line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
