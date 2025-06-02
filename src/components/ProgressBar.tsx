import React from "react";

interface ProgressBarProps {
  label: string;
  value: number; // percentage: 0–100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  return (
    <div>
      {/* Label */}
      <div className="mb-1 text-sm font-medium text-gray-800">{label}</div>

      {/* Bar Track */}

      {/* Filled Bar */}
      <div className="flex gap-2">
        <div
          className="h-2 bg-primary rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        >
          {/* Percentage on Right of Bar */}
        </div>
        <span className="text-sm text-gray-700 inline-block relative -top-2">
          {value}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
