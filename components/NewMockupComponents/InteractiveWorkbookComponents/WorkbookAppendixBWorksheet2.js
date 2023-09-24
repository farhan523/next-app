import React, { useState, useEffect } from "react";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";

const WorkbookAppendixBWorksheet2 = ({
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
    idea1Prompt: "",
    idea1Story: "",
    idea1Notes: "",
    idea1About: "",
    idea2Prompt: "",
    idea2Story: "",
    idea2Notes: "",
    idea2About: "",
    idea3Prompt: "",
    idea3Story: "",
    idea3Notes: "",
    idea3About: "",
    idea4Prompt: "",
    idea4Story: "",
    idea4Notes: "",
    idea4About: "",
  });

  // Handle form submission and log the form data to the console
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    await handleSubmitForm("chapter13", JSON.stringify(formData));
    setOpen(true);
    onClickNextLesson();
  };

  // Log the form data to the console whenever it changes using useEffect hook
  useEffect(() => {
    let chapter13TwoReport = null;
    if (workBookAPI && workBookAPI?.chapter13) {
      chapter13TwoReport = JSON.parse(workBookAPI?.chapter13);
      setFormData(chapter13TwoReport);
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
            <p className="text-[13px] font-extrabold leading-4">Idea #1</p>

            <div className="flex">
              <h1 className={fontCOlor}>Prompt</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea1Prompt}
                onChange={(e) =>
                  setFormData({ ...formData, idea1Prompt: e.target.value })
                }
                required={true}
              />
            </div>
            <div className="flex">
              <h1 className={fontCOlor}>Story Idea</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea1Story}
                onChange={(e) =>
                  setFormData({ ...formData, idea1Story: e.target.value })
                }
                required={true}
              />
            </div>
            <div className="flex">
              <h1 className={fontCOlor}>Notes</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea1Notes}
                onChange={(e) =>
                  setFormData({ ...formData, idea1Notes: e.target.value })
                }
                required={true}
              />
            </div>
            <h1 className={fontCOlor}>
              What do I want readers to know about me?
            </h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.idea1About}
              onChange={(e) =>
                setFormData({ ...formData, idea1About: e.target.value })
              }
              required={true}
            />
          </section>

          <section>
            <p className="text-[13px] font-extrabold leading-4">Idea #2</p>

            <div className="flex">
              <h1 className={fontCOlor}>Prompt</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea2Prompt}
                onChange={(e) =>
                  setFormData({ ...formData, idea2Prompt: e.target.value })
                }
                required={true}
              />
            </div>
            <div className="flex">
              <h1 className={fontCOlor}>Story Idea</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea2Story}
                onChange={(e) =>
                  setFormData({ ...formData, idea2Story: e.target.value })
                }
                required={true}
              />
            </div>
            <div className="flex">
              <h1 className={fontCOlor}>Notes</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea2Notes}
                onChange={(e) =>
                  setFormData({ ...formData, idea2Notes: e.target.value })
                }
                required={true}
              />
            </div>
            <h1 className={fontCOlor}>
              What do I want readers to know about me?
            </h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.idea2About}
              onChange={(e) =>
                setFormData({ ...formData, idea2About: e.target.value })
              }
              required={true}
            />
          </section>

          <section>
            <p className="text-[13px] font-extrabold leading-4">Idea #3</p>

            <div className="flex">
              <h1 className={fontCOlor}>Prompt</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea3Prompt}
                onChange={(e) =>
                  setFormData({ ...formData, idea3Prompt: e.target.value })
                }
                required={true}
              />
            </div>
            <div className="flex">
              <h1 className={fontCOlor}>Story Idea</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea3Story}
                onChange={(e) =>
                  setFormData({ ...formData, idea3Story: e.target.value })
                }
                required={true}
              />
            </div>
            <div className="flex">
              <h1 className={fontCOlor}>Notes</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea3Notes}
                onChange={(e) =>
                  setFormData({ ...formData, idea3Notes: e.target.value })
                }
                required={true}
              />
            </div>
            <h1 className={fontCOlor}>
              What do I want readers to know about me?
            </h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.idea3About}
              onChange={(e) =>
                setFormData({ ...formData, idea3About: e.target.value })
              }
              required={true}
            />
          </section>

          <section>
            <p className="text-[13px] font-extrabold leading-4">Idea #4</p>

            <div className="flex">
              <h1 className={fontCOlor}>Prompt</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea4Prompt}
                onChange={(e) =>
                  setFormData({ ...formData, idea4Prompt: e.target.value })
                }
                required={true}
              />
            </div>
            <div className="flex">
              <h1 className={fontCOlor}>Story Idea</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea4Story}
                onChange={(e) =>
                  setFormData({ ...formData, idea4Story: e.target.value })
                }
                required={true}
              />
            </div>
            <div className="flex">
              <h1 className={fontCOlor}>Notes</h1>
              <input
                type="text"
                className={sectionOneStyles}
                placeholder="Enter text here"
                value={formData.idea4Notes}
                onChange={(e) =>
                  setFormData({ ...formData, idea4Notes: e.target.value })
                }
                required={true}
              />
            </div>
            <h1 className={fontCOlor}>
              What do I want readers to know about me?
            </h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.idea4About}
              onChange={(e) =>
                setFormData({ ...formData, idea4About: e.target.value })
              }
              required={true}
            />
          </section>
        </div>
      </form>
    </>
  );
};

export default WorkbookAppendixBWorksheet2;

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
