const Index = () => {
  return (
    <div className="bg-themeGray">
      <div className="container mx-auto py-20 px-4 md:px-0 xl:px-32">
        <p className="text-brandBlue text-lg md:text-2xl text-center pb-10 uppercase" data-aos="fade-up">
          upon graduation,
        </p>
        <h1 className="font-semibold text-center text-brandBlue text-3xl md:text-5xl" data-aos="fade-up">
          The Fleischer Scholar Program Prepares Students to:
        </h1>
        <div className="flex pt-20 justify-between flex-wrap md:px-12 xl:px-0" data-aos="fade-up">
          <div className="md:w-1/6 w-full bg-themeGray py-12 rounded-lg">
            <img
              src="/static/img/flagIcon.svg"
              className="mx-auto h-16 w-16"

            />
            <p className="text-brandBlue text-center font-semibold mt-8 uppercase text-sm">
              Serve As Leaders
            </p>
          </div>
          <div className="md:w-1/5 w-full bg-themeGray py-12 rounded-lg">
            <img
              src="/static/img/InputIcon.svg"
              className="mx-auto h-16 w-16"

            />
            <p className="text-brandBlue text-center font-semibold mt-8 uppercase text-sm">
              Become A Role Model In Their Community
            </p>
          </div>

          <div className="md:w-1/5 w-full bg-themeGray py-12 rounded-lg">
            <img src="/static/img/outPutIcon.svg" className=" mx-auto h-16 w-16" />
            <p className="text-brandBlue text-center font-semibold mt-8 uppercase text-sm">
              Encourage Others To Attend College
            </p>
          </div>
          <div className="md:w-1/5 w-full bg-themeGray py-12 rounded-lg">
            <img src="/static/img/medalIcon.svg" className="mx-auto h-16 w-16" />
            <p className="text-brandBlue text-center font-semibold mt-8 uppercase text-sm">
              Pursue Their Dreams
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
