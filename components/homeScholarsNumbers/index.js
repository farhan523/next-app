const Index = () => {
  return (
    <div className="w-full bg-brandBlue py-36 relative">
      <img
        src="/static/img/horseLeft.svg"
        className="absolute left-0 hidden xl:block"
        style={{ width: "200px" }}
      />
      <img
        src="/static/img/horseRight.svg"
        className="absolute right-0 hidden xl:block"
        style={{ width: "200px" }}
      />
      <div className="container mx-auto lg:px-32">
        <h1 className="text-white text-center text-5xl" data-aos="fade-up">
          Fleischer Scholars by the <b>Numbers</b>
        </h1>

        <div className="flex justify-between mx-auto pt-28 flex-wrap items-start">
          <div
            className="md:w-thirtyPercent w-full	flex flex-col justify-center items-center mb-8 md:mb-0"
            data-aos="fade-up"
          >
            <img src="/static/img/battery1.svg" className="w-8/12" />
            <p className="text-center text-white text-lg pt-8">
              Participants since the program began in 2010
            </p>
          </div>
          <div
            className="md:w-thirtyPercent w-full	flex flex-col justify-center items-center mb-8 md:mb-0"
            data-aos="fade-up"
          >
            <img src="/static/img/battery2.svg" className="w-8/12" />
            <p className="text-center text-white text-lg pt-8">
              College Attendance From The Fleischer Scholar Program
            </p>
          </div>
          <div
            className="md:w-thirtyPercent w-full	flex flex-col justify-center items-center"
            data-aos="fade-up"
          >
            <img src="/static/img/battery3.svg" className="w-8/12" />
            <p className="text-center text-white text-lg pt-8">
              First generation college attendees
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
