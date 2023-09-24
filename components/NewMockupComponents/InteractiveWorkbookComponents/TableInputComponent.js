import React from "react";

const TableInputComponent = ({
  onChangeInteractiveComponent,
  workBookChapter5Data,
  inputValues,
}) => {
  return (
    <section>
      <p className="text-[13px] font-light  mb-5">
        Make a list of new words and terms you have encountered in this book and
        provide short definitions.
      </p>
      <div
        className="h-[464px] border rounded-[10px] flex border-[#A7C4D7] justify-center items-center"
        style={{ textAlign: "center" }}
      >
        <div className="w-4/12 h-[460px] rounded-[10px] border-r border-[#A7C4D7] bg-[#F9FDFF] ">
          <div className="relative h-[60px] border-b border-[#A7C4D7] my-4 ">
            <label className="w-[411px] text-[16px] text-brandBlue font-[600] h-[33px] rounded-[7px] p-1 px-20 bg-[#C9E5F3]">
              New Words
            </label>
          </div>
          {workBookChapter5Data &&
            workBookChapter5Data[3] &&
            workBookChapter5Data[3].fieldsLabels.map((item) => {
              let valueFields = {};
              if (inputValues && inputValues[item?.key]) {
                valueFields.value = inputValues[item?.key];
              }
              return (
                <input
                  id={item?.key}
                  name={item?.key}
                  type="text"
                  className="w-[233px] bg-[#F9FDFF] mb-4 border-[#A7C4D7] h-[32px] rounded-[7px] text-[12px] placeholder:text-[#A7C4D7] text-brandBlue focus:placeholder:text-[#121212] "
                  placeholder="Enter word here"
                  {...valueFields}
                  required
                  onChange={onChangeInteractiveComponent}
                />
              );
            })}
        </div>

        <div className="w-8/12 h-[460px] bg-[#F9FDFF] ">
          <div className="h-[60px] border-b border-[#A7C4D7]  my-4">
            <label className="w-[411px] h-[33px] text-[16px] text-brandBlue font-[600] rounded-[7px] p-1 px-[170px]  bg-[#C9E5F3]">
              Definition
            </label>
          </div>
          {workBookChapter5Data &&
            workBookChapter5Data[4] &&
            workBookChapter5Data[4].fieldsLabels.map((item) => {
              let valueFields = {};
              if (inputValues && inputValues[item?.key]) {
                valueFields.value = inputValues[item?.key];
              }
              return (
                <input
                  name={item?.key}
                  id={item?.key}
                  type="text"
                  className="w-[411px] bg-[#F9FDFF] border-[#A7C4D7] mb-4 h-[32px] rounded-[7px] text-[12px] placeholder:text-[#A7C4D7] text-brandBlue focus:placeholder:text-[#121212]"
                  placeholder="Enter Definition here"
                  {...valueFields}
                  onChange={onChangeInteractiveComponent}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default TableInputComponent;
