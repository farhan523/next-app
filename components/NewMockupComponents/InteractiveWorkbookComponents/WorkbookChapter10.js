import React, { useState, useEffect } from "react";
import TextFieldComponent from "./TextFieldComponent";
import RadioInputComponent from "./RadioInputComponent";
import { workBookChapter10Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const WorkbookChapter10 = ({
  handleSubmitForm,
  workBookAPI,
  onClickPrevLesson,
  onClickNextLesson,
  prevLesson,
  nextLesson,
  view,
  workItem,
}) => {
  let radioOptions = workBookChapter10Data?.filter((interactiveItem) => {
    return interactiveItem.type === "radio";
  });
  let textFieldOptions = workBookChapter10Data?.filter((interactiveItem) => {
    return interactiveItem.type === "text-field";
  });
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({
    c10q1: "",
    c10q2: "",
    c10q3: "",
    c10q4: "",
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter10Report = null;
    if (workBookAPI && workBookAPI?.chapter10) {
      chapter10Report = JSON.parse(workBookAPI?.chapter10);
      setInputValues(chapter10Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async (event) => {
    // event.preventDefault();
    if (inputValues?.c10q1 == "" || inputValues?.c10q1 == null) {
      return setErrors("c10q1");
    }
    if (inputValues?.c10q2 == "" || inputValues?.c10q2 == null) {
      return setErrors("c10q2");
    }
    if (inputValues?.c10q3 == "" || inputValues?.c10q3 == null) {
      return setErrors("c10q3");
    }
    if (inputValues?.c10q4 == "" || inputValues?.c10q4 == null) {
      return setErrors("c10q4");
    }
    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    await handleSubmitForm(
      "chapter10",
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
        {radioOptions?.map((interactiveItem) => {
          return (
            <RadioInputComponent
              interactiveItem={interactiveItem}
              onChangeInteractiveComponent={onChangeInteractiveComponent}
              error={errors == true ? errors : errors == interactiveItem.key}
            />
          );
        })}

        {textFieldOptions.map((interactiveItem) => {
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
            className="bg-[#0067B2] rounded-[7px] w-[73px] h-[30px] text-white font-[500]  mx-2 rounded"
          >
            Save
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default WorkbookChapter10;
