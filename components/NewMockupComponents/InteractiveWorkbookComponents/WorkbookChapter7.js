import React, { useState, useEffect } from "react";
import TextFieldComponent from "./TextFieldComponent";
import RadioInputComponent from "./RadioInputComponent";
import { workBookChapter7Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const WorkbookChapter7 = ({
  handleSubmitForm,
  workBookAPI,
  onClickPrevLesson,
  onClickNextLesson,
  prevLesson,
  nextLesson,
  view,
  workItem,
}) => {
  let radioOptions = workBookChapter7Data?.filter((interactiveItem) => {
    return interactiveItem.type === "radio";
  });
  let textFieldOptions = workBookChapter7Data?.filter((interactiveItem) => {
    return interactiveItem.type === "text-field";
  });
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({
    c7q1: "",
    c7q2: "",
    c7q3: "",
    c7q4: "",
    c7q5: "",
    c7q6: "",
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter7Report = null;
    if (workBookAPI && workBookAPI?.chapter7) {
      chapter7Report = JSON.parse(workBookAPI?.chapter7);
      setInputValues(chapter7Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async (event) => {
    // event.preventDefault();
    if (inputValues?.c7q1 == "" || inputValues?.c7q1 == null) {
      return setErrors("c7q1");
    }
    if (inputValues?.c7q2 == "" || inputValues?.c7q2 == null) {
      return setErrors("c7q2");
    }
    if (inputValues?.c7q3 == "" || inputValues?.c7q3 == null) {
      return setErrors("c7q3");
    }
    if (inputValues?.c7q4 == "" || inputValues?.c7q4 == null) {
      return setErrors("c7q4");
    }
    if (inputValues?.c7q5 == "" || inputValues?.c7q5 == null) {
      return setErrors("c7q5");
    }
    if (inputValues?.c7q6 == "" || inputValues?.c7q6 == null) {
      return setErrors("c7q6");
    }
    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    await handleSubmitForm(
      "chapter7",
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
              inputValues={inputValues}
              error={errors == true ? errors : errors == interactiveItem.key}
            />
          );
        })}
        <div className="mt-5">
          <span className="text-sm text-[#D1712C] w-[724px] h-[35px] text-[13px]">
            Review your responses. Reread the chapter if you have answered
            “Sometimes” or “Often” more than once. Then list the things you need
            to work on and your potential actions.
          </span>
        </div>

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

export default WorkbookChapter7;
