import Contact from "../components/pageComponents/contact";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program" />
        <meta
          property="og:title"
          content="Contact Us - Fleischer Scholars Program"
        />
        <meta
          property="og:url"
          content="https://fleischerscholars.com/contact"
        />
        <meta property="og:type" content="article" />
        <title>Contact Us - Fleischer Scholars Program</title>
      </Head>
      <Contact />
    </>
  );
};
export default Index;
