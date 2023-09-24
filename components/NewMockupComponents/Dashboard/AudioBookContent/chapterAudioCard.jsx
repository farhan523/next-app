"use client";
import React, { useState } from "react";
import { BsHeadphones, BsPauseFill, BsPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

const ChapterAudioCard = ({
  showIndividualContent,
  setShowIndividualContent,
  title,
  author,
  category,
  img,
  showPlayer,
  setShowPlayer,
  setPlaying,
  playing,
  showPlayerPlay,
  showContent,
  individualAudioData,
  currentID,
  setCurrentIndex,
  index,
  key,
  currentChapterKey,
}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const titleLimit = 12;
  const authorTextLemit = 12;

  const router = useRouter();

  const handleRedirect = (url) => {
    router.push(url);
  };

  return (
    <div
      className=" relative  min-w-[330px]"
      key={currentID}
      onClick={() => {
        showPlayerPlay();
        setCurrentIndex(index);
      }}
    >
      <div className="flex gap-4">
        <div className="p-3 max-w-[320px] bg-[#E3EEF5] rounded-lg cursor-pointer hover:shadow-audioCard my-4 ml-1">
          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img
              alt="team"
              className="flex-shrink-0 rounded-lg w-[140px] h-[140px] object-cover object-center sm:mb-0 mb-4"
              src={img}
            />
            <div className="flex-grow sm:pl-8">
              <span className="text-[10px] text-brandBlue">{category}</span>
              <h2 className="font-medium text-[18px] text-gray-900">
                {title && title.slice(0, titleLimit)}
                {title && title.length > titleLimit && "..."}
              </h2>

              <h3 className="text-[#ABABAB] mb-3 text-[15px] break-words">
                {author && author.slice(0, authorTextLemit)}
                {author && author.length > authorTextLemit && "..."}
              </h3>
              <span className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] flex items-center gap-2">
                    <BsHeadphones size={14} />
                    {showContent === "english" ? "English" : "Spanish"}
                  </span>
                </div>
                <div>
                  <button className="h-[22px] w-[22px] bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo text-white rounded-full flex justify-center items-center">
                    {playing &&
                    individualAudioData &&
                    individualAudioData?.id === currentID ? (
                      <div className="h-full w-full flex items-center justify-center">
                        <BsPauseFill size={16} />
                      </div>
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <BsPlayFill size={16} />
                      </div>
                    )}
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterAudioCard;
