import React from "react";
import Arrowleft from "../../SvgIconsComponents/Arrowleft";
import ArrowRight from "../../SvgIconsComponents/ArrowRight";
import {
  BsFillBookmarkFill,
  BsHeadphones,
  BsPauseFill,
  BsPlayFill,
} from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { DownlaodIcon } from "../../SvgIconsComponents/DownloadIcon";
import { ShareIcon } from "../../SvgIconsComponents/ShareIcon";
import { MoreIcon } from "../../SvgIconsComponents/MoreIcon";
import { useState, useEffect } from "react";
import ProgressBar from "../ProgramsContent/progress";
import { ArrowleftBlack } from "../../SvgIconsComponents/ArrowLeftBlack";
import { MdClose } from "react-icons/md";
import IndividualAudioPlayer from "./IndividualAudioPlayer";
import { GiSpeaker } from "react-icons/gi";
import axios from "axios";
import { fetchAPI } from "../../../../lib/api";
import IndividualMobilePlayer from "./IndividualMobilePlayer";
import { useRouter } from "next/router";
import ArrowRightBlack from "../../SvgIconsComponents/ArrowRightBlack";
import Loader from "../../../loader";

const IndividualAudioBook = ({
  playing,
  setPlaying,
  chapterData,
  id,
  currentID,
  setCurrentID,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [showIndividualPlayer, setShowIndividualPlayer] = useState(false);
  const [speed, setSpeed] = useState(1.0);
  const [audioData, setAudioData] = useState([]);
  const [volume, setVolume] = useState(0.5);
  const [languagePreference, setLanguagePreference] = useState("English");
  const [selectedLanguagePreference, setSelectedLanguagePreference] =
    useState("English");
  const [individualAudioData, setIndividualAudioData] = useState(null);
  const [showIndividualMobilePlayer, setShowIndividualMobilePlayer] =
    useState(false);

  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [recentPlayAudio, setRecentPlayAudio] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetchAPI("/audio-books?populate=*")
      .then((data) => {
        setAudioData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const buttonStyle = (value) => {
    return `rounded-full px-2 py-1 ${
      speed === value ? "text-[22px] font-bold" : ""
    }`;
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const playNextChapter = () => {
    setCurrentAudioIndex((prevState) => {
      showPlayerPlay(chapterData[prevState + 1], prevState + 1);
      return prevState + 1;
    });
  };
  const playPreviousChapter = () => {
    setCurrentAudioIndex((prevState) => {
      showPlayerPlay(chapterData[prevState - 1], prevState - 1);
      return prevState - 1;
    });
  };

  const showPlayerPlay = (audio, index) => {
    setCurrentAudioIndex(index);

    const previousDuration = audio.playedDuration || 0;

    if (individualAudioData && audio.id === individualAudioData?.id) {
      setPlaying(!playing);
      // if (currentTime === duration) {
      //   setPlaying(false);
      // }
    } else {
      audio.playedDuration = previousDuration;
      setPlaying(true);
      setShowIndividualPlayer(true);
      setIndividualAudioData(chapterData[index]);
      setShowIndividualMobilePlayer(true);
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

  const url = languagePreference === "English" ? englishUrl : spanishUrl;

  const individualImage = chapterData && chapterData.imageURL;

  const individualCatagory = chapterData && chapterData.category;
  const individualTitle = chapterData && chapterData?.title;
  const individualDescription = chapterData && chapterData?.description;

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const matchingItem = audioData.find(
    (item) => currentID + 1 === item.attributes.chapter
  );

  const handleNextPage = () => {
    const newID = currentID + 1;
    setCurrentID(newID);
    router.push(`/students/listen/${newID}`);
    setShowIndividualPlayer(false);
    setPlaying(false);
  };

  const handlePreviousPage = () => {
    const newID = currentID - 1;
    setCurrentID(newID);
    router.push(`/students/listen/${newID}`);
    setShowIndividualPlayer(false);
    setPlaying(false);
  };

  const handleApply = () => {
    setSelectedLanguagePreference(languagePreference);
    setShowModal(false);
    setShowMobileModal(false);
    setShowLoading(true);
    setShowIndividualPlayer(false);
    setShowIndividualMobilePlayer(false);
    setTimeout(() => {
      setShowLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className="relative w-full">
        <section
          className={` w-full md:block hidden ${
            showIndividualPlayer && "mb-[170px]"
          }`}
        >
          <div className="bg-[#EFF6FB] p-5">
            <div className="relative w-full  before:contents-[''] before:absolute before:blur-[100px]   before:bg-brandBlueLighten before:right-[0] before:top-[-120px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1]">
              <div className="flex items-center gap-5">
                {currentID > 1 ? (
                  <div
                    className={` bg-brandBlue rounded-lg flex justify-center items-center cursor-pointer px-3 py-2 text-white`}
                    onClick={() => handlePreviousPage()}
                  >
                    <span className="mr-3">
                      <Arrowleft />
                    </span>
                    Previous Chapter
                  </div>
                ) : (
                  <div
                    className={` bg-brandBlue rounded-lg flex justify-center items-center cursor-not-allowed opacity-50  px-3 py-2 text-white`}
                  >
                    <span className="mr-3">
                      <Arrowleft />
                    </span>
                    Previous Chapter
                  </div>
                )}
                {matchingItem ? (
                  <div
                    className=" bg-brandBlue rounded-lg flex justify-center items-center cursor-pointer  px-3 py-2 text-white"
                    onClick={() => handleNextPage()}
                  >
                    Next Chapter{" "}
                    <span className="ml-3">
                      <ArrowRight />
                    </span>
                  </div>
                ) : (
                  <div className=" bg-brandBlue rounded-lg flex justify-center items-center cursor-not-allowed opacity-50  px-3 py-2 text-white">
                    Next Chapter
                    <span className="ml-3">
                      <ArrowRight />
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5 pt-4">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[210px] h-[210px] object-cover object-center sm:mb-0 mb-4"
                  src={
                    chapterData &&
                    chapterData[0] &&
                    chapterData[0].attributes.image.data.attributes.url
                  }
                />
                <div className="flex-grow sm:pl-8">
                  <p className="text-[48px] font-medium text-[#121212] leading-[57px]">
                    {`Chapter ${id}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-5">
            <p className="text-[13px] text-[#121212] max-w-[879px] leading-[17px] mb-5 pb-5">
              {individualDescription}
            </p>
            <div className="bg-[#D9E5EE] h-[1px]"></div>
            <div className="my-5 max-w-[650px]">
              <div className="flex items-center justify-between">
                <h2 className="text-[26px] text-brandBlue font-semibold">
                  Chapter {id}
                </h2>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-[12px] text-brandBlue font-medium bg-[#E3EEF5] px-5 py-2 rounded-[10px] capitalize hover:bg-brandBlue hover:text-white"
                >
                  filter
                </button>
              </div>
              {showLoading && (
                <div>
                  <Loader showLoading={showLoading} className="max-h-[40vh]" />
                </div>
              )}

              {chapterData &&
                !showLoading &&
                chapterData.map((card, index) => {
                  const currentID = card.id;

                  {
                    if (
                      card.attributes[selectedLanguagePreference.toLowerCase()][
                        "data"
                      ] === null
                    )
                      return false;
                  }

                  return (
                    <div
                      className="bg-[#E3EEF5] rounded-lg p-3 my-5 hover:shadow-audioCard cursor-pointer"
                      onClick={() => showPlayerPlay(card, index)}
                    >
                      <div className="h-fit flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-[240px] h-[240px] object-cover object-center sm:mb-0 mb-4"
                          src={card.attributes.image.data.attributes.url}
                        />
                        <div className="flex-grow sm:pl-8">
                          <span className="text-[10px] text-brandBlue">
                            {card?.attributes.category}
                          </span>
                          <h2 className="title-font font-medium text-[18px] text-gray-900">
                            {card?.attributes.title}
                          </h2>
                          <p className="mb-2 text-[12px]">
                            {card?.attributes.description}
                          </p>
                          <h3 className="text-[#ABABAB] mb-3 text-[15px]">
                            {card?.attributes.author}
                          </h3>

                          <span className="flex justify-between">
                            <div className="flex items-center gap-3">
                              <button className="h-[29px] w-[29px] bg-brandOrangeGradientFrom flex items-center justify-center text-white rounded-full">
                                {playing &&
                                individualAudioData &&
                                individualAudioData?.id === currentID ? (
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
                                {selectedLanguagePreference == "English"
                                  ? " English"
                                  : " Spanish"}
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        {showIndividualPlayer && (
          <div className="fixed w-[79.2%] bottom-0 right-0 bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo text-white md:block hidden">
            <section className="flex items-center">
              <div className="flex items-center w-full">
                <div className="p-4 md:w-1/3">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-[105px] h-[105px] object-cover object-center sm:mb-0 mb-4"
                      src={
                        individualAudioData &&
                        individualAudioData?.attributes.image.data.attributes
                          .url
                      }
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="text-[16px] font-medium text-white pr-5">
                        {individualAudioData &&
                          individualAudioData?.attributes.title}
                      </h2>
                      <p className="mb-4 text-[12px] text-[#F0F0F0]">
                        {individualAudioData &&
                          individualAudioData.attributes.author}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <IndividualAudioPlayer
                    handlePlayPause={handlePlayPause}
                    playing={playing}
                    setPlaying={setPlaying}
                    url={url}
                    IndividualAudioPlayer={IndividualAudioPlayer}
                    volume={volume}
                    playNextChapter={playNextChapter}
                    playPreviousChapter={playPreviousChapter}
                    currentAudioIndex={currentAudioIndex}
                    chapterData={chapterData}
                    playbackRate={speed}
                    previousDuration={recentPlayAudio.playedDuration}
                  />
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex flex-col w-[200px] ml-auto">
                    <div className="speed-buttons ml-auto">
                      <button
                        onClick={() => handleSpeedChange(1.0)}
                        className={buttonStyle(1.0)}
                      >
                        1x
                      </button>
                      <button
                        onClick={() => handleSpeedChange(2.0)}
                        className={buttonStyle(2.0)}
                      >
                        2x
                      </button>
                      <button
                        onClick={() => handleSpeedChange(3.0)}
                        className={buttonStyle(3.0)}
                      >
                        3x
                      </button>
                    </div>
                    <div className="flex items-center gap-3 w-full">
                      <label htmlFor="volumeSlider">
                        <GiSpeaker size={20} />
                      </label>
                      <input
                        id="volumeSlider"
                        type="range"
                        className="appearance-none w-full h-2 rounded-full bg-gray-300 outline-none cursor-pointer"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={(e) =>
                          handleVolumeChange(parseFloat(e.target.value))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      {showModal && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="bg-white w-1/4 rounded-lg p-6 shadow-lg relative">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-semibold text-center text-[#121212]">
                  Language Preference
                </h2>
                <button
                  className="p-1 text-white bg-brandBlue rounded-full h-[25px] w-[25px] flex justify-center items-center"
                  onClick={() => setShowModal(false)}
                >
                  <MdClose
                    size={18}
                    className=" flex justify-center items-center w-full h-full"
                  />
                </button>
              </div>

              <div className="my-5">
                <p className="mb-4 text-[19px] font-medium">Suggested</p>
                <div className="flex items-center justify-between pb-2">
                  <label
                    htmlFor="English"
                    className="text-[18px] font-light text-black"
                  >
                    English
                  </label>
                  <input
                    type="radio"
                    name="languagePreference"
                    id="English"
                    value="English"
                    checked={languagePreference === "English"}
                    onChange={(e) => setLanguagePreference(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between pb-2">
                  <label
                    htmlFor="Spanish"
                    className="text-[18px] font-light text-black"
                  >
                    Spanish
                  </label>
                  <input
                    type="radio"
                    name="languagePreference"
                    id="Spanish"
                    value="Spanish"
                    checked={languagePreference === "Spanish"}
                    onChange={(e) => setLanguagePreference(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-5">
                <button
                  className="bg-[#D8D9D7] text-brandBlue w-full rounded-[15px] p-3"
                  onClick={() => setLanguagePreference("English")}
                >
                  Reset
                </button>
                <button
                  className="bg-brandBlue  text-white w-full rounded-[15px] p-3"
                  onClick={() => handleApply()}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-black opacity-60 modal-overlay fixed inset-0 z-40"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}

      {showMobileModal && (
        <>
          <div className="fixed inset-0 flex items-end justify-center z-50 ">
            <div className="bg-white w-full rounded-t-lg p-6 shadow-lg relative">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-semibold text-center text-[#121212]">
                  Language Preference
                </h2>
                <button
                  className="  text-brandBlue border-2 border-blue-400 rounded-full h-[25px] w-[25px] flex justify-center items-center"
                  onClick={() => setShowMobileModal(false)}
                >
                  <MdClose size={18} />
                </button>
              </div>

              <div className="my-5">
                <p className="mb-4 text-[19px] font-medium">Suggested</p>
                <div className="flex items-center justify-between pb-2">
                  <label
                    htmlFor="English"
                    className="text-[18px] font-light text-black"
                  >
                    English
                  </label>
                  <input
                    type="radio"
                    name="languagePreference"
                    id="English"
                    value="English"
                    checked={languagePreference === "English"}
                    onChange={(e) => setLanguagePreference(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between pb-2">
                  <label
                    htmlFor="Spanish"
                    className="text-[18px] font-light text-black"
                  >
                    Spanish
                  </label>
                  <input
                    type="radio"
                    name="languagePreference"
                    id="Spanish"
                    value="Spanish"
                    checked={languagePreference === "Spanish"}
                    onChange={(e) => setLanguagePreference(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-5">
                <button
                  className="bg-[#D8D9D7] text-brandBlue w-full rounded-[15px] p-3"
                  onClick={() => setLanguagePreference("English")}
                >
                  Reset
                </button>
                <button
                  className="bg-brandBlue  text-white w-full rounded-[15px] p-3"
                  onClick={() => handleApply()}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="bg-black opacity-60 modal-overlay fixed inset-0 z-40"></div>
        </>
      )}

      <div
        className={`mx-auto md:hidden block ${
          showIndividualMobilePlayer && "mb-[190px]"
        }`}
      >
        <div className="flex items-center justify-between  m-5">
          <div className="flex items-center gap-3">
            {currentID > 1 ? (
              <div
                className="h-[30px] w-[30px] rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => handlePreviousPage()}
              >
                <ArrowleftBlack />
              </div>
            ) : (
              <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center cursor-not-allowed opacity-50">
                <ArrowleftBlack />
              </div>
            )}
            {matchingItem ? (
              <div
                className="h-[30px] w-[30px] rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => handleNextPage()}
              >
                <ArrowRightBlack />
              </div>
            ) : (
              <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center cursor-not-allowed opacity-50">
                <ArrowRightBlack />
              </div>
            )}
          </div>

          <div>
            <div className="flex flex-col items-center">
              <h2 className="max-w-[200px] text-center m-auto text-[12px] text-[#121212]">
                Chapter {id}
              </h2>
            </div>
          </div>
          <div className="group relative w-max">
            <button
              className="bg-brandOrangeGradient"
              onClick={() => setShowMobileModal(true)}
            >
              <MoreIcon />
            </button>
            {/* <div className="pointer-events-none absolute -bottom-[70px] -left-[160px] w-[155px] opacity-0 transition-opacity group-hover:opacity-100 bg-[#EFF6FB] rounded-[6px] p-5 z-[2]">
              <p
                className="text-[12px] z-[2]"
                onClick={() => setShowMobileModal(true)}
              >
                <TfiWorld size={12} className="mr-2" />
                Language
              </p>
              <div className="bg-[#D5DEE3] h-[2px] my-3"></div>
              <p className="text-[12px]">
                <AiOutlineExclamationCircle size={12} className="mr-2" />
                More
              </p>
            </div> */}
          </div>
        </div>

        <div className="h-full overflow-hidden ">
          {/* <div className="relative">
            <div className="flex justify-center -mt-[50px]">
              <div className="flex justify-center items-center gap-4  bg-[#E3EEF5] rounded-[10px] px-4 py-2">
                <div className="group relative w-max">
                  <button className=" bg-brandOrangeGradient flex items-center justify-cente">
                    <BsFillBookmarkFill />
                  </button>
                </div>
                <div className="group relative w-max">
                  <button className=" bg-brandOrangeGradient flex items-center justify-center">
                    <ShareIcon className="group-hover:fill-blue-600" />
                  </button>
                </div>

                <div className="group relative w-max">
                  <button className=" bg-brandOrangeGradient flex items-center justify-center">
                    <DownlaodIcon />
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <div className="p-6">
            <h1 className="text-[25px] font-medium text-center text-[#121212] my-5">
              {individualTitle}
            </h1>
            <p className="text-[13px] text-[#121212] mb-3">
              {individualDescription}
            </p>
            {showLoading && (
              <div>
                <Loader showLoading={showLoading} className="max-h-[40vh]" />
              </div>
            )}
            <div className="flex items-center flex-wrap "></div>
            {chapterData &&
              !showLoading &&
              chapterData.map((card, index) => {
                const currentID = card.id;
                {
                  if (
                    card.attributes[selectedLanguagePreference.toLowerCase()][
                      "data"
                    ] === null
                  )
                    return false;
                }
                return (
                  <div
                    className="bg-[#E3EEF5] rounded-lg p-3 my-5"
                    onClick={() => showPlayerPlay(card, index)}
                  >
                    <div className="h-fit flex justify-start text-left items-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg sm:w-[240px] sm:h-[240px] h-[120px] w-[120px] object-cover object-center sm:mb-0 mb-4"
                        src={card.attributes.image.data.attributes.url}
                      />
                      <div className="flex-grow pl-8">
                        <span className="text-[10px] text-brandBlue">
                          {card?.attributes.category}
                        </span>
                        <h2 className="title-font font-medium text-[18px] text-gray-900">
                          {card?.attributes.title}
                        </h2>
                        <p className="mb-2 text-[12px]">
                          {card?.attributes.description}
                        </p>
                        <h3 className="text-[#ABABAB] mb-3 text-[15px]">
                          {card?.attributes.author}
                        </h3>

                        <span className="flex justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] flex items-center gap-2">
                              <BsHeadphones size={14} />
                              {selectedLanguagePreference === "English"
                                ? " English"
                                : " Spanish"}
                            </span>
                          </div>
                          <button className="h-[29px] w-[29px] bg-brandOrangeGradientFrom flex items-center justify-center text-white rounded-full">
                            {playing &&
                            individualAudioData &&
                            individualAudioData?.id === currentID ? (
                              <div className="h-full w-full flex items-center justify-center">
                                <BsPauseFill size={22} />
                              </div>
                            ) : (
                              <div className="h-full w-full flex items-center justify-center">
                                <BsPlayFill size={22} />
                              </div>
                            )}
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            {showIndividualMobilePlayer && (
              <div className="fixed w-full bottom-0 right-0  bg-white text-white md:hidden block">
                <IndividualMobilePlayer
                  handlePlayPause={handlePlayPause}
                  playing={playing}
                  setPlaying={setPlaying}
                  url={url}
                  volume={volume}
                  playNextChapter={playNextChapter}
                  playPreviousChapter={playPreviousChapter}
                  currentAudioIndex={currentAudioIndex}
                  chapterData={chapterData}
                  previousDuration={recentPlayAudio.playedDuration}
                  playbackRate={speed}
                  speed={speed}
                  setSpeed={setSpeed}
                />
              </div>
            )}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualAudioBook;
