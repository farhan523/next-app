import React from "react";
import HeroSection from "./heroSection";
import MoreTopics from "./moreTopics";
import AllContent from "./allContent";

const ArticleContent = ({ article, type }) => {
  let categoryTitle =
    type === "blog" && article
      ? article?.blog_category
      : article?.training_categories?.data[0].attributes.title;
  return (
    <div className="w-full ">
      <HeroSection article={article} type={type} category={categoryTitle} />
      <AllContent article={article} type={type} categoryTitle={categoryTitle} />
      <MoreTopics slug={article?.slug} type={type} category={categoryTitle} />
    </div>
  );
};

export default ArticleContent;
