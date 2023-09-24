import BlogComponent from "../components/pageComponents/Blog";
import Head from "next/head";
import { blogListQuery } from "../graphql/queries/blog/queries";
import { useQuery } from "@apollo/client";
import get from "lodash/get"

const Index = () => {
  const {data} = useQuery(blogListQuery);
  const posts = get(data,'blogs.data',[])
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program" />
        <meta property="og:title" content="Blog - Fleischer Scholars Program" />
        <meta property="og:url" content="https://fleischerscholars.com/blog" />
        <meta property="og:type" content="article" />
        <title>Blog - Fleischer Scholars Program</title>
      </Head>
      <BlogComponent posts={posts} />
    </>
  );
};

export default Index;
