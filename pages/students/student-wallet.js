import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getIsAuthenticated, getCurrentUser} from "../../store/user.reducer";
import StudentWalletPage from "../../components/pageComponents/NewMockup/StudentWalletPage";

import { fetchAPI } from "../../lib/api";
const StudentWallet = ({ downloads, videos}) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const userInfo = useSelector(getCurrentUser);
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
      {userInfo && (
        <StudentWalletPage downloads={downloads} videos={videos} />
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  // const router = useRouter();
  let filters = {
   accessLevel : { $eq: "student"}
  };

  const downloads = await fetchAPI("/downloads", {
    filters,
    populate: "*",
    sort: ["publishedAt:desc"],
  });

  const videos = await fetchAPI("/training-videos", {
    filters: {
      $and: [
        {accessLevel: {
          $eq: 'student'
        }},
      ],
    },
    populate: "*",
  });
  
  return {
    props: { downloads, videos }, // will be passed to the page component as props
  };
}

export default StudentWallet;
