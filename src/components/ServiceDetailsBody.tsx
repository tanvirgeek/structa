import React from "react";
import ServiceButtonGroup from "./SerivcesButtonGroup";

const ServiceDetailsBody = () => {
  return (
    <div className="app-section container mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left 1/3 */}
        <div className="md:w-1/3 w-full">
          <ServiceButtonGroup />
        </div>

        {/* Right 2/3 */}
        <div className="md:w-2/3 w-full">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Right Section
          </h2>
          <p className="text-muted-foreground">
            This is the right 2/3rd section. Use this space for primary content
            — maybe a hero video, form, image grid, or animation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBody;
