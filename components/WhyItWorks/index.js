import { useMemo } from "react";
const Numbers = ({data}) => {
  const content = useMemo(() => {
    return data?.contents?.data?.find((item) => {
      return item.attributes.lookup.data.attributes.name == 'BY_THE_NUMBERS'
    })
  }, [data])

  if (!content) return <></>

  return (
    <div className="py-24">
      <div className="container mx-auto xl:px-32">
        <h1
          className="text-center text-brandBlue text-xl md:text-3xl lg:text-4xl detailText px-2 lg:px-4 xl:px-0 border-b border-brandBorder pb-24 xl:leading-normal		"
          data-aos="fade-up"
        >
          Over&nbsp;
          <span className="text-brandOrange">
            70% of Students Attend College&nbsp;
          </span>
          After Participating in The Fleischer Scholars Program!
        </h1>
        <div className="pt-20">
          <h1
            className="w-full text-center text-brandBlue font-semibold text-5xl pb-20"
            data-aos="fade-up"
          >
            Why it works
          </h1>
          <p
            className="text-xl text-center text-brandBlue font-semibold w-10/12 mx-auto"
            data-aos="fade-up"
          >
            The Fleischer Scholar’s program seeks to inspire a path of learning
            for youths who otherwise may lack the necessary resources and
            support needed to succeed but are eager to fulfill their potential.
          </p>
          <div className="flex flex-wrap my-20" data-aos="fade-up">
            <div
              className="relative items-end justify-center hidden lg:rounded-tl bg-cover lg:rounded-bl lg:flex lg:w-3/5 w-full  bg-top bg-no-repeat mobilebackgrounds"
              style={{
                backgroundImage: `url(${"/static/img/qouteBg.jpeg"})`,
               
              }}
            >
              <div className="qoute-overlay absolute inset-0" />
              <div className="px-12 relative z-10 pb-4">
                <p className="text-white font-semibold text-center leading-normal">
                  "Fleischer Scholars Combines Knowledge With Roadmap For
                  Success In Business And Life Using The 3-Legged-Stool To
                  Become A Master Adaptive Learner"
                </p>
                <p className="text-xs text-center pt-2 text-white opacity-80">
                  Mort Fleischer, Founder of Fleischer Scholars
                </p>
              </div>
            </div>
            <div>
              <img src="/static/img/qouteBgMobile.png" className="w-full lg:hidden" />
            </div>
            <div className="lg:w-2/5 bg-brandBlue px-8 lg:px-8 py-8 lg:rounded-tr lg:rounded-br">
              <p className="text-sm text-white xl:leading-33">
                We utilize a combination of knowledge with{" "}
                <b>a mind roadmap for success in business and life.</b> Our
                program puts our concept of the Three-Legged Stool in place in
                order for students to become Master Adaptive Learners. Over
                time, Fleischer Scholar graduates go back into their communities,
                which produces a{" "}
                <b>
                  multiplier effect – they become models in their communities.
                </b>
              </p>
            </div>
          </div>
          

        </div>
      </div>
      <div className="grid p-[50px] justify-center items-center bg-contain bg-center bg-hero-pattern min-h-[600px] bg-no-repeat ">
      <div>
        <h2 className="text-white text-[40px] text-center mb-40" data-aos="fade-up">
          <span className="font-bold">Fleischer Scholars</span> &nbsp;
          <span className="font-thin">by the Numbers</span>
        </h2>
        <div className="grid lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 items-center justify-center gap-y-[50px] lg:gap-x-[50px]" data-aos="fade-down">
          <div className="text-center lg:border-r-[1.5px] border-b-[1.5px] lg:border-b-0  :border-white lg:pr-10 pb-10 lg:pb-0">
            <img
              src="/static/img/number1700.svg"
              width={100}
              height={100}
              className="mx-auto mb-5"
            />
            <h3 className="text-white font-thin ">
            {content?.attributes.value_3}
            </h3>
          </div>
          <div className="text-center lg:border-r-[1.5px] border-b-[1.5px] lg:border-b-0  :border-white lg:pr-10 pb-10 lg:pb-0">
            <img
              src="/static/img/number70Percent.svg"
              width={100}
              height={100}
              className="mx-auto mb-5"
            />
            <h3 className="text-white font-thin">
            {content?.attributes.value_3}
            </h3>
          </div>
          <div className="text-center  lg:pr-10 ">
            <img
              src="/static/img/number80Percent.svg"
              width={100}
              height={100}
              className="mx-auto mb-5"
            />
            <h3 className="text-white font-thin">
            {content?.attributes.value_3}
            </h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Numbers;
