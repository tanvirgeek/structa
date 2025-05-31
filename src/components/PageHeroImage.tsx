import React from "react";

type Props = {
  imageUrl: string;
};

const PageHeroImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div
      className="app-section bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default PageHeroImage;
