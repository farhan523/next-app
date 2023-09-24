import ResetPasswordPage from "../components/pageComponents/NewMockup/ResetPasswordPage";
import Head from "next/head";
const resetPassword = () => {
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
        <title>Fleischer Scholars Program Reset Password</title>
      </Head>
      <ResetPasswordPage />
    </>
  );
};

export default resetPassword;
