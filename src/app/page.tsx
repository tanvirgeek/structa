import BlogPosts from "@/components/BlogPosts";
import Commitment from "@/components/Commitment";
import ExcitedToStart from "@/components/ExcitedToStart";
import ExpertTeam from "@/components/ExpertTeam";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavigationBar from "@/components/NavigationBar";
import Services from "@/components/Services";
import TotalProjects from "@/components/TotalProjects";
import VisionMission from "@/components/VisionMission";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <NavigationBar />
      </div>
      <Hero />

      <Services />

      <Commitment />

      <VisionMission />

      <TotalProjects />

      <FeaturedProjects />

      <WhyChooseUs />

      <ExpertTeam />

      <BlogPosts />

      <ExcitedToStart />

      <Footer />
    </div>
  );
}
