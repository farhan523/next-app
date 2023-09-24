import React, { useState, useEffect } from "react";
import ProgressBar from "./progress";
import TableContent from "./tableContent";
import Contents from "./contents";
import {
  storeTeacherGuideWorkbookResponse,
  getTeachersGuideByUser,
} from "../../../../lib/api";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getCurrentUser } from "../../../../store/user.reducer";
const ProgramsContent = ({ teachersGuideContent, userId }) => {
  const router = useRouter();
  const [chapterId, setChapterId] = useState(
    router.query.chapterId ? parseInt(router.query.chapterId) : 0
  );
  const [lessonId, setLessonId] = useState(
    router.query.lessonId ? parseFloat(router.query.lessonId) : null
  );
  const [nextLesson, setNextLessonId] = useState(true);
  const [prevLesson, setPrevLessonId] = useState(false);
  const [workItem, setWorkItem] = useState(null);
  const [totalChapter, setTotalChapter] = useState(null);
  const [lessonStates, setLessonStates] = useState(null);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [unlockedLessons, setUnLockedLessons] = useState([
    0, 1, 12, 12.1, 13, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 14, 14.1,
    14.2,
  ]);
  const [workBookAPI, setWorkBookAPI] = useState(null);
  const interactiveLessonIds = [
    1.3, 1.5, 1.8, 1.11, 1.13, 1.15, 3.2, 3.4, 3.6, 4.2, 4.4, 4.6, 5.2, 5.4,
    5.6, 6.2, 6.4, 6.6, 7.2, 7.4,
  ];
  const completePercentage = parseInt(
    ((completedLessons && completedLessons.length) /
      (totalChapter && totalChapter.length)) *
      100
  );

  useEffect(() => {
    let lessonStates = [];
    teachersGuideContent &&
      teachersGuideContent?.data?.map((item) => {
        lessonStates.push({ toc: item?.attributes?.tocNumber, tocData: item });
        item?.attributes?.chapter_lessons?.data?.map((nestedItem) => {
          lessonStates.push({
            toc: nestedItem?.attributes?.tocNumber,
            tocData: nestedItem,
          });
        });
      });
    let totalChapters = lessonStates.filter(
      (item) => item.toc > 0 && item.toc < 12
    );
    setTotalChapter(totalChapters);
    setLessonStates(lessonStates);
    function findWorkbook(lessonId, chapterId, workbooks) {
      for (let i = 0; i < workbooks.length; i++) {
        const workbook = workbooks[i];
        if (workbook.attributes.tocNumber === chapterId) {
          const chapterLessons = workbook.attributes.chapter_lessons.data;
          for (let j = 0; j < chapterLessons.length; j++) {
            const chapterLesson = chapterLessons[j];
            if (chapterLesson.attributes.tocNumber === lessonId) {
              return workbook.attributes.chapter_lessons.data[j];
            }
          }
        }
      }
      return null;
    }
    const foundWorkbook = findWorkbook(
      lessonId,
      chapterId,
      teachersGuideContent?.data
    );
    if (foundWorkbook && lessonId && chapterId) {
      setWorkItem(foundWorkbook);
    } else {
      setWorkItem(teachersGuideContent?.data[0]);
    }
    (async () => {
      try {
        const workBookReportByUser = await getTeachersGuideByUser(userId);
        if (
          workBookReportByUser &&
          workBookReportByUser?.data &&
          workBookReportByUser?.data.length > 0
        ) {
          let workBookReportItem = workBookReportByUser?.data[0].attributes;
          let completedLessonsAPI = workBookReportItem.completedLessons
            ? JSON.parse(workBookReportItem.completedLessons)
            : [];
          let unlockedLessonsAPI = JSON.parse(
            workBookReportItem.unlockedLessons
          );
          if (!Array.isArray(completedLessonsAPI)) {
            // If parsed value is not an array, create a new array with the value
            completedLessonsAPI = [completedLessonsAPI];
          }
          setCompletedLessons(completedLessonsAPI);
          setWorkBookAPI(workBookReportItem);
        }
      } catch (err) {
        console.log("Error occured while updating workbook");
      }
    })();
  }, []);
  useEffect(() => {
    if (lessonIndex === 0) setPrevLessonId(false);
    else setPrevLessonId(true);
    if (lessonIndex === 68) setPrevLessonId(false);
    else setNextLessonId(true);

    //  if(interactiveLessonIds.includes(lessonId)) {
    //   setNextLessonId(false);
    //  } else {
    //   setNextLessonId(true)
    //  }
  }, [lessonIndex]);

  // useEffect(() => {
  //   const workItem =
  //     mode === "chapter"
  //       ? workBookContent && workBookContent?.data[chapterId - 1]
  //       : getLessonId(lessonId);
  //   setWorkItem(workItem);
  // }, [chapterId, lessonId]);

  const onClickChapter = (id) => {
    setChapterId(id);
    let workItem = lessonStates.filter((item) => item.toc === id);
    setWorkItem(workItem[0]?.tocData);
    let index = lessonStates.findIndex((item) => item.toc === id);
    setLessonIndex(index);
    if (id !== 1) setPrevLessonId(true);
    setNextLessonId(true);
    // setChapterId(id);
    setLessonId(null);
    // if (id !== 1) setPrevLessonId(Math.round((id - 1 + 0.1) * 10) / 10);
    // else setPrevLessonId(null);
    // let newLessonId = Math.round((id + 0.1) * 10) / 10;
    // let isLessonIdExists = getLessonId(newLessonId);
    // setNextLessonId(newLessonId);
    // setActiveMode("chapter");
  };

  const onClickLesson = (id) => {
    setLessonId(id);
    let workItem = lessonStates.filter((item) => item.toc === id);
    setWorkItem(workItem[0]?.tocData);
    let index = lessonStates.findIndex((item) => item.toc === id);
    setLessonIndex(index);
    // let newLessonId = Math.round((id + 0.1) * 10) / 10;
    // let isLessonIdExists = getLessonId(newLessonId);
    // if (isLessonIdExists) setNextLessonId(newLessonId);
    // setActiveMode("lesson");
  };

  const handleSubmitForm = async (name, values, status) => {
    // props.e.preventDefault();
    let dataObj = {
      userId,
      chapter: name,
      values,
      status: workBookAPI?.status == "Completed" ? "Completed" : status,
    };
    const workBookAPIResponse = await storeTeacherGuideWorkbookResponse(
      dataObj
    );
    if (
      workBookAPIResponse &&
      workBookAPIResponse?.data &&
      workBookAPIResponse?.data?.data
    ) {
      let workBookReportItem = workBookAPIResponse?.data?.data?.attributes;
      setWorkBookAPI(workBookReportItem);
    }
    // event.preventDefault();
    // let jsonSchema = JSON.stringify(inputValues);
  };

  const onClickNextLesson = async (lastLesson) => {
    // Check if component is interactive or not
    // If interactive, submit the form
    if (lastLesson == true) {
    } else {
      if (interactiveLessonIds.includes(lessonId)) {
        // setNextLessonId(false);

        handleSubmitForm();
      }
    }
    // API connection
    const currentWorkItem = lessonStates[lessonIndex];

    let nextIndex = lastLesson ? lessonIndex + 0 : lessonIndex + 1;
    let workItem = lessonStates[nextIndex];
    let newCompletedLessons = [];
    let newUnlockedLessons = [];

    if (!completedLessons?.includes(currentWorkItem.toc)) {
      if (currentWorkItem.toc > 0 && currentWorkItem.toc < 12) {
        newCompletedLessons = [...completedLessons, currentWorkItem.toc];
        setCompletedLessons([...completedLessons, currentWorkItem.toc]);
      }
      newUnlockedLessons = [...unlockedLessons, workItem.toc];
      setUnLockedLessons([...unlockedLessons, workItem.toc]);
    }
    setWorkItem(workItem.tocData);
    setLessonId(workItem.toc);
    let isChapterId = parseInt(workItem.toc);
    if (isChapterId !== chapterId) setChapterId(parseInt(workItem.toc));
    setLessonIndex(nextIndex);
    setPrevLessonId(true);

    (async () => {
      try {
        // await async "fetchBooks()" function
        let compLessons = newCompletedLessons.filter(
          (item) => item > 0 && item < 12
        );
        let completedLessonsJSON = JSON.stringify(compLessons);
        let unlockedLessonsJSON = JSON.stringify(newUnlockedLessons);
        let dataObj = {
          completedLessonsJSON,
          unlockedLessonsJSON,
          userId,
        };
        const workBookReport =
          userId && (await storeTeacherGuideWorkbookResponse(dataObj));
      } catch (err) {
        console.log("Error occured while updating workbook");
      }
    })();
    // let newLessonId = Math.round((lessonId + 0.1) * 10) / 10;
    // let isLessonIdExists = getLessonId(newLessonId);
    // if (isLessonIdExists) {
    //   // onClickLesson(newLessonId);
    //   setNextLessonId(newLessonId);
    // } else {
    //   setActiveMode("chapter");
    //   onClickChapter(chapterId + 1);
    //   let newLessonId2 = Math.round((chapterId + 1 + 0.1) * 10) / 10;
    //   onClickLesson(newLessonId2);
    // }
  };

  const onClickPrevLesson = () => {
    let nextIndex = lessonIndex - 1;
    let workItem = lessonStates[nextIndex];
    setWorkItem(workItem.tocData);
    setLessonId(workItem.toc);
    let isChapterId = parseInt(workItem.toc);
    if (isChapterId !== chapterId) setChapterId(parseInt(workItem.toc));
    setLessonIndex(nextIndex);

    // setNextLessonId(lessonId);
    // let newLessonId = Math.round((lessonId - 0.1) * 10) / 10;
    // let isLessonIdExists = getLessonId(newLessonId);
    // if (isLessonIdExists) {
    //   onClickLesson(newLessonId);
    // } else {
    //   onClickChapter(chapterId - 1);
    //   let newLessonId2 = Math.round((chapterId - 1 + 0.1) * 10) / 10;
    //   onClickLesson(newLessonId2);
    // }
  };

  // So JSON object can hold the completed lessons of a particular chapter, it includes
  // interactive components
  // For e.g
  // let chapter1Schema = {completedLessons : [1.1], completedChapter: true/false, answers: [{}]}

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="bg-[#F8FCFF] min-h-[100vh]">
            <div className="p-5">
              <h3 className="text-[#363F48] text-[17px] font-bold">
                Teacher's Guide
              </h3>
              <p className="text-[#718397] text-[10px] font-normal">
                {" "}
                Overview{" "}
              </p>
              <div className="flex justify-between mt-4">
                <div className="">
                  <p className="text-[#FF6857] text-xs font-medium">
                    {completePercentage}% Completed
                  </p>
                </div>
                {/* <p className="text-[#718397] text-xs font-medium">
                  1 out of 10
                </p> */}
              </div>
              <ProgressBar progressPercentage={completePercentage} />
              <div className="mt-[49px]">
                <h2 className="text-[#363F48] text-[17px] font-bold">
                  Table Of Content
                </h2>
              </div>
            </div>
            <div className="table_contents_scroll mt-[11px]">
              {teachersGuideContent &&
                teachersGuideContent?.data &&
                teachersGuideContent.data.map((item, key) => {
                  return (
                    <TableContent
                      item={item}
                      key={key}
                      onClickChapter={onClickChapter}
                      onClickLesson={onClickLesson}
                      lessonId={lessonId}
                      chapterId={chapterId}
                      completedLessons={completedLessons}
                      unlockedLessons={unlockedLessons}
                    />
                  );
                })}
            </div>
          </div>
          <div className="col-span-3">
            <Contents
              lessonId={lessonId}
              nextLesson={nextLesson}
              prevLesson={prevLesson}
              onClickNextLesson={onClickNextLesson}
              onClickPrevLesson={onClickPrevLesson}
              workItem={workItem}
              handleSubmitForm={handleSubmitForm}
              workBookAPI={workBookAPI}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsContent;
