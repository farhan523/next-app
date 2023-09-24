import React, { useState } from "react";
import StudentsChapData from "./StudentsChapData";

const StudentResult = ({workBookContent, studentItem}) => {
  return (
    <div className="work_Result h-[50vh] overflow-y-auto relative p-2">
      <h2 className="text-3xl font-bold text-brandBlue ">Workbook Results</h2>
      <p className="font-medium text-base text-gray">Chapters answers</p>
      <StudentsChapData workBookContent={workBookContent} studentItem={studentItem} />
    </div>
  );
};

export default StudentResult;
