import NewsUpdate from "../../../NewMockupComponents/NewsUpdate";
import TopHeader from "../../../NewMockupComponents/TopHeader";
import TopNavigation from "../../../NewMockupComponents/TopNavigation";
import AboutHeroSection from "../../../NewMockupComponents/NewAboutMockComponents/AboutHeroSection";
import Footer from "../../../NewMockupComponents/Footer";
import AboutQuote from "../../../NewMockupComponents/NewAboutMockComponents/AboutQuoteSection";
import AboutLogoSection from "../../../NewMockupComponents/NewAboutMockComponents/AboutLogoSection";
import AboutLeggedStool from "../../../NewMockupComponents/NewAboutMockComponents/AboutLeggedStool";
import NewMockQuotes from "../../../NewMockupComponents/NewMockQuote";
import AboutChangeLives from '../../../NewMockupComponents/NewAboutMockComponents/AboutChangeLives'
import Achieve from '../../../NewMockupComponents/NewAboutMockComponents/Achieve'
import MineScholarship from '../../../NewMockupComponents/NewAboutMockComponents/MineScholarship'
import StudentsWallet from '../../../NewMockupComponents/NewAboutMockComponents/StudentWalletSection'
import LogoOrangeSection from "../../../NewMockupComponents/NewAboutMockComponents/LogoOrangeSection";
import Curriculum from "../../../NewMockupComponents/NewAboutMockComponents/Curriculum";
import { recentUpdates } from "../../../../graphql/queries/content/queries";
import { useQuery } from "@apollo/client";

const HomePageComponent = () => {
  const { data: recentUpdate } = useQuery(recentUpdates);
  if (!recentUpdate) return <></>;
  return (
    <>
      <div className="relative lg:fixed w-full top-0 bg-white z-20">
        <TopNavigation></TopNavigation>
        <TopHeader></TopHeader>
      </div>
      <div className="lg:mb-[270px]" ></div>
      <NewsUpdate data={recentUpdate}></NewsUpdate>
      <NewMockQuotes></NewMockQuotes>
      <AboutHeroSection></AboutHeroSection>
      <AboutQuote></AboutQuote>
      <AboutLogoSection></AboutLogoSection>
      <AboutLeggedStool></AboutLeggedStool>
      <AboutChangeLives></AboutChangeLives>
      <Achieve></Achieve>
      <MineScholarship></MineScholarship>
      <StudentsWallet></StudentsWallet>
      <LogoOrangeSection></LogoOrangeSection>
      <Curriculum></Curriculum>
      <Footer></Footer>
    </>
  );
};

export default HomePageComponent;
