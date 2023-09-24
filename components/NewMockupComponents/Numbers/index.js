import { useMemo, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import dynamic from "next/dynamic";
import Modal from "react-responsive-modal";

const Carousel = dynamic(() => import("react-spring-3d-carousel-2"), {
  ssr: false,
});

const Numbers = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const content = useMemo(() => {
    return data?.contents?.data?.find((item) => {
      return item.attributes.lookup.data.attributes.name == "BY_THE_NUMBERS";
    });
  }, [data]);

  const slideList = data?.contents?.data.filter(
    (data) => data.attributes.value === "numbers_carousel"
  );

  const CustomDot = ({ ...rest }) => {
    const { isActive, index } = rest;
    const handleChangeSlide = () => {
      setActiveSlide(index);
    };
    return (
      <button
        className={`w-[12px] min-h-[12px] rounded-full   mr-[8px] ${
          isActive ? "bg-brandBlue" : "bg-gray-400"
        } `}
        onClick={handleChangeSlide}
      ></button>
    );
  };

  const closeIcon = (
    <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  if (!content) return <></>;

  const slides = slideList
    .map((item, index) => {
      const imageUrl = item?.attributes?.image?.data[0]?.attributes?.url;
      const description = item?.attributes?.rich_content;
      const title = item?.attributes?.value_1;
      const name = item?.attributes?.value_2;
      const role = item?.attributes?.value_3;
      const link = item?.attributes?.link;
      return {
        key: index + 1,
        content: (
          <div
            className={`bg-white sm:min-h-[335px] border-8 border-brandBlue sm:w-[572px] w-[235px] min-w-[100px] min-h-[470px] flex flex-col xs:mt-[80px] sm:mt-[80px] items-center rounded-[15px] xs:w-[240px]`}
          >
            <div className="flex-row justify-between w-[100%] h-[100%] sm:flex">
              <div className="xl:w-[30%] relative xl:h-[319px] lg:w-[30%] md:w-[30%] sm:w-[30%] ">
                <div
                  className="w-full overflow-hidden sm:border-1 h-40 sm:h-40 md:h-full bg-cover bg-fixed bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
                <div
                  className="absolute bottom-[41%] cursor-pointer right-[34%] pl-1 w-[50px] h-[50px] flex justify-center items-center rounded-full bg-white bg-opacity-60"
                  onClick={onOpenModal}
                >
                  <img src={"/static/img/playIcon.png"} />
                </div>
              </div>
              <div className=" xl:w-[65%] lg:w-[65%] md:w-[65%] sm:w-[65%]  text-[#3E3E3E] mr-1 pt-3 p-4">
                <h1 className="mt-4 font-semibold">{title}</h1>
                <p className="mt-4 text-[12px]">{description}</p>
                <h2 className="xs:mt-2 mt-12 text-right mr-2 font-bold">
                  {name}
                </h2>
                <p className="text-[12px] text-right mr-2">{role}</p>
              </div>
            </div>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
              closeIcon={closeIcon}
            >
              <div className="sm:w-[120%] lg:w-[100%] h-[100%] flex justify-center items-center">
                <ReactPlayer
                  width={"70%"}
                  height={"90%"}
                  url={link}
                  className="overflow-hidden rounded-[20px]"
                  light={imageUrl}
                  playing={true}
                  controls={true}
                />
              </div>
            </Modal>
          </div>
        ),
      };
    })
    .map((slide, index) => {
      return { ...slide, onClick: () => setActiveSlide(index) };
    });

  return (
    <div className="flex flex-col">
      <div className="lg:min-h-[100%] min-h-[80%] mt-[110px]  lg:w-[100%] w-[85%] mx-auto  relative  grid pb-[50px] before:contents-[''] before:absolute before:blur-[80px] rounded-full  before:bg-brandOrangeLighten before:right-[0] before:top-[-30px] before:w-[150px] before:min-h-[150px] before:z-[-1] ">
        <div className="mx-auto container grid lg:grid-rows-2">
          <p
            className="text-brandBlue text-[25px] text-center font-normal lg:mb-[45px] mb-[250px]"
            data-aos="fade-up"
          >
            SEE HOW THE{" "}
            <span className="text-brandOrange">FLEISCHER SCHOLARS PROGRAM</span>
            <br />
            HELPED MANY STUDENTS TO A BETTER FUTURE
          </p>
        </div>
      </div>
      {slideList?.length && (
        <div className="mx-auto flex flex-col sm:mt-0 mt-[50px] sm:mb-[20px] mb-[140px]">
          <div className="2xl:w-[40%] -mb-[200px] w-[20%] lg:w-[50%] mx-auto ">
            <Carousel
              offsetRadius={0}
              opacity={1}
              slides={slides}
              goToSlide={activeSlide}
            />
            <div className="relative mt-[50px]">
              <button
                className="absolute left-[-154px] sm:left-[-325px] md:left-[-330px] lg:left-[-340px] xl:left-[-340px] w-[30px] h-[30px]  bg-white rounded-full"
                onClick={() => {
                  if (activeSlide === 0) {
                    setActiveSlide(slideList?.length - 1);
                    return;
                  }
                  setActiveSlide(activeSlide - 1);
                }}
              >
                <img
                  src="/static/img/leftArrow.svg"
                  className="w-[10px] mx-auto"
                />
              </button>
              <button
                className="absolute right-[-154px] sm:right-[-325px] md:right-[-330px] lg:right-[-340px] xl:right-[-340px] w-[30px] h-[30px]  bg-white rounded-full"
                onClick={() => {
                  if (activeSlide === slideList?.length - 1) {
                    setActiveSlide(0);
                    return;
                  }
                  setActiveSlide(activeSlide + 1);
                }}
              >
                <img
                  src="/static/img/rightArrow.svg"
                  className="w-[10px] mx-auto"
                />
              </button>
            </div>
          </div>
          <div className="mx-auto absolute xl:ml-[-1%]  xl:mt-[250px]  lg:mt-[250px] md:mt-[250px] mt-[360px] sm:mt-[360px] xs:mt-[360px] xs:ml-[-25px]">
            {slideList.map((items, index) => {
              return (
                <CustomDot
                  key={index}
                  index={index}
                  isActive={index === activeSlide}
                />
              );
            })}
          </div>
        </div>
      )}

      <div className="grid p-[50px] justify-center items-center bg-contain bg-center bg-hero-pattern lg:min-h-[900px] min-h-[1300px] bg-no-repeat md:p-[8]  xl:mt-6 lg:mt-6 md:mt-6 sm:mt-[70px] xs:mt-[70px] ">
        <div>
          <h2
            className="text-white text-[40px] text-center mb-20 xs:mt-[60px] xl:mt-[0px] lg:mt-[0px] md:mt-[0px] sm:mt-[0px] mt-20"
            // className="text-white text-[40px] text-center mb-20 xs:mt-[60px] xl:mt-[0px] lg:mt-[0px] md:mt-[0px] sm:mt-[0px] mt-20 xs:mt-[180px]"
            data-aos="fade-up"
          >
            <span className="font-bold">Fleischer Scholars</span> &nbsp;
            <span className="font-thin">by the Numbers</span>
          </h2>
          <div
            className="grid lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 items-center justify-center gap-y-[50px] lg:gap-x-[50px]"
            data-aos="fade-down"
          >
            <div className="text-center lg:border-r-[1.5px] border-b-[1.5px] lg:border-b-0  :border-white lg:pr-10 pb-10 lg:pb-0">
              <img
                src="/static/img/number1700.svg"
                width={100}
                height={100}
                className="mx-auto mb-5"
              />
              <h3 className="text-white font-thin ">
                {content?.attributes.value_1}
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
                {content?.attributes.value_2}
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
