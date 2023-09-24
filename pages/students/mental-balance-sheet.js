import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import TopNavigation from "../../components/NewMockupComponents/TopNavigation";
import UserNavBar from "../../components/NewMockupComponents/Dashboard/UserNavBar";
import NewsUpdate from "../../components/NewMockupComponents/NewsUpdate";
import Sidebar from "../../components/NewMockupComponents/Dashboard/Sidebar";
import {
  fetchAPI,
  getWorkBookReportByUser,
  storeWorkbookResponse,
} from "../../lib/api";
import { useSelector } from "react-redux";
import { getCurrentUser, getIsAuthenticated } from "../../store/user.reducer";
import Footer from "../../components/NewMockupComponents/Footer";
import { recentUpdates } from "../../graphql/queries/content/queries";
import { useQuery } from "@apollo/client";
import WorkbookChapter2 from "../../components/NewMockupComponents/InteractiveWorkbookComponents/WorkbookChapter2";

const MentalBalanceSheet = ({ workBookContent }) => {
  const [workBookAPI, setWorkBookAPI] = useState(null);

  const { data: recentUpdate } = useQuery(recentUpdates);

  const isAuthenticated = useSelector(getIsAuthenticated);
  const userInfo = useSelector(getCurrentUser);
  const userId = userInfo && userInfo.id;
  const router = useRouter();

  const handleSubmitForm = async (name, values) => {
    // props.e.preventDefault();
    let dataObj = {
      userId,
      chapter: name,
      values,
    };
    const workBookAPIResponse = await storeWorkbookResponse(dataObj);
    if (
      workBookAPIResponse &&
      workBookAPIResponse?.data &&
      workBookAPIResponse?.data?.data
    ) {
      let workBookReportItem = workBookAPIResponse?.data?.data?.attributes;
      setWorkBookAPI(workBookReportItem);
    }
    // event.preventDefault();
    // let jsonSchema = JSON.stringify(inputValues);
  };

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

  useEffect(() => {
    // let lessonStates = [];
    // workBookContent &&
    //   workBookContent?.data?.map((item) => {
    //     lessonStates.push({ toc: item?.attributes?.tocNumber, tocData: item });
    //     item?.attributes?.chapter_lessons?.data?.map((nestedItem) => {
    //       lessonStates.push({
    //         toc: nestedItem?.attributes?.tocNumber,
    //         tocData: nestedItem,
    //       });
    //     });
    //   });

    // setLessonStates(lessonStates);
    // setWorkItem(workBookContent?.data[0]);

    (async () => {
      try {
        const workBookReportByUser = await getWorkBookReportByUser(userId);
        if (
          workBookReportByUser &&
          workBookReportByUser?.data &&
          workBookReportByUser?.data.length > 0
        ) {
          let workBookReportItem = workBookReportByUser?.data[0].attributes;
          setWorkBookAPI(workBookReportItem);
        }
      } catch (err) {
        console.log("Error occured while updating workbook");
      }
    })();
  }, [userId]);

  if (!recentUpdate) return <></>;
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
      <div>
        <div className="relative top-0 z-20 w-full bg-white lg:fixed">
          <TopNavigation />
        </div>
        <div className="lg:mb-[82px]"></div>
        <div>
          <UserNavBar />
        </div>
        <div>
          <NewsUpdate data={recentUpdate} />
        </div>
        <div className="lg:flex">
          <Sidebar />
          <div className="relative w-full p-4 md:p-10">
            <div className="w-full">
              <div className={`ml-0 lg:ml-7 hidden lg:block w-full`}>
                <h2 className="mt-5 text-3xl font-semibold text-brandBlack md:mt-0 mb-10">
                  Your Mental Balance Sheet
                </h2>
                <div className="">
                  {userId && workBookAPI && (
                    <WorkbookChapter2
                      inWorkbook={false}
                      handleSubmitForm={handleSubmitForm}
                      workBookAPI={workBookAPI}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
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

export default MentalBalanceSheet;
