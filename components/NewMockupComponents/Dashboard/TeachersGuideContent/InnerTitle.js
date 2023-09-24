import React, { useEffect, useState } from "react";
import { FaCheckSquare, FaLock } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";

const InnerTitle = ({
  toc,
  title,
  onClickLesson,
  item,
  lessonId,
  completedLessons,
  unlockedLessons,
}) => {
  const [select, setSelected] = useState(false);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    if (completedLessons?.includes(toc)) {
      setSelected(true);
    }
  }, [completedLessons]);

  // useEffect(() => {
  //   if (unlockedLessons.includes(toc)) {
  //     setLock(false);
  //   } else {
  //     setLock(true);
  //   }
  // }, [toc, lessonId, unlockedLessons]);

  // useEffect(() => {
  // }, [lessonId])
  // let lessonId = 3.1;
  return (
    <li
      className="flex justify-between pl-7 pr-5 py-[11px] text-[#718397] hover:cursor-pointer hover:bg-[#E5F0F7] hover:text-brandBlue"
      onClick={() => {
        if (lock) return;
        onClickLesson(toc);
      }}
    >
      <span className="flex">
        <span>
          <AiOutlineFileText className="mt-1 mr-2" />
        </span>{" "}
        <span
          className={`line-clamp-1 ${
            lessonId === toc && "text-brandBlue font-semibold"
          }`}
        >
          {toc}: {title}
        </span>
      </span>
        {lock && (
        <div className="text-right">
          <FaLock color="#718397" size={16} className="mt-1" />
        </div>
      )}
      {select == true && (
        <span>
          <FaCheckSquare color="#FF6857" className="mt-1" />
        </span>
      )}
    </li>
  );
};

export default InnerTitle;
