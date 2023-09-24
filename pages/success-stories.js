import PageComponent from "../components/pageComponents/SuccessStories";
import Head from "next/head";
const Index = () => {
  return (
    <>
     <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program" />
        <meta
          property="og:title"
          content="Success Stories- Fleischer Scholars Program"
        />
        <meta
          property="og:url"
          content="https://fleischerscholars.com/success-stories"
        />
        <meta property="og:type" content="article" />
        <title>Success Stories - Fleischer Scholars Program</title>
      </Head>
      <PageComponent />
    </>
  );
};
export default Index;
