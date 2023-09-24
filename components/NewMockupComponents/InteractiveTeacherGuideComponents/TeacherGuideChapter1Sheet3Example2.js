import React, { useEffect, useState } from "react";
import TextFieldComponent from "../InteractiveWorkbookComponents/TextFieldComponent";
import { TeacherGuideChapter1Sheet3Example2Data } from "./data";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
const TeacherGuideChapter1Sheet3Example2 = ({
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
    c1s3e2q1: "",
    c1s3e2q2: "",
    c1s3e2q3: ""
  });
  const onChangeInteractiveComponent = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    let chapter1sheet3example2Report = null;
    if (workBookAPI && workBookAPI?.chapter1sheet3example2) {
      chapter1sheet3example2Report = JSON.parse(workBookAPI?.chapter1sheet3example2);
      setInputValues(chapter1sheet3example2Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async () => {
    if (inputValues.c1s3e2q1 == "") {
      return setErrors("c1s3e2q1");
    }
    if (inputValues.c1s3e1q2 == "") {
      return setErrors("c1s3e1q2");
    }
    if (inputValues.c1s3e2q3 == "") {
        return setErrors("c1s3e2q3");
      }
    if (Object.keys(inputValues).length === 0) {
      return setErrors(true);
    }
    setErrors("");
    await handleSubmitForm(
      "chapter1sheet3example2",
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
        {TeacherGuideChapter1Sheet3Example2Data.map((interactiveItem, ind) => {
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

export default TeacherGuideChapter1Sheet3Example2;
