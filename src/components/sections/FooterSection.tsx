import { Instagram, Send, Mail } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl text-accent tracking-wider">The Essay Atelier</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Fast, affordable essay feedback
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/TheEssayAtelier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/50 border border-border flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-colors group"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/the.gpessayatelier?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/50 border border-border flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a
                href="mailto:theessayatelier@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary/50 border border-border flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} The Essay Atelier. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
