import OrangeButton from "../NewMockupComponents/OrangeButton";

const Index = () => {
  return (
    <div className="bg-brandBlue py-28">
      <div className="container mx-auto flex flex-wrap px-4 lg:px-0 xl:px-32 md:w-11/12 xl:w-full">
        <div className="lg:w-1/2" data-aos="fade-up">
          <h1 className="text-white text-4xl">
            Qualification Criteria for The Enrichment Program
          </h1>
          <OrangeButton
            href="/upcoming-sessions#applySection"
            className="orangeButton text-base mt-12 w-fit"
          >
            APPLY NOW
          </OrangeButton>
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-16 lg:mt-0" data-aos="fade-down">
          <div className="flex items-center mb-12">
            <div>
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center"></div>
            </div>
            <b className="mb-0 text-white pl-8 lg:pl-12">
              First in Family to Attend College
            </b>
          </div>
          <div className="flex items-center mb-12">
            <div>
              <div className="h-10 w-10  rounded-full bg-white flex items-center justify-center"></div>
            </div>
            <b className="mb-0 text-white pl-8 lg:pl-12">
              Economically Disadvantaged
            </b>
          </div>

          <div className="flex items-center mb-12">
            <div>
              <div className="h-10 w-10  rounded-full bg-white flex items-center justify-center"></div>
            </div>
            <b className="mb-0 text-white pl-8 lg:pl-12">
              High Test Scores – Intellectually Qualified
            </b>
          </div>

          <div className="flex items-center mb-12">
            <div>
              <div className="h-10 w-10  rounded-full bg-white flex items-center justify-center"></div>
            </div>
            <b className="mb-0 text-white pl-8 lg:pl-12">
              Ability to Deal With Roadblocks – Hardships
            </b>
          </div>
          <div className="flex items-center">
            <div>
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center"></div>
            </div>
            <b className="mb-0 text-white pl-8 lg:pl-12">
              Ambition “Fire In The Belly”
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
