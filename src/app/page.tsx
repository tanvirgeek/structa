import BlogPosts from "@/components/BlogPosts";
import Commitment from "@/components/Commitment";
import ExcitedToStart from "@/components/ExcitedToStart";
import ExpertTeam from "@/components/ExpertTeam";
import FadeInOnScroll from "@/components/FadeInOnScroll";
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

      <FadeInOnScroll direction="up">
        <Services />
      </FadeInOnScroll>

      <FadeInOnScroll direction="up">
        <Commitment />
      </FadeInOnScroll>

      <FadeInOnScroll direction="up">
        <VisionMission />
      </FadeInOnScroll>

      <FadeInOnScroll direction="up">
        <TotalProjects />
      </FadeInOnScroll>

      <FadeInOnScroll direction="up">
        <FeaturedProjects />
      </FadeInOnScroll>

      <FadeInOnScroll direction="up">
        <WhyChooseUs />
      </FadeInOnScroll>

      <FadeInOnScroll direction="up">
        <ExpertTeam />
      </FadeInOnScroll>

      <FadeInOnScroll direction="up">
        <BlogPosts />
      </FadeInOnScroll>

      <FadeInOnScroll direction="up">
        <ExcitedToStart />
      </FadeInOnScroll>

      <Footer />
    </div>
  );
}
