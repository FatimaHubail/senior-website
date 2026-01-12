import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AbstractSection from "@/components/AbstractSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import MethodologySection from "@/components/MethodologySection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ResultsSection from "@/components/ResultsSection";
import DemoSection from "@/components/DemoSection";
import ConclusionSection from "@/components/ConclusionSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AbstractSection />
        <ObjectivesSection />
        <MethodologySection />
        <TechnologiesSection />
        <ResultsSection />
        <DemoSection />
        <ConclusionSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
