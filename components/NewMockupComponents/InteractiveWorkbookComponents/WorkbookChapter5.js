import React, { useState, useEffect } from "react";
import TextFieldComponent from "./TextFieldComponent";
import TableInputComponent from "./TableInputComponent";
import { workBookChapter5Data } from "./data";
import RadioInputComponent from "./RadioInputComponent";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const WorkbookChapter5 = ({
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
    c5q1: "",
    c5q2: "",
    c5q3: "",
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter5Report = null;
    if (workBookAPI && workBookAPI?.chapter5) {
      chapter5Report = JSON.parse(workBookAPI?.chapter5);
      setInputValues(chapter5Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async (event) => {
    // event.preventDefault();
    if (inputValues?.c5q1 == "" || inputValues?.c5q1 == null) {
      return setErrors("c5q1");
    }
    if (inputValues?.c5q2 == "" || inputValues?.c5q2 == null) {
      return setErrors("c5q2");
    }
    if (inputValues?.c5q3 == "" || inputValues?.c5q3 == null) {
      return setErrors("c5q3");
    }
    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    await handleSubmitForm(
      "chapter5",
      JSON.stringify(inputValues),
      "In Progress"
    );
    onClickNextLesson();
  };

  let textFieldOptions = workBookChapter5Data?.filter((interactiveItem) => {
    return interactiveItem.type === "text-field";
  });
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
        <section>
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
        </section>
        <TableInputComponent
          onChangeInteractiveComponent={onChangeInteractiveComponent}
          inputValues={inputValues}
          workBookChapter5Data={workBookChapter5Data}
        />
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

export default WorkbookChapter5;
