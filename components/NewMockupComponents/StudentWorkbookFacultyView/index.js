import React, { useState, useEffect } from "react";
import CurriculumProgress from "./CurriculumProgress/CurriculumProgress";
import StudentProgress from "./StudentProgress/StudentProgress";
import StudentsData from "./StudentsData/StudentsData";
import ReactPaginate from "react-paginate";
import jsPDF from "jspdf";
import "jspdf-autotable";

const WorkBook = ({
  studentWorkbookReports,
  workBookContent,
  universities,
}) => {
  const [lessonStatesLength, setLessonStatesLength] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [allStudentWorkbookReports, setAllStudentWorkbookReports] = useState(
    []
  );

  const PER_PAGE = 5;

  useEffect(() => {
    if (studentWorkbookReports) {
      const allReports = studentWorkbookReports.data;
      setAllStudentWorkbookReports(allReports);
    }
  }, [studentWorkbookReports]);

  useEffect(() => {
    let lessonStates = [];
    workBookContent &&
      workBookContent?.data?.map((item) => {
        lessonStates.push({ toc: item?.attributes?.tocNumber, tocData: item });
        item?.attributes?.chapter_lessons?.data?.map((nestedItem) => {
          lessonStates.push({
            toc: nestedItem?.attributes?.tocNumber,
            tocData: nestedItem,
          });
        });
      });

    setLessonStatesLength(lessonStates?.length);
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = studentWorkbookReports?.data.slice(
    offset,
    offset + PER_PAGE
  );

  const pageCount = Math.ceil(studentWorkbookReports?.data?.length / PER_PAGE);

  return (
    <div className="workbook w-full m-6">
      <div className="flex justify-between">
        {/* <h2 className="text-4xl font-bold text-brandBlue ">
          Students Workbook
        </h2> */}
        <h2 className="mt-5 text-3xl font-semibold text-brandBlack md:mt-0">
          Students Workbook
        </h2>
        {/*<div className="block text-center ">
          <p className="font-bold text-sm text-brandBlue">March</p>
          <span className="text-xs text-brandBlack">30/2023</span>
        </div>*/}
      </div>
      <div className="grid grid-cols-3 gap-8 my-10">
        <div className="bg-brandBlueLight px-6 py-3 rounded-lg max-h-52">
          <CurriculumProgress />
        </div>
        <div className="col-span-2 bg-brandBlueLight px-6 py-3 rounded-lg">
          {lessonStatesLength && (
            <StudentProgress
              studentWorkbookReports={studentWorkbookReports}
              lessonStates={lessonStatesLength}
            />
          )}
        </div>
      </div>
      <div className="">
        {lessonStatesLength && (
          <StudentsData
            studentWorkbookReports={currentPageData}
            lessonStates={lessonStatesLength}
            workBookContent={workBookContent}
            universities={universities}
            allStudentWorkbookReports={allStudentWorkbookReports}
          />
        )}
      </div>
      <div style={{ margin: "20px auto", width: "50%", padding: "10px" }}>
        <div className="w-full flex justify-center">
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkBook;
