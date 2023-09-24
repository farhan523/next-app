import React from "react";
import { UserIcon } from "../../SvgIconsComponents/UserIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import StudentProgressItem from "./StudentProgressItem";

const StudentProgress = ({ studentWorkbookReports, lessonStates }) => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-brandBlue text-base font-medium">
          Student Progress
        </h2>
        <p className="text-gray text-sm font-medium cursor-pointer">View All</p>
      </div>
      <table className="w-full">
        <thead className="mb-5">
          <tr className="text-center">
            <th className="text-gray text-sm font-medium pt-3 pb-5"></th>
            <th className="text-gray text-sm font-medium pt-3 pb-5">Status</th>
            <th className="text-gray text-sm font-medium pt-3 pb-5">
              Chapters Completed
            </th>
            <th className=" pt-3 pb-5"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {studentWorkbookReports &&
            studentWorkbookReports?.data &&
            studentWorkbookReports?.data?.slice(0, 3).map((studentItem) => {
              return (
                <StudentProgressItem
                  studentItem={studentItem}
                  lessonStates={lessonStates}
                />
              );
            })}
          {/* <tr>
            <td className="py-[5px] border-r-[2px] border-lightGray">
              <div className="flex items-center">
                <UserIcon />
                <p className="font-medium text-brandBlueDark text-xs">
                  Bessie Green
                </p>
              </div>
            </td>
            <td className="py-[5px] border-r-[2px] border-lightGray">
              <p className="text-brandOrange font-normal text-xs">
                In Progress
              </p>
            </td>
            <td className="py-[5px] border-r-[1px] border-lightGray">
              <p className="text-brandBlue font-medium text-xs">9 / 11</p>
            </td>
            <td className="py-[5px] flex justify-center">
              <ProgressBar blue={"blue"} percent={56} percentageWidth={48} />
            </td>
          </tr>
          <tr>
            <td className="py-[5px] border-r-[1px] border-lightGray">
              <div className="flex items-center">
                <UserIcon />
                <p className="font-medium text-brandBlueDark text-xs">
                  Bessie Green
                </p>
              </div>
            </td>
            <td className="py-[5px] border-r-[1px] border-lightGray">
              <p className="text-brandOrange font-normal text-xs">
                In Progress
              </p>
            </td>
            <td className="py-[5px] border-r-[1px] border-lightGray">
              <p className="text-brandBlue font-medium text-xs">9 / 11</p>
            </td>
            <td className="py-[5px] flex justify-center">
              <ProgressBar blue={"blue"} percent={90} percentageWidth={48} />
            </td>
          </tr>
          <tr>
            <td className="py-[5px] border-r-[1px] border-lightGray">
              <div className="flex items-center">
                <UserIcon />
                <p className="font-medium text-brandBlueDark text-xs">
                  Bessie Green
                </p>
              </div>
            </td>
            <td className="py-[5px] border-r-[1px] border-lightGray">
              <p className="text-brandOrange font-normal text-xs">
                In Progress
              </p>
            </td>
            <td className="py-[5px] border-r-[1px] border-lightGray">
              <p className="text-brandBlue font-medium text-xs">9 / 11</p>
            </td>
            <td className="py-[5px] flex justify-center">
              <ProgressBar blue="blue" percent={80} percentageWidth={48} />
            </td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default StudentProgress;