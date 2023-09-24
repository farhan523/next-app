import { useEffect, useMemo } from "react";
import showdown from "showdown";
import OrangeButton from "../OrangeButton";
import Image from "next/image";

const NafLeggedStool = ({ data }) => {
  const content = useMemo(() => {
    return data?.contents?.data?.find((item) => {
      return (
        item.attributes.lookup.data.attributes.name == "THREE_LEGGED_STOOL"
      );
    });
  }, [data]);

  useEffect(() => {
    if (!content) return;
    const converter = new showdown.Converter();
    const p = document.getElementById("content");
    p.innerHTML = converter.makeHtml(content?.attributes?.rich_content);
  }, [content]);

  if (!content) return <></>;

  return (
    <>
      <div className="w-[100%] mt-[300px] relative flex mb-[100px]">
        <div className="lg:w-[78%] lg:rounded-l-2xl min-h-[600px] bg-sky-100  lg:pl-[282px] pl-[20px] pr-[20px] lg:pr-[50px] lg:py-[20px] pt-[220px] pb-[20px]  flex flex-col justify-center  items-center">
          <div data-aos="fade-up">
            <div className="grid lg:grid-cols-[120px_220px] mb-[14px]">
              <h1 className="text-brandBlue w-full lg:text-start text-center text-2xl">
                A MODEL
              </h1>
              <div className="border-b-2 w-full border-brandBlue mb-[4px] pt-[15px] lg:pt-0 "></div>
            </div>
            <p className="text-[35px] text-brandBlue text-center leading-[40px] uppercase lg:w-[60%] mb-[60px]">
              HOW TO <span className="font-bold"> THINK </span>AND BECOME A{" "}
              <span className="font-bold"> MASTER ADAPTIVE LEARNER</span>
            </p>
            <p
              className="text-black  lg:text-left text-center leading-10 mb-5 text-[19px]"
              id="content"
            ></p>
          </div>
          <div className="lg:w-[35%] w-[53%] mt-[10px]">
            <OrangeButton
              IconRight={"/static/img/angleRight.svg"}
              href="/about"
            >
              Learn More
            </OrangeButton>
          </div>
        </div>

        <div className="lg:w-[30%] 2xl:w-[30%] w-[75%] mx-auto  before:blur-[120px] before:contents-[''] before:absolute before:top-[31px] before:left-[15px] before:rounded-full  before:bg-brandBlue before:w-[80%] before:min-h-[80%] before:z-[-1] absolute lg:right-[101px] sm:right-[84px] right-[55px] 2xl:right-[127px]  lg:top-[-104px] top-[-164px] ">
          <img
            src="/static/img/StoolDesign.svg"
            className="lg:w-[400px] w-[296px] mx-auto"
          />
        </div>
      </div>

      <div className="w-full  px-20 lg:px-40 flex flex-col items-center min-h-[300px] my-20">
        <div className="w-full lg:w-[80%]">
          <p className="text-center">
            <span className="text-3xl font-bold text-brandOrange">
              The Three-Legged Stool
            </span>{" "}
            - The three legs of the stool represent:
          </p>
        </div>
        <div className="lg:w-[80%] flex flex-col gap-20 items-center xl:flex-row justify-between my-20">
          <div className="relative mb-6 lg:mb-10">
            <div className="grid grid-cols-[30px_200px] items-start mb-[14px]">
              <h1 className="text-5xl text-brandBlue font-extrabold mr-2">
                <Image
                  src="/static/img/empiricismLogo.svg"
                  width={50}
                  height={50}
                />
              </h1>
              <div className="border-b-2 w-full border-brandBlue mb-[4px] pt-[15px] lg:pt-0 "></div>
            </div>
            <p className="flex flex-col absolute text-black left-10 w-[180px] lg:w-[280px] top-5 lg:top-2">
              <span className="font-bold text-brandBlue text-lg">
                Empiricism
              </span>
              A predominantly incentive driven market economy
            </p>
          </div>
          <div className="relative mb-20 lg:mb-10">
            <div className="grid grid-cols-[30px_200px] items-start mb-[14px]">
              <h1 className="text-5xl text-brandBlue font-extrabold">
                <Image src="/static/img/servoLogo.svg" width={50} height={50} />
              </h1>
              <div className="border-b-2 w-full border-brandBlue mb-[4px] pt-[15px] lg:pt-0 "></div>
            </div>
            <p className="flex flex-col absolute text-black left-10 w-[180px] lg:w-[280px] top-5 lg:top-2">
              <span className="font-bold text-brandBlue text-lg">
                Servo-Mechanism
              </span>
              A government that respects the rights of the individual to life,
              liberty and the pursuit of happiness and
            </p>
          </div>
          <div className="relative mb-10">
            <div className="grid grid-cols-[30px_200px] items-start mb-[14px]">
              <h1 className="text-5xl text-brandBlue font-extrabold">
                <Image
                  src="/static/img/missileLogo.svg"
                  width={50}
                  height={50}
                />
              </h1>
              <div className="border-b-2 w-full border-brandBlue mb-[4px] pt-[15px] lg:pt-0 "></div>
            </div>
            <p className="flex flex-col absolute text-black left-10 w-[180px] lg:w-[280px] top-5 lg:top-2">
              <span className="font-bold text-brandBlue text-lg">Missile</span>A
              system of cultural institutions moved by the ideas of liberty,
              opportunity, and the inspiration of justice for all
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default NafLeggedStool;
