import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { fetchAPI } from "../../../../lib/api";
import { useRouter } from "next/router";
import Moment from "react-moment";
const RelatedArticles = ({ slug, type }) => {
  const router = useRouter();
  const [relatedArticles, setRelatedArticles] = useState([]);
  useEffect(() => {
    (async () => {
      let relatedArticlesData;
      let relatedArticles;

      if (type === "blog") {
        relatedArticlesData = await fetchAPI("/blogs", {
          populate: "*",
        });

        relatedArticles = relatedArticlesData.data.filter((item) => {
          return item.attributes.slug !== slug;
        });
        setRelatedArticles(relatedArticles);
      } else {
        relatedArticlesData = await fetchAPI("/training-articles", {
          populate: "*",
        });

        relatedArticles = relatedArticlesData.data.filter((item) => {
          return item.attributes.slug !== slug;
        });
        setRelatedArticles(relatedArticles);
      }

      // const relatedArticlesData = await fetchAPI("/training-articles", {
      //   populate: "*",
      // });

      // const relatedArticles = relatedArticlesData.data.filter((item) => {
      //   return item.attributes.slug !== slug;
      // });
      // setRelatedArticles(relatedArticles);
    })();
  }, [router]);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
        {relatedArticles &&
          relatedArticles.slice(0, 4).map((item, index) => {
            return (
              <div
                className="my-10 articlas cursor-pointer"
                key={index}
                onClick={() => router.push(`/blog/${item?.attributes?.slug}`)}
              >
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

export default RelatedArticles;
