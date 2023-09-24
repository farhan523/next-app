import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../../../store/user.reducer";
import Sidebar from "../../../NewMockupComponents/Dashboard/Sidebar";
import UserNavBar from "../../../NewMockupComponents/Dashboard/UserNavBar";
import Footer from "../../../NewMockupComponents/Footer";
import TopNavigation from "../../../NewMockupComponents/TopNavigation";
import NewsUpdate from "../../../NewMockupComponents/NewsUpdate";
import { useQuery } from "@apollo/client";
import { recentUpdates } from "../../../../graphql/queries/content/queries";
import AllUsersContent from "../../../NewMockupComponents/Dashboard/AllUsersContent";
import ReactPaginate from "react-paginate";

const AllUsersPage = ({ allUsers, universities, usaStates }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const isAuthenticated = useSelector(getIsAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/login");
    }
  }, [isAuthenticated]);
  const { data: recentUpdate } = useQuery(recentUpdates);

  const PER_PAGE = 10;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = allUsers.slice(offset, offset + PER_PAGE);

  const pageCount = Math.ceil(allUsers?.length / PER_PAGE);

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
        {/* <StudentWorkbookFacultyView
          studentWorkbookReports={studentWorkbookReports}
          workBookContent={workBookContent}
          universities={universities}
        /> */}
        <AllUsersContent
          allUsers={currentPageData}
          allUsersData={allUsers}
          universities={universities}
          usaStates={usaStates}
        />
      </div>
      <div style={{ margin: "20px auto", width: "50%", padding: "10px" }}>
        <div className="w-full flex justify-center">
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllUsersPage;
