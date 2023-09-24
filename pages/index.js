import HomePageComponent from "../components/pageComponents/NewMockup/HomePageComponent";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program" />
        <meta property="og:title" content="Home" />
        <meta property="og:url" content="https://fleischerscholars.com/" />
        <meta property="og:type" content="website" />
        <title>Fleischer Scholars Program</title>
      </Head>
      <HomePageComponent />
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
    </>
  );
};
export default Index;
