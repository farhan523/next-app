import HomeLayout from "../../Layouts/HomeLayout";
import Header from "../../InformationHeader";
import Prepeare from "../../ProgramPrepare";
import WhyWorks from "../../WhyItWorks";
import SumSection from "../../SumSection";
import ProgramStool from "../../ProgramStool";
import CardsSection from "../../ProgramCards";
import BrainSection from "../../InformationBrain";
import InformationForm from "../../InformationForm"
import { useQuery } from "@apollo/client";
import {
  homePageContent
} from "../../../graphql/queries/content/queries";



const Index = ({headerImage,heading,formImage}) => {
  const { data: contentData } = useQuery(homePageContent);

  return (
    <HomeLayout>
      <Header headerImage={headerImage} heading={heading}/>
      <InformationForm formImage={formImage}/>
      <Prepeare />
      <WhyWorks data={contentData} />
      <SumSection />
      <ProgramStool />
      <CardsSection />
      <BrainSection />
    </HomeLayout>
  );
};
export default Index;
