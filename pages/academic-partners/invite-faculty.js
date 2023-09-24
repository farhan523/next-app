import InviteByFacultyPageComponent from "../../components/pageComponents/NewMockup/InviteByFacultyPageComponent";
import Head from "next/head";
import { getCurrentUser } from "../../store/user.reducer";
import { useSelector } from "react-redux";

const InviteStudentByFaculty = () => {
    const currentUser = useSelector(getCurrentUser);
    const usaState = currentUser && currentUser?.usa_state && currentUser?.usa_state?.id;
    const university = currentUser && currentUser?.university && currentUser?.university?.id;
    if(university === null) return <p>Not Found</p>
    if(usaState === null) return <p>Not Found</p>
   
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
      <InviteByFacultyPageComponent usaState={usaState} university={university} />
    </>
  );
};

export default InviteStudentByFaculty;
