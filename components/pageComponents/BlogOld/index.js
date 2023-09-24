import { useState } from "react";
import Layout from "../../Layouts/HomeLayout";
import Header from "../../BlogHeader";
import BlogContent from "../../BlogContent";
import Loader from "../../loader";
import HeroSection from "../../BlogContent/heroSection";

const Index = ({ posts }) => {
  const [featuredBlog, setFeaturedBlog] = useState(null);

  return (
    <Layout>
      <div>
        <HeroSection />
        <Header featuredBlog={featuredBlog} setFeaturedBlog={setFeaturedBlog} />
        <BlogContent moreBlog={posts} />
      </div>
    </Layout>
  );
};
export default Index;
