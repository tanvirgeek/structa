import Image from "next/image";
import React from "react";
import Button from "./Button";

const Commitment = () => {
  return (
    <div>
      <div className="container flex mx-auto pt-5 md:pt-20 flex-col md:flex-row gap-3 px-4 md:px-0">
        <div className="w-full md:w-[50%] aspect-square relative">
          <Image
            src="/commitment.png"
            alt="Commitment"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col w-full  md:w-[50%] pt-6 justify-center gap-3">
          <h6>Our Commitment</h6>
          <h1>We embrace the uniqueness of every single project</h1>
          <p>
            Construction is a premier construction company dedicated to
            delivering exceptional projects characterized by quality,
            innovation, and client satisfaction. With a strong foundation built
            on years of industry expertise.
          </p>

          <span>
            <Button text="More About" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
