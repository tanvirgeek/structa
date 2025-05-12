import Commitment from "@/components/Commitment";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TotalProjects from "@/components/TotalProjects";
import VisionMission from "@/components/VisionMission";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Commitment />
      <VisionMission />
      <TotalProjects />
      <FeaturedProjects />
    </div>
  );
}
