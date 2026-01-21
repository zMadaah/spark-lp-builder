import Hero from "@/components/sections/Hero";
import Proposal from "@/components/sections/Proposal";
import Included from "@/components/sections/Included";
import Itinerary from "@/components/sections/Itinerary";
import Investment from "@/components/sections/Investment";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Proposal />
      <Included />
      <Itinerary />
      <Investment />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;