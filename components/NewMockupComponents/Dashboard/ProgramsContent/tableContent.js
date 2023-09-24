import React, { useEffect, useState } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import InnerTitle from "./InnerTitle";
import {
  FaAngleDown,
  FaAngleUp,
  FaCheckSquare,
  FaLock,
  FaLockOpen,
} from "react-icons/fa";

const TableContent = ({
  item,
  onClickChapter,
  onClickLesson,
  lessonId,
  chapterId,
  completedLessons,
  unlockedLessons,
}) => {
  const [show, setShow] = useState(false);
  const [lock, setLock] = useState(false);

  // useEffect(() => {
  //   let chapterTOC = item?.attributes?.tocNumber;
  //   if (unlockedLessons.includes(chapterTOC)) {
  //     setLock(false);
  //   } else {
  //     setLock(true);
  //   }
  // }, [unlockedLessons]);

  const onClickItem = (id) => {
    if (lock) return;
    setShow(!show);
    onClickChapter(id);
    // onClickChapter(item.attributes.tocNumber);
  };
  return (
    <div>
      <div
        className="flex justify-between px-5 py-[14px] hover:cursor-pointer"
        onClick={() => onClickItem(item?.attributes?.tocNumber)}
      >
        <h3
          className={` ${
            item?.attributes?.tocNumber === chapterId
              ? "text-brandBlue font-semibold"
              : "text-[#718397] font-normal"
          }  text-[15px]  hover:text-brandBlue  line-clamp-1 `}
        >
          {item?.attributes?.tocNumber}: {item?.attributes?.title}
        </h3>
        {/* {item.attributes.tocNumber !== 0 && (
          <> */}
            {lock && (
              <div className="text-right">
                <FaLock color="#718397" size={16} className="mt-1" />
              </div>
            )}

            {!lock && item.id !== chapterId && (
              <FaAngleDown color="#718397" className="mt-1" />
            )}
            {!lock && item.id === chapterId && (
              <FaAngleUp color="#0067B2" className="mt-1" />
            )}
          {/* </>
        )} */}
        {/* {show == false ? (
         
        ) : (
          <FaAngleUp color="#0067B2" className="mt-1" />
        )} */}
      </div>
      {item.id === chapterId && item?.attributes?.chapter_lessons?.data && (
        <ul className="my-[11px]">
          {item?.attributes?.chapter_lessons?.data.map((lessonItem, index) => {
            return (
              <InnerTitle
                item={item?.attributes?.chapter_lessons?.data}
                key={index}
                toc={lessonItem?.attributes?.tocNumber}
                title={lessonItem?.attributes?.title}
                onClickLesson={onClickLesson}
                lessonId={lessonId}
                completedLessons={completedLessons}
                unlockedLessons={unlockedLessons}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TableContent;
