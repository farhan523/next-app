import { useEffect, useMemo, useState } from "react";
import OrangeButton from "../OrangeButton";
import get from "lodash/get";

const MeetFounder = ({ data }) => {
  const content = useMemo(() => {
    return data?.contents?.data?.find((item) => {
      return item.attributes.lookup.data.attributes.name == "ABOUT_FOUNDER";
    });
  }, [data]);

  const mainValue = useMemo(() => {
    return get(content, "attributes.value_1", "").replace(
      new RegExp("\n", "g"),
      "<br />"
    );
  }, [content]);

  return (
    <div className="container mx-auto py-[150px]  lg:mb-0 ">
      <div className="grid items-center justify-center lg:grid-cols-2 grid-cols-1">
        <div className="grid  order-2 lg:order-1 w-[80%] mx-auto " data-aos="fade-down">
          <div className="mb-7"   >
            <div className="inline-grid grid-cols-[100px_1fr] items-end">
              <h2 className="text-brandBlue text-[25px] font-thin">MEET</h2>
              <div className=" bg-brandBlue h-[2px] w-[185px]  relative top-[-10px] right-[12px]"></div>
            </div>
            <h2 className="text-brandBlue text-[40px] font-bold">
              {content?.attributes.value}
            </h2>
          </div>
          <p
            className="text-brandBlack text-center lg:text-start text-[16px] mb-7"
            dangerouslySetInnerHTML={{
              __html: mainValue,
            }}
          ></p>
          <div className="lg:w-[33%] w-[60%] mx-auto lg:mx-0 mt-[15px] ">
            <OrangeButton IconRight={"/static/img/angleRight.svg"} href="/about" >
              Learn More
            </OrangeButton>
          </div>
        </div>
        <div className="text-center relative order-1 lg:order-2  before:blur-[135px] before:absolute before:z-[-1] lg:before:left-[-10px] before:left-[96px]   before:bg-brandBlue before:w-[60%] before:h-[90%] mb-20 lg:mb-0" data-aos="fade-up">
          <img
            src="/static/img/founder.png"
            className="w-[60%] mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};
export default MeetFounder;
