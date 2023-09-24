import React, { useState, useEffect } from "react";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
import Modal from "react-responsive-modal";

const WorkbookAppendixBWorksheet3 = ({
  handleSubmitForm,
  workBookAPI,
  onClickNextLesson,
  onClickPrevLesson,
  prevLesson,
  nextLesson,
  workItem,
}) => {
  // Set initial form data using useState hook
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    prompt: "",
    theme: "",
    whatHappened: "",
    matter: "",
  });

  const onCloseModal = () => setOpen(false);

  // Handle form submission and log the form data to the console
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    await handleSubmitForm("chapter13", JSON.stringify(formData));
    // setOpen(true);
    onClickNextLesson();
  };

  // Log the form data to the console whenever it changes using useEffect hook
  useEffect(() => {
    let chapter13ThreeReport = null;
    if (workBookAPI && workBookAPI?.chapter13) {
      chapter13ThreeReport = JSON.parse(workBookAPI?.chapter13);
      setFormData(chapter13ThreeReport);
    }
  }, [workBookAPI]);

  return (
    <>
      <NextPrevLesson
        onClickNextLesson={handleSubmit}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={true}
        workItem={workItem}
      />
      <form onSubmit={handleSubmit}>
        <div className="">
          {/* Section 1: Interest Assessment */}
          <section>
            <p className="text-[13px] font-extrabold leading-4">
              Choose the idea you thought best and complete this worksheet
              before you begin writing your first draft.
            </p>

            <h1 className={fontCOlor}>My Prompt (Copy Prompt word for word)</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.prompt}
              onChange={(e) =>
                setFormData({ ...formData, prompt: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>My Theme</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.theme}
              onChange={(e) =>
                setFormData({ ...formData, theme: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>What happened?</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.whatHappened}
              onChange={(e) =>
                setFormData({ ...formData, whatHappened: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>
              Why does it matter? (What does it say about you? What will college
              admissions counselors find helpful? What does the story illustrate
              to the reader that they wouldn’t know from the rest of your
              application?)
            </h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.matter}
              onChange={(e) =>
                setFormData({ ...formData, matter: e.target.value })
              }
              required={true}
            />
          </section>
        </div>
      </form>
    </>
  );
};

export default WorkbookAppendixBWorksheet3;

/*---> Styles <---*/
const fontCOlor = `
font-bold text-[13px] text-brandBlue m-2
`;

const sectionOneStyles = `
  text-[12px] text-brandBlue placeholder:text-[#A7C4D7] focus:placeholder:text-[#121212] focus:border-brandBlue border-[#A7C4D7] mb-5 focus:border-b-[2px] border-t-0 border-l-0 border-r-0 focus:bg-inputFocus w-[400px]
`;

const jobInputStyles = `
 text-[13px] text-center  text-[#0168B2]  placeholder:text-[#A7C4D7] placeholder:text-center focus:placeholder:text-[#121212] focus:border-brandBlue border-[#A7C4D7] mb-5  focus:border-b-[2px] border-t-0 border-l-0 border-r-0 focus:bg-inputFocus focus:outline-none w-[175px] mx-2 h-[32px]
`;

const sectionTwoStyles = `
 text-[12px] text-brandBlue  placeholder:text-[#A7C4D7] focus:placeholder:text-[#121212] focus:border-brandBlue border-[#A7C4D7] mb-5  focus:border-b-[2px] border-t-0 border-l-0 border-r-0 focus:bg-inputFocus focus:outline-none w-[218px]
`;

const sectionInputStyles = `
 text-[13px] text-center   text-[#0168B2]  placeholder:text-[#A7C4D7] placeholder:text-center focus:placeholder:text-[#121212] focus:border-brandBlue border-[#A7C4D7] mb-5  focus:border-b-[2px] border-t-0 border-l-0 border-r-0 focus:bg-inputFocus focus:outline-none w-[393px] mx-2 h-[32px]
`;
