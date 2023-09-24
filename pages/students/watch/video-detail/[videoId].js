import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../../../store/user.reducer";
import { useRouter } from "next/router";
import TrainingVideoPage from "../../../../components/pageComponents/NewMockup/TrainingVideoPage";
import { fetchAPI } from "../../../../lib/api";
const VideoDetail = ({ video }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/login");
    }
  }, [isAuthenticated]);
  return (
    <div>
      <Head>
        <meta
          property="og:site_name"
          content="Fleischer Scholars Program login"
        />
        <meta property="og:title" content="Login" />
        <meta property="og:url" content="https://fleischerscholars.com/" />
        <meta property="og:type" content="website" />
        <title>Fleischer Scholars Training Program Videos</title>
      </Head>
      <TrainingVideoPage video={video} role="student" />
    </div>
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
    const { videoId } = ctx.params || {};
    const video = await fetchAPI(`/training-videos/${videoId}`, {
      populate: "*",
    });
    if (!video) throw new Error("No video data found"); // This will cause a 404 for this slug

    return {
      notFound: false,
      props: {
        video,
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

export default VideoDetail;
