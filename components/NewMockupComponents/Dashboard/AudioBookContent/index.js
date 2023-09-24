import React from "react";
import Arrowleft from "../../SvgIconsComponents/Arrowleft";
import ArrowRight from "../../SvgIconsComponents/ArrowRight";
import { BsHeadphones, BsPauseFill, BsPlayFill } from "react-icons/bs";
import { DownlaodIcon } from "../../SvgIconsComponents/DownloadIcon";
import { ShareIcon } from "../../SvgIconsComponents/ShareIcon";
import { MoreIcon } from "../../SvgIconsComponents/MoreIcon";
import ChapterAudioCard from "./chapterAudioCard";
import { BookMark } from "../../SvgIconsComponents/BookMark";
import { useState, useEffect } from "react";
import { PodCastIcon } from "../../SvgIconsComponents/PodCastIcon";
import AudioPlayer from "./AudioPlayer";
import MobileAudioPlayer from "./MobileAudioPlayer";
import Link from "next/link";
import Loader from "../../../loader";

export const AudioBookContent = ({
  role,
  showIndividualContent,
  setShowIndividualContent,
  showPlayer,
  setShowPlayer,
  setPlaying,
  playing,
  audioBookContent,
}) => {
  const [showMobilePlayer, setShowMobilePlayer] = useState(false);
  const [audioData, setAudioData] = useState(audioBookContent);
  const descriptionLimit = 150; // Adjust the limit as needed
  const [showContent, setShowContent] = useState("english");
  const [individualAudioData, setIndividualAudioData] = useState(null);
  const [handleButtonClicked, setHandleButtonClicked] = useState(null);
  const [playStatus, setPlayStatus] = useState(false);
  const [playState, setPlayState] = useState(0);
  const [language, setLanguage] = useState("english");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChapterLength, setCurrentChapterLength] = useState(0);
  const [recentPlayAudio, setRecentPlayAudio] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("recentPlayAudio");
    setRecentPlayAudio(storedData ? JSON.parse(storedData) : null);
  }, []);

  const currentData = [audioData[playState]];

  const chaptersData = audioData;

  const mapData = new Map();

  chaptersData.forEach((chapter) => {
    const singleChapter = mapData.get(chapter.attributes.chapter);
    if (singleChapter === undefined) {
      mapData.set(chapter.attributes.chapter, [chapter]);
    } else {
      mapData.set(chapter.attributes.chapter, [...singleChapter, chapter]);
    }
  });

  const chapterData = mapData;

  const englishChapterArray = [];
  const spanishChapterArray = [];
  const chaptersArray = [];
  const mobileChapterArray = [];

  const handleButtonClick = (content) => {
    // setShowPlayer(false);
    setShowContent(content);
    setShowMobilePlayer(false);
    setLanguage(content);
    setShowLoading(true);
    setPlaying(false);

    setTimeout(() => {
      setShowLoading(false);
    }, 1000);
  };

  const playPreviousChapter = () => {
    const currentChapter = individualAudioData.attributes.chapter;
    const parentChapterArray = mapData.get(currentChapter);
    const previousAudio = parentChapterArray[currentIndex - 1];
    showPlayerPlay(previousAudio);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  const playNextChapter = () => {
    const currentChapter = individualAudioData.attributes.chapter;
    const parentChapterArray = mapData.get(currentChapter);
    const nextAudio = parentChapterArray[currentIndex + 1];
    showPlayerPlay(nextAudio);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const showPlayerPlay = (audio, index) => {
    const currentChapter = audio.attributes.chapter;
    const parentChapterArray = mapData.get(currentChapter);
    const previousDuration = audio.playedDuration || 0;
    setCurrentChapterLength(parentChapterArray);
    if (individualAudioData && audio.id === individualAudioData?.id) {
      setPlaying(!playing);
    } else {
      audio.playedDuration = previousDuration;
      setPlaying(true);
      setShowPlayer(true);
      setIndividualAudioData(audio);
      setShowMobilePlayer(true);
      setRecentPlayAudio(() => {
        localStorage.setItem("recentPlayAudio", JSON.stringify(audio));
        return audio;
      });
    }
  };

  const englishUrl =
    individualAudioData &&
    individualAudioData.attributes.english.data.attributes.url;

  const spanishUrl =
    individualAudioData &&
    individualAudioData.attributes.spanish.data &&
    individualAudioData.attributes.spanish.data.attributes.url;

  const url = showContent === "english" ? englishUrl : spanishUrl;
  const getPlayerImageURL =
    individualAudioData &&
    individualAudioData.attributes.image.data.attributes.url;

  const handlePrevious = () => {
    if (playState > 0) {
      setPlayState(playState - 1);
    }
  };

  const handleNext = () => {
    if (playState < audioData.length - 1) {
      setPlayState(playState + 1);
    }
  };

  let currentChapterKey;

  return (
    <>
      <div className="md:block hidden mt-[30px] relative w-full  before:contents-[''] before:absolute before:blur-[100px]   before:bg-brandBlueLighten before:right-[0] before:top-[-120px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1]">
        <div className="2xl:w-[90%] xl:w-[90%] w-[90%] mx-auto">
          <div className="mt-[15px]">
            <div className="flex justify-between items-center">
              <h2 className="text-[30px] font-bold text-brandBlue">
                {recentPlayAudio == null ? "Recommended" : "Recent Played"}
              </h2>
              {recentPlayAudio == null && (
                <div className="flex items-center gap-5">
                  <div
                    className={` bg-brandBlue rounded-lg flex justify-center items-center cursor-pointer py-2 px-3 text-white ${
                      playState === 0 ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    onClick={handlePrevious}
                  >
                    Previous Audio
                  </div>
                  <div
                    className={` bg-brandBlue rounded-lg flex justify-center items-center cursor-pointer py-2 px-3 text-white ${
                      playState === audioData.length - 1
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    onClick={handleNext}
                  >
                    Next Audio
                  </div>
                </div>
              )}
            </div>
          </div>

          <section className="text-gray-600 body-font my-4">
            <div className="container mx-auto py-5">
              <div className="flex flex-wrap">
                <div className="lg:w-3/5 h-fit relative">
                  {recentPlayAudio !== null ? (
                    <div
                      className="bg-[#E3EEF5] rounded-lg p-3 cursor-pointer hover:shadow-audioCard "
                      onClick={(e) => {
                        e.stopPropagation();
                        showPlayerPlay(recentPlayAudio);
                        setHandleButtonClicked(recentPlayAudio?.id);
                        setPlayStatus(!playStatus);
                      }}
                    >
                      <div className="h-fit flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-[240px] h-[240px] object-cover object-center sm:mb-0 mb-4"
                          src={
                            recentPlayAudio?.attributes?.image?.data?.attributes
                              ?.url
                          }
                        />
                        <div className="flex-grow sm:pl-8">
                          <span className="text-[10px] text-brandBlue">
                            {recentPlayAudio?.attributes?.category}
                          </span>
                          <h2 className="title-font font-medium text-[18px] text-gray-900">
                            {recentPlayAudio?.attributes?.title}
                          </h2>

                          <p className="mb-2 text-[12px]">
                            {recentPlayAudio?.attributes?.description &&
                              recentPlayAudio?.attributes?.description.slice(
                                0,
                                descriptionLimit
                              )}
                            {recentPlayAudio?.attributes?.description &&
                              recentPlayAudio?.attributes?.description.length >
                                descriptionLimit &&
                              "..."}
                          </p>
                          <h3 className="text-[#ABABAB] mb-3 text-[15px]">
                            {recentPlayAudio?.attributes?.author}
                          </h3>

                          <span className="flex justify-between">
                            <div className="flex items-center gap-3">
                              <button className="h-[29px] w-[29px] bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo text-white rounded-full flex justify-center items-center">
                                {playing &&
                                individualAudioData.id ===
                                  recentPlayAudio.id ? (
                                  <div className="h-full w-full flex items-center justify-center">
                                    <BsPauseFill size={22} />
                                  </div>
                                ) : (
                                  <div className="h-full w-full flex items-center justify-center">
                                    <BsPlayFill size={22} />
                                  </div>
                                )}
                              </button>

                              <span className="text-[10px] flex items-center gap-2">
                                <BsHeadphones size={14} />
                                {showContent === "english"
                                  ? "English"
                                  : "Spanish"}
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : currentData ? (
                    currentData.map((data, index) => {
                      return (
                        <div
                          className="bg-[#E3EEF5] rounded-lg p-3 cursor-pointer hover:shadow-audioCard"
                          key={index}
                          onClick={(e) => {
                            showPlayerPlay(data);
                            setHandleButtonClicked(data?.id);
                            setPlayStatus(!playStatus);
                          }}
                        >
                          <div className="h-fit flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img
                              alt="team"
                              className="flex-shrink-0 rounded-lg w-[240px] h-[240px] object-cover object-center sm:mb-0 mb-4"
                              src={
                                data?.attributes?.image?.data?.attributes?.url
                              }
                            />
                            <div className="flex-grow sm:pl-8">
                              <span className="text-[10px] text-brandBlue">
                                {data?.attributes?.category}
                              </span>
                              <h2 className="title-font font-medium text-[18px] text-gray-900">
                                {data?.attributes?.title}
                              </h2>

                              <p className="mb-2 text-[12px]">
                                {data?.attributes?.description &&
                                  data?.attributes?.description.slice(
                                    0,
                                    descriptionLimit
                                  )}
                                {data?.attributes?.description &&
                                  data?.attributes?.description.length >
                                    descriptionLimit &&
                                  "..."}
                              </p>
                              <h3 className="text-[#ABABAB] mb-3 text-[15px]">
                                {data?.attributes?.author}
                              </h3>

                              <span className="flex justify-between">
                                <div className="flex items-center gap-3">
                                  <button className="h-[29px] w-[29px] bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo text-white rounded-full flex justify-center items-center">
                                    {playing &&
                                    individualAudioData.id === data.id ? (
                                      <div className="h-full w-full flex items-center justify-center">
                                        <BsPauseFill size={22} />
                                      </div>
                                    ) : (
                                      <div className="h-full w-full flex items-center justify-center">
                                        <BsPlayFill size={22} />
                                      </div>
                                    )}
                                  </button>

                                  <span className="text-[10px] flex items-center gap-2">
                                    <BsHeadphones size={14} />
                                    {showContent === "english"
                                      ? "English"
                                      : "Spanish"}
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    ""
                  )}

                  {showPlayer && (
                    <section className="mt-5 pt-4">
                      <h2 className="text-4xl font-bold text-brandBlue mb-5">
                        Book Title
                      </h2>
                      <button
                        className={`py-2 px-5 mr-4 rounded-[10px] border-1 border-[#E3EEF5] text-brandBlue ${
                          showContent === "english"
                            ? "bg-brandBlue hover:bg-brandBlue text-white"
                            : "bg-[#EFF6FB] hover:bg-brandBlue hover:text-white"
                        }`}
                        onClick={() => handleButtonClick("english")}
                      >
                        English
                      </button>
                      <button
                        className={`py-2 px-5 rounded-[10px] border-1 border-[#E3EEF5] text-brandBlue ${
                          showContent === "spanish"
                            ? "bg-brandBlue hover:bg-brandBlue text-white"
                            : "bg-[#EFF6FB] hover:bg-brandBlue hover:text-white"
                        }`}
                        onClick={() => handleButtonClick("spanish")}
                      >
                        Spanish
                      </button>
                    </section>
                  )}
                  {showPlayer && (
                    <>
                      {showContent === "english" && (
                        <>
                          {showLoading && (
                            <div>
                              <Loader showLoading={showLoading} />
                            </div>
                          )}
                          {chapterData &&
                            !showLoading &&
                            chapterData.forEach((card, key) => {
                              currentChapterKey = key;
                              englishChapterArray.push(
                                <section>
                                  <div className=" my-5">
                                    <div className="flex items-center justify-between my-5 pt-3">
                                      <h2 className="text-[26px] font-bold text-brandBlue">
                                        Chapter {key}
                                      </h2>
                                      <Link href={`listen/${key}`}>
                                        <p className="text-[12px] text-brandBlue font-medium bg-[#E3EEF5] px-5 py-2 rounded-[10px] capitalize hover:bg-brandBlue hover:text-white cursor-pointer">
                                          view all
                                        </p>
                                      </Link>
                                    </div>
                                    <div className="overflow-auto w-[660px]">
                                      <div className="flex gap-5 overflow-x-auto">
                                        {card.map((singleCard, index) => {
                                          {
                                            if (
                                              singleCard.attributes["english"][
                                                "data"
                                              ] === null
                                            )
                                              return false;
                                          }
                                          const title =
                                            singleCard.attributes.title;
                                          const author =
                                            singleCard.attributes.author;
                                          const category =
                                            singleCard.attributes.category;
                                          const img =
                                            singleCard.attributes.image.data
                                              .attributes.url;
                                          const currentID = singleCard.id;
                                          return (
                                            <ChapterAudioCard
                                              showPlayerPlay={() =>
                                                showPlayerPlay(singleCard)
                                              }
                                              currentID={currentID}
                                              individualAudioData={
                                                individualAudioData
                                              }
                                              showContent={showContent}
                                              playing={playing}
                                              setPlaying={setPlaying}
                                              setShowPlayer={setShowPlayer}
                                              showIndividualContent={
                                                showIndividualContent
                                              }
                                              setShowIndividualContent={
                                                setShowIndividualContent
                                              }
                                              title={title}
                                              author={author}
                                              category={category}
                                              img={img}
                                              index={index}
                                              setCurrentIndex={setCurrentIndex}
                                              key={key}
                                              currentChapterKey={
                                                currentChapterKey
                                              }
                                            />
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              );
                            })}
                          {englishChapterArray}
                        </>
                      )}
                      {showContent === "spanish" && (
                        <>
                          {showLoading && (
                            <div>
                              <Loader showLoading={showLoading} />
                            </div>
                          )}
                          {chapterData &&
                            !showLoading &&
                            chapterData.forEach((card, key) => {
                              currentChapterKey = key;
                              spanishChapterArray.push(
                                <section>
                                  <div className=" my-5">
                                    <div className="flex items-center justify-between my-5 pt-3">
                                      <h2 className="text-[26px] font-bold text-brandBlue">
                                        Chapter {key}
                                      </h2>
                                      <Link href={`listen/${key}`}>
                                        <p className="text-[12px] text-brandBlue font-medium bg-[#E3EEF5] px-5 py-2 rounded-[10px] capitalize hover:bg-brandBlue hover:text-white cursor-pointer">
                                          view all
                                        </p>
                                      </Link>
                                    </div>
                                    <div className="overflow-auto w-[660px]">
                                      <div className="flex gap-5 overflow-x-auto">
                                        {card.map((singleCard, index) => {
                                          {
                                            if (
                                              singleCard.attributes["spanish"][
                                                "data"
                                              ] === null
                                            )
                                              return false;
                                          }
                                          const title =
                                            singleCard.attributes.title;
                                          const author =
                                            singleCard.attributes.author;
                                          const category =
                                            singleCard.attributes.category;
                                          const img =
                                            singleCard.attributes.image.data
                                              .attributes.url;
                                          const currentID = singleCard.id;
                                          return (
                                            <ChapterAudioCard
                                              showPlayerPlay={() =>
                                                showPlayerPlay(singleCard)
                                              }
                                              currentID={currentID}
                                              individualAudioData={
                                                individualAudioData
                                              }
                                              showContent={showContent}
                                              playing={playing}
                                              setPlaying={setPlaying}
                                              setShowPlayer={setShowPlayer}
                                              showIndividualContent={
                                                showIndividualContent
                                              }
                                              setShowIndividualContent={
                                                setShowIndividualContent
                                              }
                                              title={title}
                                              author={author}
                                              category={category}
                                              img={img}
                                              index={index}
                                              setCurrentIndex={setCurrentIndex}
                                              key={key}
                                              currentChapterKey={
                                                currentChapterKey
                                              }
                                            />
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              );
                            })}
                          {spanishChapterArray}
                        </>
                      )}
                    </>
                  )}
                </div>

                <div className="px-4 lg:w-2/5 ">
                  {showPlayer ? (
                    <section className="text-gray-600 body-font p-5 bg-[#E3EEF5] rounded-lg">
                      <div className="container mx-auto">
                        <div className="text-center">
                          <div className="mb-10">
                            <div className="rounded-lg h-[196px] relative">
                              <img
                                alt="content"
                                className="object-cover object-center h-full w-full "
                                src={getPlayerImageURL}
                              />

                              <div className="absolute top-[20px] right-[30px]">
                                <BookMark />
                              </div>
                            </div>

                            {individualAudioData && (
                              <h2 className="text-[10px] mt-6 mb-3 text-brandBlue">
                                {individualAudioData.attributes.category}
                              </h2>
                            )}

                            {individualAudioData && (
                              <p className="text-[20px] font-medium px-5 mb-5">
                                {individualAudioData.attributes.title}
                              </p>
                            )}

                            {individualAudioData && (
                              <p className="text-[13px] font-light">
                                {individualAudioData.attributes.description}
                              </p>
                            )}

                            {individualAudioData && (
                              <p className="text-[15px] text-brandBlue font-normal py-5">
                                {individualAudioData.attributes.author}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <AudioPlayer
                          playing={playing}
                          setPlaying={setPlaying}
                          showPlayerPlay={showPlayerPlay}
                          url={url}
                          playNextChapter={playNextChapter}
                          playPreviousChapter={playPreviousChapter}
                          currentChapterLength={currentChapterLength}
                          currentIndex={currentIndex}
                          previousDuration={recentPlayAudio.playedDuration}
                        />
                      </div>
                    </section>
                  ) : (
                    <div className="h-fit flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <div className="flex-grow sm:pl-8 relative">
                        <h2 className="title-font font-medium text-lg text-gray-900">
                          About
                        </h2>
                        {currentData && recentPlayAudio == null ? (
                          currentData.map((data, i) => {
                            return (
                              <p className="mb-4 text-[13px]" key={i}>
                                {data?.attributes?.description}
                              </p>
                            );
                          })
                        ) : (
                          <p className="mb-4 text-[13px]">
                            {recentPlayAudio?.attributes?.description}
                          </p>
                        )}
                        <span className="flex flex-wrap gap-2 items-center">
                          <div className="py-2 px-3 bg-[#EFF6FB] rounded-[10px] border-1 border-[#E3EEF5] text-[12px]">
                            {currentData && recentPlayAudio == null ? (
                              currentData.map((data, i) => {
                                return (
                                  <p className=" text-[13px]" key={i}>
                                    {data?.attributes?.category}
                                  </p>
                                );
                              })
                            ) : (
                              <p className=" text-[13px]">
                                {recentPlayAudio?.attributes?.category}
                              </p>
                            )}
                          </div>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {!showPlayer && (
            <section className="">
              <h2 className="text-4xl font-bold text-brandBlue mb-5">
                Book Title
              </h2>
              <div className="flex items-center gap-5">
                <button
                  className={`py-2 px-5 rounded-[10px] border-1 border-[#E3EEF5] text-brandBlue ${
                    showContent === "english"
                      ? "bg-brandBlue hover:bg-brandBlue text-white"
                      : "bg-[#EFF6FB] hover:bg-brandBlue hover:text-white"
                  }`}
                  onClick={() => handleButtonClick("english")}
                >
                  English
                </button>
                <button
                  className={`py-2 px-5 rounded-[10px] border-1 border-[#E3EEF5] text-brandBlue ${
                    showContent === "spanish"
                      ? "bg-brandBlue hover:bg-brandBlue text-white"
                      : "bg-[#EFF6FB] hover:bg-brandBlue hover:text-white"
                  }`}
                  onClick={() => handleButtonClick("spanish")}
                >
                  Spanish
                </button>
              </div>
            </section>
          )}
        </div>
        {!showPlayer && (
          <>
            {showContent === "english" && (
              <>
                {showLoading && (
                  <div>
                    <Loader showLoading={showLoading} />
                  </div>
                )}
                {chapterData &&
                  !showLoading &&
                  chapterData.forEach((card, key) => {
                    currentChapterKey = key;
                    chaptersArray.push(
                      <section>
                        <div className="2xl:w-[90%] xl:w-[90%] w-[90%] mx-auto my-5">
                          <div className="flex items-center justify-between my-5 pt-3">
                            <h2 className="text-[26px] font-bold text-brandBlue">
                              Chapter {key}
                            </h2>
                            <Link href={`listen/${key}`}>
                              <p className="text-[12px] text-brandBlue font-medium bg-[#E3EEF5] px-5 py-2 rounded-[10px] capitalize hover:bg-brandBlue hover:text-white cursor-pointer">
                                view all
                              </p>
                            </Link>
                          </div>
                          <div className="overflow-auto w-[1200px]">
                            <div className="flex gap-5 overflow-x-auto">
                              {card.map((singleCard, index) => {
                                {
                                  if (
                                    singleCard.attributes["english"]["data"] ===
                                    null
                                  )
                                    return false;
                                }
                                const title = singleCard.attributes.title;
                                const author = singleCard.attributes.author;
                                const category = singleCard.attributes.category;
                                const img =
                                  singleCard.attributes.image.data.attributes
                                    .url;
                                const currentID = singleCard.id;
                                return (
                                  <ChapterAudioCard
                                    showPlayerPlay={() =>
                                      showPlayerPlay(singleCard)
                                    }
                                    currentID={currentID}
                                    individualAudioData={individualAudioData}
                                    showContent={showContent}
                                    playing={playing}
                                    setPlaying={setPlaying}
                                    setShowPlayer={setShowPlayer}
                                    showIndividualContent={
                                      showIndividualContent
                                    }
                                    setShowIndividualContent={
                                      setShowIndividualContent
                                    }
                                    title={title}
                                    author={author}
                                    category={category}
                                    img={img}
                                    index={index}
                                    setCurrentIndex={setCurrentIndex}
                                    key={key}
                                    currentChapterKey={currentChapterKey}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  })}
                {chaptersArray}
              </>
            )}
            {showContent === "spanish" && (
              <>
                {showLoading && (
                  <div>
                    <Loader showLoading={showLoading} />
                  </div>
                )}
                {chapterData &&
                  !showLoading &&
                  chapterData.forEach((card, key) => {
                    chaptersArray.push(
                      <section>
                        <div className="2xl:w-[90%] xl:w-[90%] w-[90%] mx-auto my-5">
                          <div className="flex items-center justify-between my-5 pt-3">
                            <h2 className="text-[26px] font-bold text-brandBlue">
                              Chapter {key}
                            </h2>
                            <Link href={`listen/${key}`}>
                              <p className="text-[12px] text-brandBlue font-medium bg-[#E3EEF5] px-5 py-2 rounded-[10px] capitalize hover:bg-brandBlue hover:text-white cursor-pointer">
                                view all
                              </p>
                            </Link>
                          </div>
                          <div className="overflow-auto w-[1200px]">
                            <div className="flex gap-5 overflow-x-auto">
                              {card.map((singleCard, index) => {
                                {
                                  if (
                                    singleCard.attributes["spanish"]["data"] ===
                                    null
                                  )
                                    return false;
                                }
                                const title = singleCard.attributes.title;
                                const author = singleCard.attributes.author;
                                const category = singleCard.attributes.category;
                                const img =
                                  singleCard.attributes.image.data.attributes
                                    .url;
                                const currentID = singleCard.id;
                                return (
                                  <ChapterAudioCard
                                    showPlayerPlay={() =>
                                      showPlayerPlay(singleCard)
                                    }
                                    currentID={currentID}
                                    individualAudioData={individualAudioData}
                                    showContent={showContent}
                                    playing={playing}
                                    setPlaying={setPlaying}
                                    setShowPlayer={setShowPlayer}
                                    showIndividualContent={
                                      showIndividualContent
                                    }
                                    setShowIndividualContent={
                                      setShowIndividualContent
                                    }
                                    title={title}
                                    author={author}
                                    category={category}
                                    img={img}
                                    index={index}
                                    setCurrentIndex={setCurrentIndex}
                                    key={key}
                                    currentChapterKey={currentChapterKey}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  })}
                {chaptersArray}
              </>
            )}
          </>
        )}
      </div>
      <div
        className={`w-[95%] mx-auto md:hidden block ${
          showMobilePlayer && "mb-[130px]"
        }`}
      >
        <div className="">
          {/* <div className="my-5">
            <div className="flex bg-[#EFF6FB] py-2 px-5 rounded-[10px] items-center">
              <div className="h-[35px] w-[35px] flex justify-center items-center">
                <PodCastIcon className="h-full w-full" />
              </div>
              <div className="w-full ml-4">
                <input
                  type="search"
                  name="search"
                  className="w-full border-0 outline-none bg-transparent focus:border-none focus:outline-none"
                />
              </div>
            </div>
          </div> */}
          <div>
            <h2 className="my-5 text-[18px] text-brandBlue font-semibold">
              {recentPlayAudio == null ? "Recommended" : "Recent Played"}
            </h2>

            {recentPlayAudio !== null ? (
              <div
                className="relative min-h-[183px] min-w-[313px]"
                onClick={() => showPlayerPlay(recentPlayAudio)}
              >
                <div className="overflow-hidden h-[183px] shadow-lg rounded-[10px]">
                  <img
                    src={
                      recentPlayAudio?.attributes?.image?.data?.attributes?.url
                    }
                    className="bg-cover h-full w-full"
                    alt="audioCard Image 1"
                  />
                  <div className="absolute inset-0 bg-black opacity-60 rounded-[10px]"></div>
                  <div className="absolute inset-0 p-4">
                    <span className="text-[10px] font-normal text-[#FF6957] mb-2">
                      {recentPlayAudio?.attributes?.category}
                    </span>
                    <h2 className="text-[18px] text-white font-bold ">
                      {recentPlayAudio?.attributes?.title}
                    </h2>
                    <p className="text-[11px] text-white py-2">
                      {recentPlayAudio?.attributes?.description &&
                        recentPlayAudio?.attributes?.description.slice(
                          0,
                          descriptionLimit
                        )}
                      {recentPlayAudio?.attributes?.description &&
                        recentPlayAudio?.attributes?.description.length >
                          descriptionLimit &&
                        "..."}
                    </p>
                    <div>
                      <button className="h-[22px] w-[22px] bg-white flex items-center justify-center text-black rounded-full">
                        {playing &&
                        individualAudioData &&
                        individualAudioData?.id === recentPlayAudio.id ? (
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
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex gap-5 w-sm-[365px] overflow-x-scroll">
                {audioData.map((audioCard, index) => {
                  const currentID = audioCard && audioCard?.id;
                  {
                    if (audioCard.attributes["spanish"]["data"] == null)
                      return false;
                  }
                  return (
                    <div key={index}>
                      <div
                        className="relative min-h-[183px] min-w-[313px]"
                        onClick={() => showPlayerPlay(audioCard)}
                      >
                        <div className="overflow-hidden h-[183px] shadow-lg rounded-[10px]">
                          <img
                            src={
                              audioCard?.attributes?.image?.data?.attributes
                                ?.url
                            }
                            className="bg-cover h-full w-full"
                            alt="audioCard Image 1"
                          />
                          <div className="absolute inset-0 bg-black opacity-60 rounded-[10px]"></div>
                          <div className="absolute inset-0 p-4">
                            <span className="text-[10px] font-normal text-[#FF6957] mb-2">
                              {audioCard?.attributes?.category}
                            </span>
                            <h2 className="text-[18px] text-white font-bold ">
                              {audioCard?.attributes?.title}
                            </h2>
                            <p className="text-[11px] text-white py-2">
                              {audioCard?.attributes?.description &&
                                audioCard?.attributes?.description.slice(
                                  0,
                                  descriptionLimit
                                )}
                              {audioCard?.attributes?.description &&
                                audioCard?.attributes?.description.length >
                                  descriptionLimit &&
                                "..."}
                            </p>
                            <div>
                              <button className="h-[22px] w-[22px] bg-white flex items-center justify-center text-black rounded-full">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {showMobilePlayer && (
              <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo text-white p-4">
                <MobileAudioPlayer
                  playing={playing}
                  setPlaying={setPlaying}
                  showPlayerPlay={showPlayerPlay}
                  // playlist={playlist}
                  url={url}
                  playNextChapter={playNextChapter}
                  playPreviousChapter={playPreviousChapter}
                  currentIndex={currentIndex}
                  currentChapterLength={currentChapterLength}
                  previousDuration={recentPlayAudio.playedDuration}
                />
              </div>
            )}
            <section className="mt-5 pt-4">
              <h2 className="text-4xl font-bold text-brandBlue mb-5">
                Book Title
              </h2>
              <button
                className={`py-2 px-5 mr-4 rounded-[10px] border-1 border-[#E3EEF5] text-brandBlue ${
                  showContent === "english"
                    ? "bg-brandBlue hover:bg-brandBlue text-white"
                    : "bg-[#EFF6FB] hover:bg-brandBlue hover:text-white"
                }`}
                onClick={() => handleButtonClick("english")}
              >
                English
              </button>
              <button
                className={`py-2 px-5 rounded-[10px] border-1 border-[#E3EEF5] text-brandBlue ${
                  showContent === "spanish"
                    ? "bg-brandBlue hover:bg-brandBlue text-white"
                    : "bg-[#EFF6FB] hover:bg-brandBlue hover:text-white"
                }`}
                onClick={() => handleButtonClick("spanish")}
              >
                Spanish
              </button>
            </section>
            <div className="">
              <>
                {showContent === "english" && (
                  <>
                    {chapterData.forEach((card, key) => {
                      mobileChapterArray.push(
                        <>
                          {showLoading && (
                            <div>
                              <Loader showLoading={showLoading} />
                            </div>
                          )}
                          <section>
                            <div className="my-5">
                              <div className="flex justify-between items-center">
                                <h2 className="my-5 text-[18px] text-brandBlue font-semibold">
                                  Chapter {key}
                                </h2>
                                <Link href={`listen/${key}`}>
                                  <p className="text-[12px] text-brandBlue font-medium bg-[#E3EEF5] px-5 py-2 rounded-[10px] capitalize hover:bg-brandBlue hover:text-white cursor-pointer">
                                    view all
                                  </p>
                                </Link>
                              </div>
                              {card &&
                                !showLoading &&
                                card.map((mobCard, index) => {
                                  const currentID = mobCard && mobCard.id;
                                  {
                                    if (
                                      mobCard.attributes[language]["data"] ===
                                      null
                                    )
                                      return false;
                                  }
                                  return (
                                    <div
                                      className="p-3 bg-[#E3EEF5] rounded-lg mb-3"
                                      key={index}
                                      onClick={() => showPlayerPlay(mobCard)}
                                    >
                                      <div className="h-full flex text-left">
                                        <img
                                          alt="team"
                                          className="flex-shrink-0 rounded-lg w-[140px] h-[140px] object-cover cursor-pointer"
                                          src={
                                            mobCard?.attributes?.image?.data
                                              ?.attributes?.url
                                          }
                                        />
                                        <div className="flex-grow pl-6 pt-3">
                                          <span className="text-[10px] text-brandBlue">
                                            {mobCard?.attributes?.category}
                                          </span>
                                          <h2 className="title-font font-medium text-[18px] text-gray-900">
                                            {mobCard?.attributes?.title}
                                          </h2>

                                          <h3 className="text-[#ABABAB] mb-3 text-[15px]">
                                            {mobCard?.attributes?.author}
                                          </h3>
                                          <span className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                              <span className="text-[10px] flex items-center gap-2">
                                                <BsHeadphones size={14} />
                                                {showContent === "english"
                                                  ? "English"
                                                  : "Spanish"}
                                              </span>
                                            </div>
                                            <div>
                                              <button className="h-[22px] w-[22px] bg-brandOrangeGradientFrom flex items-center justify-center text-white rounded-full">
                                                {playing &&
                                                individualAudioData &&
                                                individualAudioData?.id ===
                                                  currentID ? (
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
                                  );
                                })}
                            </div>
                          </section>
                        </>
                      );
                    })}
                    {mobileChapterArray}
                  </>
                )}
                {showContent === "spanish" && (
                  <>
                    {chapterData.forEach((card, key) => {
                      mobileChapterArray.push(
                        <>
                          {showLoading && (
                            <div>
                              <Loader showLoading={showLoading} />
                            </div>
                          )}
                          <section>
                            <div className="my-5">
                              <div className="flex justify-between items-center">
                                <h2 className="my-5 text-[18px] text-brandBlue font-semibold">
                                  Chapter {key}
                                </h2>
                                <Link href={`listen/${key}`}>
                                  <p className="text-[12px] text-brandBlue font-medium bg-[#E3EEF5] px-5 py-2 rounded-[10px] capitalize hover:bg-brandBlue hover:text-white cursor-pointer">
                                    view all
                                  </p>
                                </Link>
                              </div>
                              {card &&
                                !showLoading &&
                                card.map((mobCard, index) => {
                                  const currentID = mobCard && mobCard.id;
                                  {
                                    if (
                                      mobCard.attributes[language]["data"] ===
                                      null
                                    )
                                      return false;
                                  }
                                  return (
                                    <div
                                      className="p-3 bg-[#E3EEF5] rounded-lg mb-3"
                                      key={index}
                                      onClick={() => showPlayerPlay(mobCard)}
                                    >
                                      <div className="h-full flex text-left">
                                        <img
                                          alt="team"
                                          className="flex-shrink-0 rounded-lg w-[140px] h-[140px] object-cover cursor-pointer"
                                          src={
                                            mobCard?.attributes?.image?.data
                                              ?.attributes?.url
                                          }
                                        />
                                        <div className="flex-grow pl-6 pt-3">
                                          <span className="text-[10px] text-brandBlue">
                                            {mobCard?.attributes?.category}
                                          </span>
                                          <h2 className="title-font font-medium text-[18px] text-gray-900">
                                            {mobCard?.attributes?.title}
                                          </h2>

                                          <h3 className="text-[#ABABAB] mb-3 text-[15px]">
                                            {mobCard?.attributes?.author}
                                          </h3>
                                          <span className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                              <span className="text-[10px] flex items-center gap-2">
                                                <BsHeadphones size={14} />
                                                {showContent === "english"
                                                  ? "English"
                                                  : "Spanish"}
                                              </span>
                                            </div>
                                            <div>
                                              <button className="h-[22px] w-[22px] bg-brandOrangeGradientFrom flex items-center justify-center text-white rounded-full">
                                                {playing &&
                                                individualAudioData &&
                                                individualAudioData?.id ===
                                                  currentID ? (
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
                                  );
                                })}
                            </div>
                          </section>
                        </>
                      );
                    })}
                    {mobileChapterArray}
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
