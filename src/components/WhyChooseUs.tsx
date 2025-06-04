import React from "react";
import ToggleDetail from "./ToggleDetail";
import TestimonialSlider from "./TestimonialSlider";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="app-section container flex flex-col md:flex-row gap-10 md:gap-3 px-4 md:px-0 justify-between">
        <div>
          <h6>why choose us</h6>
          <h2>Where trust</h2>
          <h2>meets excellence</h2>
        </div>
        <div className="w-full md:w-[50%] pb-10">
          <ToggleDetail
            title="Quality craftsmanship"
            description="Our team of skilled professionals embraces technologies and methodologies to enhance efficiency, minimize impact optimize project outcomes. Designing, streamlining construction processes or integrating smart solutions."
          />
          <ToggleDetail
            title="Client-centered approach"
            description="Our team of skilled professionals embraces technologies and methodologies to enhance efficiency, minimize impact optimize project outcomes. Designing, streamlining construction processes or integrating smart solutions."
          />
          <ToggleDetail
            title="Safety comes first"
            description="Our team of skilled professionals embraces technologies and methodologies to enhance efficiency, minimize impact optimize project outcomes. Designing, streamlining construction processes or integrating smart solutions."
          />
          <ToggleDetail
            title="Sustainable practices"
            description="Our team of skilled professionals embraces technologies and methodologies to enhance efficiency, minimize impact optimize project outcomes. Designing, streamlining construction processes or integrating smart solutions."
          />
        </div>
      </div>
      <TestimonialSlider />
    </div>
  );
};

export default WhyChooseUs;
