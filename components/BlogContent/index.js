import React from "react";
import HeroSection from "./heroSection";
import AllContents from "./allContents";

const BlogContent = ({ blogPosts }) => {
  return (
    <div>
      <HeroSection />
      <AllContents blogPosts={blogPosts} />
    </div>
  );
};

export default BlogContent;
