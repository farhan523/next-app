import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getIsAuthenticated, getCurrentUser} from "../../store/user.reducer";
import DownloadsPage from "../../components/pageComponents/NewMockup/DownloadsPage";

import { fetchAPI } from "../../lib/api";
const Downloads = ({ downloads }) => {
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
        <DownloadsPage downloadsData={downloads} />
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  // const router = useRouter();
  let filters = {
   accessLevel : { $eq: "student"}
  };
  
  if (context.query.downloadCategory) {
    filters.downloadsCategory = { $eq: context.query.downloadCategory };
  }

  const downloads = await fetchAPI("/downloads", {
    filters,
    populate: "*",
    sort: ["listSortOrderNumber:asc"],
  });

  return {
    props: { downloads }, // will be passed to the page component as props
  };
}

export default Downloads;
