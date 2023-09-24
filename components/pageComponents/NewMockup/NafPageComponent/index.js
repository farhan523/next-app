import { useQuery } from "@apollo/client";
import Image from "next/image";
import {
  homePageContent,
  homePageContentWithImage,
  recentUpdates,
} from "../../../../graphql/queries/content/queries";
import AboutNafSection from "../../../NewMockupComponents/AboutNafSection";
import BeFutureSection from "../../../NewMockupComponents/BeFutureSection";
import DenocraticSection from "../../../NewMockupComponents/DenocraticSection";
import Fact from "../../../NewMockupComponents/Fact";
import Footer from "../../../NewMockupComponents/Footer";
import NafLeggedStool from "../../../NewMockupComponents/LeggedStool/NafLeggedStool";
import NafSliderSection from "../../../NewMockupComponents/NafSliderSection";
import Numbers from "../../../NewMockupComponents/Numbers";
import RequestSection from "../../../NewMockupComponents/Request";
import RequestFormSection from "../../../NewMockupComponents/Request/RequestFormSection";
import TopHeader from "../../../NewMockupComponents/TopHeader";
import TopNavigation from "../../../NewMockupComponents/TopNavigation";
import VisionSection from "../../../NewMockupComponents/VisionSection";
import NafWorkbookSection from "../../../NewMockupComponents/NafWorkbookSection";

const NafPageComponent = () => {
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
      <div className="mx-auto hero-mockup-new w-full lg:mb-0 relative">
        <Image
          src="/static/img/drivingEducation.png"
          layout="responsive"
          width={1920}
          height={720}
          className="object-cover"
        />

        <div className="w-full h-4 bg-gradient-to-r from-[#33B14A] to-[#006548] absolute top-0" />
        <div className="absolute w-full flex sm:text-lg md:text-2xl lg:text-5xl text-center flex-col items-center text-white justify-center top-4 h-[98%] bg-[#000000] bg-opacity-75">
          <p>Driving Education Innovation:</p>
          <p>
            <span className="font-bold">FleischerScholars</span> And{" "}
            <span className="font-bold">NAF</span> Combine
          </p>
          <p>Forces to Revolutionize High School Experiences</p>
        </div>
      </div>
      <RequestSection></RequestSection>
      <VisionSection></VisionSection>
      <NafSliderSection></NafSliderSection>
      <DenocraticSection></DenocraticSection>
      <NafLeggedStool data={contentData}></NafLeggedStool>
      <BeFutureSection></BeFutureSection>
      <AboutNafSection></AboutNafSection>
      <Numbers data={contentDataWithImage}></Numbers>
      <Fact></Fact>
      <RequestFormSection></RequestFormSection>
      <NafWorkbookSection></NafWorkbookSection>
      <Footer></Footer>
    </>
  );
};

export default NafPageComponent;
