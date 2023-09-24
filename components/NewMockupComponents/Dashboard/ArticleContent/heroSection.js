import React from "react";
import Moment from "react-moment";
const HeroSection = ({ article, category }) => {
  return (
    <div className="w-full article_page_hero  min-h-[460px] h-auto">
      <div className="w-full h-auto mx-auto hero-mockup-new lg:mb-0">
        <div className="w-full p-5 lg:p-12">
          <div className="flex">
            <h4 className="mr-6 text-2xl font-light text-brandBlue">
              {category}
            </h4>
            <hr className="w-full mt-5 border-b border-brandBlue"></hr>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="mt-6 lg:mt-0 lg:relative img">
              <div className="w-full lg:absolute lg:top-20 h-96 shadow-imagCard rounded-xl">
                <img
                  src={article?.featuredImage?.data?.attributes?.url}
                  alt=""
                  className="object-cover w-full h-full rounded-xl shadow-imagCard"
                />
              </div>
            </div>
            <div className="mt-5 lg:pl-10 lg:mt-20">
              <h2 className="text-4xl font-extrabold text-brandBlue">
                {article?.title}
              </h2>
              <p className="mt-8">
                {/* <span className="text-base font-semibold text-brandBlueDark">
                  <Moment format="ll">{article?.published_at}</Moment>
                </span> */}
                {article?.author && (
                  <span className="ml-8 text-base font-normal text-silverLight">
                    By {article?.author}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
