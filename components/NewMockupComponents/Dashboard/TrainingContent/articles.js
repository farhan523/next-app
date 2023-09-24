import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
const Articles = ({ articles }) => {
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
  // if (articles.data.length < 1) return <p>No Articles Found</p>;
  if (articles.data.length < 1) return <></>;
  return (
    <div className="my-4">
      <h2 className="ml-2 text-xl font-medium text-brandBlue1">Articles</h2>
      <p className="ml-2 text-sm font-normal text-brandBlack">Recommended</p>
      <div className="my-4 video_slider">
        <Carousel responsive={responsive} infinite={false}>
          {articles?.data?.map((item, index) => {
            const slug = item?.attributes?.slug;
            return (
              <div className="px-2 video_card" key={index}>
                <Link href={`/training/article-detail/${slug}`}>
                  <a>
                    <div className="w-full mb-1 rounded-lg img shadow-imagCard">
                      <img
                        src={
                          item?.attributes?.featuredImage?.data?.attributes?.url
                        }
                        className="object-cover w-full h-40 rounded-lg all_video_img shadow-imagCard"
                        // width={500}
                        // height={260}
                      />
                    </div>
                    <div className="">
                      <h2 className="text-sm font-semibold text-brackBlack">
                        {item?.attributes?.title}
                      </h2>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Articles;
