import InviteUserPage from "../components/pageComponents/NewMockup/InviteUserPage";
import Head from "next/head";
import { fetchAPI } from "../lib/api";
const inviteUser = ({usaStates}) => {
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
        <title>Fleischer Scholars Program Invite User</title>
      </Head>
      <InviteUserPage usaStates={usaStates} />
    </>
  );
};

export async function getServerSideProps(context) {
  const usaStates = await fetchAPI("/usa-states", {
    sort: ["name:asc"],
    populate: "*",
  });

  return {
    props: { usaStates },
  };
}

export default inviteUser;
