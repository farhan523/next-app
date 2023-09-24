import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchAPI } from "../../../../lib/api";
import { useRouter } from "next/router";

const RelatedVideos = ({ relatedVideos }) => {
  const router = useRouter();
  const [dataShow, setDataShow] = useState(3);

  // useEffect(() => {
  //   (async () => {
  //     const relatedVideos = await fetchAPI("/training-videos", {
  //       populate: "*",
  //     });
  //     setRelatedVideos(relatedVideos.data);
  //   })();
  // }, []);

  const videos = [
    {
      title: " 100% Scholarships for International Students. Ep. 01.",
    },
    {
      title: " 100% Scholarships for International Students. Ep. 01.",
    },
    {
      title: " 100% Scholarships for International Students. Ep. 01.",
    },
    {
      title: " 100% Scholarships for International Students. Ep. 01.",
    },
    {
      title: " 100% Scholarships for International Students. Ep. 01.",
    },
  ];
  return (
    <div className="">
      <div className="overflow-y-auto related_videos">
        {relatedVideos.map((item, index) => {
          return (
            <div className="mb-4 video_card">
              <Link href={`/training/video-detail/${item.id}`} key={index}>
                <a>
                  <div className="relative w-full mb-1 rounded-xl img ">
                    <img
                      src={
                        item?.attributes?.thumbnail?.data?.attributes?.formats
                          ?.small?.url
                      }
                      // width="100%"
                      // height="100%"
                      className="object-cover w-full h-40 rounded-xl xl:h-42"
                    />
                    {/* <Image
                    src={VideoImg}
                    className="object-cover w-full h-40 rounded-lg"
                  /> */}
                    <span className="absolute px-2 py-1 text-xs text-white rounded bottom-3 right-2 bg-brandBlue">
                      {item?.attributes?.duration}
                    </span>
                  </div>
                  <h2 className="py-1 text-sm font-semibold leading-5 text-brackBlack">
                    {item.attributes.title}
                  </h2>
                  <p className="text-xs font-normal text-silver">
                    <span>{item?.attributes?.views}</span>
                    <span className="ml-6">2 days ago</span>
                  </p>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <button
        className="w-full py-3 mt-3 text-sm font-medium text-white bg-brandBlue px-7 rounded-xl"
        onClick={() => setDataShow(dataShow + 3)}
      >
        See All related videos ({relatedVideos?.length - 3})
      </button>
    </div>
  );
};

export default RelatedVideos;
