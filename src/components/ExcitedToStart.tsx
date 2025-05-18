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
        <h1 className="text-4xl font-semibold text-white!">
          Excited to start your
        </h1>
        <h1 className="text-4xl font-semibold mb-4 text-white!">
          Next Construct?
        </h1>
        <Button text={"Get A Quote"} />
      </div>
    </div>
  );
};

export default ExcitedToStart;
