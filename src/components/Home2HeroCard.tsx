import Image from "next/image";
import React from "react";
import clsx from "clsx";

type CommentBlockProps = {
  imageSrc: string;
  imageAlt: string;
  header: string;
  paragraph: string;
  hasBorder?: boolean;
};

const Home2HeroCard: React.FC<CommentBlockProps> = ({
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
        hasBorder && "border-l-2 border-r-2 border-gray-300"
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={100}
        height={100}
        className="mb-4"
      />
      <h6 className="!text-background">{header}</h6>
      <p className="!text-background">{paragraph}</p>
    </div>
  );
};

export default Home2HeroCard;
