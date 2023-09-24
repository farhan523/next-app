import React, { useEffect, useState } from "react";
import TextFieldComponent from "../InteractiveWorkbookComponents/TextFieldComponent";
import { TeacherGuideChapter5Sheet3Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const TeacherGuideChapter5Sheet3 = ({
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
    c5s3q1: "",
    c5s3q2: "",
    c5s3q3: ""
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter5sheet3Report = null;
    if (workBookAPI && workBookAPI?.chapter5sheet3) {
      chapter5sheet3Report = JSON.parse(workBookAPI?.chapter5sheet3);
      setInputValues(chapter5sheet3Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async () => {
    if (inputValues.c5s3q1 == "") {
      return setErrors("c5s3q1");
    }
    if (inputValues.c5s3q2 == "") {
        return setErrors("c5s3q2");
    }
    if (inputValues.c5s3q3 == "") {
        return setErrors("c5s3q3");
    }

    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    setErrors("");
    await handleSubmitForm(
      "chapter5sheet3",
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
        {TeacherGuideChapter5Sheet3Data.map((interactiveItem, ind) => {
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

export default TeacherGuideChapter5Sheet3;
