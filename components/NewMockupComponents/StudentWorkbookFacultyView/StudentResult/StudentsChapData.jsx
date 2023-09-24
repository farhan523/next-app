import React, { useState } from "react";
import { StudentCourseData } from "../../../../static/data";
import ResultTableOfContent from "./ResultTableOfContent";
import WorkbookChapter1 from "../../InteractiveWorkbookComponents/WorkbookChapter1";
import InteractiveWorkbookComponents from '../../InteractiveWorkbookComponents';
const StudentsChapData = ({ workBookContent, studentItem }) => {
  const [accordian, setAccordian] = useState(false);
  const [chapterId, setChapterId] = useState(null)


  const handleChapterIdState = (id) => {
    if(chapterId === id) {
      setAccordian(false);
      setChapterId(null);
    } else {
      setAccordian(true)
      setChapterId(id);
    }
  
  }

  return (
    <>
      {workBookContent &&
        workBookContent?.data &&
        workBookContent.data.map((item, index) => {
          return (
            <div key={index}>
              <ResultTableOfContent
                item={item}
                studentItem={studentItem}
                handleChapterIdState={handleChapterIdState}
                itemIndex={index}
                chapter={item?.attributes?.tocNumber}
              />
              {accordian === true && item?.attributes?.tocNumber === chapterId && <InteractiveWorkbookComponents workBookAPI={studentItem} view="faculty" chapter={item?.attributes?.tocNumber}/> }
              <div className="border-b-2 border-gray pb-2"></div>
            </div>
          );
        })}
      {/* {StudentCourseData.map((SCD) => {
        return (
          <div key={SCD.id}>
            <div
              className="flex justify-between mt-6 mb-3 cursor-pointer"
              onClick={DisplayContent}
            >
              <div className="flex gap-6">
                {SCD.img}
                <div className="text-lg font-semibold">
                  {SCD.title}
                  <span className="text-sm ml-2 font-medium text-gray">
                    Self-Reflection
                  </span>
                </div>
                <div className="text-sm bg-brandBlueLight rounded-lg text-brandBlue py-1 px-6">
                  Completed
                </div>
              </div>
              <div className="">
                <ArrowDown />
              </div>
            </div>
            {showContent && <h2>HELLO</h2>}
            <div className="border-b-2 border-gray pb-2"></div>
          </div>
        );
      })} */}
    </>
  );
};

export default StudentsChapData;
