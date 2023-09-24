import PageComponent from "../components/pageComponents/TheBook";
import Head from "next/head";
const Index = () => {
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program" />
        <meta
          property="og:title"
          content="The book - Fleischer Scholars Program"
        />
        <meta
          property="og:url"
          content="https://fleischerscholars.com/the-book"
        />
        <meta property="og:type" content="article" />
        <title>The book - Fleischer Scholars Program</title>
      </Head>
      <PageComponent />
    </>
  );
};
export default Index;
