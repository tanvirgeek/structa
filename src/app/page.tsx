import BlogPosts from "@/components/BlogPosts";
import Commitment from "@/components/Commitment";
import ExcitedToStart from "@/components/ExcitedToStart";
import ExpertTeam from "@/components/ExpertTeam";
import FadeInOnScroll from "@/components/FadeInOnScroll";
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

      <FadeInOnScroll direction="right">
        <Services />
      </FadeInOnScroll>

      <FadeInOnScroll direction="left">
        <Commitment />
      </FadeInOnScroll>

      <FadeInOnScroll direction="right">
        <VisionMission />
      </FadeInOnScroll>

      <FadeInOnScroll direction="left">
        <TotalProjects />
      </FadeInOnScroll>

      <FadeInOnScroll direction="right">
        <FeaturedProjects />
      </FadeInOnScroll>

      <FadeInOnScroll direction="left">
        <WhyChooseUs />
      </FadeInOnScroll>

      <FadeInOnScroll direction="right">
        <ExpertTeam />
      </FadeInOnScroll>

      <FadeInOnScroll direction="left">
        <BlogPosts />
      </FadeInOnScroll>

      <FadeInOnScroll direction="right">
        <ExcitedToStart />
      </FadeInOnScroll>
    </div>
  );
}
