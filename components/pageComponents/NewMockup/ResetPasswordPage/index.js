import CurriculumText from "../../../NewMockupComponents/CurriculumText";
import ResetPasswordComponent from "../../../NewMockupComponents/ResetPasswordComponent";
import TopNavigation from "../../../NewMockupComponents/TopNavigation";
import Footer from "../../../NewMockupComponents/Footer";
import { useQuery } from "@apollo/client";
import { recentUpdates } from "../../../../graphql/queries/content/queries";

const ResetPasswordPageComponent = () => {
  const { data: recentUpdate } = useQuery(recentUpdates);

  if (!recentUpdate) return <></>;
  return (
    <>
      <div className="relative lg:fixed w-full top-0 bg-white z-20">
        <TopNavigation></TopNavigation>
      </div>
      <div className="lg:mb-[65px]"></div>
      <CurriculumText data={recentUpdate}></CurriculumText>
      <ResetPasswordComponent />
      <Footer></Footer>
    </>
  );
};

export default ResetPasswordPageComponent;
