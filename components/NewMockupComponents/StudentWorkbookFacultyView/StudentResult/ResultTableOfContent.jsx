import React from "react";
import CheckActive from "../../../../components/NewMockupComponents/SvgIconsComponents/CheckActive";
import CheckDisable from "../../../../components/NewMockupComponents/SvgIconsComponents/CheckDisable";

const ArrowDown = () => {
  return (
    <svg width="18" height="11" viewBox="0 0 18 11" fill="none">
      <path
        d="M2.57143 -6.74404e-07L9 6.875L15.4286 -1.12401e-07L18 1.375L9 11L-6.01032e-08 1.375L2.57143 -6.74404e-07Z"
        fill="#B9B9B9"
      />
    </svg>
  );
};

const ResultTableOfContent = ({
  item,
  studentItem,
  itemIndex,
  handleChapterIdState,
  chapter,
}) => {
  let chapterString = `chapter${chapter}`;
  let status = null;
  if (studentItem.hasOwnProperty(chapterString)) {
    status = JSON.parse(studentItem[chapterString]);
  }
  if (status) status = "Completed";
  else status = "In Progress";
  return (
    <div
      className="flex justify-between mt-6 mb-3 cursor-pointer"
      onClick={() => handleChapterIdState(item?.attributes?.tocNumber)}
    >
      <div className="flex gap-6">
        {/* {SCD.img} */}
        {}
        <div className="text-lg font-semibold">
          Chapter {item?.attributes?.tocNumber} - {item?.attributes?.title}
          {/* <span className="text-sm ml-2 font-medium text-gray">
              Self-Reflection
            </span> */}
        </div>
        <div className="text-sm bg-brandBlueLight rounded-lg text-brandBlue py-1 px-6">
          {status}
        </div>
      </div>
      <div className="">
        <ArrowDown />
      </div>
    </div>
  );
};

export default ResultTableOfContent;
