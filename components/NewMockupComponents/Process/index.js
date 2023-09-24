import { useEffect, useMemo, useState } from "react";

const ProcessData = [
  {
    title: "Input",
  },
  {
    title: "3-LEGGED STOOL",
  },
  {
    title: "OUTPUT",
  },
];

const Process = ({ data }) => {
  const content = useMemo(() => {
    return data?.contents?.data?.find((item) => {
      return (
        item.attributes.lookup.data.attributes.name == "THE_MULTIPLIER_EFFECT"
      );
    });
  }, [data]);

  if (!content) return <></>;

  return (
    <div className="lg:min-h-[100%] min-h-[80%] my-[100px]  lg:w-[100%] w-[85%] mx-auto  relative items-center grid pb-[50px] before:contents-[''] before:absolute before:blur-[80px] rounded-full  before:bg-brandOrangeLighten before:right-[0] before:top-[-30px] before:w-[150px] before:min-h-[150px] before:z-[-1] ">
      <div className="mx-auto container grid lg:grid-rows-2  gap-y-[60px] items-center ">
        <div className="grid mb-[100px]">
          <h2 className="text-[25px] font-thin text-brandBlue" data-aos="fade-down">
            HOW DOES THE FLEISCHER SCHOLARS PROGRAM EFFECT THE FUTURE
          </h2>
          <div className="inline-grid lg:grid-cols-[424px_1fr] grid-rows-[60px_120px]  lg:grid-rows-1 grid-flow-row-dense items-end">
            <h3 className="font-bold text-brandBlue text-center lg:text-start text-[40px] mr-2 order-2 lg:order-1" data-aos="fade-down  ">
              The Multiplier Effect
            </h3>
            <div className="bg-brandBlue lg:w-[300px] h-[2px]  w-[100%] relative top-[-10px] order-1 lg:order-2"></div>
          </div>
        </div>
        <div className="grid justify-center xl:grid-cols-3 gap-[50px]">
          {ProcessData.map((item, number) => {
            return (
              <div
                key={number}
                className="bg-brandBlue rounded-[15px] h-[246px] w-[296px] xl:even:w-[405px]  xl:h-[275px] xl:odd:my-auto xl:even:h-[337px] xl:odd:w-[330px] xl:first:left-[85px] relative p-5"
              >
                {number !== 3 && (
                  <div
                    className={`z-[-1] ${number == 2 ? "hidden" : "block"
                      }  absolute border-t-4 border-solid border-brandOrangeLighten h-3 bg-brandBlue w-[146px] m-auto xl:bottom-0 bottom-[-20px] rotate-90 xl:top-0  xl:rotate-0 xl:right-[-130px]`}
                  ></div>
                )}
                {/* {number == 2 && (
                  <div className="z-[-1] absolute border-t-4 border-solid border-brandOrangeLighten h-3 bg-brandBlue w-[130px] m-auto xl:bottom-0 bottom-[-20px] rotate-90 xl:rotate-0 xl:top-0 xl:right-[-130px] right-0  "></div>
                )} */}
                <div className="bg-white grid items-center justify-center h-full rounded-[15px] text-center p-5 shadow-[6px_6px_1px_1px] shadow-brandOrangeLighten">
                  <div className="bg-brandOrangeLighten rounded-[15px] w-[66px] h-[66px] mx-auto p-1 absolute top-[-20px] left-0 right-0">
                    <i className="fa fa-home text-white text-[50px]"></i>
                  </div>
                  <div>
                    <h3 className="text-brandBlue font-bold my-3">
                      {item.title}
                    </h3>
                    <p className="mx-auto text-[18px] font-[#3E3E3E] mb-2 max-w-[250px]">
                      {content?.attributes[`value_${number + 1}`] ?? ""}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Process;
