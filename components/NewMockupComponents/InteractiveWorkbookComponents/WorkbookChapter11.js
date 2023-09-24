import React, { useState, useEffect } from "react";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
import Modal from "react-responsive-modal";

const WorkbookChapter11 = ({
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
    jobOne: "",
    jobTwo: "",
    jobThree: "",
    jobTitle: "",
    outlook: "",
    medianWage: "",
    commonEducation: "",
    projectedEmployment: "",
    knowledgeOne: "",
    knowledgeTwo: "",
    knowledgeThree: "",
    knowledgeFour: "",
    knowledgeFive: "",
    abilityOne: "",
    abilityTwo: "",
    abilityThree: "",
    abilityFour: "",
    abilityFive: "",
    skillOne: "",
    skillTwo: "",
    skillThree: "",
    skillFour: "",
    skillFive: "",
  });

  const onCloseModal = () => setOpen(false);

  // Handle form submission and log the form data to the console
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    await handleSubmitForm("chapter11", JSON.stringify(formData), "Completed");
    setOpen(true);
    setTimeout(() => {
      onClickNextLesson();
    }, 3000);
  };

  // Log the form data to the console whenever it changes using useEffect hook
  useEffect(() => {
    let chapter11Report = null;
    if (workBookAPI && workBookAPI?.chapter11) {
      chapter11Report = JSON.parse(workBookAPI?.chapter11);
      setFormData(chapter11Report);
    }
  }, [workBookAPI]);

  return (
    <>
      <NextPrevLesson
        // onClickNextLesson={() => onClickNextLesson()}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        // nextLesson={nextLesson}
        workItem={workItem}
      />
      <form onSubmit={handleSubmit}>
        <div className="">
          {/* Section 1: Interest Assessment */}
          <section>
            <p className="text-[13px] font-light leading-4">
              Complete the interest assessment at{" "}
              <a
                href="https://www.careeronestop.org/toolkit/careers/interest-assessment.aspx"
                className="border-b border-black hover:bg-blue-200 focus:border-blue-200 focus:outline-none"
                target="_blank"
              >
                https://www.careeronestop.org/toolkit/careers/interest-assessment.aspx
              </a>
              . What are the top three jobs suggested in your results?
            </p>

            <h1 className={fontCOlor}>1</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.jobOne}
              onChange={(e) =>
                setFormData({ ...formData, jobOne: e.target.value })
              }
              required={true}
            />
            <h1 className={fontCOlor}>2</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.jobTwo}
              onChange={(e) =>
                setFormData({ ...formData, jobTwo: e.target.value })
              }
              required={true}
            />

            <h1 className={fontCOlor}>3</h1>
            <input
              type="text"
              className={sectionOneStyles}
              placeholder="Enter text here"
              value={formData.jobThree}
              onChange={(e) =>
                setFormData({ ...formData, jobThree: e.target.value })
              }
              required={true}
            />
          </section>
          {/* Section 2: Occupation Profile */}
          <section>
            <p className="text-[13px] font-light leading-4">
              Think of an occupation you find interesting. Use this to enter the
              name of the occupation and your zip code.{" "}
              <a
                href="https://www.careeronestop.org/Toolkit/Careers/Occupations/occupation-profile.aspx"
                className="border-b border-black hover:bg-blue-200 focus:border-blue-200 focus:outline-none"
                target="_blank"
              >
                https://www.careeronestop.org/Toolkit/Careers/Occupations/occupation-profile.aspx
              </a>{" "}
            </p>

            <div className="relative  flex w-full flex-wrap items-stretch">
              <span
                className="flex items-center whitespace-nowrap   text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                Job Title
              </span>
              <input
                type="text"
                className={sectionInputStyles}
                value={formData.jobTitle}
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
                required={true}
              />
              <span
                className="flex items-center whitespace-nowrap  text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                .
              </span>
            </div>
            <div className="relative  flex w-full flex-wrap items-stretch">
              <span
                className="flex items-center whitespace-nowrap  text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                Outlook: New job opportunities are
              </span>
              <input
                type="text"
                className={jobInputStyles}
                value={formData.outlook}
                onChange={(e) =>
                  setFormData({ ...formData, outlook: e.target.value })
                }
                required={true}
              />
              <span
                className="flex items-center whitespace-nowrap  text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                in the future.
              </span>
            </div>

            <div className="relative  flex w-full flex-wrap items-stretch">
              <span
                className="flex items-center whitespace-nowrap   text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                Typical Wages: The{" "}
                <span className="font-semibold text-brandBlue px-1">
                  Median
                </span>{" "}
                annual wage plotted on the chart is
              </span>
              <input
                type="text"
                className={jobInputStyles}
                value={formData.medianWage}
                onChange={(e) =>
                  setFormData({ ...formData, medianWage: e.target.value })
                }
                required={true}
              />{" "}
              <span
                className="flex items-center whitespace-nowrap  text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                .
              </span>
            </div>
            <div className="relative  flex w-full flex-wrap items-stretch">
              <span
                className="flex items-center whitespace-nowrap   text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                Typical Education: What is the most common education level for
                this job?
              </span>
              <input
                type="text"
                className={jobInputStyles}
                value={formData.commonEducation}
                onChange={(e) =>
                  setFormData({ ...formData, commonEducation: e.target.value })
                }
                required={true}
              />
              <span
                className="flex items-center whitespace-nowrap  text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                .
              </span>
            </div>
            <div className="relative  flex w-full flex-wrap items-stretch">
              <span
                className="flex items-center whitespace-nowrap   text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                Projected Employment: By what percentage is employment in this
                occupation projected to increase or decrease?
              </span>
              <input
                type="text"
                className={sectionInputStyles}
                value={formData.projectedEmployment}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    projectedEmployment: e.target.value,
                  })
                }
                required={true}
              />
              <span
                className="flex items-center whitespace-nowrap  text-center text-[13px] font-normal"
                id="basic-addon1"
              >
                .
              </span>
            </div>
          </section>
          {/* Section 3:  knowledge, skills and ability */}
          <section>
            <p className="text-[13px]  font-light	 leading-4	">
              List the top five knowledge, skills, and ability required to
              succeed in this occupation.
            </p>
            <div className="grid grid-cols-3 ">
              <div>
                <h2 className={fontCOlor}>Knowledge:</h2>
                <h1 className={fontCOlor}>1</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.knowledgeOne}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      knowledgeOne: e.target.value,
                    })
                  }
                  required={true}
                />
                <h1 className={fontCOlor}>2</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.knowledgeTwo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      knowledgeTwo: e.target.value,
                    })
                  }
                  required={true}
                />
                <h1 className={fontCOlor}>3</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.knowledgeThree}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      knowledgeThree: e.target.value,
                    })
                  }
                  required={true}
                />
                <h1 className={fontCOlor}>4</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.knowledgeFour}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      knowledgeFour: e.target.value,
                    })
                  }
                  required={true}
                />
                <h1 className={fontCOlor}>5</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.knowledgeFive}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      knowledgeFive: e.target.value,
                    })
                  }
                  required={true}
                />
              </div>
              <div>
                <h2 className={fontCOlor}>Skills:</h2>
                <h1 className={fontCOlor}>1</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.skillOne}
                  required={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      skillOne: e.target.value,
                    })
                  }
                />
                <h1 className={fontCOlor}>2</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.skillTwo}
                  required={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      skillTwo: e.target.value,
                    })
                  }
                />
                <h1 className={fontCOlor}>3</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.skillThree}
                  required={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      skillThree: e.target.value,
                    })
                  }
                />
                <h1 className={fontCOlor}>4</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.skillFour}
                  required={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      skillFour: e.target.value,
                    })
                  }
                />
                <h1 className={fontCOlor}>5</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.skillFive}
                  required={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      skillFive: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <h2 className={fontCOlor}>Abilities:</h2>
                <h1 className={fontCOlor}>1</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.abilityOne}
                  required={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      abilityOne: e.target.value,
                    })
                  }
                />
                <h1 className={fontCOlor}>2</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.abilityTwo}
                  required={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      abilityTwo: e.target.value,
                    })
                  }
                />
                <h1 className={fontCOlor}>3</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.abilityThree}
                  required={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      abilityThree: e.target.value,
                    })
                  }
                />
                <h1 className={fontCOlor}>4</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.abilityFour}
                  required={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      abilityFour: e.target.value,
                    })
                  }
                />
                <h1 className={fontCOlor}>5</h1>
                <input
                  type="text"
                  className={sectionTwoStyles}
                  placeholder="Enter text here"
                  value={formData.abilityFive}
                  required={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      abilityFive: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </section>
          <div className="mt-10 text-center">
            {/* <button className="rounde-[7px] w-[73px] h-[30px] font-[500] bg-transparent  text-[#B1CBDD] border border-[#B1CBDD]  rounded ">
              Cancel
            </button> */}
            <button
              type="submit"
              className="bg-[#0067B2] w-fit px-3 h-[30px] text-white font-[500]  mx-2 rounded"
            >
              Save & Complete
            </button>
          </div>
        </div>
      </form>
      <Modal
        open={open}
        // onClose={onCloseModal}
        showCloseIcon={false}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        styles={{
          modal: {
            borderRadius: "10px",
            padding: "0px",
            width: "fit-content",
            maxWidth: "fit-content",
            height: "fit-content",
            backgroundColor: "#F8FAFC",
          },
        }}
      >
        <div className="w-full h-[90vh] flex justify-center items-center">
          <div className="h-[50%] w-[60%] flex flex-col items-center justify-center bg-white bg-opacity-60 rounded-lg">
            <h1 className="text-[20px] font-bold text-center text-brandBlue">
              {"Congrats! You’ve successfully completed your workbook!"}
            </h1>
            {/* <button
              className="bg-[#0067B2] w-[100px] h-[30px] text-white font-[500]  mx-2 rounded mt-5"
              onClick={onCloseModal}
            >
              Close
            </button> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WorkbookChapter11;

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
