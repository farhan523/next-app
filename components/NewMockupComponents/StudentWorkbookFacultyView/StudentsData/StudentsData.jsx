import React, { useEffect, useState, useRef } from "react";
import { ArrowDown } from "../../SvgIconsComponents/ArrowDown";
import { UserIcon } from "../../SvgIconsComponents/UserIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import OrangeButton from "../../OrangeButton";
import { ExportIcon } from "../../SvgIconsComponents/ExportIcon";
import Modal from "react-responsive-modal";
import Arrowleft from "../../SvgIconsComponents/Arrowleft";
import ArrowRight from "../../SvgIconsComponents/ArrowRight";
import UserBigIcon from "../../SvgIconsComponents/UserBigIcon";
import StudentResult from "../StudentResult/StudentResult";
import StudentDataItem from "./StudentDataItem";
import StudentModalItem from "./StudentModalItem";
import { fetchAPI } from "../../../../lib/api";
import { useRouter } from "next/router";
import { getCurrentUser } from "../../../../store/user.reducer";
import { useSelector } from "react-redux";
import Logo from "../../../../static/allLogo/fleischer_logo.svg";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ExcelExport from "./ExcelExport";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import { exportQuestionsData } from "./exportQuestionsData";
import { getDetailedWorkbookData } from "../helper";
import { CSVLink } from "react-csv";
const StudentsData = ({
  studentWorkbookReports,
  lessonStates,
  workBookContent,
  universities,
  allStudentWorkbookReports,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportStatus, setExportStatus] = useState(null);
  const [exportUniversityId, setExportUniveristyId] = useState(null);
  const [exportableDataState, setExportableData] = useState(null);
  const [dataByType, setExportDataByType] = useState(null);
  const currentUser = useSelector(getCurrentUser);
  // Function to fetch the filtered data from the API
  const csvLinkRef = useRef(null);
  const generateData = (studentsData) => {
    let exportableData = [];
    studentsData &&
      studentsData?.map((student) => {
        let answerResponses = [];
        const studentDetailedData = getDetailedWorkbookData(student.attributes);
        let initialValues = {
          studentName: student?.attributes?.userKey?.data?.attributes?.username,
          status: student?.attributes?.status,
          chaptersCompleted: studentDetailedData?.completedChapters,
          progress: studentDetailedData?.completePercentage,
        };
        exportableData.push(initialValues);
        for (let i = 1; i < 14; i++) {
          let chapterResponse = student?.attributes["chapter" + i];
          let validJSON = false;
          if (chapterResponse !== null) {
            try {
              JSON.parse(chapterResponse);
              validJSON = true;
            } catch (e) {
              validJSON = false;
            }
            if (validJSON && JSON.parse(chapterResponse) !== null) {
              chapterResponse = JSON.parse(chapterResponse);
              for (let [key, value] of Object.entries(chapterResponse)) {
                let responseObject = {};
                responseObject.key = key;
                responseObject.value = value;

                answerResponses.push(responseObject);
              }
            }
          }
        }
        exportQuestionsData.map((questionData) => {
          const typeOfQuestionKey = typeof questionData.key;
          let foundKey;
          if (typeOfQuestionKey !== "string") {
            questionData.key.map((questionKey, index) => {
              foundKey = answerResponses.find(
                (answer) => answer.key === questionKey.key
              );
              let excelRow = {};
              if (foundKey && index === 0) {
                excelRow.chapterNo = questionData.chapterNo;
                excelRow.questionNo = questionData.questionNo;
                excelRow.questionText = questionData.questionText;
                excelRow.studentResponse = foundKey.value;
                exportableData.push(excelRow);
              } else if (foundKey) {
                excelRow.studentResponse = foundKey?.value
                  ? foundKey.value
                  : "";
                exportableData.push(excelRow);
              }
            });
          } else {
            foundKey = answerResponses.find(
              (answer) => answer.key === questionData.key
            );
            if (foundKey) {
              let excelRow = {};
              excelRow.chapterNo = questionData.chapterNo;
              excelRow.questionNo = questionData.questionNo;
              excelRow.questionText = questionData.questionText;
              excelRow.studentResponse = foundKey.value;
              exportableData.push(excelRow);
            }
          }
        });
      });

    setExportableData(exportableData);

    return exportableData;

    // for (let i=1; i < 14; i++) {
    //   let chapterResponse = demoStudent['chapter' + i];
    //   if(chapterResponse !== null) {
    //     chapterResponse = JSON.parse(chapterResponse);
    //     let temporaryQuestionNo = 0;
    //     for (let [key, value] of Object.entries(chapterResponse)) {
    //       temporaryQuestionNo

    //   }
    // }
  };

  function handleExportPDF() {
    const pdf = new jsPDF({
      orientation: "l",
      unit: "pt",
      format: "a4",
    });

    const exportPdfTableData = [];
    exportableDataState.forEach((data) => {
      const row = [
        data.studentName,
        data.status,
        data.startDate,
        data.chaptersCompleted,
        data.progress,
        data.chapterNo,
        data.questionNo,
        data.questionText,
        data.studentResponse,
      ];
      exportPdfTableData.push(row);
    });

    autoTable(pdf, {
      head: [
        [
          "Student Name",
          "Status",
          "Start Date",
          "Chapters Completed",
          "Progress",
          "Chapter No",
          "Question No:",
          "Question Text",
          "Student Response",
        ],
      ],
      body: exportPdfTableData,
    });
    pdf.save("Students-Data.pdf");
  }

  const handleExportClick = async () => {
    let exportData;
    try {
      exportData = await fetchData();
    } catch (e) {
      console.log("ERROR IN EXPORT DATA", e);
    }

    if (exportData && dataByType === "simple") {
      handleExportPDF();
    } else if (exportData && dataByType === "detailed") {
      if (csvLinkRef && csvLinkRef.current) {
        csvLinkRef.current.link.click();
      }
    }
  };

  const fetchData = async () => {
    let studentReportResults = {};
    let statusObj = {};
    if (exportStatus) {
      statusObj.status = { $contains: exportStatus };
    }
    if (currentUser && currentUser.accessLevel === "academic_partner") {
      if (exportStatus) {
        try {
          studentReportResults = await fetchAPI("/workbook-reports", {
            filters: {
              $and: [
                {
                  status: {
                    $contains: exportStatus,
                  },
                },
                {
                  userKey: {
                    university: {
                      id: currentUser.university.id,
                    },
                  },
                },
              ],
            },
            populate: "*",
          });
        } catch (error) {
          console.log("ERROR", error.response.data.message);
        }
      } else {
        try {
          studentReportResults = await fetchAPI("/workbook-reports", {
            filters: {
              userKey: {
                university: {
                  id: currentUser.university.id,
                },
              },
            },
            populate: "*",
          });
        } catch (error) {
          console.log("ERROR", error.response.data.message);
        }
      }
    } else if (exportStatus || exportUniversityId) {
      try {
        studentReportResults = await fetchAPI("/workbook-reports", {
          filters: {
            $and: [
              {
                status: {
                  $contains: exportStatus,
                },
              },
              {
                userKey: {
                  university: {
                    id: exportUniversityId,
                  },
                },
              },
            ],
          },
          populate: "*",
        });
      } catch (e) {
        console.log("ERROR", e.response.data.message);
      }
    } else {
      studentReportResults = await fetchAPI("/workbook-reports", {
        populate: "*",
      });
    }

    const exportData = generateData(studentReportResults?.data);
    return exportData;
  };

  const filterExportByStatus = async (e) => {
    const status = e.target.value;
    if (status === "All") {
      setExportStatus(null);
    } else {
      setExportStatus(status);
    }

    // const StatusFilteredData = await fetchData(status !== "All" ? status : null, null)
  };
  const filterExportByUniversity = async (e) => {
    const university = e.target.value;
    if (university === "All") {
      setExportUniveristyId(null);
    } else {
      setExportUniveristyId(university);
    }
  };

  const exportDataType = (e) => {
    const exportDataValue = e.target.value;
    setExportDataByType(exportDataValue);
  };

  const onOpenModal = (key) => {
    setModalItem(key);
    setOpen(true);
  };
  useEffect(() => {}, [modalItem, searchResults]);

  const handleModalItemState = (key) => {
    setModalItem(key);
  };
  const onCloseModal = () => setOpen(false);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      if (!searchKey && router.query.search) {
        delete router.query.search;
        router.push(router);
      } else if (!searchKey) {
        return;
      } else {
        router.query.search = searchKey;
        router.push(router);
      }
    }
  };

  const handleFilterByStatus = (e) => {
    if (e.target.value === "All") {
      delete router.query.status;
      router.push(router);
    } else {
      router.query.status = e.target.value;
      router.push(router);
    }
  };

  const handleFilterByUniversity = (e) => {
    if (e.target.value === "All") {
      delete router.query.status;
      router.push(router);
    } else {
      router.query.university = e.target.value;
      router.push(router);
    }
  };

  const userInfo = useSelector(getCurrentUser);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-8">
          <div className="flex border-[1px] h-12 w-[384px] border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl">
            <p className="text-4xl mr-4 text-brandBlue">⌕</p>
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="border-0 bg-transparent focus:border-0 focus:shadow-none focus:outline-none active:border-0 active:shadow-none active:outline-none w-full pl-0"
              onChange={(e) => setSearchKey(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <div>
            <select
              name="status"
              onChange={handleFilterByStatus}
              className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
            >
              <option value="All">Status: All</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
          {userInfo && userInfo.accessLevel === "admin" && (
            <div>
              <select
                name="university"
                onChange={handleFilterByUniversity}
                className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
              >
                <option value="All">Filter by University</option>
                {universities &&
                  universities?.data &&
                  universities?.data?.map((university) => {
                    return (
                      <option value={university?.id}>
                        {university?.attributes?.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          )}
        </div>

        {showExportModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 modal_bg">
            <div className="bg-white h-[350px] w-[500px] rounded-lg relative">
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setShowExportModal(false)}
              >
                <AiOutlineCloseCircle size={25} className="text-brandBlue" />
              </div>
              <h2 className="flex justify-center my-6">
                <Image src={Logo} alt="Logo" width={300} h={350} />
              </h2>
              <div className="max-w-[400px] m-auto">
                <form>
                  <div className="flex flex-col gap-4 relative">
                    <div>
                      <select
                        name="status"
                        onChange={filterExportByStatus}
                        className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
                      >
                        <option value="All">Status: All</option>
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                      </select>
                    </div>
                    {userInfo && userInfo.accessLevel === "admin" && (
                      <div>
                        <select
                          name="university"
                          onChange={filterExportByUniversity}
                          className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
                        >
                          <option value="All">Filter by University</option>
                          {universities &&
                            universities?.data &&
                            universities?.data?.map((university) => {
                              return (
                                <option value={university?.id}>
                                  {university?.attributes?.name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    )}
                    <div>
                      <select
                        name="status"
                        onChange={exportDataType}
                        className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
                      >
                        <option value="">Export Data By:</option>
                        <option value="simple">PDF Export</option>
                        <option value="detailed">Excel Export</option>
                      </select>
                    </div>
                  </div>

                  {/* <div className="w-[380px] mt-[40px] flex flex-col gap-[20px]">
                  <ExcelExport exportableData={exportableDataState} />
                </div> */}

                  <div className="flex justify-between my-4">
                    {/* <div>
                    <ExcelExport exportableData={exportableDataState} />
                  </div> */}
                    {/* {exportableDataState ?
                    <div className="">
                      <OrangeButton
                        data-aos="fade-down"
                        className="rounded-md w-fit"
                        onClick={() => handleExportClick()}
                      >
                        Export PDF Data
                      </OrangeButton>
                    </div> : <button type="button" disabled className="cursor-not-allowed px-8 py-3 w-fit text-white bg-blue-600 uppercase disabled:opacity-25 rounded-lg">
                      Export Data
                    </button>} */}
                    <button
                      type="button"
                      onClick={handleExportClick}
                      className="cursor-pointer px-8 py-3 w-fit text-white bg-blue-600 uppercase rounded-lg"
                    >
                      Export Data
                    </button>
                  </div>
                  {exportableDataState && (
                    <CSVLink
                      data={exportableDataState}
                      filename="student-data.csv"
                      className="hidden"
                      ref={csvLinkRef}
                      target="_blank"
                    />
                  )}
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="">
          <OrangeButton
            data-aos="fade-down"
            className="rounded-md w-fit"
            onClick={() => setShowExportModal(true)}
          >
            Export
            <ExportIcon className="ml-5" />
          </OrangeButton>
        </div>
      </div>
      <div className="my-8">
        <table className="m-0 w-full" id="studentsData">
          <thead className="mb-5">
            <tr className="text-left">
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Student
              </th>
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Status
                <ArrowDown />
              </th>
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Start Date
                <ArrowDown />
              </th>
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Completition Date
                <ArrowDown />
              </th>
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Chapters
                <ArrowDown />
              </th>
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Progress
                <ArrowDown />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="font-normal text-xs">
            {studentWorkbookReports &&
              studentWorkbookReports?.length > 0 &&
              studentWorkbookReports?.map((studentItem, index) => {
                return (
                  <StudentDataItem
                    studentItem={studentItem}
                    lessonStates={lessonStates}
                    onOpenModal={onOpenModal}
                    itemIndex={index}
                    searchResults={searchResults}
                    searchKey={searchKey}
                  />
                );
              })}
            {/* <tr className="h-16 border-t-[1px] border-lightGray">
              <td className="py-[5px]">
                <div className="flex items-center">
                  <UserIcon />
                  <p className="font-semibold text-brandBlueDark text-sm">
                    Bessie Green
                  </p>
                </div>
              </td>
              <td className="py-[8px]">
                <p className="text-success">Completed</p>
              </td>
              <td>05/02/2023</td>
              <td>06/02/2023</td>
              <td>2/ 11</td>
              <td>
                <ProgressBar
                  green="green"
                  percent={100}
                  percentageWidth={100}
                />
              </td>
              <td className=" py-4 flex justify-end">
                <button
                  className="bg-brandBlue  py-2 px-4 text-white rounded-lg"
                  onClick={onOpenModal}
                >
                  View Workbook
                </button>
              </td>
            </tr>
            <tr className="h-16 border-t-[1px] border-lightGray">
              <td className="py-[5px]">
                <div className="flex items-center">
                  <UserIcon />
                  <p className="font-semibold text-brandBlueDark text-sm">
                    Bessie Green
                  </p>
                </div>
              </td>
              <td className="py-[8px]">
                <p className="text-success">Completed</p>
              </td>
              <td>05/02/2023</td>
              <td>06/02/2023</td>
              <td>2/ 11</td>
              <td>
                <ProgressBar green="green" percent={100} percentageWidth={48} />
              </td>
              <td className=" py-4 flex justify-end">
                <button className="bg-brandBlueLight  py-2 px-4 text-brandBlue rounded-lg">
                  View Workbook
                </button>
              </td>
            </tr>
            <tr className="h-16 border-t-[1px] border-lightGray">
              <td className="py-[5px]">
                <div className="flex items-center">
                  <UserIcon />
                  <p className="font-semibold text-brandBlueDark text-sm">
                    Bessie Green
                  </p>
                </div>
              </td>
              <td className="py-[8px]">
                <p className="text-success">Completed</p>
              </td>
              <td>05/02/2023</td>
              <td>06/02/2023</td>
              <td>2/ 11</td>
              <td>
                <ProgressBar green="green" percent={100} percentageWidth={48} />
              </td>
              <td className=" py-4 flex justify-end">
                <button className="bg-brandBlueLight  py-2 px-4 text-brandBlue rounded-lg">
                  View Workbook
                </button>
              </td>
            </tr>
            <tr className="h-16 border-t-[1px] border-lightGray">
              <td className="py-[5px]">
                <div className="flex items-center">
                  <UserIcon />
                  <p className="font-semibold text-brandBlueDark text-sm">
                    Bessie Green
                  </p>
                </div>
              </td>
              <td className="py-[8px]">
                <p className="text-brandOrange">In complete</p>
              </td>
              <td>05/02/2023</td>
              <td>06/02/2023</td>
              <td>2/ 11</td>
              <td>
                <ProgressBar
                  orange="orange"
                  percent={80}
                  percentageWidth={48}
                />
              </td>
              <td className=" py-4 flex justify-end">
                <button className="bg-brandBlueLight  py-2 px-4 text-brandBlue rounded-lg">
                  View Workbook
                </button>
              </td>
            </tr>
            <tr className="h-16 border-t-[1px] border-lightGray">
              <td className="py-[5px]">
                <div className="flex items-center">
                  <UserIcon />
                  <p className="font-semibold text-brandBlueDark text-sm">
                    Bessie Green
                  </p>
                </div>
              </td>
              <td className="py-[8px]">
                <p className="text-success">Completed</p>
              </td>
              <td>05/02/2023</td>
              <td>06/02/2023</td>
              <td>2/ 11</td>
              <td>
                <ProgressBar green="green" percent={100} percentageWidth={48} />
              </td>
              <td className=" py-4 flex justify-end">
                <button className="bg-brandBlueLight  py-2 px-4 text-brandBlue rounded-lg">
                  View Workbook
                </button>
              </td>
            </tr>
            <tr className="h-16 border-t-[1px] border-lightGray">
              <td className="py-[5px]">
                <div className="flex items-center">
                  <UserIcon />
                  <p className="font-semibold text-brandBlueDark text-sm">
                    Bessie Green
                  </p>
                </div>
              </td>
              <td className="py-[8px]">
                <p className="text-brandOrange">In Complete</p>
              </td>
              <td>05/02/2023</td>
              <td>06/02/2023</td>
              <td>2/ 11</td>
              <td>
                <ProgressBar
                  orange="orange"
                  percent={80}
                  percentageWidth={48}
                />
              </td>
              <td className=" py-4 flex justify-end">
                <button className="bg-brandBlueLight  py-2 px-4 text-brandBlue rounded-lg">
                  View Workbook
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>

      {/* export table data*/}

      {/* <div className="my-8 d-none">
        <table className="m-0 w-full" id='studentsData'>
          <thead className="mb-5">
            <tr className="text-left">
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Student
              </th>
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Status
                <ArrowDown />
              </th>
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Start Date
                <ArrowDown />
              </th>
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Completition Date
                <ArrowDown />
              </th>
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Chapters
                <ArrowDown />
              </th>
              <th className="text-gray text-sm font-medium pt-3 pb-5">
                Progress
                <ArrowDown />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="font-normal text-xs">
            {studentWorkbookReports &&
              studentWorkbookReports?.length > 0 &&
              studentWorkbookReports?.map((studentItem, index) => {
                return (
                  <StudentDataItem
                    studentItem={studentItem}
                    lessonStates={lessonStates}
                    onOpenModal={onOpenModal}
                    itemIndex={index}
                    searchResults={searchResults}
                    searchKey={searchKey}
                  />
                );
              })}
          </tbody>
        </table>
      </div> */}

      {modalItem !== null && studentWorkbookReports && (
        <StudentModalItem
          open={open}
          onCloseModal={onCloseModal}
          modalItem={modalItem}
          totalItems={studentWorkbookReports?.length}
          studentItem={studentWorkbookReports[modalItem]?.attributes}
          lessonStates={lessonStates}
          handleModalItemState={handleModalItemState}
          workBookContent={workBookContent}
        />
        // <Modal
        //   open={open}
        //   onClose={onCloseModal}
        //   center
        //   classNames={{
        //     overlay: "customOverlay",
        //     modal: "customModal",
        //   }}
        //   closeIcon={closeIcon}
        // >
        //   <div className="w-full h-full flex justify-center items-center">
        //     <div className="h-[100%] w-[90%] overflow-hidden p-8 bg-white rounded-lg">
        //       <div className="flex justify-between">
        //         <div className="">
        //           <h2 className="text-3xl font-bold text-brandBlue ">
        //             Students Workbook
        //           </h2>
        //           <p className="font-medium text-base text-gray">
        //             Student Progress
        //           </p>
        //         </div>
        //         <div className="flex gap-4 text-center">
        //           <div className="bg-brandBlue h-[40px] w-[40px] rounded-full flex justify-center items-center cursor-pointer">
        //             <Arrowleft />
        //           </div>
        //           <div className="bg-brandBlue h-[40px] w-[40px] rounded-full flex justify-center items-center cursor-pointer">
        //             <ArrowRight />
        //           </div>
        //         </div>
        //       </div>
        //       <div className="flex gap-12 my-6">
        //         <div className="flex items-end">
        //           <div className="mb-1">
        //             <UserBigIcon />
        //           </div>
        //           <div className="text-xl font-semibold ml-3">
        //             {studentWorkbookReports?.data[modalItem]?.attributes?.userId}
        //           </div>
        //         </div>
        //         <table className="w-full">
        //           <thead className="mb-5">
        //             <tr className="text-center">
        //               <th className="text-gray text-sm font-medium"></th>
        //               <th className="text-gray text-sm font-medium pt-3 pb-5">
        //                 Status
        //               </th>
        //               <th className="text-gray text-sm font-medium pt-3 pb-5">
        //                 Chapters Completed
        //               </th>
        //               <th className="text-gray text-sm font-medium pt-3 pb-5">
        //                 Start Date
        //               </th>
        //               <th className="text-gray text-sm font-medium pt-3 pb-5">
        //                 Completition Date
        //               </th>
        //             </tr>
        //           </thead>
        //           <tbody className="text-center">
        //             <tr>
        //               <td className="py-[5px] border-r-[2px] border-lightGray">
        //                 <div className="flex flex-start mb-2">98% complete</div>
        //                 <ProgressBar green percentageWidth={48} />
        //               </td>
        //               <td className="py-[5px] border-r-[2px] border-lightGray">
        //                 <p className="text-brandOrange font-normal text-xs">
        //                   In Progress
        //                 </p>
        //               </td>
        //               <td className="py-[5px] border-r-[1px] border-lightGray">
        //                 <p className="text-brandBlue font-medium text-xs">
        //                   9 / 11
        //                 </p>
        //               </td>
        //               <td className="py-[5px] border-r-[1px] border-lightGray">
        //                 <p className="text-brandBlue font-medium text-xs">
        //                   07/02/2023
        //                 </p>
        //               </td>
        //               <td className="py-[5px] border-r-[1px] border-lightGray">
        //                 <p className="text-brandBlue font-medium text-xs">
        //                   05/02/2023
        //                 </p>
        //               </td>
        //             </tr>
        //           </tbody>
        //         </table>
        //       </div>
        //       <div className="border-b-[1px] border-gray pt-4"></div>
        //       <div className="my-6">
        //         <StudentResult />
        //       </div>
        //     </div>
        //   </div>
        // </Modal>
      )}
    </>
  );
};

export default StudentsData;
