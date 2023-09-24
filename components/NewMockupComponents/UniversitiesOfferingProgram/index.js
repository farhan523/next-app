import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";
import { listAllUniversittiesQuery } from "../../../graphql/queries/university/queries";
import get from "lodash/get";
const Carousel = dynamic(() => import("react-spring-3d-carousel-2"), {
  ssr: false,
});

const UniversitiesOfferingProgram = () => {
  const { data: universitiesData } = useQuery(listAllUniversittiesQuery);
  const [activeSlide, setActiveSlide] = useState(0);
  const CustomDot = ({ ...rest }) => {
    const { isActive, index } = rest;
    const handleChangeSlide = () => {
      setActiveSlide(index);
    };
    return (
      <button
        className={`w-[12px] min-h-[12px] rounded-full   mr-[8px] ${isActive ? "bg-brandBlue" : "bg-gray-400"
          } `}
        onClick={handleChangeSlide}
      ></button>
    );
  };

  const universitiesList = useMemo(() => {
    return get(universitiesData, "universities.data", []);
  }, universitiesData);

  const activeSlideUrl = get(
    universitiesList,
    `[${Math.abs(activeSlide)}].attributes.logo.data.attributes.url`,
    ""
  );

  const slides = universitiesList
    .map((item, index) => {
      const imageUrl = get(item, "attributes.logo.data.attributes.url", null);
      const description = get(item, "attributes.description", null);
      const link = get(item, "attributes.link", null);
      return {
        key: index + 1,
        content: (
          <div className={`${(index) === activeSlide ? "bg-white" : `bg-[#F3F3F3]`} sm:min-h-[335px] sm:w-[572px] h-[278px] w-[260px] min-w-[100px] min-h-[350px] flex flex-col justify-evenly -mb-10 mt-20 items-center rounded-[15px] px-10 py-5`}>
            <div className="w-[65%]">
              <img src={imageUrl} />
            </div>
            <p className="text-[#3E3E3E] text-[14px] w-[90%]">{description}</p>
            <div className="text-right w-[100%]  ">
              <a
                className="text-[#3E3E3E] flex font-semibold justify-end"
                href={link}
                target="_blank"
              >
                Learn More
                <img src="/static/img/angle-right-black.svg" className="ml-[5px] mt-[7px] w-[10px] h-[12px]" />
              </a>
            </div>
            <div className={`bg-gradient-to-r ${(index) === activeSlide ? `from-brandOrangeGradientFrom to-brandOrangeGradientTo` : `from-[#0067B2] via-[#5d9fce] to-[#0067B2]`} -mb-[45px] min-w-[260px] min-h-[17px] h-[17px] sm:w-[572px]`} />
          </div>
        ),
      };
    })
    .map((slide, index) => {
      return { ...slide, onClick: () => setActiveSlide(index) };
    });

  return (
    <div className="flex flex-col justify-evenly slider-universities-program">
      <div className="min-h-[82px] h-auto grid items-center text-[25px] p-[30px] lg:p-0  z-10  text-white bg-brandBlue w-full">
        <h1 className="lg:ml-[60px] text-[35px] text-center font-semibold">
          Universities Which <br className="block lg:hidden" /> Offer The
          Program
        </h1>
      </div>
      <div
        style={{
          backgroundImage: "url(/static/img/UniversityFront.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-[100%] min-h-[200px] lg:min-h-[250px] relative z-0"
      >
        {/* <img src="https://fs-strapi-assets.s3.amazonaws.com/arizona_Uni_dd44b728dd.png" /> */}
      </div>
      <div className="2xl:w-[40%] mb-[70px] w-0 lg:w-[50%] mx-auto ">
        <Carousel opacity={1} slides={slides} goToSlide={activeSlide} />
        <div className="relative mt-[50px]">
          <button
            className="absolute left-[-180px] sm:left-[-320px] lg:left-[-200px] w-[30px] h-[30px]  bg-brandBlue rounded-full "
            onClick={() => {
              if (activeSlide === 0) {
                setActiveSlide(universitiesList.length - 1);
                return;
              }
              setActiveSlide(activeSlide - 1);
            }}
          >
            <img src="/static/img/angleLeft.svg" className="w-[10px] mx-auto" />
          </button>
          <button
            className="absolute right-[-180px] sm:right-[-320px]  lg:right-[-200px] w-[30px] h-[30px]  bg-brandBlue rounded-full "
            onClick={() => {
              if (activeSlide === universitiesList.length - 1) {
                setActiveSlide(0);
                return;
              }
              setActiveSlide(activeSlide + 1);
            }}
          >
            <img
              src="/static/img/angleRight.svg"
              className="w-[10px] mx-auto"
            />
          </button>
        </div>
      </div>
      <div className="flex mt-[150px] mx-auto">
        {universitiesList.map((items, index) => {
          return (
            <CustomDot
              key={index}
              index={index}
              isActive={index === activeSlide}
            />
          );
        })}
      </div>

      {/* universities */}
      <div className="bg-sky-100 py-5 flex justify-center min-h-[203px] items-center p-[10px] mt-[130px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 md:gap-[100px] justify-center items-center">
          <img src="/static/img/asu.png" width={110} height={200} />
          <img src="/static/img/uoa.png" width={100} height={200} />
          <img src="/static/img/uoil.png" width={100} height={200} />
          <img src="/static/img/tsu.svg" width={100} height={200} />
        </div>
      </div>
      {/* universities */}
    </div>
  );
};
export default UniversitiesOfferingProgram;
