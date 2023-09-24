import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import Modal from "react-responsive-modal";
import Arrowleft from "../../SvgIconsComponents/Arrowleft";
import ArrowRight from "../../SvgIconsComponents/ArrowRight";
import UserBigIcon from "../../SvgIconsComponents/UserBigIcon";
import StudentResult from "../StudentResult/StudentResult";
import { UserIcon } from "../../SvgIconsComponents/UserIcon";
// import ProgressBar from "../ProgressBar/ProgressBar";
import ProgressBar from "../../Dashboard/ProgramsContent/progress";
import { getDetailedWorkbookData } from "../helper";
import { toast } from "react-hot-toast";
const StudentModalItem = ({
  open,
  onCloseModal,
  studentItem,
  lessonStates,
  modalItem,
  totalItems,
  handleModalItemState,
  workBookContent,
}) => {
  const [studentItemData, setStudentItemData] = useState(null);
  useEffect(() => {
    const data = getDetailedWorkbookData(studentItem, lessonStates);
    setStudentItemData(data);
  }, [studentItem, modalItem]);

  const closeIcon = (
    <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const formatStatus = (status) => {
    if (status === "Completed") return "text-success";
    if (status === "In Progress") return "text-brandOrange";
    else return "text-brandBlue";
  };
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      closeIcon={closeIcon}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-[100%] w-[90%] overflow-hidden p-4 px04 bg-white rounded-lg">
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-3xl font-bold text-brandBlue ">
                Students Workbook
              </h2>
              <p className="font-medium text-base text-gray">
                Student Progress
              </p>
            </div>
            <div className="flex gap-4 text-center">
              {modalItem > 0 && (
                <div className="bg-brandBlue h-[40px] w-[40px] rounded-full flex justify-center items-center cursor-pointer">
                  <button
                    onClick={() => {
                      let modalState = modalItem;
                      let modifiedModalState = modalState - 1;
                      handleModalItemState(modifiedModalState);
                    }}
                  >
                    <Arrowleft />
                  </button>
                </div>
              )}
              {(modalItem + 1) < totalItems && (
                <div className="bg-brandBlue h-[40px] w-[40px] rounded-full flex justify-center items-center cursor-pointer">
                  <button onClick={() => handleModalItemState(modalItem + 1)}>
                    <ArrowRight />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-12 my-6">
            <div className="flex items-end">
              <div className="mb-1">
                <UserBigIcon />
              </div>
              <div className="text-xl font-semibold ml-3">
              {studentItem?.userKey?.data?.attributes?.username}
              </div>
            </div>
            <table className="w-full">
              <thead className="mb-5">
                <tr className="text-center">
                  <th className="text-gray text-sm font-medium"></th>
                  <th className="text-gray text-sm font-medium pt-3 pb-5">
                    Status
                  </th>
                  <th className="text-gray text-sm font-medium pt-3 pb-5">
                    Chapters Completed
                  </th>
                  <th className="text-gray text-sm font-medium pt-3 pb-5">
                    Start Date
                  </th>
                  <th className="text-gray text-sm font-medium pt-3 pb-5">
                    Completition Date
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="py-[5px] border-r-[2px] border-lightGray">
                    {/* <div className="flex flex-start mb-2">
                      {studentItemData && studentItemData?.completePercentage}%
                      complete
                    </div> */}
                    <ProgressBar
                      progressPercentage={
                        studentItemData && studentItemData?.completePercentage
                      }
                      status={studentItemData && studentItemData?.status}
                    />
                  </td>
                  <td className="py-[5px] border-r-[2px] border-lightGray">
                    {studentItem && studentItem?.status && (
                      <p
                        className={`${formatStatus(
                          studentItem?.status
                        )} font-normal text-xs`}
                      >
                        {studentItem?.status}
                      </p>
                    )}

                    {/* <p className="text-brandOrange font-normal text-xs">
                        In Progress
                      </p> */}
                  </td>
                  <td className="py-[5px] border-r-[1px] border-lightGray">
                    <p className="text-brandBlue font-medium text-xs">
                      {studentItemData && studentItemData?.completedChapters} /
                      11
                    </p>
                  </td>
                  <td className="py-[5px] border-r-[1px] border-lightGray">
                    <p className="text-brandBlue font-medium text-xs">
                      <Moment format="DD/MM/YYYY">
                        {studentItem?.createdAt}
                      </Moment>
                    </p>
                  </td>
                  <td className="py-[5px] border-r-[1px] border-lightGray">
                    {studentItemData &&
                    studentItemData?.status === "Completed" ? (
                      <p className="text-brandBlue font-medium text-xs">
                        <Moment format="DD/MM/YYYY">
                          {studentItem?.updatedAt}
                        </Moment>
                      </p>
                    ) : (
                      <p className="text-brandBlue font-medium text-xs">
                        Not Done
                      </p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-b-[1px] border-gray pt-4"></div>
          <div className="my-6">
            <StudentResult
              workBookContent={workBookContent}
              studentItem={studentItem}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default StudentModalItem;