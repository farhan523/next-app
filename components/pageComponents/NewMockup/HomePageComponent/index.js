import HeroSection from "../../../NewMockupComponents/Hero";
import Inspiration from "../../../NewMockupComponents/Inspiration";
import LeggedStool from "../../../NewMockupComponents/LeggedStool";
import MeetFounder from "../../../NewMockupComponents/MeetFounder";
import NewsUpdate from "../../../NewMockupComponents/NewsUpdate";
import Process from "../../../NewMockupComponents/Process";
import TopHeader from "../../../NewMockupComponents/TopHeader";
import TopNavigation from "../../../NewMockupComponents/TopNavigation";
import UniversitiesOfferingProgram from "../../../NewMockupComponents/UniversitiesOfferingProgram";
import Fact from "../../../NewMockupComponents/Fact";
import Footer from "../../../NewMockupComponents/Footer";
import Faq from "../../../NewMockupComponents/Faq/index";
import Numbers from "../../../NewMockupComponents/Numbers";
import LogoSection from "../../../NewMockupComponents/LogoSection";
import NewMockQuotes from "../../../NewMockupComponents/NewMockQuote";
import { useQuery } from "@apollo/client";
import {
  homePageContent,
  homePageContentWithImage,
  recentUpdates,
} from "../../../../graphql/queries/content/queries";

const HomePageComponent = () => {
  const { data: contentData } = useQuery(homePageContent);
  const { data: recentUpdate } = useQuery(recentUpdates);
  const { data: contentDataWithImage } = useQuery(homePageContentWithImage);

  if (!recentUpdate || !contentData) return <></>;

  return (
    <>
      <div className="relative top-0 z-20 w-full bg-white lg:fixed">
        <TopNavigation></TopNavigation>
        <TopHeader data={contentData}></TopHeader>
      </div>
      <div className="lg:mb-[270px]"></div>
      <NewsUpdate data={recentUpdate}></NewsUpdate>
      <NewMockQuotes></NewMockQuotes>
      <HeroSection data={contentData}></HeroSection>
      <LeggedStool data={contentData}></LeggedStool>
      <Fact></Fact>
      <Inspiration></Inspiration>
      <UniversitiesOfferingProgram></UniversitiesOfferingProgram>
      <Fact></Fact>
      <Process data={contentData}></Process>
      <Faq data={contentData} ></Faq>
      {/* <LogoSection></LogoSection> */}
      <Numbers data={contentDataWithImage}></Numbers>
      <MeetFounder data={contentData}></MeetFounder>
      <Footer></Footer>


    </>


  );
};

export default HomePageComponent;
