import React from "react";
import Moment from "react-moment";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
const MarkeetingBlog = ({ marketingBlogList }) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex mt-28">
        <h4 className="mr-6 text-2xl font-light text-brandBlue">Marketing</h4>
        <hr className="w-full mt-5 border-b border-brandBlue"></hr>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14">
        <div
          className="my-7 articlas cursor-pointer"
          onClick={() =>
            router.push(
              `/blog/${
                marketingBlogList && marketingBlogList.data[0].attributes?.slug
              }`
            )
          }
        >
          <div className="w-full mb-8 img h-96 shadow-imagCard rounded-xl">
            <img
              src={
                marketingBlogList &&
                marketingBlogList.data[0].attributes?.featuredImage?.data
                  ?.attributes.formats?.small?.url
              }
              // {
              //     item?.attributes?.featuredImage?.data?.attributes.formats
              //         ?.small?.url
              // }
              className="object-cover w-full h-full rounded-xl shadow-imagCard"
              alt=""
            />
          </div>
          <h3 className="mb-5 text-xl font-semibold text-brandBlue">
            {marketingBlogList && marketingBlogList.data[0].attributes?.title}
          </h3>

          <div className="flex justify-between mt-11">
            <span className="mt-1 text-xs font-semibold text-brandBlackLight">
              {/* <Moment format="ll">
                {marketingBlogList &&
                  marketingBlogList.data[0].attributes?.published_at}
              </Moment> */}
              <span className="ml-8 font-normal text-silverLight">
                {marketingBlogList &&
                  marketingBlogList.data[0].attributes?.author &&
                  `By ${marketingBlogList.data[0].attributes?.author}`}
              </span>
            </span>
            <Link
              href={`/blog/${
                marketingBlogList && marketingBlogList.data[0].attributes?.slug
              }`}
              // href={`/training/article-detail/${item?.attributes?.slug}`}
            >
              <a className="flex text-base font-light">
                Read More
                <BsArrowRight className="mt-1.5 ml-2" color="#FF7C6C" />
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:pl-12 md:pl-5">
          {marketingBlogList &&
            marketingBlogList.data.slice(1, 4).map((item, index) => {
              return (
                <div
                  className="my-7 cursor-pointer"
                  onClick={() => router.push(`/blog/${item?.attributes?.slug}`)}
                >
                  <h3 className="mb-5 text-xl font-semibold text-brandBlue">
                    {item?.attributes?.title}
                  </h3>
                  <div className="flex justify-between mt-6">
                    <span className="mt-1 text-xs font-semibold text-brandBlackLight">
                      {/* <Moment format="ll">
                        {item?.attributes?.published_at}
                      </Moment> */}
                      <span className="ml-8 font-normal text-silverLight">
                        {item?.attributes?.author &&
                          `By ${item?.attributes?.author}`}
                      </span>
                    </span>
                    <span className="mt-1 text-xs font-semibold text-brandBlackLight">
                      Marketing
                    </span>
                  </div>
                  <hr className="w-full border-b my-11 border-brandBlue"></hr>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MarkeetingBlog;
