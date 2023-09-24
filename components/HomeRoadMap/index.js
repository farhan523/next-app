const Index = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3 bg-brandBlue lg:py-36 py-12 lg:pl-16 xl:pl-40 xl:pr-24 pl-8 pr-8">
        <div className="flex items-center lg:flex-row flex-col" data-aos="fade-up">
          <img src="/static/img/logoWhite.png" style={{ width: "365px" }} />
          <p className="lg:pl-8 text-4xl text-white font-normal mb-0 pt-6">
            PRESENTS:
          </p>
        </div>
        <p className="lg:text-5xl text-3xl pt-16 text-white" data-aos="fade-up">
          <b>‘’A mind roadmap</b> for success in <b>business</b> and{" "}
          <b>life’’</b>
        </p>
      </div>
      <div
        className="w-full lg:w-1/3 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${"/static/img/roadMapLiabrary.png"})` }}
      >
        <img
          src="/static/img/roadMapLiabrary.png"
          className="w-full sm:w-5/12 lg:hidden"
        />
      </div>
    </div>
  );
};
export default Index;
