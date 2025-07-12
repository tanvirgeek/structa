import ExcitedToStart from "@/components/ExcitedToStart";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import PageHero from "@/components/PageHero";
import PageHeroImage from "@/components/PageHeroImage";
import QuestionsAnswers from "@/components/QuestionsAnswers";
import React from "react";

const Faqs = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <NavigationBar />
      </div>
      <PageHero
        heading={`frequently asked\nquestion`}
        text="Common Questions"
      />
      <PageHeroImage imageUrl={"/aboutUsHero.png"} />
      <QuestionsAnswers />
      <ExcitedToStart />
      <Footer />
    </div>
  );
};

export default Faqs;
