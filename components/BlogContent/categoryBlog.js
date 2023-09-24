import React from "react";
import Featuredblog from "./featuredblog";
import AllBlogs from "./allBlogs";
import MarkeetingBlog from "./markeetingBlog";

const CategoryBlog = ({ blogPosts }) => {
  return (
    <div>
      {blogPosts?.data?.length > 0 && (
        <Featuredblog featuredBlog={blogPosts?.data[0]} />
      )}
      {blogPosts?.data?.length > 0 && (
        <hr className="w-full border-b mt-28 border-brandBlue"></hr>
      )}
      {blogPosts?.data?.length > 1 && (
        <AllBlogs blogList={blogPosts?.data?.slice(1)} />
      )}
      {/* <div className="py-20 text-center">
        <button className="pb-2 text-lg font-semibold border-b-2 text-brandBlackLight border-brandOrangeRed">
          Load more posts
        </button>
      </div> */}
    </div>
  );
};

export default CategoryBlog;
