import HomeLayout from "../../Layouts/HomeLayout";
import HomeHero from "../../HomeHero";
import HomeCards from "../../HomeCards";
import University from "../../HomeUniversity";
import Categories from "../../HomeCategories";
import HomeRoadMap from "../../HomeRoadMap";
import HomeStool from "../../HomeStoolSection";
import HomeEffect from "../../homeEffect";
import NumbersSection from "../../homeScholarsNumbers";
import OwnerSection from "../../MeetOwner";
import Faq from "../../FaqSection";
import BookSection from "../../BookSection";
import LeggedStool from "../../LeggedStool";
import Anouncement from "../../Announcement/index";
import Quote from "../../Quote/index";
const HomePageComponent = () => {
  return (
    <HomeLayout>
      <Anouncement></Anouncement>
      <Quote></Quote>
      <HomeHero />
      <LeggedStool />
      <HomeCards />
      <University />
      <Categories />
      <HomeRoadMap />
      <HomeStool />
      <HomeEffect />
      <NumbersSection />
      <OwnerSection />
      <Faq />
      <BookSection />
    </HomeLayout>
  );
};
export default HomePageComponent;
