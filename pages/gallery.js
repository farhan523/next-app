import PageComponent from "../components/pageComponents/BlogDetail";
import Head from "next/head";
const Index = () => {
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program" />
        <meta
          property="og:title"
          content="Blog - Fleischer Scholars Program"
        />
        <meta
          property="og:url"
          content="https://fleischerscholars.com/blog"
        />
        <meta property="og:type" content="article" />
        <title>Blog - Fleischer Scholars Program</title>
      </Head>
      <PageComponent />
    </>
  );
};
export default Index;
