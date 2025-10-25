import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlatformShowcase from "@/components/PlatformShowcase";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ConversationalAgent from "@/components/ConversationalAgent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <PlatformShowcase />
      <div id="use-cases">
        <UseCasesSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <CTASection />
      <Footer />
      {/* <ConversationalAgent /> */}
    </div>
  );
};

export default Index;
