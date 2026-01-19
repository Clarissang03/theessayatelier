import { MessageCircle, Instagram, Mail, CreditCard, Clock, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Reach Out",
    description: "DM us on Instagram or send us an email with your essay attached. Tell us any specific areas you'd like us to focus on.",
    channels: ["Instagram", "Email"],
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Payment Details",
    description: "We'll confirm receipt and share the payment details. $30 per essay — simple and affordable.",
  },
  {
    icon: Clock,
    number: "03",
    title: "72-Hour Turnaround",
    description: "Within 72 hours, you'll receive your essay back with comprehensive annotations and detailed feedback.",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "WhatsApp Support",
    description: "Have questions about your feedback? Use our live chat on WhatsApp to clarify any points and discuss improvements.",
  },
];

const ProcessFlowSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-sans">Process</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6 text-white">
              How It Works
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A simple, streamlined process designed to get you quality feedback fast.
            </p>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group animate-fade-in-up [animation-fill-mode:both] lg:flex lg:items-center lg:gap-12 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  {/* Content Card */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"}`}>
                    <div className="card-academia relative">
                      {/* Step Number */}
                      <span className={`absolute -top-4 text-6xl font-serif text-accent/10 group-hover:text-accent/20 transition-colors ${
                        index % 2 === 0 ? "-right-2 lg:-left-2" : "-left-2"
                      }`}>
                        {step.number}
                      </span>

                      {/* Icon - Mobile only */}
                      <div className="lg:hidden relative z-10 w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <step.icon className="w-6 h-6 text-accent" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-serif mb-3 relative z-10 text-white">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                        {step.description}
                      </p>

                      {/* Channel badges for step 1 */}
                      {step.channels && (
                        <div className={`flex gap-2 mt-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs border border-accent/20">
                            <Instagram className="w-3 h-3" />
                            Instagram
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs border border-accent/20">
                            <Mail className="w-3 h-3" />
                            Email
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Icon - Desktop only */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-2 border-accent/50 items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all shadow-lg" style={{ top: `${index * 25 + 5}%` }}>
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlowSection;
