import React from "react";
import Button from "./Button";

const Home3StartBuilding = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/excitedToStart.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-background flex flex-col items-center justify-center min-h-screen">
        <h6 className="text-background! mb-2">
          Do you have a project in mind?
        </h6>
        <h2 className="text-background!">Start Building With</h2>
        <h2 className="text-background!">Confidence Today</h2>
        <div className="flex justify-center mt-4">
          <Button text={"Get A Quote"} href="/contact" />
        </div>
      </div>
    </div>
  );
};

export default Home3StartBuilding;
