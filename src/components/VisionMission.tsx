import React from "react";

const VisionMission = () => {
  return (
    <div className="mt-10 lg:mt-0 relative flex w-full lg:w-[70%] bg-black text-white justify-center mx-auto p-5 lg:-top-10">
      <div className="flex w-full max-w-4xl items-stretch">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-start px-6">
          <h2 className="text-white! text-xl font-semibold mb-2">OUR VISION</h2>
          <p>
            Our building solutions are underpinned by extensive practical
            experience in a variety of industries.
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] bg-white" />

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-center items-start px-6">
          <h2 className="text-white! text-xl font-semibold mb-2">
            OUR MISSION
          </h2>
          <p>
            Our building solutions are underpinned by extensive practical
            experience in a variety of industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
