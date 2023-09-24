import React, { useState, useEffect } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { workBookChapter3Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const WorkbookChapter3 = ({
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
    c3q1: "",
    c3q2: "",
    c3q3: "",
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  useEffect(() => {
    let chapter3Report = null;
    if (workBookAPI && workBookAPI?.chapter3) {
      chapter3Report = JSON.parse(workBookAPI?.chapter3);
      setInputValues(chapter3Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async (event) => {
    // event.preventDefault();
    if (inputValues?.c3q1 == "" || inputValues?.c3q1 == null) {
      return setErrors("c3q1");
    }
    if (inputValues?.c3q2 == "" || inputValues?.c3q2 == null) {
      return setErrors("c3q2");
    }
    if (inputValues?.c3q3 == "" || inputValues?.c3q3 == null) {
      return setErrors("c3q3");
    }
    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    await handleSubmitForm(
      "chapter3",
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
        {workBookChapter3Data.map((interactiveItem) => {
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

export default WorkbookChapter3;
