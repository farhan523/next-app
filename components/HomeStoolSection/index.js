import Link from "next/link"
const Index = () => {
  return (
    <div className="bg-themeGray md:pt-44 pb-32 pt-32">
      <div className="container flex justify-between mx-auto px-4 md:px-16 items-center flex-wrap xl:px-32">
        <div className="md:w-1/2 w-full pr-16 mb-8 md:mb-0" data-aos="fade-up">
          <img src="/static/img/stool.png" className="w-10/12" />
        </div>
        <div className="md:w-1/2 w-full" data-aos="fade-down">
          <h1 className="text-4xl font-semibold text-brandBlue pb-16">
          Three-Legged Stool
          </h1>
          <p className="text-base">
            The Fleischer Scholars program provides a{" "}
            <b>
              mental roadmap, modeled by a Three-Legged Stool built with the three
              aforementioned tools,
            </b>{" "}
            for students to succeed and become master adaptive learners. This
            mental roadmap encourages students to treat their brain like a
            computer, programming it throughout their lives (adapting as they
            learn) using the collection of their experiences and themselves as
            the missile to more accurately hit their target goals.
          </p>
          <Link href="/program-information/students#programStool">
            <a>
              <button className="orangeButton flex items-center text-xl mt-20">
                Learn more <i className="fa fa-arrow-right ml-5"></i>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Index;
