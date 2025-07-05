import React from "react";
import Home5ServiceCard from "./Home5ServiceCard";

const Home5Services = () => {
  return (
    <section className="app-section">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <Home5ServiceCard
            imageSrc={"/residential.png"}
            imageAlt={"Residential Image"}
            header={"Residential Construction"}
            paragraph={
              "Offering comprehensive architectural services including conceptual design, drafting"
            }
          />

          <Home5ServiceCard
            imageSrc={"/commercial.png"}
            imageAlt={"Residential Image"}
            header={"Commercial Construction"}
            paragraph={
              "Offering comprehensive architectural services including conceptual design, drafting"
            }
            hasBorder
          />

          <Home5ServiceCard
            imageSrc={"/renovation.png"}
            imageAlt={"Residential Image"}
            header={"Residential Construction"}
            paragraph={
              "Offering comprehensive architectural services including conceptual design, drafting"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Home5Services;
