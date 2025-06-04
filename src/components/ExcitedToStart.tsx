import React from "react";
import Button from "./Button";

const ExcitedToStart = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/excitedToStart.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-white!">Excited to start your</h2>
        <h2 className="text-white!">Next Construct?</h2>
        <div className="flex justify-center mt-4">
          <Button text={"Get A Quote"} />
        </div>
      </div>
    </div>
  );
};

export default ExcitedToStart;
