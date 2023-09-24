const Index = () => {
  return (
    <>
      <div className="py-24 bg-themeGray px-4 lg:px-0 ">
        <div className="container mx-auto xl:px-32  ">
          <h1
            className="text-brandBlue text-center font-semibold text-3xl lg:text-4xl"
            data-aos="fade-up"
          >
            How your brain can be programmed
          </h1>
          <p
            className="text-brandBlue text-base text-center mt-4 uppercase font-semibold"
            data-aos="fade-up"
          >
            To assist you in acting like a missile and reach your goals
          </p>
          <img
            src="/static/img/brainGraphic1.svg"
            className="w-full mt-8"
            data-aos="fade-up"
          />
          <h1
            className="text-brandBlue text-center font-semibold text-3xl lg:text-4xl my-12"
            data-aos="fade-up"
          >
            Apply the above steps to reach your...
          </h1>
          <img
            src="/static/img/brainGraphic2.svg"
            className="w-full"
            data-aos="fade-up"
          />
        </div>
      </div>
      <div className="bg-white py-24">
        <div className="container mx-auto xl:px-32">
          <h1 className="text-brandBlue text-center text-3xl lg:text-4xl lg:leading-normal" data-aos="fade-up">
            Your Brain Is Like A Super-Computer (Servo-Mechanism). To Reach Your
            Goals, You Need to Become a{" "}
            <span className="text-brandOrange">
              {" "}
              Master Adaptative Learner!
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};
export default Index;
