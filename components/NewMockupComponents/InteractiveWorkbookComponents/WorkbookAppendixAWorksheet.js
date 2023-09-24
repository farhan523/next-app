import React, { useState, useEffect } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { workBookChapter12Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const WorkbookAppendixAWorksheet = ({
  handleSubmitForm,
  workBookAPI,
  onClickPrevLesson,
  onClickNextLesson,
  prevLesson,
  nextLesson,
  workItem,
}) => {
  const [inputValues, setInputValues] = useState({});
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter12Report = null;
    if (workBookAPI && workBookAPI?.chapter12) {
      chapter12Report = JSON.parse(workBookAPI?.chapter12);
    }
    setInputValues(chapter12Report);
  }, [workBookAPI]);

  const onClickFormSubmission = async (event) => {
    // event.preventDefault();
    await handleSubmitForm("chapter12", JSON.stringify(inputValues));
    onClickNextLesson();
  };
  return (
    <div className="w-full">
      <NextPrevLesson
        onClickNextLesson={onClickFormSubmission}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={true}
        workItem={workItem}
      />
      <form onSubmit={onClickFormSubmission}>
        {workBookChapter12Data.map((interactiveItem) => {
          return (
            <TextFieldComponent
              interactiveItem={interactiveItem}
              onChangeInteractiveComponent={onChangeInteractiveComponent}
              inputValues={inputValues}
            />
          );
        })}
        {/* <div className="mt-10 text-center">
          <button className="rounde-[7px] w-[73px] h-[30px] font-[500] bg-transparent  text-[#B1CBDD] border border-[#B1CBDD]  rounded ">
                    Cancel
                  </button>
          <button
            type="submit"
            className="bg-[#0067B2] rounded-[7px] w-[73px] h-[30px] text-white font-[500]  mx-2 rounded"
          >
            Save
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default WorkbookAppendixAWorksheet;
