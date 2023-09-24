const Index = () => {
  return (
    <div className="py-12 lg:py-24 px-4 lg:px-8  relative">
      <img
        data-aos="fade-up"
        src="/static/img/horseLeftBlue.svg"
        className="absolute left-0 hidden xl:block "
        style={{ width: "200px", top: "40%", zIndex: -1 }}
      />
      <img
        data-aos="fade-up"
        src="/static/img/horseRightBlue.svg"
        className="absolute right-0 hidden xl:block"
        style={{ width: "200px", top: "40%", zIndex: -1 }}
      />
      <div className=" container mx-auto flex flex-wrap justify-between items-center xl:px-32">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <p className="text-lg text-brandBlue font-semibold" data-aos="fade-down">
            This mental roadmap{" "}
            <span className="text-brandOrange">
              {" "}
              encourages students to treat their brain like a computer,
              programming it throughout their lives{" "}
            </span>{" "}
            (adapting as they learn) using the collection of their experiences
            and themselves as the missile to more accurately hit their target
            goals.
          </p>
        </div>
        <div className="lg:w-1/3" data-aos="fade-up">
          <img src="/static/img/informationcardone.png" />
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between items-center xl:px-32">
        <div className="lg:w-1/3 mb-4 lg:mb-0" data-aos="fade-up">
          <img src="/static/img/informationCardTwo.png" />
        </div>
        <div className="lg:w-1/2">
          <p className="text-lg text-brandBlue font-semibold" data-aos="fade-down">
            This mental roadmap{" "}
            <span className="text-brandOrange">
              {" "}
              encourages students to treat their brain like a computer,
              programming it throughout their lives{" "}
            </span>{" "}
            (adapting as they learn) using the collection of their experiences
            and themselves as the missile to more accurately hit their target
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Index;
