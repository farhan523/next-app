import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import moment from "moment";
import getDateDifference from "../../../../lib/getDateDifference";
const Videos = ({ videos, role }) => {
  // const videos = [
  //     {
  //         title: ' 100% Scholarships for International Students. Ep. 01.'
  //     },
  //     {
  //         title: ' 100% Scholarships for International Students. Ep. 01.'
  //     },
  //     {
  //         title: ' 100% Scholarships for International Students. Ep. 01.'
  //     },
  //     {
  //         title: ' 100% Scholarships for International Students. Ep. 01.'
  //     },
  //     {
  //         title: ' 100% Scholarships for International Students. Ep. 01.'
  //     },
  // ]\
  let todaySDate = new Date(new Date().toISOString().slice(0, 10));
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  if (videos.data.length < 1) return <p>No Videos Found</p>;
  return (
    <div className="my-10">
      <h2 className="ml-2 text-xl font-medium text-brandBlue1">Videos</h2>
      {/* <p className="ml-2 text-sm font-normal text-brandBlack">Recommended</p> */}
      <div className="my-4 video_slider">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3">
        {role !== "student-wallet" &&
            videos.data.map((item, index) => {
              return (
                <div className="px-2 video_card">
                  <Link
                    href={
                      role === "student"
                        ? `/students/watch/video-detail/${item.id}`
                        : `/training/video-detail/${item.id}`
                    }
                    key={index}
                  >
                    <a>
                      <div className="relative w-full mb-1 rounded-lg img shadow-imagCard">
                        <img
                          src={item.attributes.thumbnail.data.attributes.url}
                          // width={300}
                          // height={300}
                          // layout="fill"
                          className="object-cover w-full h-48 rounded-lg shadow-imagCard"
                        />
                        {/* <span className="absolute px-2 py-1 text-xs text-white rounded bottom-3 right-2 bg-brandBlue">
                        {item.attributes.duration}
                      </span> */}
                      </div>
                      <h2 className="text-sm font-semibold text-brackBlack">
                        {item.attributes.title}
                      </h2>
                      {/* <p className="text-xs font-normal text-silver">
                      <span>{item.attributes.views} views</span>
                      <span className="ml-6">
                        // {moment(item.attributes.publishedAt, "DD/MM/YYYY")}
                        {getDateDifference(item.attributes.publishedAt)}
                      </span>
                    </p> */}
                    </a>
                  </Link>
                </div>
              );
            })}

          {role === "student-wallet" &&
            videos.data
              .filter((video) => {
                return video.id === 5;
              })
              .map((item, index) => {
                return (
                  <div className="px-2 video_card">
                    <Link
                      href={
                        role === "student"
                          ? `/students/watch/video-detail/${item.id}`
                          : `/training/video-detail/${item.id}`
                      }
                      key={index}
                    >
                      <a>
                        <div className="relative w-full mb-1 rounded-lg img shadow-imagCard">
                          <img
                            src={item.attributes.thumbnail.data.attributes.url}
                            // width={300}
                            // height={300}
                            // layout="fill"
                            className="object-cover w-full h-40 rounded-lg shadow-imagCard"
                          />
                          {/* <span className="absolute px-2 py-1 text-xs text-white rounded bottom-3 right-2 bg-brandBlue">
                        {item.attributes.duration}
                      </span> */}
                        </div>
                        <h2 className="text-sm font-semibold text-brackBlack">
                          {item.attributes.title}
                        </h2>
                        {/* <p className="text-xs font-normal text-silver">
                      <span>{item.attributes.views} views</span>
                      <span className="ml-6">
                        // {moment(item.attributes.publishedAt, "DD/MM/YYYY")}
                        {getDateDifference(item.attributes.publishedAt)}
                      </span>
                    </p> */}
                      </a>
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Videos;
