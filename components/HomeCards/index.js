const Index = () => {
  return (
    <div className="relative">
      <img
        data-aos="fade-up"
        src="/static/img/horseLeftBlue.svg"
        className="absolute left-0 hidden xl:block "
        style={{ width: "200px", top: "30%", zIndex: -1 }}
      />
      <img
        data-aos="fade-up"
        src="/static/img/horseRightBlue.svg"
        className="absolute right-0 hidden xl:block"
        style={{ width: "200px", top: "30%", zIndex: -1 }}
      />
      <div className="container mx-auto homecardsContainer xl:px-32">
        <div className="flex flex-wrap justify-between">
          <div
            className="lg:w-thirtyPercent w-full md:w-1/2 px-4 mb-8 lg:mb-0 lg:px-0"
            data-aos="fade-up"
          >
            <div
              className="cardImage bg-cover bg-no-repeat rounded-xl"
              style={{
                backgroundImage: `url(${"/static/img/cardHand.jpeg"})`,
              }}
            />
            <div className="bg-brandBlue p-4  rounded-lg mt-5 detail">
              <p className="text-white text-center text-base ">
                The Fleischer Scholars Program began with an idea in 2009{" "}
                <b>to help qualified, economically disadvantaged students.</b>
              </p>
            </div>
          </div>
          <div
            className="lg:w-thirtyPercent w-full md:w-1/2 px-4 mb-8 lg:mb-0 lg:px-0"
            data-aos="fade-up"
          >
            <div
              className="cardImage bg-cover bg-no-repeat rounded-xl"
              style={{ backgroundImage: `url(${"/static/img/cardBoy.jpeg"})` }}
            />
            <div className="bg-brandBlue p-4  rounded-lg mt-5 detail">
              <p className="text-white text-center text-base ">
                We believe that America can achieve its promise and full potential
              by <b>empowering the socio-economically disadvantaged sector</b>{" "}
              and bringing them into the mainstream through education.{" "}
              </p>
            </div>
          </div>
          <div
            className="lg:w-thirtyPercent w-full md:w-1/2 px-4 lg:px-0"
            data-aos="fade-up"
          >
            <div
              className="cardImage bg-cover bg-no-repeat rounded-xl"
              style={{ backgroundImage: `url(${"/static/img/homePageHeader.jpeg"})` }}
            />
            <div className="bg-brandBlue p-4 rounded-lg mt-5 detail">
              <p className="text-white text-center text-base ">
                Students participate in a week long <b>enrichment session</b> that
              assists them in making the transition to college.
            </p>
            </div>
          </div>
        </div>
        <h1
          className="text-center text-brandBlue text-xl md:text-3xl detailText px-2 lg:px-4 xl:px-0"
          data-aos="fade-up"
        >
          Scholars are provided a&nbsp;
        <span className="text-brandOrange">
            unique opportunity to experience college life,
        </span>
        &nbsp;entrepreneurship, and business during a week-long residential program.
      </h1>
      </div>
    </div>
  );
};
export default Index;
