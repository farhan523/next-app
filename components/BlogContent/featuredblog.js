import React from "react";
import Moment from "react-moment";
import { useRouter } from "next/router";

const Featuredblog = ({ featuredBlog }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 gap-4 pt-8 lg:grid-cols-2">
      <div
        className="cursor-pointer"
        onClick={() => router.push(`/blog/${featuredBlog?.attributes?.slug}`)}
      >
        <div className="flex">
          <h4 className="mr-6 text-2xl font-light text-brandBlue">
            {featuredBlog?.attributes?.blog_category}
          </h4>
          <hr className="w-full mt-5 border-b border-brandBlue"></hr>
        </div>
        <h2 className="mt-4 text-4xl font-extrabold text-brandBlue">
          {featuredBlog?.attributes?.title}
        </h2>
        <p className="text-base font-normal text-brandBlueDark mt-9">
          {featuredBlog?.attributes?.excerpt?.slice(0, 150)}...
        </p>
        <p className="mt-8">
          {/* <span className="text-base font-semibold text-brandBlueDark">
            <Moment format="ll">
              {featuredBlog?.attributes?.published_at}
            </Moment>
          </span> */}
          {featuredBlog?.attributes?.author && (
            <span className="ml-8 text-base font-normal text-silverLight">
              {featuredBlog?.attributes?.author &&
                `By ${featuredBlog?.attributes?.author}`}
            </span>
          )}
        </p>
        <button
          onClick={() => router.push(`/blog/${featuredBlog?.attributes?.slug}`)}
          className="px-8 py-3 mt-12 text-base font-semibold text-white rounded-3xl bg-readMore"
        >
          Read More
        </button>
      </div>
      <div
        className="w-full rounded-2xl lg:pl-14 h-80 cursor-pointer"
        onClick={() => router.push(`/blog/${featuredBlog?.attributes?.slug}`)}
      >
        <img
          src={
            featuredBlog?.attributes?.featuredImage?.data?.attributes.formats
              ?.small?.url
          }
          className="object-cover w-full h-full rounded-2xl shadow-imagCard "
          alt=""
        />
      </div>
    </div>
  );
};

export default Featuredblog;
