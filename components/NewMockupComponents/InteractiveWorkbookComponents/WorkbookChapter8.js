import React, { useState, useEffect } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { workBookChapter8Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const WorkbookChapter8 = ({
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
    c8q1: "",
    c8q2: "",
    c8q3: "",
    c8q4: "",
    c8q5: "",
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter8Report = null;
    if (workBookAPI && workBookAPI?.chapter8) {
      chapter8Report = JSON.parse(workBookAPI?.chapter8);
      setInputValues(chapter8Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async (event) => {
    if (inputValues?.c8q1 == "" || inputValues?.c8q1 == null) {
      return setErrors("c8q1");
    }
    if (inputValues?.c8q2 == "" || inputValues?.c8q2 == null) {
      return setErrors("c8q2");
    }
    if (inputValues?.c8q3 == "" || inputValues?.c8q3 == null) {
      return setErrors("c8q3");
    }
    if (inputValues?.c8q4 == "" || inputValues?.c8q4 == null) {
      return setErrors("c8q4");
    }
    if (inputValues?.c8q5 == "" || inputValues?.c8q5 == null) {
      return setErrors("c8q5");
    }
    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    // event.preventDefault();
    await handleSubmitForm(
      "chapter8",
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
        {workBookChapter8Data.map((interactiveItem) => {
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

export default WorkbookChapter8;
