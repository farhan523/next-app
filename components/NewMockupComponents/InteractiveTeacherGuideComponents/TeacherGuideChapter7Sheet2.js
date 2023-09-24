import React, { useEffect, useState } from "react";
import TextFieldComponent from "../InteractiveWorkbookComponents/TextFieldComponent";
import { TeacherGuideChapter7Sheet2Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const TeacherGuideChapter7Sheet2 = ({
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
    c7s2q1option1: "",
    c7s2q1option2: "",
    c7s2q1option3: "",
    c7s2q2: "",
    c7s2q3: ""
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter7sheet2Report = null;
    if (workBookAPI && workBookAPI?.chapter7sheet2) {
      chapter7sheet2Report = JSON.parse(workBookAPI?.chapter7sheet2);
      setInputValues(chapter7sheet2Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async () => {
    if (inputValues.c7s2q1option1 == "") {
      return setErrors("c7s2q1option1");
    }
    if (inputValues.c7s2q1option2 == "") {
        return setErrors("c7s2q1option2");
    }
    if (inputValues.c7s2q1option3 == "") {
        return setErrors("c7s2q1option3");
    }
    if (inputValues.c7s2q2 == "") {
        return setErrors("c7s2q2");
    }
    if (inputValues.c7s2q3 == "") {
        return setErrors("c7s2q3");
    }

    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    setErrors("");
    await handleSubmitForm(
      "chapter7sheet2",
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
        {TeacherGuideChapter7Sheet2Data.map((interactiveItem, ind) => {
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

export default TeacherGuideChapter7Sheet2;