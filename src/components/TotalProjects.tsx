import React from "react";
import clsx from "clsx";
import RollingNumber from "./RollingNumber";

interface TotalProjectsProps {
  isVertical?: boolean;
  numberStyle?: string; // New prop for number styling
}

const TotalProjects: React.FC<TotalProjectsProps> = ({
  isVertical = false,
  numberStyle = "text-4xl text-orange-500", // Default style for numbers
}) => {
  return (
    <div className="app-section">
      <div
        className={clsx(
          "flex flex-col justify-center gap-5 md:gap-20 align-middle",
          {
            "md:flex-col": isVertical,
            "md:flex-row": !isVertical,
          }
        )}
      >
        <div className="flex flex-col items-center">
          <RollingNumber target={630} className={numberStyle} />
          <h4>Engineering Experts</h4>
        </div>

        <div className="flex flex-col items-center">
          <RollingNumber target={1400} className={numberStyle} />
          <h4>Successful Projects Done</h4>
        </div>

        <div className="flex flex-col items-center">
          <div className={clsx("flex items-center", numberStyle)}>
            <RollingNumber target={98} className={numberStyle} />
            <span>%</span>
          </div>
          <h4>Client Satisfaction</h4>
        </div>
      </div>
    </div>
  );
};

export default TotalProjects;
