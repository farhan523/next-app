import CurriculumText from "../../../NewMockupComponents/CurriculumText";
import SignUpComponent from "../../../NewMockupComponents/SignUpComponent";
import TopNavigation from "../../../NewMockupComponents/TopNavigation";
import Footer from "../../../NewMockupComponents/Footer";
import { useQuery } from "@apollo/client";
import { recentUpdates } from "../../../../graphql/queries/content/queries";

const SignUpPageComponent = ({ type }) => {
  const { data: recentUpdate } = useQuery(recentUpdates);

  if (!recentUpdate) return <></>;
  return (
    <>
      <div className="relative lg:fixed w-full top-0 bg-white z-20">
        <TopNavigation />
      </div>
      <div className="lg:mb-[82px]"></div>
      <CurriculumText data={recentUpdate} />
      <SignUpComponent type={type} />
      <Footer />
    </>
  );
};

export default SignUpPageComponent;
