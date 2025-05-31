import React from "react";

type PageHeroProps = {
  heading: string;
  text: string;
};

const PageHero: React.FC<PageHeroProps> = ({ heading, text }) => {
  return (
    <div className="app-section flex flex-col md:flex-row gap-16 md:gap-40">
      <div className="pl-16">
        <h1 className="app-sub-heading">
          {heading.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <p className="text-primary">{text}</p>
      </div>
    </div>
  );
};

export default PageHero;
