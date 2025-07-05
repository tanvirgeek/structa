import Image from "next/image";
import React from "react";
import clsx from "clsx";

type ServiceCardProps = {
  imageSrc: string;
  imageAlt: string;
  header: string;
  paragraph: string;
  hasBorder?: boolean;
};

const Home5ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  imageAlt,
  header,
  paragraph,
  hasBorder = false,
}) => {
  return (
    <div
      className={clsx(
        "w-full px-4 py-6 text-left",
        hasBorder && "border-l-2 border-r-2 border-gray-200"
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={100}
        height={100}
        className="mb-4"
      />
      <h6>{header}</h6>
      <p>{paragraph}</p>
    </div>
  );
};

export default Home5ServiceCard;
