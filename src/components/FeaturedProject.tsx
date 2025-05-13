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
    <div className="max-w-[320px]">
      <Image
        src={imageSrc}
        alt="Image"
        width={320}
        height={320}
        className="pb-14"
      />
      <h5 className="uppercase font-sans font-bold mb-3">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default FeaturedProject;
