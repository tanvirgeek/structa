import React from "react";
import ServiceButtonGroup from "./SerivcesButtonGroup";
import { FaCheck } from "react-icons/fa6";

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
          <h3 className="text-foreground mb-4">
            We ensure dedication at every stage, from construction to management
          </h3>
          <p>
            Crafting spaces that resonate with you through Interior Design.
            Merge fact with aesthetics, creation. Id suspendisse vel in non
            arcu, interdum quis placerat accumsan. InVision is the visual
            collaboration platform powering the world's smartest companies. More
            than 7 million people across global enterprises.
          </p>

          <p className="my-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="flex flex-col md:flex-row">
            <div>
              <h4>
                <span className="text-primary mr-2">01</span>Quality & Reliable
              </h4>
              <p>
                Our building solutions are underpinned by extensive practical
                experience in a variety of industries.
              </p>
            </div>
            <div>
              <h4>
                <span className="text-primary mr-2">02</span>Licensed & Insured
              </h4>
              <p>
                Our building solutions are underpinned by extensive practical
                experience in a variety of industries.
              </p>
            </div>
          </div>

          <h3 className="my-5">Services Include</h3>
          <p>
            Crafting spaces that resonate with you through Interior Design.
            Merge fact with aesthetics, creation. Id suspendisse vel in non
            arcu, interdum quis placerat accumsan. InVision is the visual
            collaboration platform powering the world's smartest companies. More
            than 7 million people across global enterprises.
          </p>

          <h4 className="flex flex-row my-3">
            <FaCheck className="text-primary mr-2" />
            Building the future powered by innovation
          </h4>

          <h4 className="flex flex-row my-3">
            <FaCheck className="text-primary mr-2" />
            Backed by highly skilled workforce
          </h4>

          <h4 className="flex flex-row my-3">
            <FaCheck className="text-primary mr-2" />
            We use only the highest quality materials
          </h4>

          <h4 className="flex flex-row my-3">
            <FaCheck className="text-primary mr-2" />
            Focus on engineering excellence
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBody;
