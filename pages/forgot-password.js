import ForgetPasswordPage from "../components/pageComponents/NewMockup/ForgetPasswordPage";
import Head from "next/head";
const forgetPassword = () => {
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
        <title>Fleischer Scholars Program Forgot Password</title>
      </Head>
      <ForgetPasswordPage />
    </>
  );
};

export default forgetPassword;
