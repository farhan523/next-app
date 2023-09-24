import Carousel from "react-multi-carousel";
const Index = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="bg-themeGray py-24 homeUniSection">
      <div className="container mx-auto lg:px-32 px-4">
        <h1
          className="text-brandBlue text-3xl lg:text-4xl  pb-24 font-semibold text-center"
          data-aos="fade-up"
        >
          Universities which offer the program
        </h1>

        {/* <div
          className="flex justify-center lg:justify-between flex-wrap items-center"
          data-aos="fade-up"
        > */}
        <Carousel responsive={responsive}>
          <div className="w-8/12 md:w-5/12 lg:w-9/12">
            <div className="flex items-center justify-center lg:h-16">
              <img src="/static/img/arizonaUni.png" className="lg:max-w-100" />
            </div>
            <p className="text-brandBlue text-center font-semibold mt-8">
              Arizona State University
            </p>
          </div>
          <div className="w-8/12 md:w-5/12 lg:w-9/12">
            <div className="flex items-center justify-center lg:h-16">
              <img src="/static/img/marshalIamge.png" className="w-3/4" />
            </div>
            <p className="text-brandBlue text-center font-semibold mt-8">
              Thurgood Marshall College Fund
            </p>
          </div>
          <div className="w-8/12 md:w-5/12 lg:w-9/12">
            <div className="flex items-center justify-center lg:h-16">
              <img src="/static/img/washingtonUni.png" className="w-3/4" />
            </div>
            <p className="text-brandBlue text-center font-semibold mt-8">
              Washington University in St. Louis
            </p>
          </div>
          <div className="w-8/12 md:w-5/12 lg:w-9/12">
            <div className="flex items-center justify-center lg:h-16">
              <img src="/static/img/texasSouthrenUni.png" className="w-3/4" />
            </div>
            <p className="text-brandBlue text-center font-semibold mt-8">
              Texas Southern University
            </p>
          </div>
          <div className="w-8/12 md:w-5/12 lg:w-9/12">
            <div className="flex items-center justify-center lg:h-16">
              <img src="/static/img/virginiaStateUni.png" className="w-3/4" />
            </div>
            <p className="text-brandBlue text-center font-semibold mt-8">
              Virginia State University
            </p>
          </div>
          <div className="w-8/12 md:w-5/12 lg:w-9/12">
            <div className="flex items-center justify-center lg:h-16">
              <img src="/static/img/UA_Logo_Horizontal.png" className="w-3/4" />
            </div>
            <p className="text-brandBlue text-center font-semibold mt-8">
              University Of Arkansas
            </p>
          </div>
          <div className="w-8/12 md:w-5/12 lg:w-9/12">
            <div className="flex items-center justify-center lg:h-16">
              <img
                src="/static/img/fayettevilleStateUni.png"
                className="w-3/4"
              />
            </div>
            <p className="text-brandBlue text-center font-semibold mt-8">
              Fayetteville State University
            </p>
          </div>

          <div className="w-8/12 md:w-5/12 lg:w-9/12">
            <div className="flex items-center justify-center lg:h-16">
              <img
                src="/static/img/universityinnovationallance.png"
                className="w-3/4"
              />
            </div>
            <p className="text-brandBlue text-center font-semibold mt-8">
              University Innovation Alliance
            </p>
          </div>
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Index;
