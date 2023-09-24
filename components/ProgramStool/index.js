const Index = () => {
  return (
    <div className="pt-24" >
      <div className="container mx-auto lg:px-16 xl:px-32">
        <p id="programStool" className="text-3xl lg:text-3xl text-brandBlue text-center leading-normal lg:leading-normal px-4 lg:pl-0" data-aos="fade-up">
          The Fleischer Scholars Program aids students in combining their own
          knowledge with a Mind Roadmap for success in business and in life
          utilizing the <span className="text-brandOrange">Three-Legged Stool</span>{" "}
          to become a MASTER ADAPTIVE LEARNER.
        </p>
      </div>
      <div className="bg-themeGray py-24 mt-32">
        <div className="container flex justify-between mx-auto px-4 md:px-32 items-center flex-wrap">
          <div className="md:w-1/2 w-full md:pr-16 mb-8 md:mb-0" data-aos="fade-up">
            <img src="/static/img/stool.png" className="w-10/12 mx-auto" />
          </div>
          <div className="md:w-1/2 w-full" data-aos="fade-down">
            <h1 className="text-4xl font-semibold text-brandBlue pb-16">
            Three-Legged Stool
          </h1>
            <p className="text-brandBlue font-semibold">
              Fleischer realized that he has utilized the following three tools
              to achieve success throughout his lucrative career.
            </p>

            <div className="flex items-center mt-16">
              <div>
                <div className="h-12 w-12 rounded-full bg-brandBlue flex items-center justify-center">
                  <p className="text-white">1</p>
                </div>
              </div>
              <div className="pl-8">
                <b className="mb-0 text-white  text-brandBlue">EMPIRICISM</b>
                <p className="text-sm text-brandBlack">
                  You are the sum of all your personal experiences{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-16">
              <div>
                <div className="h-12 w-12 rounded-full bg-brandBlue flex items-center justify-center">
                  <p className="text-white">2</p>
                </div>
              </div>
              <div className="pl-8">
                <b className="mb-0 text-white  text-brandBlue">
                  SERVO-MECHANISM
                </b>
                <p className="text-sm text-brandBlack">
                  Your brain is a computer like goal-seeking mechanism
                </p>
              </div>
            </div>
            <div className="flex items-center mt-16">
              <div>
                <div className="h-12 w-12 rounded-full bg-brandBlue flex items-center justify-center">
                  <p className="text-white">3</p>
                </div>
              </div>
              <div className="pl-8">
                <b className="mb-0 text-white  text-brandBlue">MISSILE</b>
                <p className="text-sm text-brandBlack">
                  You seek out a target and go towards that target
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
