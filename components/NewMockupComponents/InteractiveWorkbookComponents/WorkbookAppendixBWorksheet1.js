import React, { useState, useEffect } from "react";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
import Modal from "react-responsive-modal";

const WorkbookAppendixBWorksheet1 = ({
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
    quality1: "",
    quality2: "",
    quality3: "",
    quality4: "",
    quality5: "",
    friendQuality1: "",
    friendQuality2: "",
    friendQuality3: "",
    friendQuality4: "",
    friendQuality5: "",
    essayQuality1: "",
    essayQuality2: "",
    essayQuality3: "",
    meaningfullExperience1: "",
    meaningfullExperience2: "",
    difficultExperience1: "",
    difficultExperience2: "",
    happiestExperience1: "",
    happiestExperience2: "",
    college: "",
  });

  const onCloseModal = () => setOpen(false);

  // Handle form submission and log the form data to the console
  const handleSubmit = async (event) => {
    // event.preventDefault(); // Prevent the default form submission behavior
    await handleSubmitForm("chapter13", JSON.stringify(formData));
    setOpen(true);
    onClickNextLesson();
  };

  // Log the form data to the console whenever it changes using useEffect hook
  useEffect(() => {
    let chapter13OneReport = null;
    if (workBookAPI && workBookAPI?.chapter13) {
      chapter13OneReport = JSON.parse(workBookAPI?.chapter13);
      setFormData(chapter13OneReport);
    }
  }, [workBookAPI]);

  return (
    <>
      <NextPrevLesson
        onClickNextLesson={handleSubmit}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        workItem={workItem}
      />
      <form onSubmit={handleSubmit}>
        <div className="">
          {/* Section 1: Interest Assessment */}
          <section>
            <p className="text-[13px] font-light leading-4">
              Before deciding on a specific prompt, consider the personal traits
              you want to reveal to the readers. Complete the following
              exercises.
            </p>

            <p className="text-[13px] font-extrabold leading-4">
              A. List five words (qualities, characteristics) that best describe
              you:
            </p>

            <h1 className={fontCOlor}>1</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.quality1}
              onChange={(e) =>
                setFormData({ ...formData, quality1: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>2</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.quality2}
              onChange={(e) =>
                setFormData({ ...formData, quality2: e.target.value })
              }
              required={true}
            />

            <h1 className={fontCOlor}>3</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.quality3}
              onChange={(e) =>
                setFormData({ ...formData, quality3: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>4</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.quality4}
              onChange={(e) =>
                setFormData({ ...formData, quality4: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>5</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.quality5}
              onChange={(e) =>
                setFormData({ ...formData, quality5: e.target.value })
              }
              required={true}
            />

            <p className="text-[13px] font-extrabold leading-4">
              B. List five words (qualities, characteristics) that your friends
              would use to describe you:
            </p>

            <h1 className={fontCOlor}>1</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.friendQuality1}
              onChange={(e) =>
                setFormData({ ...formData, friendQuality1: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>2</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.friendQuality2}
              onChange={(e) =>
                setFormData({ ...formData, friendQuality2: e.target.value })
              }
              required={true}
            />

            <h1 className={fontCOlor}>3</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.friendQuality3}
              onChange={(e) =>
                setFormData({ ...formData, friendQuality3: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>4</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.friendQuality4}
              onChange={(e) =>
                setFormData({ ...formData, friendQuality4: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>5</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.friendQuality5}
              onChange={(e) =>
                setFormData({ ...formData, friendQuality5: e.target.value })
              }
              required={true}
            />

            <p className="text-[13px] font-extrabold leading-4">
              C. Choose three qualities from these lists that should be conveyed
              in your essay:
            </p>

            <h1 className={fontCOlor}>1</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.essayQuality1}
              onChange={(e) =>
                setFormData({ ...formData, essayQuality1: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>2</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.essayQuality2}
              onChange={(e) =>
                setFormData({ ...formData, essayQuality2: e.target.value })
              }
              required={true}
            />

            <h1 className={fontCOlor}>3</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.essayQuality3}
              onChange={(e) =>
                setFormData({ ...formData, essayQuality3: e.target.value })
              }
              required={true}
            />
          </section>
          {/* Section 2: Occupation Profile */}
          <section>
            <p className="text-[13px] font-extrabold leading-4">
              D. In one sentence, describe:
            </p>

            <div className="relative flex w-full flex-wrap items-center">
              <span className="text-[13px]">1.</span>
              <span
                className="flex items-center whitespace-nowrap text-center text-[13px] font-bold"
                id="basic-addon1"
              >
                {" The most meaningful experience of my life was"}
              </span>
              <input
                type="text"
                className={sectionInputStyles}
                value={formData.meaningfullExperience1}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    meaningfullExperience1: e.target.value,
                  })
                }
                required={true}
              />
              <span
                className="flex items-center whitespace-nowrap  text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                because
              </span>
              <input
                type="text"
                className={sectionInputStyles}
                value={formData.meaningfullExperience2}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    meaningfullExperience2: e.target.value,
                  })
                }
                required={true}
              />
            </div>
            <div className="relative flex w-full flex-wrap items-center">
              <span className="text-[13px]">2.</span>
              <span
                className="flex items-center whitespace-nowrap text-center text-[13px] font-bold"
                id="basic-addon1"
              >
                {" The most difficult experience of my life was"}
              </span>
              <input
                type="text"
                className={sectionInputStyles}
                value={formData.difficultExperience1}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    difficultExperience1: e.target.value,
                  })
                }
                required={true}
              />
              <span
                className="flex items-center whitespace-nowrap  text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                because
              </span>
              <input
                type="text"
                className={sectionInputStyles}
                value={formData.difficultExperience2}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    difficultExperience2: e.target.value,
                  })
                }
                required={true}
              />
            </div>
            <div className="relative flex w-full flex-wrap items-center">
              <span className="text-[13px]">3.</span>
              <span
                className="flex items-center whitespace-nowrap text-center text-[13px] font-bold"
                id="basic-addon1"
              >
                {" The happiest experience of my life was"}
              </span>
              <input
                type="text"
                className={sectionInputStyles}
                value={formData.happiestExperience1}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    happiestExperience1: e.target.value,
                  })
                }
                required={true}
              />
              <span
                className="flex items-center whitespace-nowrap  text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                because
              </span>
              <input
                type="text"
                className={sectionInputStyles}
                value={formData.happiestExperience2}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    happiestExperience2: e.target.value,
                  })
                }
                required={true}
              />
            </div>

            <p className="text-[13px] font-extrabold leading-4">
              E. What is it that you want colleges to know about you? (Beyond
              grades, test scores, activities, or your travels?)
            </p>
            <input
              type="text"
              className={`${sectionInputStyles} w-full`}
              value={formData.college}
              onChange={(e) =>
                setFormData({ ...formData, college: e.target.value })
              }
              required={true}
            />
          </section>
          <p className="text-[13px] font-extrabold leading-4">
            Now that you have jogged your memory use the following worksheet to
            brainstorm and brainstorm and record a few story ideas. Be sure to
            note which prompt you chose for this story.
          </p>
        </div>
      </form>
    </>
  );
};

export default WorkbookAppendixBWorksheet1;

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
