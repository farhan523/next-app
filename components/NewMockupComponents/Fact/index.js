const Fact = () => {
  return (
    <div className="w-[100%] min-h-[319px] h-auto lg:min-h-[142px] justify-center items-center  bg-brandBlue">
      <div className="mx-auto lg:pt-[30px] py-[30px] items-center">
        <div className="2xl:flex lg:flex content-center lg:items-center m-0 ">
          <div>
            <img
              src="/static/img/logoWhite.png"
              className="w-[60%] mb-[15px] mx-auto"
            />
          </div>
          <div className="text-white lg:text-start text-center lg:pt-0 sm:pt-20 text-[19px]  leading-9 lg:w-[100%] w-[70%] mx-auto">
            <p className="text-[19px] font-normal lg:text-[19px] md:text-16px " data-aos="fade-down">
              The Fleischer Scholars Program began with an idea in 2009 to help
            </p>
            <p className="font-bold font-[14px] " data-aos="fade-down" >
              qualified, economically disadvantaged students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fact;
