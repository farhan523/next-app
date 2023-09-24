import SignUpPageComponent from "../../../components/pageComponents/NewMockup/SignUpPage";
import Head from "next/head";
const asuSignup = () => {
  return (
    <>
      <Head>
        <meta
          property="og:site_name"
          content="Fleischer Scholars Program login"
        />
        <meta property="og:title" content="Login" />
        <meta property="og:url" content="https://fleischerscholars.com/" />
        <meta property="og:type" content="website" />
        <title>Fleischer Scholars Program Signup</title>
      </Head>
      <SignUpPageComponent type="asu" />
    </>
  );
};

export default asuSignup;
