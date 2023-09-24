import { useState } from "react";
import OrangeButton from "../OrangeButton";
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";
import { homePageContentWithImage } from "../../../graphql/queries/content/queries";
import Image from "next/image";
import BlueButton from "../BlueBotton";

const Carousel = dynamic(() => import("react-spring-3d-carousel-2"), {
  ssr: false,
});

const images = [
  { src: "../../../static/img/fsLoginPage.png" },
  { src: "../../../static/img/nafWorkBook.png" },
  { src: "../../../static/img/downloadPage.png" },
  { src: "../../../static/img/studentWorkbookAcademicPartners.png" },
];

const NafSliderSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { data: data } = useQuery(homePageContentWithImage);

  // const slideList = data?.contents?.data.filter(
  //   (data) => data.attributes.value === "numbers_carousel"
  // );

  const slides = images
    ?.map((item, index) => {
      const imageUrl = item?.src;
      return {
        key: index,
        content: (
          <div
            className={`bg-blue-400 h-fit lg:h-fit  w-[65vw] lg:w-[500px] flex flex-col items-center rounded-[15px]`}
          >
            <div className="flex-row justify-between w-fit h-[100%] sm:flex">
              <div className="h-[100%] w-fit ">
                {/* <div
                  className="w-full overflow-hidden sm:border-1 h-full bg-cover bg-fixed bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                /> */}
                <img
                  src={imageUrl}
                  alt="Picture of the author"
                  className="w-fit border-8 border-black rounded-[15px]"
                />
              </div>
            </div>
          </div>
        ),
      };
    })
    .map((slide, index) => {
      return { ...slide, onClick: () => setActiveSlide(index) };
    });
  return (
    <div className="lg:px-24 lg:py-20 pb-[0px] mb-24 lg:mb-36 h-fit mx-auto hero-mockup-new lg:mt-10">
      <div className="w-[100%] h-[100%] flex lg:content-center lg:items-center flex-col lg:flex-row justify-between gap-4 lg:gap-10 p-10 lg:p-12">
        <div className="lg:min-h-[500px] lg:w-[48%] lg:mx-0 mb-[70px] lg:mb-0 w-[100%]">
          <div className="grid lg:grid-cols-[260px_220px] mb-[14px]">
            <h1 className="text-2xl text-brandOrange">My Fleischer Scholars</h1>
            <div className="border-b-2 w-full border-brandOrange mb-[4px] pt-[15px] lg:pt-0 "></div>
          </div>
          <h2 className="text-[35px] w-[70%] font-semibold leading-[40px] uppercase brandOrange flex flex-col mb-[60px]">
            online portal
          </h2>
          <div>
            <div className="relative h-fit w-full mb-40 xs:mb-28 md:mb-20 lg:mb-28 xl:mb-24">
              <div className="grid grid-cols-[30px_220px] items-start mb-[14px]">
                <h1 className="text-5xl text-brandOrange font-extrabold">1</h1>
                <div className="border-b-2 w-full border-brandOrange mb-[4px] pt-[15px] lg:pt-0 "></div>
              </div>
              <p className="flex flex-col absolute left-10 sm:w-[60%] top-5 lg:top-2">
                Students can Enroll/Signup and Login to Complete their Mental
                Balance Sheet and Interactive Workbook, Start using
                StudentWallet and more.
              </p>
            </div>

            <div className="relative h-fit w-full mb-36 xs:mb-28 sm:mb-24 md:mb-16 lg:mb-24 xl:mb-20">
              <div className="grid grid-cols-[30px_220px] items-start mb-[14px]">
                <h1 className="text-5xl text-brandOrange font-extrabold">2</h1>
                <div className="border-b-2 w-full border-brandOrange mb-10px pt-[15px] lg:pt-0 "></div>
              </div>
              <p className="flex flex-col absolute left-10 sm:w-[60%] top-5 lg:top-2">
                Academic Partners can access, view and download Fleischer
                Scholars materials, view students workbook progress, and more.
              </p>
            </div>

            <div className="relative h-fit w-full mb-20 xs:mb-24 lg:mb-36 xl:mb-28">
              <div className="grid grid-cols-[30px_220px] items-start mb-[14px]">
                <h1 className="text-5xl text-brandOrange font-extrabold">3</h1>
                <div className="border-b-2 w-full border-brandOrange mb-[4px] pt-[15px] lg:pt-0 "></div>
              </div>
              <p className="flex flex-col absolute left-10 sm:w-[60%] top-7 lg:top-4">
                Students may quickly signup and search for scholarships on
                StudentWallet.org with their My Fleischer Scholars account.
              </p>
            </div>
          </div>

          <div className="lg:w-fit w-fit mx-auto lg:mx-0 mt-[170px] sm:mt-[100px]">
            <OrangeButton
              IconRight={"/static/img/angleRight.svg"}
              as="a"
              href={"/naf#requestInfo"}
            >
              Learn More
            </OrangeButton>
          </div>
        </div>
        {images?.length && (
          <div className="lg:min-h-[600px] relative min-h-[300px] h-fit lg:w-[500px] lg:mx-0 lg:mb-0 w-full flex justify-center items-center">
            <div className="lg:w-fit w-fit h-[500px] flex justify-center items-center">
              <Carousel
                offsetRadius={0}
                opacity={1}
                slides={slides}
                goToSlide={activeSlide}
              />
            </div>
            <button
              className="absolute lg:-left-28 xl:-left-16 -left-7 w-[30px] h-[30px]  bg-black rounded-full"
              onClick={() => {
                if (activeSlide === 0) {
                  setActiveSlide(images.length - 1);
                  return;
                }
                setActiveSlide(activeSlide - 1);
              }}
            >
              <img
                src="/static/img/angleLeft.svg"
                className="w-[10px] mx-auto"
              />
            </button>
            <button
              className="absolute w-[30px] h-[30px] -right-7 lg:-right-28 xl:-right-16 bg-black rounded-full"
              onClick={() => {
                if (activeSlide === images.length - 1) {
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
        )}
      </div>
    </div>
  );
};

export default NafSliderSection;
