import React, { useState, useEffect } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { workBookChapter6Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const WorkbookChapter6 = ({
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
    c6q1: "",
    c6q2: "",
    c6q3: "",
    c6q4: "",
    c6q5: "",
    c6q6: "",
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter6Report = null;
    if (workBookAPI && workBookAPI?.chapter6) {
      chapter6Report = JSON.parse(workBookAPI?.chapter6);
      setInputValues(chapter6Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async (event) => {
    // event.preventDefault();
    if (inputValues?.c6q1 == "" || inputValues?.c6q1 == null) {
      return setErrors("c6q1");
    }
    if (inputValues?.c6q2 == "" || inputValues?.c6q2 == null) {
      return setErrors("c6q2");
    }
    if (inputValues?.c6q3 == "" || inputValues?.c6q3 == null) {
      return setErrors("c6q3");
    }
    if (inputValues?.c6q4 == "" || inputValues?.c6q4 == null) {
      return setErrors("c6q4");
    }
    if (inputValues?.c6q5 == "" || inputValues?.c6q5 == null) {
      return setErrors("c6q5");
    }
    if (inputValues?.c6q6 == "" || inputValues?.c6q6 == null) {
      return setErrors("c6q6");
    }
    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    await handleSubmitForm(
      "chapter6",
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
        {workBookChapter6Data.map((interactiveItem) => {
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

export default WorkbookChapter6;
