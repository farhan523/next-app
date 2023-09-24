import CurriculumText from "../../../NewMockupComponents/CurriculumText";
import InviteByFacultyComponent from "../../../NewMockupComponents/InviteByFacultyComponent";
import TopNavigation from "../../../NewMockupComponents/TopNavigation";
import Footer from "../../../NewMockupComponents/Footer";
import { useQuery } from "@apollo/client";
import { recentUpdates } from "../../../../graphql/queries/content/queries";

const InviteUserPageComponent = ({role, usaState, university}) => {
  const { data: recentUpdate } = useQuery(recentUpdates);

  if (!recentUpdate) return <></>;
  return (
    <>
      <div className="relative lg:fixed w-full top-0 bg-white z-20">
        <TopNavigation></TopNavigation>
      </div>
      <div className="lg:mb-[65px]"></div>
      <CurriculumText data={recentUpdate}></CurriculumText>
      <InviteByFacultyComponent role={role} usaState={usaState} university={university} />
      <Footer></Footer>
    </>
  );
};

export default InviteUserPageComponent;
