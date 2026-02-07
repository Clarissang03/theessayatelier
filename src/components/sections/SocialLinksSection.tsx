import { Instagram, Send, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinksSection = () => {
  return (
    <section id="social" className="py-24 md:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans">Connect</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">
              Let's Work Together
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Ready to improve your essays? Reach out through any of these channels.
            </p>
          </div>

          {/* Social Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Telegram Card */}
            <a
              href="https://t.me/TheEssayAtelier"
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-fade-in-up [animation-fill-mode:both] block"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="card-academia h-full text-center cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#0088cc]/20 border border-[#0088cc]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0088cc]/30 transition-colors">
                  <Send className="w-7 h-7 text-[#0088cc]" />
                </div>
                
                <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                  Telegram Channel
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  @TheEssayAtelier
                </p>
                
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Free notes & resources! I believe content should be <span className="text-primary">FREE</span>. 
                  When you're ready to practice and get feedback, submit your essay here.
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-primary text-sm group-hover:gap-3 transition-all">
                  <span>Join Channel</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <div
              role="link"
              tabIndex={0}
              onClick={() =>
                window.top?.open(
                  "https://www.instagram.com/the.gpessayatelier",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  window.top?.open(
                    "https://www.instagram.com/the.gpessayatelier",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }
              }}
              className="group animate-fade-in-up [animation-fill-mode:both] block cursor-pointer"
              style={{ animationDelay: "0.35s" }}
            >
              <div className="card-academia h-full text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#FCAF45]/20 border border-[#E1306C]/30 flex items-center justify-center mx-auto mb-6 group-hover:from-[#833AB4]/30 group-hover:via-[#FD1D1D]/30 group-hover:to-[#FCAF45]/30 transition-colors">
                  <Instagram className="w-7 h-7 text-[#E1306C]" />
                </div>
            
                <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                  Instagram
                </h3>
            
                <p className="text-sm text-muted-foreground mb-4">
                  @the.gpessayatelier
                </p>
            
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Follow along for behind-the-scenes, my law school journey, and the story behind why I started The Essay Atelier.
                </p>
            
                <div className="mt-6 flex items-center justify-center gap-2 text-primary text-sm group-hover:gap-3 transition-all">
                  <span>Follow</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>

              <div className="card-academia h-full text-center cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#FCAF45]/20 border border-[#E1306C]/30 flex items-center justify-center mx-auto mb-6 group-hover:from-[#833AB4]/30 group-hover:via-[#FD1D1D]/30 group-hover:to-[#FCAF45]/30 transition-colors">
                  <Instagram className="w-7 h-7 text-[#E1306C]" />
                </div>
                
                <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                  Instagram
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  @the.gpessayatelier
                </p>
                
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Follow along for behind-the-scenes, my law school journey, and the story behind why I started The Essay Atelier.
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-primary text-sm group-hover:gap-3 transition-all">
                  <span>Follow</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:theessayatelier@gmail.com"
              className="group animate-fade-in-up [animation-fill-mode:both] block md:col-span-2 lg:col-span-1"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="card-academia h-full text-center cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                  Email
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  theessayatelier@gmail.com
                </p>
                
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Prefer email? Send your essay or any questions directly. I'll get back to you within 24 hours.
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-primary text-sm group-hover:gap-3 transition-all">
                  <span>Send Email</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in [animation-fill-mode:both]" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground mb-6">
              Ready to break the feedback cycle?
            </p>
            <Button 
              variant="gold" 
              size="xl"
              asChild
            >
              <a href="https://t.me/TheEssayAtelier" target="_blank" rel="noopener noreferrer">
                Submit Your First Essay
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinksSection;
