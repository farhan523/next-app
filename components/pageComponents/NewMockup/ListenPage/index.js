import React from "react";
import TopNavigation from "../../../NewMockupComponents/TopNavigation";
import UserNavBar from "../../../NewMockupComponents/Dashboard/UserNavBar";
import Sidebar from "../../../NewMockupComponents/Dashboard/Sidebar";
import MainContent from "../../../NewMockupComponents/Dashboard/MainContent";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../../store/user.reducer";
import { AudioBookContent } from "../../../NewMockupComponents/Dashboard/AudioBookContent";
import { useState } from "react";

const ListenPageComponent = ({ audioBookContent }) => {
  const [showIndividualContent, setShowIndividualContent] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [playing, setPlaying] = useState(false);

  const userInfo = useSelector(getCurrentUser);
  return (
    <>
      <div className="relative lg:fixed w-full top-0 bg-white z-20">
        <TopNavigation />
      </div>
      <div className="lg:mb-[65px]"></div>
      <div>
        <UserNavBar />
      </div>

      <div className="lg:flex">
        <Sidebar role={userInfo && userInfo?.accessLevel} />
        <AudioBookContent
          role={userInfo && userInfo?.accessLevel}
          showIndividualContent={showIndividualContent}
          setShowIndividualContent={setShowIndividualContent}
          showPlayer={showPlayer}
          setShowPlayer={setShowPlayer}
          playing={playing}
          setPlaying={setPlaying}
          audioBookContent={audioBookContent && audioBookContent?.data}
        />
      </div>
    </>
  );
};

export default ListenPageComponent;
