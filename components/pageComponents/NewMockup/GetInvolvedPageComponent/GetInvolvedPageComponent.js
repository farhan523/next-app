import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopAnnouncement } from "./DesktopAnnouncement";
import { MobileAnnouncement } from "./MobileAnnouncement";
import { DesktopJoinCommunity } from "./DesktopJoinCommunity";
import { MobileJoinCommunity } from "./MobileJoinCommunity";
import { DesktopJoinEvent } from "./DesktopJoinEvent";
import { MobileJoinEvent } from "./MobileJoinEvent";
import { DesktopFSApp } from "./DesktopFSApp";
import { MobileFSApp } from "./MobileFSApp";
import { Donation } from "./Donation";
import { NewsLetter } from "./NewsLetter";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";
import HomeLayout from "../../../Layouts/HomeLayout";
import NewsUpdate from "../../../NewMockupComponents/NewsUpdate";
import { recentUpdates } from "../../../../graphql/queries/content/queries";
import { useQuery } from "@apollo/client";

/*---> Component <---*/
export const GetInvolvedPageComponent = () => {
  const { data: recentUpdate } = useQuery(recentUpdates);

  return (
    <div className={PageWrapper}>
      {/* <DesktopNavbar />
      <MobileNavbar /> */}
      <HomeLayout>
        <div>
          {/* <DesktopAnnouncement /> */}
          <NewsUpdate data={recentUpdate} />
          {/* <MobileAnnouncement /> */}
          <DesktopJoinCommunity />
          <MobileJoinCommunity />
          <DesktopJoinEvent />
          <MobileJoinEvent />
          <DesktopFSApp />
          <MobileFSApp />
          <Donation />
          <NewsLetter />
        </div>
      </HomeLayout>
      {/* <DesktopFooter />
      <MobileFooter /> */}
    </div>
  );
};

/*---> Styles <---*/
const PageWrapper = `

`;
