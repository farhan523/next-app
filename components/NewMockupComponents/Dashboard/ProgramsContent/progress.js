
import React from 'react'

const ProgressBar = ({ progressPercentage, status }) => {
    const formatStatus = (stat) => {
        if (stat === "Completed") return "bg-success";
        if (stat === "In Progress") return "bg-brandOrange";
        else return "bg-brandBlue";
      };
    return (
        <div className="w-[148px] flex gap-3">
          <div className="w-[100px] h-1 bg-gray rounded-[2px] mt-2">
            <div
              style={{ width: `${progressPercentage}%` }}
              className={`h-full ${formatStatus(status)} rounded-[2px]`}
            ></div>
          </div>
          <div className="text-sm">{progressPercentage}%</div>
        </div>
      );
};

export default ProgressBar