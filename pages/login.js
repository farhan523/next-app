import LoginPageComponent from "../components/pageComponents/NewMockup/LoginPage";
import Head from "next/head";
const login = () => {
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
        <title>Fleischer Scholars Program Login</title>
      </Head>
      <LoginPageComponent></LoginPageComponent>
    </>
  );
};

export default login;
