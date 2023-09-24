import InviteResetPasswordPage from "../components/pageComponents/NewMockup/InviteResetPasswordPage";
import Head from "next/head";
import { fetchAPI } from "../lib/api";
const resetPassword = ({usaStates, universities}) => {
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
        <title>Fleischer Scholars Program Invite</title>
      </Head>
      <InviteResetPasswordPage usaStates={usaStates} universities={universities}/>
    </>
  );
};

export async function getServerSideProps(context) {
  const usaStates = await fetchAPI("/usa-states", {
    sort: ["name:asc"],
    populate: "*",
  });

  const universities = await fetchAPI("/universities", {
    sort: ["name:asc"],
  })

  return {
    props: { usaStates, universities },
  };
}

export default resetPassword;
