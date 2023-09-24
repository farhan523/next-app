import AboutPageComponent from "../../components/pageComponents/NewMockup/AboutPage";
import Head from "next/head";

const NewAboutPage = () => {
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program About " />
        <meta property="og:title" content="Home" />
        <meta property="og:url" content="https://fleischerscholars.com/" />
        <meta property="og:type" content="website" />
        <title>Fleischer Scholars Program About</title>
      </Head>
      <AboutPageComponent></AboutPageComponent>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
    </>
  );
};

export default NewAboutPage;
