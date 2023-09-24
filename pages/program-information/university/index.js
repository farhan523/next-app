import Information from "../../../components/pageComponents/Information";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program" />
        <meta
          property="og:title"
          content="Program Information - Fleischer Scholars Program"
        />
        <meta
          property="og:url"
          content="https://fleischerscholars.com/program-information"
        />
        <meta property="og:type" content="article" />
        <title>Program Information - Fleischer Scholars Program</title>
      </Head>
      <Information
        headerImage={"/static/img/universityHeader.png"}
        heading={"for universities"}
        formImage={"/static/img/universityContact.png"}
      />
    </>
  );
};
export default Index;
