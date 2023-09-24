import DashboardPageComponent from "../components/pageComponents/NewMockup/Dashboard";
import Head from "next/head";
import TextFieldComponent from "../components/NewMockupComponents/InteractiveWorkbookComponents/TextFieldComponent";
import WorkbookChapter1 from "../components/NewMockupComponents/InteractiveWorkbookComponents/WorkbookChapter1";
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
        <title>Fleischer Scholars Program Dashboard</title>
      </Head>
      <DashboardPageComponent></DashboardPageComponent>
    </>
  );
};

export default login;
