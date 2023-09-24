import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { UserIcon } from "../../SvgIconsComponents/UserIcon";
import ProgressBar from "../../Dashboard/ProgramsContent/progress";
// import ProgressBar from "../ProgressBar/ProgressBar";
import { getDetailedWorkbookData } from "../helper";

const StudentDataItem = ({
  studentItem,
  lessonStates,
  onOpenModal,
  itemIndex,
}) => {
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
    <tr className="h-16 border-t-[1px] border-lightGray">
      <td className="py-[5px]">
        <div className="flex items-center">
          <UserIcon />
          <p className="font-semibold text-brandBlueDark text-sm">
            {studentItem?.attributes?.userKey?.data?.attributes?.username}
          </p>
        </div>
      </td>
      <td className="py-[8px]">
        {studentItem?.attributes?.status && (
          <p className={formatStatus(studentItem?.attributes?.status)}>
            {studentItem?.attributes?.status}
          </p>
        )}
      </td>
      <td>
        <Moment format="DD/MM/YYYY">
          {studentItem?.attributes?.createdAt}
        </Moment>
      </td>
      {studentItemData && studentItemData?.status === "Completed" ? (
        <td>
          <Moment format="DD/MM/YYYY">
            {studentItem?.attributes?.updatedAt}
          </Moment>
        </td>
      ) : (
        <td>Not Done</td>
      )}
      <td>{studentItemData && studentItemData?.completedChapters} / 11</td>

      <td>
        <ProgressBar
          progressPercentage={studentItemData?.completePercentage}
          status={studentItemData?.status}
        />
      </td>
      <td className=" py-4 flex justify-end">
        <button
          className="bg-brandBlue  py-2 px-4 text-white rounded-lg"
          onClick={() => onOpenModal(itemIndex)}
        >
          View Workbook
        </button>
      </td>
    </tr>
  );
};

export default StudentDataItem;