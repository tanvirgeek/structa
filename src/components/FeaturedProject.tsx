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
    <div>
      <Image
        src={imageSrc}
        alt="Image"
        width={90}
        height={90}
        className="pb-14"
      />
      <h5 className="uppercase font-sans font-bold mb-3">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default FeaturedProject;
