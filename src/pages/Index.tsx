import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServiceDetailsSection from "@/components/sections/ServiceDetailsSection";
import SocialLinksSection from "@/components/sections/SocialLinksSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>The Essay Atelier | Fast, Affordable Essay Feedback in 72 Hours</title>
        <meta 
          name="description" 
          content="Get detailed essay feedback in 72 hours for just $30. Professional GP essay marking with grammar, structure, and argument analysis. Stop waiting months for your teacher." 
        />
        <meta name="keywords" content="essay feedback, essay marking, GP essay, essay review, affordable tutoring, fast essay feedback, essay improvement" />
        <link rel="canonical" href="https://theessayatelier.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Essay Atelier | Fast, Affordable Essay Feedback" />
        <meta property="og:description" content="Detailed essay feedback in 72 hours for just $30. Break the cycle of waiting months for feedback." />
        <meta property="og:site_name" content="The Essay Atelier" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Essay Atelier | Fast, Affordable Essay Feedback" />
        <meta name="twitter:description" content="Detailed essay feedback in 72 hours for just $30." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <HowItWorksSection />
          <ServiceDetailsSection />
          <SocialLinksSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
