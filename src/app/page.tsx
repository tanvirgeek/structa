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

      <FadeInOnScroll direction="right" delay={0.1}>
        <Services />
      </FadeInOnScroll>

      <FadeInOnScroll direction="left" delay={0.1}>
        <Commitment />
      </FadeInOnScroll>

      <FadeInOnScroll direction="right" delay={0.1}>
        <VisionMission />
      </FadeInOnScroll>

      <FadeInOnScroll direction="left" delay={0.1}>
        <TotalProjects />
      </FadeInOnScroll>

      <FadeInOnScroll direction="right" delay={0.1}>
        <FeaturedProjects />
      </FadeInOnScroll>

      <FadeInOnScroll direction="left" delay={0.1}>
        <WhyChooseUs />
      </FadeInOnScroll>

      <FadeInOnScroll direction="right" delay={0.1}>
        <ExpertTeam />
      </FadeInOnScroll>

      <FadeInOnScroll direction="left" delay={0.1}>
        <BlogPosts />
      </FadeInOnScroll>

      <FadeInOnScroll direction="right" delay={0.1}>
        <ExcitedToStart />
      </FadeInOnScroll>
    </div>
  );
}
