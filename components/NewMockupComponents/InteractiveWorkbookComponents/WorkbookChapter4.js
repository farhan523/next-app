import React, { useState, useEffect } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { workBookChapter4Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";

const WorkbookChapter4 = ({
  handleSubmitForm,
  workBookAPI,
  onClickPrevLesson,
  onClickNextLesson,
  prevLesson,
  nextLesson,
  view,
  workItem,
}) => {
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({
    c4q1: "",
    c4q2: "",
    c4q3: "",
    c4q4: "",
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter4Report = null;
    if (workBookAPI && workBookAPI?.chapter4) {
      chapter4Report = JSON.parse(workBookAPI?.chapter4);
      setInputValues(chapter4Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async (event) => {
    // event.preventDefault();
    if (inputValues?.c4q1 == "" || inputValues?.c4q1 == null) {
      return setErrors("c4q1");
    }
    if (inputValues?.c4q2 == "" || inputValues?.c4q2 == null) {
      return setErrors("c4q2");
    }
    if (inputValues?.c4q3 == "" || inputValues?.c4q3 == null) {
      return setErrors("c4q3");
    }
    if (inputValues?.c4q4 == "" || inputValues?.c4q4 == null) {
      return setErrors("c4q4");
    }
    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    await handleSubmitForm(
      "chapter4",
      JSON.stringify(inputValues),
      "In Progress"
    );
    onClickNextLesson();
  };

  return (
    <div className="w-full">
      {view !== "faculty" && (
        <NextPrevLesson
          onClickNextLesson={onClickFormSubmission}
          onClickPrevLesson={onClickPrevLesson}
          prevLesson={prevLesson}
          nextLesson={nextLesson}
          workItem={workItem}
        />
      )}
      <form onSubmit={view !== "faculty" && onClickFormSubmission}>
        {workBookChapter4Data.map((interactiveItem) => {
          return (
            <TextFieldComponent
              interactiveItem={interactiveItem}
              onChangeInteractiveComponent={onChangeInteractiveComponent}
              inputValues={inputValues}
              error={errors == true ? errors : errors == interactiveItem.key}
            />
          );
        })}
        {/* <div className="mt-10 text-center">
          <button className="rounde-[7px] w-[73px] h-[30px] font-[500] bg-transparent  text-[#B1CBDD] border border-[#B1CBDD]  rounded ">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#0067B2] rounde-[7px] w-[73px] h-[30px] text-white font-[500]  mx-2 rounded"
          >
            Save
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default WorkbookChapter4;
