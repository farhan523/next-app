import React from "react";
import {
  TimeIcon,
  LeftArrowIcon,
  RightArrowIcon,
  HeroImage,
} from "./programPageIcons";
import ReactMarkdown from "react-markdown";
import InteractiveTeacherGuideComponents from "../../InteractiveTeacherGuideComponents";
import { TeachersGuideData } from "./TeacherGuideData";

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
  const interactiveLessonIds = [1.3, 1.5, 1.8, 1.11, 1.13, 1.15, 3.2, 3.4, 3.6, 4.2, 4.4, 4.6, 5.2, 5.4, 5.6, 6.2, 6.4, 6.6, 7.2, 7.4];

  const chapterTableIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getChapterTitle = (workItem) => {
    if (workItem?.attributes?.tocNumber > 0 && workItem?.attributes?.tocNumber < 12) {
      return `Chapter ${workItem?.attributes?.tocNumber}`;
    }
    return null;
  };

  const renderChapterContent = (chapter) => {
    return chapter.contents.map((content) => (
      <div className={`grid grid-cols-3 border-solid border-l-2 border-r-2 border-t-2 last:border-b-2 border-black`} key={content.title}>
        <div className="border-solid border-r-2 border-black break-words text-center p-4 font-bold">{content.title}</div>
        <div className="col-span-2 p-4">
          <ul>
            {content.description &&
              content.description.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
          </ul>

          {/* {content.description && <p>{content.description}</p>} */}

          <ul className="list-disc list-inside my-1">
            {content.items && (
              <ul>
                {content.items.map((item) => (
                  <li className="list-disc list-inside" key={item}>{item}</li>
                ))}
              </ul>
            )}
          </ul>

          {/* {content.links && (
            <ul>
              {content.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          )} */}

          {/* {content.links && (
            <div>
              <p>{content.links.description}</p>
              <ul>
                {content.links.map((link, index) => {
                  return (
                    <div key={index}>
                      <div>{link.title}</div>

                      <li>
                        <a href={link.url}>{link.text}</a>
                      </li>
                    </div>
                  )
                }
                )}
              </ul>
            </div>
          )} */}

          {content.links && (
            <ul>
              {content.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <p className="font-bold mb-1">{link.title}</p>
                  <ul>
                    {link.urls.map((url, urlIndex) => (
                      <li className="flex flex-col mb-2 underline underline-offset-4 text-brand text-brandBlue font-semibold hover:text-brandBlue break-words" key={urlIndex}>
                        <a href={url.url}>{url.text}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}

          {/* {content.links && (
            <ul>
              {content.links.map((link, index) => (
                <a
                  href={link.url}
                  className="flex flex-col underline underline-offset-4 text-brand text-brandBlue font-semibold hover:text-brandBlue"
                  key={index}
                >
                  {link.text}
                </a>
              ))}
            </ul>
          )} */}



        </div>
      </div >
    ));
  };

  if (chapterTableIds.includes(workItem?.attributes?.tocNumber)) {
    return (
      <div>
        <div className="flex items-center my-5">
          {workItem && <p className="text-[#121212] text-[25px] font-bold">
            {getChapterTitle(workItem)} -
          </p>}

          <h2 className="text-[#121212] text-[25px] font-bold ml-1 ">
            {workItem?.attributes?.title}
          </h2>
        </div>
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
            {workItem?.attributes?.tocNumber == 0 ||
              workItem?.attributes?.tocNumber == 0 ? null : (
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
                  <RightArrowIcon />
                </span>
              </button>
            )}
          </div>
        </div>
        {TeachersGuideData.map((chapter) => (
          workItem?.attributes?.tocNumber === chapter.chapterId ? (
            <div key={chapter.chapterId}>
              {renderChapterContent(chapter)}
            </div>
          ) : null
        ))}
      </div>
    )
  }


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
          <>
            <InteractiveTeacherGuideComponents
              lesson={lessonId}
              handleSubmitForm={handleSubmitForm}
              workBookAPI={workBookAPI}
              onClickNextLesson={onClickNextLesson}
              onClickPrevLesson={onClickPrevLesson}
              prevLesson={prevLesson}
              nextLesson={nextLesson}
            />
          </>
        ) : (
          <>
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
