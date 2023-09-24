const Index = () => {
  return (
    <div className="py-52">
      <div className="">
        <div className="xl:hidden sm:w-1/3 mx-auto">
          <img src="/static/img/Morton.png" />
        </div>
        <div className="container flex flex-col md:flex-row">
          <div className="w-full xl:w-4/5 relative bg-themeGray pl-4 pr-4 lg:pl-40 xl:pr-44 py-8" data-aos="fade-down">
            <p className="text-brandBlue text-2xl pt-4" data-aos="fade-down">
              MEET
            </p>
            <h1
              className="text-6xl pt-6 font-semibold text-brandBlue pb-10"
              data-aos="fade-down"
            >
              Morton Fleischer
            </h1>
            <p className="text-sm	text-brandBlack mb-4" data-aos="fade-down">
              Morton Fleischer is a successful financier, entrepreneur and real
              estate investor. From his beginnings as a janitor in the local
              dime store to now, he has formed more than twenty real estate
              companies, taking three of them public on the New York Stock
              Exchange (NYSE).
            </p>
            <p className="text-sm	text-brandBlack" data-aos="fade-down">
              With his Fleischer Scholars Program, his goal is to assist economically disadvantaged students allowing them to graduate from college and to encourage them to invest their time and talent back into their hometown communities upon graduation. He calls this the “multiplier effect” and hopes that these future leaders will serve as role models and thus cause a ripple effect in these communities.
            </p>

            <img
              data-aos="fade-up"
              src="/static/img/Morton.png"
              className="mortonImage absolute hidden xl:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
