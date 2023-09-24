import React, { useState, useEffect } from "react";
import { UserIcon } from "../../SvgIconsComponents/UserIcon";
import { getDetailedWorkbookData } from "../helper";
import ProgressBar from "../../Dashboard/ProgramsContent/progress";
// import ProgressBar from "../ProgressBar/ProgressBar";

const StudentProgressItem = ({ studentItem, lessonStates, status }) => {
  const [studentItemData, setStudentItemData] = useState(null);
  useEffect(() => {
    const data = getDetailedWorkbookData(studentItem?.attributes, lessonStates);
    setStudentItemData(data);
  }, [lessonStates]);
  const formatStatus = (status) => {
    if (status === "Completed") return "text-success";
    if (status === "In Progress") return "text-brandOrange";
    else return "text-brandBlue";
  };
  return (
    <tr>
      <td className="py-[5px] border-r-[2px] border-lightGray">
        <div className="flex items-center">
          <UserIcon />
          <p className="font-medium text-brandBlueDark text-xs">
            {studentItem?.attributes?.userKey?.data?.attributes?.username}
          </p>
        </div>
      </td>
      <td className="py-[5px] border-r-[2px] border-lightGray">
        <p
          className={`${formatStatus(
            studentItem?.attributes?.status
          )} font-normal text-xs`}
        >
          {studentItem?.attributes?.status && studentItem?.attributes.status}
        </p>
      </td>
      <td className="py-[5px] border-r-[1px] border-lightGray">
        <p className="text-brandBlue font-medium text-xs">
          {studentItemData && studentItemData?.completedChapters} / 11
        </p>
      </td>
      <td className="py-[5px] flex justify-center">
        <ProgressBar
          progressPercentage={
            studentItemData && studentItemData?.completePercentage
          }
          status={studentItemData && studentItemData?.status}
        />
        {/* <ProgressBar
          progressPercentage={
            studentItemData && studentItemData?.completePercentage
          }
        /> */}
      </td>
    </tr>
  );
};

export default StudentProgressItem;