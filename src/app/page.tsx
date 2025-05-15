import BlogPosts from "@/components/BlogPosts";
import Commitment from "@/components/Commitment";
import ExpertTeam from "@/components/ExpertTeam";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TotalProjects from "@/components/TotalProjects";
import VisionMission from "@/components/VisionMission";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Commitment />
      <VisionMission />
      <TotalProjects />
      <FeaturedProjects />
      <WhyChooseUs />
      <ExpertTeam />
      <BlogPosts />
    </div>
  );
}
