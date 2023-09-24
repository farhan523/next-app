import React from "react";

const ProgressBar = ({ blue, orange, green, percent, percentageWidth }) => {
  return (
    <div className="flex items-center">
      <div className="relative w-32 bg-gray h-1 rounded">
        <div
          className={`w-28 before:content-[''] before:w-24 before:${
            blue
              ? "bg-brandBlue"
              : orange
              ? "bg-brandOrange"
              : green
              ? "bg-success"
              : ""
          } before:h-1 before:left-0 before:absolute rounded`}
        ></div>
      </div>
      {percent && (
        <div className="ml-2 text-brandBlue font-medium text-xs">
          {percent}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
