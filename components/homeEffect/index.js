const Index = () => {
  return (
    <div className="container mx-auto py-20">
      <p
        className="text-brandBlue text-xl text-center pb-10"
        data-aos="fade-up"
      >
        HOW DOES THE FLEISCHER SCHOLARS PROGRAM EFFECT THE FUTURE
      </p>
      <h1
        className="font-semibold text-center text-brandBlue text-5xl"
        data-aos="fade-up"
      >
        The Multiplier Effect
      </h1>
      <div className="flex pt-28 justify-between flex-wrap md:px-12 xl:px-32">
        <div
          className="md:w-1/4 w-full bg-themeGray py-12 rounded-lg"
          data-aos="fade-up"
        >
          <img src="/static/img/InputIcon.svg" className="mx-auto h-16 w-16" />
          <p className="text-brandBlue text-center font-semibold mt-8">INPUT</p>
          <p className="text-brandBlack text-sm text-center w-10/12 mx-auto mt-5">
            Underserved, ambitious, high-achieving high school studends apply
            for the program.
          </p>
        </div>
        <div
          className="md:w-1/4 w-full bg-themeGray py-12 rounded-lg"
          data-aos="fade-up"
        >
          <img src="/static/img/scholarIcon.svg" className="mx-auto h-16 w-16"/>
          <p className="text-brandBlue text-center font-semibold mt-8">
          Three-Legged Stool
          </p>
          <p className="text-brandBlack text-sm text-center w-10/12 mx-auto mt-5">
            The engaging week-long summer program equips students with a mind
            roadmap for success in life and in business.
          </p>
        </div>

        <div
          className="md:w-1/4 w-full bg-themeGray py-12 rounded-lg"
          data-aos="fade-up"
        >
          <img src="/static/img/outPutIcon.svg" className="mx-auto h-16 w-16"/>
          <p className="text-brandBlue text-center font-semibold mt-8">
            OUTPUT
          </p>
          <p className="text-brandBlack text-sm text-center w-10/12 mx-auto mt-5">
            Accomplished community leaders who are master adaptive learners and
            role models for their community.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Index;
