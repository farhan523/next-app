const VisionSection = () => {
  return (
    <div className="lg:container h-fit mx-auto hero-mockup-new mt-10">
      <div className="w-[100%] h-[100%] flex lg:content-center lg:items-center flex-col lg:flex-row justify-evenly gap-10 mb-[50px] p-12">
        <div className="lg:min-h-[500px] lg:w-[40%] lg:mx-0 mb-[70px] lg:mb-0 w-[100%]">
          <div className="flex w-full h-full">
            <img
              src="/static/img/desktopLogo.svg"
              className="logo min-h-[57px] w-[240px]"
            />
          </div>
          <div className="lg:w-[80%] mt-14">
            <div className="grid lg:grid-cols-[157px_220px] mb-[14px]">
              <h1 className="text-2xl">OUR VISION</h1>
              <div className="border-b-2 w-full border-black mb-[4px] pt-[15px] lg:pt-0 "></div>
            </div>
            <h2 className="text-[35px] font-semibold leading-[40px] flex flex-col mb-[60px]">
              NAF VISION
            </h2>
            <div className="flex flex-col gap-6">
              <p>
              The Fleischer Scholars Foundation, a non-profit organization, envisions creating and sponsoring programs around the United States that will aid the under resourced sector in bringing America’s youngsters into the mainstream of American society.
              </p>
              <p>
                {" "}
                NAF solves some of the biggest challenges facing education and
                the economy by bringing{" "}
                <span className="text-[#006548]">education, business</span>, and
                <span className="text-[#006548]"> community leaders</span>{" "}
                together to transform the high school experience.
                
                NAF envisions a world in which all young people have{" "}
                <span className="text-[#006548]">equal </span>
                opportunity for successful futures.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:min-h-[500px] lg:w-[40%] lg:mx-0 mb-[70px] lg:mb-0 w-[100%]">
          <div className="flex w-full h-full justify-center">
            <img
              src="/static/img/StudentsWalletsLogo.png"
              className="logo min-h-[57px] w-[240px]"
            />
          </div>
          <div className="lg:w-[80%] mt-14">
            <div className="grid lg:grid-cols-[177px_220px] mb-[14px]">
              <h1 className="text-2xl text-brandBlue">INTRODUCING</h1>
              <div className="border-b-2 w-full border-brandBlue mb-[4px] pt-[15px] lg:pt-0 "></div>
            </div>
            <h2 className="text-[35px] text-brandBlue font-semibold leading-[40px] flex flex-col mb-[60px]">
              STUDENT WALLET
            </h2>
            <div className="flex flex-col gap-6">
              <p>
              Proprietary scholarship search from Fleischer Scholars Foundation with access to thousands of financial aid alternatives tailored to your interests, career objectives, educational preferences, and more through Student Wallet’s scholarship library, you may graduate debt-free and save hundreds of hours or dollars.
              </p>
              <p>
              Unlike other platforms, Student Wallet is completely free and independent. Instead of burying you with a mountain of options, our algorithms curate a list specific to your interests, your career goals, your school choices, interested majors, budget, and schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
