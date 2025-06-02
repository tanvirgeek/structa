import Image from "next/image";
import React from "react";

export interface FeaturedProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FeaturedProject: React.FC<FeaturedProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="max-w-[320px] flex flex-col gap-5">
      {/* Image Container with Hover Zoom */}
      <div className="overflow-hidden w-[320px] h-[320px]">
        <Image
          src={imageSrc}
          alt="Image"
          width={320}
          height={320}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      <h5 className="uppercase font-sans font-bold">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default FeaturedProject;
