import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import WhoWeHelp from "@/components/landing/WhoWeHelp";
import WhyThisWorks from "@/components/landing/WhyThisWorks";
import Offer from "@/components/landing/Offer";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhoWeHelp />
      <WhyThisWorks />
      <Offer />
      <Footer />
    </div>
  );
};

export default Index;
