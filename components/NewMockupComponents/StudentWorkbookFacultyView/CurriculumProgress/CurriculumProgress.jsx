import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const generateGraphValues = (results) => {
  let inProgress = results?.data?.filter(workbook => {
    return workbook?.attributes?.status === "In Progress"
  })

  let completed = results?.data?.filter(workbook => {
    return workbook?.attributes?.status === "Completed"
  })


  
  return {
    inProgress: Math.round((inProgress?.length / results?.data?.length) * 100),
    completed:  Math.round((completed?.length / results?.data?.length) * 100),
  }

}

const CurriculumProgress = ({studentWorkbookReports}) => {
  const dynamicGraphValues = generateGraphValues(studentWorkbookReports);
  if(dynamicGraphValues || dynamicGraphValues?.completed || dynamicGraphValues?.inProgress) {
    return (
      <div>
        <h2 className="text-brandBlue text-base	font-medium	">
          Curriculum Progress
        </h2>
        <div className="flex items-center justify-between my-6 ">
          <div className="w-[120px] h-[120px]">
              <PieChart
                data={[
                  { title: "Completed", value: dynamicGraphValues?.completed, color: "#41DC68" },
                  { title: "In Progress", value: dynamicGraphValues?.inProgress, color: "#fa9359" },
                ]}
              />
          </div>
          <div className="relative pl-8">
            <p className="before:flex before:content-[''] before:bg-success before:h-2 before:w-2 before:rounded-full before:absolute before:left-[-20px] before:top-[7px]">
              Completed
            </p>
            <p className="before:flex before:content-[''] before:bg-brandOrange before:h-2 before:w-2 before:rounded-full before:absolute before:left-[-20px] before:top-[33px]">
              In progress
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>
  }
 
};

export default CurriculumProgress;