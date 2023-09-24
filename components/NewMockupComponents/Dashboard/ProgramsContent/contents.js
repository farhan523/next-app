import React from "react";
import {
  TimeIcon,
  LeftArrowIcon,
  RightArrowIcon,
  HeroImage,
} from "./programPageIcons";
import ReactMarkdown from "react-markdown";
import InteractiveWorkbookComponents from "../../InteractiveWorkbookComponents";
const Contents = ({
  lessonId,
  nextLesson,
  prevLesson,
  workItem,
  onClickPrevLesson,
  onClickNextLesson,
  handleSubmitForm,
  workBookAPI,
}) => {
  const interactiveLessonIds = [
    1.1, 2.4, 3.8, 4.5, 5.5, 6.9, 7.6, 8.2, 9.7, 10.8, 11.4, 12.1, 13.5, 13.6,
    13.7, 14.1, 14.2,
  ];
  return (
    <div className="p-4 md:p-9 workbook_page_hero">
      <p className="text-sm font-bold">
        {workItem?.attributes?.tocNumber > 0 &&
        workItem?.attributes?.tocNumber < 12
          ? `Chapter ${workItem?.attributes?.tocNumber}`
          : null}
      </p>
      <h2 className="text-[#121212] text-[25px] font-bold">
        {workItem?.attributes?.title}
      </h2>
      {/* <div className="flex justify-between mt-4">
        <button className="btn flex text-[11px] justify-between bg-[#E5F0F7] rounded-[7px] text-brandBlue py-2 px-3">
          <span className="mr-3 ">
            {" "}
            <TimeIcon />
          </span>{" "}
          5 minutes
        </button>
        <div className="flex">
          {prevLesson && (
            <button
              onClick={onClickPrevLesson}
              className="btn flex text-[11px] justify-between bg-[#E5F0F7] rounded-[7px] text-brandBlue py-2 px-3"
            >
              <span className="mt-1 mr-3">
                {" "}
                <LeftArrowIcon />
              </span>{" "}
              Previous Lesson
            </button>
          )}
          {nextLesson && (
            <button
              onClick={async () => {
                handleSubmitForm();
                onClickNextLesson();
              }}
              className="ml-3 btn text-[11px] flex justify-between bg-[#0067B2] rounded-[7px] text-[#ffffff] py-2 px-3"
            >
              Save & Next Lesson
              <span className="mt-1 ml-3">
                {" "}
                <RightArrowIcon />
              </span>
            </button>
          )}
        </div>
      </div> */}
      {/* <div className="my-6 img">
        <HeroImage />
      </div> */}
      <div className="main_body_content">
        {interactiveLessonIds.includes(lessonId) ? (
          <InteractiveWorkbookComponents
            lesson={lessonId}
            handleSubmitForm={handleSubmitForm}
            workBookAPI={workBookAPI}
            onClickNextLesson={onClickNextLesson}
            onClickPrevLesson={onClickPrevLesson}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
            workItem={workItem}
          />
        ) : (
          <>
            <div className="flex justify-between my-4">
              {workItem?.attributes?.timeRequiredInMinutes ? (
                <button className="btn flex text-[11px] justify-between bg-[#E5F0F7] rounded-[7px] text-brandBlue py-2 px-3">
                  <span className="mr-3 ">
                    {" "}
                    <TimeIcon />
                  </span>{" "}
                  {workItem?.attributes?.timeRequiredInMinutes} minutes
                </button>
              ) : (
                <div></div>
              )}

              <div className="flex">
                {workItem?.attributes?.tocNumber == 0 ||
                workItem?.attributes?.tocNumber == 12 ? null : (
                  <>
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
                  </>
                )}
                {nextLesson && (
                  <button
                    onClick={async () => {
                      // handleSubmitForm();
                      onClickNextLesson();
                    }}
                    className="ml-3 btn text-[11px] flex justify-between bg-[#0067B2] rounded-[7px] text-[#ffffff] py-2 px-3"
                  >
                    Next Lesson
                    {/* <span className="mt-1 ml-3"> */}
                    <span className="ml-3">
                      {" "}
                      {/* {" "} */}
                      <RightArrowIcon />
                    </span>
                  </button>
                )}
              </div>
            </div>
            <ReactMarkdown
              linkTarget={"_blank"}
              children={workItem?.attributes?.body}
            />
          </>
        )}
        {/* <WorkbookChapter6 /> */}
      </div>
    </div>
  );
};

export default Contents;
