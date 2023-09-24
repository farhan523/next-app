function AboutQuote() {
  return (
    <div className="bg-brandBlue w-[100%] lg:min-h-[295px] min-h-[71px]  h-auto lg:py-4 py-2 ">
      <div className="mx-auto flex justify-center items-center container text-start flex-col min-h-[254px]  ">
        <div>
          <div data-aos="fade-up">
            <div className="grid 2xl:grid-cols-[344px_861px] xl:grid-cols-[330px_661px] lg:grid-cols-[330px_561px] items-center">
              <h1 className="text-white text-[25px] mx-auto  mb-[15px]  ">
                WHAT DOES THIS MEAN
              </h1>
              <div className="border-b-2 border-white w-[90%] mx-auto "></div>
            </div>
            <p className="text-white xl:text-[32px] text-[11px] lg:text-[26px] text-[13px] py-8  lg:w-[100%] md:text-[16px] sm:text-[14px] min-[320px]:text-[12px] mx-auto font-semibold leading-8 px-4 text-center">
              IN AMERICA THE ONLY LIMITS TO WHAT YOU WILL BE ABLE TO ACHIEVE ARE{" "}
              <br />
              YOUR OWN <span className="text-brandOrangeDark">
                COURAGE
              </span> AND <span className="text-brandOrangeDark">TALENT</span>!
              YOU CAN CREATE YOUR OWN{" "}
              <span className="text-brandOrangeDark">DESTINY</span>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutQuote;
