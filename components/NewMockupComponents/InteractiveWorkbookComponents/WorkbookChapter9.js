import React, { useState, useEffect } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { workBookChapter9Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const WorkbookChapter9 = ({
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
    c9q1: "",
    c9q2: "",
    c9q3: "",
    c9q4: "",
    c9q5: "",
    c9q6: "",
    c9q7: "",
    c9q8: "",
    c9q9: "",
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter9Report = null;
    if (workBookAPI && workBookAPI?.chapter9) {
      chapter9Report = JSON.parse(workBookAPI?.chapter9);
      setInputValues(chapter9Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async (event) => {
    // event.preventDefault();
    if (inputValues?.c9q1 == "" || inputValues?.c9q1 == null) {
      return setErrors("c9q1");
    }
    if (inputValues?.c9q2 == "" || inputValues?.c9q2 == null) {
      return setErrors("c9q2");
    }
    if (inputValues?.c9q3 == "" || inputValues?.c9q3 == null) {
      return setErrors("c9q3");
    }
    if (inputValues?.c9q4 == "" || inputValues?.c9q4 == null) {
      return setErrors("c9q4");
    }
    if (inputValues?.c9q5 == "" || inputValues?.c9q5 == null) {
      return setErrors("c9q5");
    }
    if (inputValues?.c9q6 == "" || inputValues?.c9q6 == null) {
      return setErrors("c9q6");
    }
    if (inputValues?.c9q7 == "" || inputValues?.c9q7 == null) {
      return setErrors("c9q7");
    }
    if (inputValues?.c9q8 == "" || inputValues?.c9q8 == null) {
      return setErrors("c9q8");
    }
    if (inputValues?.c9q9 == "" || inputValues?.c9q9 == null) {
      return setErrors("c9q9");
    }
    if (inputValues?.c9q5 == "" || inputValues?.c9q5 == null) {
      return setErrors("c9q5");
    }
    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    await handleSubmitForm(
      "chapter9",
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
        {workBookChapter9Data.map((interactiveItem) => {
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

export default WorkbookChapter9;
