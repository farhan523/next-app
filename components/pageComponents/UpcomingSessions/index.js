import HomeLayout from "../../Layouts/HomeLayout";
import Header from "../../SessionsHeader";
import IframeSection from "../../sessionsIframe";
import ApplySection from "../../ApplySection";
import Qualification from "../../qualificationCriteria";
const Index = ({UniversityList}) => {
  return (
    <HomeLayout>
      <Header />
      <IframeSection />
      <ApplySection UniversityList={UniversityList} />
      <Qualification />
    </HomeLayout>
  );
};
export default Index;