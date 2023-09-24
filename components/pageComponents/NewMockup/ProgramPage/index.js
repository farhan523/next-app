import { Router, useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../../../store/user.reducer";
import Sidebar from "../../../NewMockupComponents/Dashboard/Sidebar";
import UserNavBar from "../../../NewMockupComponents/Dashboard/UserNavBar";
import Footer from "../../../NewMockupComponents/Footer";
import TopNavigation from "../../../NewMockupComponents/TopNavigation";
import NewsUpdate from "../../../NewMockupComponents/NewsUpdate";
import { useQuery } from "@apollo/client";
import { recentUpdates } from "../../../../graphql/queries/content/queries";
import ProgramsContent from "../../../NewMockupComponents/Dashboard/ProgramsContent";
import DownloadPageDetail from "../../../NewMockupComponents/Dashboard/DownloadPageDetail";

const ProgramsPage = ({ workBookContent, userId }) => {
  // const isAuthenticated = useSelector(getIsAuthenticated);
  const router = useRouter();

  // useEffect(() => {
  //   if (isAuthenticated === false) {
  //     router.push("/login");
  //   }
  // }, [isAuthenticated]);
  const { data: recentUpdate } = useQuery(recentUpdates);

  if (!recentUpdate) return <></>;
  return (
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

        <ProgramsContent workBookContent={workBookContent} userId={userId} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProgramsPage;
