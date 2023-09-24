import React from "react";
import { LeftArrowIcon, RightArrowIcon, TimeIcon } from "./programPageIcons";

const NextPrevLesson = ({
  onClickPrevLesson,
  onClickNextLesson,
  prevLesson,
  nextLesson,
  saveAndContinue,
}) => {
  return (
    <div className="flex justify-between my-4">
      {
        workItem?.attributes?.timeRequiredInMinutes ?
          <button className="btn flex text-[11px] justify-between bg-[#E5F0F7] rounded-[7px] text-brandBlue py-2 px-3">
            <span className="mr-3 ">
              {" "}
              <TimeIcon />
            </span>{" "}
            {workItem?.attributes?.timeRequiredInMinutes} minutes
            {/* 5 minutes */}
          </button> : <div></div>
      }
      <div className="flex">
        {prevLesson && (
          <button
            onClick={onClickPrevLesson}
            className="btn flex text-[11px] justify-between bg-[#E5F0F7] rounded-[7px] text-brandBlue py-2 px-3"
          >
            {/* <span className="mt-1 mr-3"> */}
            <span className="mr-3">
              {" "}
              <LeftArrowIcon />
            </span>{" "}
            Previous Lesson
          </button>
        )}
        {nextLesson && (
          <button
            onClick={onClickNextLesson}
            className="ml-3 btn text-[11px] flex justify-between bg-[#0067B2] rounded-[7px] text-[#ffffff] py-2 px-3"
          >
            {saveAndContinue == false ? "Next Lesson" : "Save & Next Lesson"}
            {/* <span className="mt-1 ml-3"> */}
            <span className="ml-3">
              {" "}
              <RightArrowIcon />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NextPrevLesson;
