import { useState } from "react";
import Layout from "../../Layouts/HomeLayout";
import BlogContent from "../../BlogContent";

const Blog = ({ blogPosts }) => {
  return (
    <Layout>
      <div>
        <BlogContent blogPosts={blogPosts} />
      </div>
    </Layout>
  );
};

export default Blog;
