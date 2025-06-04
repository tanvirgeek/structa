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
          <h4>Engineering Experts</h4>
        </div>

        <div className="flex flex-col items-center">
          <RollingNumber target={1400} />
          <h4>Successful Projects Done</h4>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <RollingNumber target={98} />
            <span>%</span>
          </div>
          <h4>Client Satisfaction</h4>
        </div>
      </div>
    </div>
  );
};

export default TotalProjects;
