import Image from "next/image";

const AboutNafSection = () => {
  return (
    <div className="lg:container w-full h-fit mx-auto hero-mockup-new mt-10">
      <div className="w-[100%] h-[100%] flex lg:content-center lg:items-center flex-col lg:flex-row justify-between gap-10 mb-[50px] p-8 lg:p-12">
        <div className="lg:min-h-[500px] lg:w-[40%] lg:mx-0 mb-[70px] lg:mb-0 w-[100%]">
          <div className="lg:w-[90%] mt-14">
            <div className="grid lg:grid-cols-[157px_220px] mb-[14px]">
              <h1 className="text-2xl text-[#006548] w-full lg:text-left text-center">
                ABOUT NAF
              </h1>
              <div className="border-b-2 w-full border-[#006548] mb-[4px] pt-[15px] lg:pt-0 "></div>
            </div>
            <p className="text-[35px] text-[#006548] leading-[40px] text-center lg:text-left mb-[60px]">
              WHAT IS <span className="font-bold">NAF</span> AND{" "}
              <span className="font-bold">WHAT DO THEY OFFER?</span>
            </p>
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <p>
                <span className="text-[#39AF4F]">NAF’s</span> design is uniquely
                comprehensive in its approach to skill development, enabling
                students of all backgrounds to participate in a meaningful
                education and gives businesses the opportunity to partner with
                schools to shape America’s future workforce through
                career-relevant curricula and work-based learning experiences,
                including internships.
              </p>
              <p>
                {" "}
                Since 1980, NAF has been collaborating with communities to
                improve outcomes for students, especially where institutional
                and social barriers are the most prevalent, by implementing{" "}
                <span className="text-[#39AF4F]"> NAF academies </span> – small
                learning communities within existing high schools. equal
                opportunity for successful futures.
              </p>
              <p>
                NAF has grown from one NAF Academy of Finance in New York City
                to hundreds of academies across the country focusing on growing
                industries including finance, hospitality & tourism, information
                technology, engineering, and health sciences; and support
                programs of study that are aligned with the National Career
                Clusters Framework. During the 2022-23 school year, over 112,000
                students attended 604 NAF academies across 35 states and
                territories. In 2022, NAF academies reported 99% of seniors
                graduated with 88% of graduates planning to go to college.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:min-h-[500px] flex justify-center items-center lg:w-[40%] lg:mx-0 mb-[70px] lg:mb-0 w-[100%]">
          <Image
            src={"/static/img/aboutNavBg.svg"}
            width={500}
            height={500}
            className="w-[80%] h-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutNafSection;
