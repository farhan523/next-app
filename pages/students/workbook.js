import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getIsAuthenticated, getCurrentUser } from "../../store/user.reducer";
import DownloadsPage from "../../components/pageComponents/NewMockup/DownloadsPage";
import ProgramsPage from "../../components/pageComponents/NewMockup/ProgramPage";
import { fetchAPI } from "../../lib/api";
const StudentWorkbook = ({ workBookContent }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const userInfo = useSelector(getCurrentUser);
  const userId = userInfo && userInfo.id;
  const router = useRouter();
  useEffect(() => {
    if (
      isAuthenticated === false ||
      (typeof window !== "undefined" && !window.localStorage.token)
    ) {
      router.push("/login");
    }

    // if(userInfo && userInfo?.accessLevel && userInfo?.accessLevel === 'student') {
    //   router.push("/login")
    // }
  }, [isAuthenticated]);

  return (
    <div>
      <Head>
        <meta
          property="og:site_name"
          content="Fleischer Scholars Program login"
        />
        <meta property="og:title" content="Login" />
        <meta property="og:url" content="https://fleischerscholars.com/" />
        <meta property="og:type" content="website" />
        <title>Fleischer Scholars Training Program</title>
      </Head>

      {userId && (
        <ProgramsPage workBookContent={workBookContent} userId={userId} />
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const workBookContent = await fetchAPI("/workbook-chapters", {
    sort: ["tocNumber:asc"],
    populate: "*",
  });
  return {
    props: { workBookContent },
  };
}

export default StudentWorkbook;
