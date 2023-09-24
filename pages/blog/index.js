import BlogComponent from "../../components/pageComponents/Blog";
import Head from "next/head";
import { fetchAPI } from "../../lib/api";
const Blog = ({ blogPosts }) => {
  return (
    <div>
      <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program" />
        <meta property="og:title" content="Blog - Fleischer Scholars Program" />
        <meta property="og:url" content="https://fleischerscholars.com/blog" />
        <meta property="og:type" content="article" />
        <title>Blog - Fleischer Scholars Program</title>
      </Head>
      <BlogComponent blogPosts={blogPosts} />
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  let filters = {};
  let blogPosts = {};
  if (context.query.search) filters.title = { $contains: context.query.search };
  if (context.query.category)
    filters.blog_category = { $eq: context.query.category  };

  if (context.query.search) {
    blogPosts = await fetchAPI("/blogs", {
      filters: { $and: [filters] },
      populate: "*",
      sort: ["publishedAt:desc"],
    });
  } else if (context.query.category) {
    blogPosts = await fetchAPI("/blogs", {
      filters: {
        blog_category: { $eq: context.query.category },
      },
      populate: "*",
      sort: ["publishedAt:desc"],
    });
  } else {
    blogPosts = await fetchAPI("/blogs", {
      populate: "*",
      sort: ["publishedAt:desc"],
    });
  }

  return {
    props: { blogPosts }, // will be passed to the page component as props
  };
}
