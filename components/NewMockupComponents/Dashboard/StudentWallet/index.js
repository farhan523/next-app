import React from "react";
import DownloadPageDetail from "../DownloadPageDetail";
import Videos from "../TrainingContent/index";
import StudentsWallet from "../../NewAboutMockComponents/StudentWalletSection";
import DownloadsStudentWalletComponent from "../../NewAboutMockComponents/DownloadsStudentWalletComponent";
const StudentWallet = ({ downloads, videos }) => {
  const filteredVideos = videos?.data?.filter((video) => {
    return video.id === 5;
  });
  return (
    <div className="relative z-0">
      {/* <div style ={{display: "flex", flexDirection: "column"}} className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className={`ml-0 lg:ml-7 hidden lg:block `}>
          <h2 className="mt-5 text-3xl font-semibold text-brandBlack md:mt-0">
            Downloads
          </h2> */}
      <div className="p-4">
        <Videos videos={videos} role="student-wallet" />
      </div>
      <DownloadPageDetail
        downloadsData={downloads?.data}
        type="student-wallet"
      />
      <DownloadsStudentWalletComponent />

      {/* </div> */}
      {/* <div className={`ml-0 lg:ml-7 hidden lg:block `}> */}

      {/* </div> */}
    </div>
  );
};

export default StudentWallet;
