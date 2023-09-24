import Link from "next/link";

const LeggedStool = () => {
  return (
    <>
      <div className="lg:pt-3 xl:pt-12 flex-col flex md:flex-row items-center container mx-auto my-8">
        <div>
          <div className="flex-col sm:flex-row flex items-center sm:items-end justify-center">
            <img src="/static/img/desktopLogo.svg" className="logo w-2/6" />
            <p className="md:pl-3 text-4xl text-brandBlue font-normal mb-0 inline-block">
              PRESENTS:
            </p>
          </div>
          <h1
            className="text-center xl:px-30 sm:px-1 md:px-1 uppercase text-brandBlue lg:text-5xl text-4xl lg:text-5xl md:pt-16 pt-10 lg:pb-8 md:font-semibold font-medium"
            data-aos="fade-up"
          >
            "A mind roadmap for success in &nbsp;
            <span className="text-brandOrange">business</span>&nbsp; And &nbsp;
            <span className="text-brandOrange">life</span>"
          </h1>
        </div>
        <div className="w-2/5 md:w-4/6 lg:w-7/12  md:-my-60 lg:-mb-28 lg:-mt-48 my-8 z-10">
          <img src="/static/img/three-legged-stool.png" />
        </div>
      </div>
      <div className="bg-brandBlue mx-auto py-12 px-4 lg:px-12 xl:px-32">
        <h1 className="text-center text-white text-center text-base md:text-5xl text-3xl md:font-semibold">
          3-Legged Stool
        </h1>
      </div>
      <div className=" bg-themeGray mx-auto lg:px-16 xl:px-32 item-center">
        <div className="py-24">
          <p className="text-center text-base lg:px-40 xl:px-72 sm:px-20 px-20">
            <b>
              {" "}
              The Fleischer Scholars Program provides a mental roadmap, modeled
              by a 3-legged stool built with the three aforementioned
              tools,&nbsp;
            </b>
            for students to succeed and become master adaptive learners.&nbsp;
            <div className="md:hidden">
              <br />
            </div>
            This mental roadmap encourages students to treat their brain like a
            computer, programming it throughout their lives (adapting as they
            learn) using the collection of their experiences and themselves as
            the missile to more accurately hit their target goals.
          </p>

          <a className="text-center block">
            <Link href="/program-information/students#programStool">
              <button className="orangeButton text-xl center mt-20">
                Learn more <i className="fa fa-arrow-right ml-5"></i>
              </button>
            </Link>
          </a>
        </div>
      </div>
    </>
  );
};
export default LeggedStool;
