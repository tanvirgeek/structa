import React from "react";
import RollingNumber from "./RollingNumber";

const TotalProjects = () => {
  return (
    <div className="flex justify-center gap-20 align-middle">
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
  );
};

export default TotalProjects;
