import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Moment from "react-moment";
import { useRouter } from "next/router";
const AllBlogs = ({ blogList }) => {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
        {blogList.map((item, index) => {
          return (
            <div
              className="my-7 articlas cursor-pointer"
              key={index}
              onClick={() => router.push(`/blog/${item?.attributes?.slug}`)}
            >
              <p className="text-xl font-light mb-7 text-brandBlue">
                {item?.attributes?.blog_category}
              </p>
              <div className="w-full mb-8 img h-52 shadow-imagCard rounded-xl">
                <img
                  src={
                    item?.attributes?.featuredImage?.data?.attributes.formats
                      ?.small?.url
                  }
                  className="object-cover w-full h-full rounded-xl shadow-imagCard"
                  alt=""
                />
              </div>
              <h3 className="mb-5 text-xl font-semibold text-brandBlue">
                {item?.attributes?.title}
              </h3>
              <p className="mt-6 text-base font-light text-brandBlackLight line-clamp-1">
                {item?.attributes?.excerpt}...
              </p>
              <div className="flex justify-between mt-11">
                {/* <span className="mt-1 text-xs font-semibold text-brandBlackLight">
                  <Moment format="ll">{item?.attributes?.published_at}</Moment>
                </span> */}
                <Link
                  href={`/blog/${item?.attributes?.slug}`}
                  // href={`/training/article-detail/${item?.attributes?.slug}`}
                >
                  <a className="flex text-base font-light">
                    Read More
                    <BsArrowRight className="mt-1.5 ml-2" color="#FF7C6C" />
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBlogs;
