import Image from "next/image";
import React from "react";

export interface ServiceProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const Service: React.FC<ServiceProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="border border-gray-300 min-w-[300px] p-3">
      <Image
        src={imageSrc}
        alt="Image"
        width={90}
        height={90}
        className="pb-14"
      />
      <h5 className="uppercase font-sans font-bold mb-3">{title}</h5>
      <p>{description}</p>
      <p className="underline font-semibold mt-3 cursor-pointer">
        view details
      </p>
    </div>
  );
};
