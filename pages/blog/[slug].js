import React from "react";
import BlogDetailPage from "../../components/pageComponents/NewMockup/BlogDetailPage";
import Head from "next/head";
import { fetchAPI } from "../../lib/api";
const BlogDetail = ({ articleDetail }) => {
  const article = articleDetail?.data[0]?.attributes;
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program" />
        <meta property="og:title" content="Home" />
        <meta property="og:url" content="https://fleischerscholars.com/" />
        <meta property="og:type" content="website" />
        <title>Article Detail Page</title>
      </Head>
      <BlogDetailPage article={article} type={"blog"} />
    </>
  );
};

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  let SKIP_BUILD_STATIC_GENERATION = true;
  if (SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: true,
    };
  }

  // Call an external API endpoint to get posts
  // const res = await fetch("https://.../posts");
  // const posts = await res.json();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  // const paths = posts.map((post) => ({
  //   params: { id: post.id },
  // }));

  // { fallback: false } means other routes should 404
  // return { paths, fallback: false };
}

export const getStaticProps = async (ctx) => {
  try {
    const { slug } = ctx.params || {};
    const article = await fetchAPI(`/blogs`, {
      filters: { slug: slug },
      populate: "*",
    });
    if (!article) throw new Error("No video data found"); // This will cause a 404 for this slug

    return {
      notFound: false,
      props: {
        articleDetail: article,
      },
      revalidate: 5, // determines how long till the cached static file is invalidated.
    };
  } catch (err) {
    return {
      notFound: true,
      revalidate: 5,
    };
  }
};

export default BlogDetail;
