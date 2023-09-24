const data = [
  {
    title: "Empiricism",
    description: "You are a sum of all your personal experiences",
  },
  {
    title: "Servo-mechanism",
    description:
      "Your brain is a sophisticated computer-like, goal-seeking mechanism",
  },
  {
    title: "Empiricism",
    description: "You seek out a target (goals) and go towards that target.",
  },
];

const AboutLeggedStool = () => {
  return (
    <div>
      <div className="flex justify-end w-[80%] mx-auto lg:mx-0 xl:mb-[100px] mb-[190px] ">
        <h1 className="text-[24px] text-brandBlue">
          <div data-aos="fade-down">
            <span className="text-[32px]  font-[700]">
              The Fleischer Scholars Program
            </span>{" "}
            gives you the TOOLS:
          </div>
        </h1>
      </div>
      <div className="w-[100%] relative flex justify-end mb-[100px]">
        <div className="lg:w-[30%] 2xl:w-[30%]  w-[75%] mx-auto  before:blur-[120px] before:contents-[''] before:absolute before:top-[31px] before:left-[15px] before:rounded-full  before:bg-brandOrangeLighten before:w-[80%] before:min-h-[80%] before:z-[-1]   absolute lg:left-[94px] sm:left-[84px] left-[55px] 2xl:left-[127px]  lg:top-[-104px] top-[-164px] ">
          <img
            src="/static/img/StoolDesign.svg"
            className="lg:w-[400px]  w-[296px] mx-auto"
          />
        </div>
        <div className="lg:w-[78%] lg:rounded-l-2xl min-h-[370px] bg-sky-100  lg:pl-[200px] pl-[20px] pr-[20px] lg:pr-[50px] lg:py-[20px] lg:pt-[120px] pt-[164px] pb-[20px]  flex flex-col justify-center  items-center">
          <div data-aos="fade-up">
            <h1 className="text-black font-thin text-center  leading-10 mb-5 text-[19px]">
              <span className="font-semibold text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo ">
                The Three-Legged Stool
              </span>{" "}
              - The three legs of the stool represent:
            </h1>
            <div className="lg:w-[100%] w-[100%] mt-[10px] grid xl:grid-cols-3 ">
              {data.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-start brandOrangeGradientTo "
                  >
                    <h1 className="text-[60px] mb-[80px] text-brandBlue">
                      {index + 1}
                    </h1>
                    <div className="w-[50%] ml-[7px] pt-[24px]">
                      <div className="w-[60px] mb-[10px] h-[3px] bg-brandBlue"></div>
                      <h2 className="text-brandBlue text-[24px] font-[700] whitespace-nowrap">
                        {items.title}
                      </h2>
                      <p className="text-[18px] font-inter font-normal text-2xl">{items.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutLeggedStool;
