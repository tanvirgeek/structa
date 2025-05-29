import React from "react";
import clsx from "clsx";
import RollingNumber from "./RollingNumber";

interface TotalProjectsProps {
  isVertical?: boolean;
}

const TotalProjects: React.FC<TotalProjectsProps> = ({
  isVertical = false,
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
          <RollingNumber target={630} />
          <h3>Engineering Experts</h3>
        </div>

        <div className="flex flex-col items-center">
          <RollingNumber target={1400} />
          <h3>Successful Projects Done</h3>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <RollingNumber target={98} />
            <span>%</span>
          </div>
          <h3>Client Satisfaction</h3>
        </div>
      </div>
    </div>
  );
};

export default TotalProjects;
