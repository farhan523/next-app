import React from "react";
import Arrowleft from "../../SvgIconsComponents/Arrowleft";
import ArrowRight from "../../SvgIconsComponents/ArrowRight";
import { BsFillBookmarkFill, BsHeadphones, BsPlayFill } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { DownlaodIcon } from "../../SvgIconsComponents/DownloadIcon";
import { ShareIcon } from "../../SvgIconsComponents/ShareIcon";
import { MoreIcon } from "../../SvgIconsComponents/MoreIcon";
import { useState, useEffect } from "react";
import ProgressBar from "../ProgramsContent/progress";
import { ArrowleftBlack } from "../../SvgIconsComponents/ArrowLeftBlack";
import { MdClose } from "react-icons/md";

export const IndividualAudioBookContent = () =>
  //   {
  //   showPlayer,
  //   setShowPlayer,
  //   setPlaying,
  //   playing,
  //   }
  {
    const [showModal, setShowModal] = useState(false);
    const [showMobileModal, setShowMobileModal] = useState(false);
    const [showIndividualPlayer, setShowIndividualPlayer] = useState(false);
    const [playIndividualPlayer, setPlayIndividualPlayer] = useState(false);

    return (
      <>
        <section className=" w-full md:block hidden">
          <div className="bg-[#EFF6FB] p-5">
            <div className="relative w-full  before:contents-[''] before:absolute before:blur-[100px]   before:bg-brandBlueLighten before:right-[0] before:top-[-120px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1]">
              <div className="flex items-center gap-5">
                <div className="h-[30px] w-[30px] bg-brandBlue rounded-full flex justify-center items-center cursor-pointer">
                  <Arrowleft />
                </div>
                <div className="h-[30px] w-[30px]  bg-brandBlue rounded-full flex justify-center items-center cursor-pointer">
                  <ArrowRight />
                </div>
              </div>
            </div>
            <div className="mt-5 pt-4">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[210px] h-[210px] object-cover object-center sm:mb-0 mb-4"
                  src="../../../../static/img/roadMapLiabrary.png"
                />
                <div className="flex-grow sm:pl-8">
                  <div className="font-medium text-[15px] text-[#ABABAB] mb-1">
                    27 minutes left
                    <ProgressBar progressPercentage={50} />
                  </div>
                  <h3 className="text-[16px] text-[#0067B2] mb-1">
                    Psychology
                  </h3>
                  <p className="text-[48px] font-medium text-[#121212] leading-[57px]">
                    AUDIO BOOK TITLE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-5">
            <h2 className="text-[32px] font-medium text-[#121212]">About</h2>
            <p className="text-[13px] text-[#121212] max-w-[879px] leading-[17px] mb-5 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea.
            </p>
            <div className="bg-[#D9E5EE] h-[1px]"></div>
            <div className="my-5 max-w-[650px]">
              <div className="flex items-center justify-between">
                <h2 className="text-[26px] text-brandBlue font-semibold">
                  chapter one
                </h2>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-[12px] text-brandBlue font-medium bg-[#E3EEF5] px-5 py-2 rounded-[10px] capitalize"
                >
                  filter
                </button>
              </div>
              <div className="bg-[#E3EEF5] rounded-lg p-3 my-5">
                <div className="h-fit flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-[240px] h-[240px] object-cover object-center sm:mb-0 mb-4"
                    src="../../../../static/img/roadMapLiabrary.png"
                  />
                  <div className="flex-grow sm:pl-8">
                    <span className="text-[10px] text-brandBlue">Business</span>
                    <h2 className="title-font font-medium text-[18px] text-gray-900">
                      Developing Your Mental Balance Sheet.
                    </h2>
                    <p className="mb-2 text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat...
                    </p>
                    <h3 className="text-[#ABABAB] mb-3 text-[15px]">
                      Bessie Green
                    </h3>

                    <span className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          className="h-[29px] w-[29px] bg-brandOrangeGradientFrom flex items-center justify-center text-white rounded-full"
                          onClick={() => setShowIndividualPlayer(true)}
                        >
                          <BsPlayFill size={22} />
                        </button>
                        <span className="text-[10px] flex items-center gap-2">
                          <BsHeadphones size={14} />
                          1h 35min
                        </span>
                      </div>
                      <div className="relative ">
                        <div className="flex items-center gap-4 bottom-0">
                          <div className="group relative w-max">
                            <button className="h-[29px] w-[29px] bg-brandOrangeGradient flex items-center justify-center">
                              <ShareIcon className="group-hover:fill-blue-600" />
                            </button>
                            <span className="pointer-events-none absolute -top-9 -left-4 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#CBE1F0] rounded-[6px] px-2 py-1">
                              Share
                            </span>
                          </div>

                          <div className="group relative w-max">
                            <button className="h-[29px] w-[29px] bg-brandOrangeGradient flex items-center justify-center">
                              <DownlaodIcon />
                            </button>
                            <span className="pointer-events-none absolute -top-9  -left-4 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#CBE1F0] rounded-[6px] px-2 py-1">
                              Downlaod
                            </span>
                          </div>

                          <div className="group relative w-max">
                            <button className="h-[29px] w-[29px] bg-brandOrangeGradient flex items-center justify-cente">
                              <MoreIcon />
                            </button>
                            <span className="pointer-events-none absolute -top-9  -left-4 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#CBE1F0] rounded-[6px] px-2 py-1">
                              More
                            </span>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#E3EEF5] rounded-lg p-3 my-5">
                <div className="h-fit flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-[240px] h-[240px] object-cover object-center sm:mb-0 mb-4"
                    src="../../../../static/img/roadMapLiabrary.png"
                  />
                  <div className="flex-grow sm:pl-8">
                    <span className="text-[10px] text-brandBlue">Business</span>
                    <h2 className="title-font font-medium text-[18px] text-gray-900">
                      Developing Your Mental Balance Sheet.
                    </h2>
                    <p className="mb-2 text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat...
                    </p>
                    <h3 className="text-[#ABABAB] mb-3 text-[15px]">
                      Bessie Green
                    </h3>

                    <span className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          className="h-[29px] w-[29px] bg-brandOrangeGradientFrom flex items-center justify-center text-white rounded-full"
                          // onClick={() => togglePlayer()}
                        >
                          <BsPlayFill size={22} />
                        </button>
                        <span className="text-[10px] flex items-center gap-2">
                          <BsHeadphones size={14} />
                          1h 35min
                        </span>
                      </div>
                      <div className="relative ">
                        <div className="flex items-center gap-4 bottom-0">
                          <div className="group relative w-max">
                            <button className="h-[29px] w-[29px] bg-brandOrangeGradient flex items-center justify-center">
                              <ShareIcon className="group-hover:fill-blue-600" />
                            </button>
                            <span className="pointer-events-none absolute -top-9 -left-4 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#CBE1F0] rounded-[6px] px-2 py-1">
                              Share
                            </span>
                          </div>

                          <div className="group relative w-max">
                            <button className="h-[29px] w-[29px] bg-brandOrangeGradient flex items-center justify-center">
                              <DownlaodIcon />
                            </button>
                            <span className="pointer-events-none absolute -top-9  -left-4 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#CBE1F0] rounded-[6px] px-2 py-1">
                              Downlaod
                            </span>
                          </div>

                          <div className="group relative w-max">
                            <button className="h-[29px] w-[29px] bg-brandOrangeGradient flex items-center justify-cente">
                              <MoreIcon />
                            </button>
                            <span className="pointer-events-none absolute -top-9  -left-4 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-[#CBE1F0] rounded-[6px] px-2 py-1">
                              More
                            </span>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {showModal && (
          <>
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
              <div className="bg-white w-1/4 rounded-lg p-6 shadow-lg relative">
                <h2 className="text-[20px] font-semibold text-center text-[#121212] mb-4">
                  Language Preference
                </h2>
                <button
                  className="absolute top-3 right-5 text-brandBlue border-2 border-blue-400 rounded-full h-[25px] w-[25px] flex justify-center items-center"
                  onClick={() => setShowModal(false)}
                >
                  <MdClose size={18} />
                </button>
                <div className="my-5">
                  <p className="mb-4 text-[19px] font-medium">Suggested</p>
                  <div className="flex items-center justify-between pb-2">
                    <label
                      htmlFor="English"
                      className="text-[18px] font-light text-black"
                    >
                      English
                    </label>
                    <input type="radio" name="checkbox" id="English" />
                  </div>

                  <div className="flex items-center justify-between pb-2">
                    <label
                      htmlFor="Spanish"
                      className="text-[18px] font-light text-black"
                    >
                      Spanish
                    </label>
                    <input type="radio" name="checkbox" id="Spanish" />
                  </div>
                </div>

                <div className="flex gap-5">
                  <button
                    className="bg-[#D8D9D7] text-white w-full rounded-[15px] p-3"
                    onClick={() => setShowModal(false)}
                  >
                    Reset
                  </button>
                  <button className="bg-brandBlue  text-white w-full rounded-[15px] p-3">
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
              <div className="bg-white w-full rounded-t-lg p-6 shadow-lg">
                <h2 className="text-[20px] font-semibold text-center text-[#121212] mb-4">
                  Language Preference
                </h2>
                <div className="my-5">
                  <p className="mb-4 text-[19px] font-medium">Suggested</p>
                  <div className="flex items-center justify-between pb-2">
                    <label
                      htmlFor="englishUSA"
                      className="text-[18px] font-light text-black"
                    >
                      English (US)
                    </label>
                    <input
                      type="radio"
                      name="checkbox"
                      id="englishUSA"
                      selected
                    />
                  </div>
                  <div className="flex items-center justify-between pb-2">
                    <label
                      htmlFor="englishUK"
                      className="text-[18px] font-light text-black"
                    >
                      English (UK)
                    </label>
                    <input type="radio" name="checkbox" id="englishUK" />
                  </div>
                </div>

                <div className="my-5">
                  <p className="mb-4 text-[19px] font-medium">Others</p>
                  <div className="flex items-center justify-between pb-2">
                    <label
                      htmlFor="Spanish"
                      className="text-[18px] font-light text-black"
                    >
                      Spanish
                    </label>
                    <input type="radio" name="checkbox" id="Spanish" />
                  </div>
                  <div className="flex items-center justify-between pb-2">
                    <label
                      htmlFor="France"
                      className="text-[18px] font-light text-black"
                    >
                      France
                    </label>
                    <input type="radio" name="checkbox" id="France" />
                  </div>
                </div>

                <div className="flex gap-5">
                  <button
                    className="bg-[#D8D9D7] text-white w-full rounded-[15px] p-3"
                    onClick={() => setShowMobileModal(false)}
                  >
                    Reset
                  </button>
                  <button className="bg-brandBlue  text-white w-full rounded-[15px] p-3">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-black opacity-60 modal-overlay fixed inset-0 z-40"></div>
          </>
        )}

        <div className="mx-auto md:hidden block">
          <div className="flex items-center justify-between  m-5">
            <div>
              <ArrowleftBlack />
            </div>
            <div>
              <div className="flex flex-col items-center">
                <p className="text-[10px] text-brandBlue font-normal">
                  Now Playing
                </p>
                <h2 className="max-w-[200px] text-center m-auto text-[12px] text-[#121212]">
                  Developing Your Mental Balance Sheet.
                </h2>
              </div>
            </div>
            <div className="group relative w-max">
              <button className="bg-brandOrangeGradient">
                <MoreIcon />
              </button>
              <div className="pointer-events-none absolute -bottom-[70px] -left-[160px] w-[155px] opacity-0 transition-opacity group-hover:opacity-100 bg-[#EFF6FB] rounded-[6px] p-5 z-[2]">
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
              </div>
            </div>
          </div>
          <div className="h-full overflow-hidden ">
            <div className="relative">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="../../../../static/img/roadMapLiabrary.png"
                alt="blog"
              />
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
            </div>

            <div className="p-6">
              <h1 className="text-[25px] font-medium text-center text-[#121212] my-5">
                Developing Your Mental Balance Sheet.
              </h1>
              <p className="text-[13px] text-[#121212] mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Aliquam quaerat voluptatem.
              </p>
              <div className="flex items-center flex-wrap "></div>
            </div>
          </div>
        </div>
      </>
    );
  };
