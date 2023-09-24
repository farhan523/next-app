import { useEffect, useMemo } from "react";
import showdown from "showdown";
import OrangeButton from "../OrangeButton";

const LeggedStool = ({ data }) => {
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
    <div className="w-[100%] relative flex justify-end mb-[100px]">
      <div className="lg:w-[30%] 2xl:w-[30%]  w-[75%] mx-auto  before:blur-[120px] before:contents-[''] before:absolute before:top-[31px] before:left-[15px] before:rounded-full  before:bg-brandBlue before:w-[80%] before:min-h-[80%] before:z-[-1]   absolute lg:left-[101px] sm:left-[84px] left-[55px] 2xl:left-[127px]  lg:top-[-104px] top-[-164px] ">
        <img
          src="/static/img/StoolDesign.svg"
          className="lg:w-[400px]  w-[296px] mx-auto"
        />
      </div>

      <div className="lg:w-[78%] lg:rounded-l-2xl min-h-[370px] bg-sky-100  lg:pl-[282px] pl-[20px] pr-[20px] lg:pr-[50px] lg:py-[20px] pt-[220px] pb-[20px]  flex flex-col justify-center  items-center">
        <div data-aos="fade-up">
          <p
            className="text-black  lg:text-left text-center leading-10 mb-5 text-[19px]"
            id="content"
          ></p>
        </div>
        <div className="lg:w-[35%] w-[53%] mt-[10px]">
          <OrangeButton IconRight={"/static/img/angleRight.svg"} href="/about">
            Learn More
          </OrangeButton>
        </div>
      </div>
    </div>
  );
};
export default LeggedStool;
