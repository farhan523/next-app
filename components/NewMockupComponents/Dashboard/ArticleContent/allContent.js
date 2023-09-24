import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import RelatedArticles from "./relatedArticles";
import ReactMarkdown from "react-markdown";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import OrangeButton from "../../OrangeButton";

const AllContent = ({ article, type }) => {
  const [star, setStar] = useState("");

  return (
    <div className="mt-16">
      <div className="p-5 lg:p-12">
        <div
          className={`grid grid-cols-1 ${
            type === "blog" ? "lg:grid-cols-3" : "lg:grid-cols-2"
          }`}
        >
          <div className="col-span-2">
            <div
              className={`lg:border-r lg:pr-16 ${
                type === "blog" ? "border-brandBlue" : "border-none"
              }`}
            >
              <div className="body_content mt-8">
                <ReactMarkdown
                  linkTarget={"_blank"}
                  children={article?.bodyContent}
                />
              </div>
              {/* <div className="grid grid-cols-1 gap-4 mt-24 md:grid-cols-3">
                <div className="col-span-2">
                  <p className="text-base font-normal text-brandBlackLight">
                    How Useful Was This Post?
                  </p>
                  <StarRatings
                    starRatedColor="blue"
                    changeRating={() => setStar(2)}
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="5px"
                  />
                </div>
                <div className="">
                  <h2>Share This Post:</h2>
                  <ul className="social_media_single">
                    <li>
                      <a href="">
                        <FaFacebookSquare color="#126CAB" size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaInstagramSquare color="#126CAB" size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaLinkedin color="#126CAB" size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaTwitterSquare color="#126CAB" size={24} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="">
            <OrangeButton
              data-aos="fade-down"
              className="lg:ml-28 mb-10 w-fit"
              href="/blog"
            >
              Back to Browse Blog
            </OrangeButton>
            {type === "blog" && (
              <div className="px-0 mt-6 lg:ml-7 xl:pl-20 lg:mt-0">
                <h2 className="text-2xl font-semibold text-brandBlue">
                  Related articles
                </h2>

                <RelatedArticles slug={article?.slug} type={type} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContent;
