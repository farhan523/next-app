const data = [
  "A predominantly incentive driven market economy",
  "A government that respects the rights of the individual to life, liberty and the pursuit of happiness and",
  "A system of cultural institutions moved by the ideas of liberty, opportunity, and the inspiration of justice for all",
];

const AboutHeroSection = () => {
  return (
    <div className="my-[70px] xl:my-[100px] 2xl:my-[70px]">
      <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 items-center content-center ">
        <div className=" flex flex-col items-center justify-center">
          <div className="w-[80%] mx-auto ">
            <div data-aos="fade-down">
              <div className="grid xl:grid-cols-[290px_200px] items-center mb-[20px]">
                <h2 className="text-brandBlue text-[25px] font-[300]">
                  ABOUT THE PROGRAM
                </h2>
                <div className="border-b-2 border-brandBlue w-[100%] mt-[10px] "></div>
              </div>
              <div className="leading-9 mb-[20px]">
                <h1 className="text-brandBlue text-[35px] font-[700] ">
                  The Vision of The
                </h1>
                <h2 className="text-brandBlue text-[35px] font-[200] ">
                  Fleischer Scholars Program
                </h2>
              </div>
              <p className="w-[100%] text-[18px] text-brandBlack font-inter font-normal text-3xl">
                Many years ago, I was attempting to define intellectually rather
                than intuitively some of the ingredients that make America
                possible. I met Michael Novak, who was a brilliant scholar at the
                American Enterprise Institute in Washington, DC from whom I became
                aware of the term{" "}
                <span className="font-[600] text-black">
                  "Democratic Capitalism"
                </span>
                . Mr. Novak's definition of this is;
              </p>
            </div>
          </div>
        </div>
        <div className="relative before:absolute before:content-[''] before:hidden lg:before:block before:blur-[150px] before:bg-brandBlueLighten before:w-[501px] before:z-[-1] before:right-[0px] before:bottom-[50px] before:h-[501px] before:rounded-full w-[100%] h-auto gap-[30px] justify-items-end ">
          <img
            src="/static/img/aboutHeroPatternImage.svg"
            className="w-[524.39px] h-[367px] mx-auto hidden mr-0 lg:block"
          />
        </div>
      </div>
      <div data-aos="fade-down">
        <div className="grid xl:grid-cols-3 w-[100%] mb-[53px]">
          {data.map((items, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-start brandOrangeGradientTo "
              >
                <h1 className="text-[60px] mb-[20px] text-transparent bg-clip-text bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo ">
                  {index + 1}
                </h1>
                <div className="w-[40%] ml-[7px] pt-[24px] ">
                  <div className="w-[60px] mb-[10px] h-[3px] bg-gradient-to-t from-brandOrangeDark to-brandOrangeGradientTo "></div>
                  <p className="text-[18px] font-[600]">{items}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div data-aos="fade-down ">
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 max-lg:grid-cols-1 mb-[120px] 2xl:mb-[150px] ">
          <img src="/static/img/HorseImageAbout.png" className="object-cover  hidden lg:block" />
          <div className="ml-[50px] mr-[60px] 2xl:ml-[0px] mr-[0px] xl:ml-[0px] mr-[0px] md:ml-[0px] mr-[0px]  2xl:w-[90%] ">
            <h1 className="text-brandBlue text-[25px] 2xl:text-[30px] md:text-[26px] md:text-[30px]  lg:text-[25px] sm:text-[33px] max-sm:text-[33px] mb-[30px] ">
              The above is metaphorically represented by the{" "}
              <span className="text-brandBlue font-[700]">SPIRIT</span> statue.
            </h1>
            <p className="text-brandBlack text-[18px] font-inter font-normal text-2xl ">
              A bronze sculpture created by{" "}
              <span className="font-[700]">Buck McCain</span> and donated to
              Arizona State University in 2009. These horses, which rise up from
              the earth, reflect the indomitable{" "}
              <span className="font-[700]">SPIRIT</span> of America and the
              boundless opportunities freedom affords us.{" "}
            </p>
          </div>
          <div className="flex items-center mt-[120px] relative before:blur-[120px] before:w-[10%] before:contents-[''] before:absolute before:top-[31px] before:rounded-full before:bg-brandOrangeLighten before:min-h-[80%] before:z-[-1]">
            <div className="flex flex-col">
            <div className="w-[70%] absolute 2xl:right-[320px] bottom-[-75px] max-xl:bottom-[-120px] xl:right-[250px] bottom-[-45px] lg:right-[165px] bottom-[-50px] md:right-[120px] bottom-[-45px] hidden lg:block">
              <img
                src="/static/img/upcominghero.png"
                
              /></div>
              <div className="w-[70%] ml-[50px]  mt-[-70px] 2xl:ml-[150px] mt-[-150px] max-xl:ml-[-110px] mt-[-150px] xl:ml-[120px] lg:ml-[100px] mt-[145px] md:ml-[120px] mt-[60px] sm:mt-[0px] z-10" >
              <img src="/static/img/universityHeader.png" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
