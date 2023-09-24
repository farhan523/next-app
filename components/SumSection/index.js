const Index = () => {
  return (
    <div className="bg-brandBlue">
      <div className="container mx-auto py-24 px-4 lg:px-12 xl:px-32  flex flex-wrap justify-between">
        <div className="lg:w-2/5 w-full rounded-lg bg-cover bg-center bg-no-repeat mobilebackgrounds" data-aos="fade-up" style={{ backgroundImage: `url(${"/static/img/sumBg.png"})` }}>
          {/* <img src="/static/img/sumBg.png" /> */}
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <p className="text-white text-sm leading-30" data-aos="fade-down">
            PER MORT FLEISCHER, FOUNDER OF FLEISCHER SCHOLARS,
          </p>
          <h1 className="text-4xl font-semibold text-white pt-6 pb-6 border-b border-brandBorder xl:leading-normal" data-aos="fade-down">
            “Each experience contributes to the sum of the individual.”
          </h1>
          <p className="text-brandOrange text-lg mt-12 font-semibold" data-aos="fade-down">
            Whether it is a personal or business experience, it shapes the way
            individuals view their world and their future. Fleischer realized
            this and created what he calls his Mental Balance Sheet, documenting
            the following:
          </p>
          <div className="flex flex-wrap mt-20" data-aos="fade-down">
            <div className="w-1/2 flex items-center mb-8">
              <div>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-white">
                  <i className="fa fa-check" style={{ color: "#0067b2" }}></i>
                </div>
              </div>
              <p className="text-xs pl-6 text-white">
                <span className="font-semibold">Intellectual Capital</span>{" "}
                (Academic & Life Experiences)
              </p>
            </div>
            <div className="pl-4 w-1/2 flex items-center mb-8">
              <div>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-white">
                  <i className="fa fa-check" style={{ color: "#0067b2" }}></i>
                </div>
              </div>
              <p className="text-xs pl-6 text-white">
                <span className="font-semibold">Moral Compass</span>{" "}
              </p>
            </div>
            <div className=" w-1/2 flex items-center">
              <div>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-white">
                  <i className="fa fa-check" style={{ color: "#0067b2" }}></i>
                </div>
              </div>
              <p className="text-xs pl-6 text-white">
                <span className="font-semibold">Empirical Knowledge</span> (You
                Are a Sum of All Your Experiences)
              </p>
            </div>
            <div className="pl-4 w-1/2 flex items-center">
              <div>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-white">
                  <i className="fa fa-check" style={{ color: "#0067b2" }}></i>
                </div>
              </div>
              <p className="text-xs pl-6 text-white">
                <span className="font-semibold">Liabilities</span> (We Don’t
                Know What We Don’t Know)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
