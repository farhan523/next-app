import { useMemo } from "react";
import ReactPlayer from "react-player/youtube";
import OrangeButton from "../OrangeButton";

const HeroSection = ({ data }) => {
  const content = useMemo(() => {
    return data?.contents?.data?.find((item) => {
      return (
        item.attributes.lookup.data.attributes.name ==
        "ABOUT_FLEISCHER_SCHOLARS_PROGRAM"
      );
    });
  }, [data]);

  if (!content) return <></>;

  return (
    <div className="container lg:h-[800px] min-h-[600px] h-auto mx-auto hero-mockup-new mb-[251px] lg:mb-0 ">
      <div className="w-[100%] h-[100%] flex lg:content-center lg:items-center flex-col lg:flex-row  mt-[35px] justify-evenly mb-[50px] p-12">
        <div className=" lg:min-h-[500px] w-[80%] mx-auto lg:mx-0 mb-[113px] lg:mb-0  lg:w-[100%]  ">
          <div data-aos="fade-down">
            <div className="text-center lg:text-start lg:w-[500px] fade-down">
              <div className="grid lg:grid-cols-[143px_220px] mb-[14px]">
                <h1 className="text-brandBlue text-xl font-thin">WHAT IS THE</h1>
                <div className="border-b-2 w-full border-brandBlue mb-[4px] pt-[15px] lg:pt-0   "></div>
              </div>
              <h2 className="text-[35px] font-bold leading-[40px]  text-brandBlue flex flex-col mb-[60px]">
                FLEISCHER SCHOLARS <span className="font-thin">PROGRAM?</span>
              </h2>
              <p className="text-[#002E4E] text-[15px] font-light mb-[50px]">
                {content?.attributes?.value_1}
              </p>
              <OrangeButton
                className="lg:w-[250px]"
                IconRight={"/static/img/angleRight.svg"}
                href="/about"
              >
                Learn More
              </OrangeButton>


            </div>
          </div>
        </div>
        <div className=" min-h-[500px] relative  before:contents-[''] before:blur-[100px] before:contents-[''] before:absolute lg:before:top-[100px] before:top-[75px]  lg:before:left-[15px] before:left-[118px]  before:rounded-full  before:bg-brandOrangeLighten before:w-[50%] before:min-h-[50%] before:z-[-1] ">
          <div className="grid grid-cols-2 h-[500px] lg:h-auto    lg:grid-rows-1 gap-5 overflow-hidden lg:overflow-visible ">
            <div className="flex flex-col lg:items-end items-center col-span-2 lg:col-span-1 ">
              <div className="relative cursor-pointer rounded-2xl min-h-[213px] 2xl:w-[367px] lg:w-[280px] lg:h-auto w-[367px]">
                <ReactPlayer
                  width={"auto"}
                  height={"213px"}
                  url={"https://www.youtube.com/embed/fDdbcfXVTro"}
                  light={"/static/img/studentHeader.png"}
                  playing={true}
                  controls={true}
                />
              </div>
              <br />
              <div
                className="rounded-2xl lg:min-h-[300px]  min-h-[129px] w-[121px] mr-[180px] lg:mr-[0px]   lg:w-[280px]"
                style={{
                  backgroundImage: `url(/static/img/girl_using_laptop-min.jpeg)`,
                  backgroundPosition: "bottom",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="lg:bottom-[75px] lg:left-0 col-span-1 col-start-2 relative bottom-[206px] ">
              <img
                src="/static/img/boy_using_laptop-min.jpeg"
                className="rounded-2xl object-cover lg:min-h-[476px] min-h-[183px] w-[140px] absolute lg:w-[280px]"
              />
              {/* <div
                className="rounded-2xl lg:min-h-[476px] min-h-[183px] w-[123px] relative   lg:w-[280px]"
                style={{
                  backgroundImage: "url(/static/img/boy_using_laptop-min.jpeg)",
                  backgroundPosition: "bottom",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div> */}
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};
export default HeroSection;
