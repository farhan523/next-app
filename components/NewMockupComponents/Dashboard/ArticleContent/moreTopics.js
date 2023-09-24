import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { fetchAPI } from "../../../../lib/api";
import { useRouter } from "next/router";
import Moment from "react-moment";
const MoreTopics = ({ slug, category, type }) => {
  const router = useRouter();
  const [moreFromTopic, setMoreFromTopic] = useState([]);
  useEffect(() => {
    let moreFromTopicData;
    let moreFromTopic;
    (async () => {
      if (type === "blog") {
        moreFromTopicData = await fetchAPI("/blogs", {
          filters: {
            blog_category: { $contains: category },
          },
          populate: "*",
        });

        moreFromTopic = moreFromTopicData.data.filter((item) => {
          return item.attributes.slug !== slug;
        });
        setMoreFromTopic(moreFromTopic);
      } else {
        moreFromTopicData = await fetchAPI("/training-articles", {
          filters: {
            training_categories: { title: { $contains: category } },
          },
          populate: "*",
        });

        moreFromTopic = moreFromTopicData.data.filter((item) => {
          return item.attributes.slug !== slug;
        });
        setMoreFromTopic(moreFromTopic);
      }
    })();
  }, [router]);

  return (
    <div className="p-5 mt-16 lg:p-12 more-topics">
      {moreFromTopic && moreFromTopic?.length > 0 && (
        <h2 className="text-4xl font-semibold text-brandBlue mb-9">
          More from this topic
        </h2>
      )}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
        {moreFromTopic &&
          moreFromTopic.slice(0, 3).map((item, index) => {
            return (
              <div
                className="mt-7 articlas cursor-pointer"
                key={index}
                onClick={() => router.push(`/blog/${item?.attributes?.slug}`)}
              >
                <p className="text-xl font-light mb-7 text-brandBlue">
                  {category}
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
                <div className="flex justify-between">
                  {/* <span className="text-xs font-medium text-brandBlackLight mt-1">
                    <Moment format="ll">
                      {item?.attributes?.published_at}
                    </Moment>
                  </span> */}
                  <Link
                    href={`/${
                      type === "blog" ? "blog" : "training/article-detail"
                    }/${item?.attributes?.slug}`}
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

export default MoreTopics;
