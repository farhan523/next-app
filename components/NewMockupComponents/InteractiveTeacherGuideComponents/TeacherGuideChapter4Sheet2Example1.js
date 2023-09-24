import React, { useEffect, useState } from "react";
import TextFieldComponent from "../InteractiveWorkbookComponents/TextFieldComponent";
import { TeacherGuideChapter4Sheet2Example1Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const TeacherGuideChapter4Sheet2Example1 = ({
  handleSubmitForm,
  workBookAPI,
  onClickNextLesson,
  onClickPrevLesson,
  prevLesson,
  nextLesson,
  view,
}) => {
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({
    c4s2e1q1: "",
    c4s2e1q2input1: "",
    c5s2e1q2input2: "",
    c5s2e1q2input3: ""
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter4sheet2example1Report = null;
    if (workBookAPI && workBookAPI?.chapter4sheet2example1) {
      chapter4sheet2example1Report = JSON.parse(workBookAPI?.chapter4sheet2example1);
      setInputValues(chapter4sheet2example1Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async () => {
    if (inputValues.c4s2e1q1 == "") {
      return setErrors("c4s2e1q1");
    }
    if (inputValues.c4s2e1q2input1 == "") {
        return setErrors("c4s2e1q2input1");
      }
      if (inputValues.c5s2e1q2input2 == "") {
        return setErrors("c5s2e1q2input2");
      }
    if (inputValues.c5s2e1q2input3 == "") {
      return setErrors("c5s2e1q2input3");
    }
    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    setErrors("");
    await handleSubmitForm(
      "chapter4sheet2example1",
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
        />
      )}

      <form onSubmit={view !== "faculty" && onClickFormSubmission}>
        {TeacherGuideChapter4Sheet2Example1Data.map((interactiveItem, ind) => {
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

export default TeacherGuideChapter4Sheet2Example1;
