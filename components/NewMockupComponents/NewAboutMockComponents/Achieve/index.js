const mockCardsData = [
  {
    title: "How to think",
    icon: "BrainIcon.svg",
    img: "howToThinkImage.png",
  },
  {
    title: "How to Learn",
    icon: "BookOrangeIcon.svg",
    img: "howToLearnImage.png",
  },
  {
    title: "How to Write",
    icon: "PenYellowIcon.svg",
    img: "howToWriteImage.png",
  },
  {
    title: "How to Solve Problem",
    icon: "BulbIcon.svg",
    img: "howToSolveProblemsImage.png",
  },
  {
    title: "How to be Adaptable",
    icon: "ShapsIcons.svg",
    description: "Get out of their comfort zone",
    img: "howToAdaptImage.png",
  },
];

const Achieve = () => {
  return (
    <div className="grid items-center relative content-center my-[150px] before:contents-[''] before:absolute before:blur-[100px] rounded-full  before:bg-brandBlueLighten before:right-[0] before:top-[-120px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1] after:contents-[''] after:absolute after:blur-[100px] after:rounded-t-full after:rounded-r-full   after:bg-brandOrangeLighten after:left-[0] after:bottom-[-120px] after:w-[120px] after:min-h-[120px] after:z-[-1]  ">
      <div className=" flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto ">
          <div data-aos="fade-down">
            <div className="grid lg:grid-cols-[358px_200px] items-center mb-[20px]">
              <h2 className="text-brandBlue text-[25px] font-[300]">
                HOW TO ACHIEVE SUCCESS
              </h2>
              <div className="border-b-2 border-brandBlue w-[100%] mt-[10px] "></div>
            </div>
            <div className=" mb-[60px]">
              <h1 className="text-brandBlue uppercase text-[35px] 2xl:text-[35px] md:text-[35px] lg:text-[35px] sm:text-[35px] font-[500] ">
                <span className="font-[700]">Learn</span> not only WHAT to think,
                but <br /> <span className="font-[700]">HOW</span> to think and{" "}
                <span className="font-[700]">ACHIEVE SUCCESS!</span>
              </h1>
            </div>
          </div>
          <div className="lg:w-[79%] w-[100%] mx-auto text-left">
            <div data-aos="fade-down">
              <p className="w-[100%] text-[18px] text-brandBlack mb-[30px] font-inter font-normal leading-7">
                This roadmap encourages students to treat their brain like a
                brilliant, programmable computer which can be adapted throughout
                their lives, using the collection of their experiences to guide
                themselves as the missile to more accurately hit their target
                goals.
              </p>
              <p className="w-[100%] text-[18px] text-brandBlack mb-[30px] font-inter font-normal leading-7">
                Once Fleischer Scholars understand how to use this mental roadmap,
                they can become master adaptive learners, and this will assist
                them towards having successful careers and becoming leaders and
                role models in their communities. FS Program participants are
                taught that on the road to becoming{" "}
                <span className="font-semibold text-brandBlue">
                  "Master Adaptive Learners"
                </span>&nbsp;they must first learn:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:w-[85%] xl:w-[100%] w-[100%] mx-auto grid xl:grid-cols-5 lg:grid-cols-3  w-[100%] mt-[90px] md:grid-cols-3 ">
        {mockCardsData.map((items, index) => {
          return (
            <div
              key={index}
              className="mx-auto w-[213px] grid grid-rows-[77px_170px_70px]  relative h-[273px] shadow-xl mt-10 pt-4 "
            >
              <div className="absolute flex justify-center items-center  top-[-8px] bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo w-[54px] rounded-full left-[80px] h-[52px] shadow  mx-auto ">
                <div className="bg-white z-10 w-[46px] flex justify-center items-center h-[46px] rounded-full ">
                  <img className="m-auto" src={`/static/img/${items.icon}`} />
                </div>
              </div>
              <div className="h-17 bg-slate-500 w-[184px] mx-auto  rounded">
                <img
                  src={`/static/img/${items.img}`}
                  className="w-[100%] h-[100%] object-cover rounded"
                />
              </div>
              <div className="w-[56%] mx-auto mt-[30px]">
                <p className="text-[18px] font-[800] text-center ">
                  {items.title}
                </p>
                <p className="text-[16px] text-center">
                  {items.description && items.description}
                </p>
              </div>
              <div className="bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo w-[100%]  h-[15px] items-end ">
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achieve;
