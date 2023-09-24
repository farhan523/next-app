import React, { useState, useEffect } from "react";
import {
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineLike,
  AiFillLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import RelatedVideos from "./relatedVideos";
import ReactPlayer from "react-player";
import ShareSocial from "./shareSocial";
import { fetchAPI } from "../../../../lib/api";
import { useRouter } from "next/router";
import Shape from "../../../../static/img/Ellipse_blue.svg";
import Image from "next/image";
// import DemoVideos from "../../../../static/img/demo_videos.mp4"
import {
  Like,
  DisLike,
  Share,
  NextPreview,
  PrivPreview,
  Views,
  Times,
  LikeOutline,
  DisLikeOutline,
} from "../../SvgIconsComponents/control";
import http from "../../../../lib/http";
const TrainingVideoContent = ({ video, role }) => {
  if (!video) return <p>Loading...</p>;
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);
  const [like, setLike] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [nextVideo, setNextVideo] = useState(null);
  useEffect(() => {
    (async () => {
      const relatedVideosData = await fetchAPI("/training-videos", {
        populate: "*",
      });
      const relatedVideos = relatedVideosData.data.filter((item) => {
        return item.id !== video.data.id;
      });
      setRelatedVideos(relatedVideos);
      if (relatedVideos.length >= 1) {
        setNextVideo(relatedVideos[0].id);
      }
    })();
  }, [router]);
  const onStartMedia = async (id, views) => {
    await http.put(
      `/api/training-videos/${id}`,
      {
        data: {
          views: views + 1,
        },
      },
      {
        headers: {
          Authorization: `Bearer 0e1cb9a5c9f55663671ed2c4d4fc21b8ce5f17076c94fc27fadcf6019f818d78fd738cb1a642ad467bf80412c40b9d759dbe936a8ec8245349e11cae955c1ffcea71f443ab10a5c6922f2c7f8ac9329d0cbac38250fd9334468f7c99d4189ab35b061c908582498d84f07c5d9e24342f4e633f9fbdde7e4029a4b627c1839763`,
        },
      }
    );
  };
  return (
    <div className="relative w-full p-4 md:p-9">
      <div className="absolute right-0 -z-10 -top-40">
        <Image src={Shape} className="" />
      </div>
      <div className="grid grid-cols-4 gap-4 my-4">
        <div className="col-span-3">
          {/*<div className="relative w-full md:w-4/5">
            <input
              type="text"
              placeholder=""
              className="w-full h-10 pl-10 font-normal border-none bg-icecream rounded-xl"
            />
            <AiOutlineSearch
              className="absolute left-3 top-2.5"
              color="#0067B2"
              size={20}
            />
          </div>*/}
          {/* <div className="my-2">
            <p className="text-sm font-normal text-brandBlack">
              Recent Searches:
              <button className="ml-2 text-brandOrangeGradientFrom">
                Scholar
              </button>
              <button className="ml-2 text-brandOrangeGradientFrom">
                , Curriculum
              </button>
            </p>
          </div> */}
        </div>
        <button
          className="flex justify-right -mt-6 text-base font-bold text-brandBlue"
          onClick={() => {
            if(role === 'student') router.push("/students/watch")
            else router.push("/training")
          }
          
          }
        >
          <AiOutlineLeft className="mt-1 mr-2" /> Back
        </button>
      </div>
      <div className="grid grid-cols-1 gap-0 md:gap-12 md:grid-cols-4">
        <div className="col-span-3">
          <div className="mt-8 ">
            <ReactPlayer
              controls={true}
              className="bg-black react-player rounded-xl"
              url={
                video?.data?.attributes?.video?.data?.attributes?.url
                  ? video?.data?.attributes?.video?.data?.attributes?.url
                  : video?.data?.attributes?.youtubeURL
              }
              width="100%"
              height="400px"
              style={{ borderRadius: "10px" }}
              onStart={() =>
                onStartMedia(video.data.id, video.data.attributes.views)
              }
            />
          </div>
          {/*<div className="p-2 my-4 rounded-lg bg-icecream">
            <div className="flex justify-between ">
              <div className="flex">
                <button
                  className="flex mt-1 text-sm font-medium text-brandBlack"
                  onClick={() => setLike(false)}
                >
                  <span className="mr-2 ">
                    {like ? (
                      <AiOutlineLike
                        className="text-brandBlue"
                        color=""
                        size={20}
                      />
                    ) : (
                      <AiFillLike
                        className="text-brandBlue"
                        color=""
                        size={20}
                      />
                    )}
                  </span>
                  <span className="mt-0.5 text-xs font-normal text-brandBlack">
                    {video.data.attributes.likes.data.length}
                  </span>
                </button>
                <span className="mx-4 text-2xl font-blod text-brandBlue">
                  |
                </span>
                <button
                  className="flex mt-2 text-sm font-medium text-brandBlack"
                  onClick={() => setLike(true)}
                >
                  {like ? (
                    <AiFillDislike
                      className="text-brandBlue"
                      color=""
                      size={20}
                    />
                  ) : (
                    <AiOutlineDislike
                      className="text-brandBlue"
                      color=""
                      size={20}
                    />
                  )}
                  <span className="mt-0.5 text-xs font-normal text-brandBlack pl-2">
                    {video.data.attributes.dislikes.data.length}
                  </span>
                </button>
                <ShareSocial />
              </div>
              <div className="hidden md:block">
                <div className="flex ">
                  <button className="flex mt-1.5 ml-3 text-sm font-medium text-brandBlack">
                    <span className="mr-1 ">
                      <PrivPreview />
                    </span>{" "}
                    <span className=" text-xs font-normal text-brandBlack mt-0.5">
                      Prev
                    </span>
                  </button>
                  <button
                    className="flex mt-1.5 ml-3 text-sm font-medium text-brandBlack"
                    onClick={() => {
                      router.push(`/training/video-detail/${nextVideo}`);
                      // router.reload();
                    }}
                  >
                    <span className="mr-1 ">
                      <NextPreview />
                    </span>{" "}
                    <span className="text-xs font-normal text-brandBlack mt-0.5">
                      Next
                    </span>
                  </button>
                  <div className="flex mt-2 ml-3">
                    <span className="mr-2 text-xs font-normal text-brandBlack">
                      Auto play
                    </span>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <div className="flex ">
                <button className="flex mt-1.5 text-sm font-medium text-brandBlack">
                  <span className="mr-1 ">
                    <PrivPreview />
                  </span>{" "}
                  <span className=" text-xs font-normal text-brandBlack mt-0.5">
                    Prev
                  </span>
                </button>
                <button className="flex mt-1.5 ml-3 text-sm font-medium text-brandBlack">
                  <span className="mr-1 ">
                    <NextPreview />
                  </span>{" "}
                  <span className="text-xs font-normal text-brandBlack mt-0.5">
                    Next
                  </span>
                </button>
                <div className="flex mt-2 ml-3">
                  <span className="mr-2 text-xs font-normal text-brandBlack">
                    Auto play
                  </span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
            </div>*/}

          <div className="p-6 my-4 rounded-lg bg-icecream">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
              <div className="col-span-4">
                <h2 className="mb-3 text-2xl font-semibold leading-6 text-brandBlack">
                  {video.data.attributes.title}
                </h2>
                <p className="text-sm font-normal leading-5 text-brandBlack">
                  {showMore
                    ? `${video.data.attributes.description}`
                    : `${video.data.attributes.description.substring(
                        0,
                        100
                      )} ...`}
                  <button
                    className={`text-sm font-medium text-brandBlue ${
                      showMore ? "ml-10" : "ml-10"
                    }`}
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "Show less" : " Show more"}
                  </button>
                </p>
              </div>
              {/*<div className="p-2 mt-2 ml-3">
                <ul>
                  <li className="flex mb-5">
                    <span className="mt-0.5">
                      <Views />
                    </span>
                    <span className="ml-3 text-xs font-normal text-brandBlack">
                      {video.data.attributes.views} views
                    </span>
                  </li>
                  <li className="flex mb-5">
                    <span className="mt-0.5">
                      <Times />
                    </span>
                    <span className="ml-3 text-xs font-normal text-brandBlack">
                      2 days ago
                    </span>
                  </li>
                  <li className="flex mb-5">
                    <span className="mt-0.5">
                      <LikeOutline />
                    </span>
                    <span className="ml-3 text-xs font-normal text-brandBlack">
                      {video.data.attributes.likes.data.length} likes
                    </span>
                  </li>
                  <li className="flex mb-5">
                    <span className="mt-0.5">
                      <DisLikeOutline />
                    </span>
                    <span className="ml-3 text-xs font-normal text-brandBlack">
                      {video.data.attributes.dislikes.data.length} dislikes
                    </span>
                  </li>
                </ul>
                  </div>*/}
            </div>
          </div>
        </div>
        {/*<div className="">
          <h2 className="mb-2 text-base font-semibold text-brandBlue">
            Related Videos
          </h2>
                  <RelatedVideos relatedVideos={relatedVideos} />
        </div>*/}
      </div>
      {/* Main modal */}
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingVideoContent;
