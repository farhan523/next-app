import React, { useState, useEffect } from "react";
import SortableSheetList from "./SortableSheetList";
import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
import { Alert } from "@material-ui/lab";
const WorkbookChapter2 = ({
  handleSubmitForm,
  workBookAPI,
  onClickPrevLesson,
  onClickNextLesson,
  prevLesson,
  nextLesson,
  inWorkbook,
  view,
  workItem,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [finalValues, setFinalValues] = useState({
    c2Assets: [],
    c2ExperientialKnowledge: [],
    c2MoralCompass: [],
    c2Liabilities: [],
  });
  const [assetValue, setAssetValue] = useState("");
  const [experientialKnowledgeValue, setExperientialKnowledgeValue] =
    useState("");
  const [moralCompassValue, setMoralCompassValue] = useState("");
  const [liabilitiesValue, setLiabilitiesValue] = useState("");

  const onAddNewList = (event, name, value) => {
    event.preventDefault();
    if (value === "") return;
    finalValues
      ? Object.keys(finalValues).includes(name)
        ? setFinalValues((prev) => ({
            ...prev,
            [name]: [...prev[name], value],
          }))
        : setFinalValues((prev) => ({ ...prev, [name]: [value] }))
      : setFinalValues((prev) => ({ ...prev, [name]: [value] }));

    if (name === "c2Assets") {
      setAssetValue("");
    }
    if (name === "c2ExperientialKnowledge") {
      setExperientialKnowledgeValue("");
    }
    if (name === "c2MoralCompass") {
      setMoralCompassValue("");
    }
    if (name === "c2Liabilities") {
      setLiabilitiesValue("");
    }
  };

  const onRemoveList = (name, index) => {
    finalValues[name].splice(index, 1);
    setFinalValues({ ...finalValues });
  };

  const onCancel = () => {
    window.location.reload();
  };

  useEffect(() => {
    let chapter2Report = null;
    if (workBookAPI && workBookAPI?.chapter2 !== null) {
      chapter2Report = JSON.parse(workBookAPI?.chapter2);
      setFinalValues(chapter2Report);
    }
  }, [workBookAPI]);

  const onClickFormSubmission = async (event) => {
    // event.preventDefault();
    // if (
    //   finalValues?.c2Assets?.length === 0 ||
    //   (finalValues?.c2Liabilities?.length === 0 &&
    //     finalValues?.c2ExperientialKnowledge?.length === 0 &&
    //     finalValues?.c2MoralCompass?.length === 0)
    // ) {
    //   return setError(true);
    // }
    await handleSubmitForm(
      "chapter2",
      JSON.stringify(finalValues),
      "In Progress"
    );
    setLoading(false);
    onClickNextLesson();
  };

  return (
    <>
      <div className="col-span-12 w-full h-full font-normal">
        {/* {inWorkbook && view !== "faculty" && ( */}
        <NextPrevLesson
          onClickNextLesson={onClickFormSubmission}
          onClickPrevLesson={onClickPrevLesson}
          prevLesson={prevLesson}
          nextLesson={nextLesson}
          workItem={workItem}
        />
        {/* )} */}
        <section className="flex flex-col gap-1">
          <p className="text-[17px] w-full font-[600] text-[#121212] mb-2">
            {`Creating your Mental Balance Sheet gives you the insight you need to
              make plans for adding beneficial assets and removing negative
              liabilities. It helps you track your progress and recognize
              effective ways of acquiring strengths and overcoming weaknesses.
              Improving your Mental Balance Sheet increases the valuable
              information and tools available for making decisions and devising
              methods for achieving your goals. It can direct you in building your
              personal wealth.`}
          </p>
          <p className="text-[17px] w-full font-[600] text-[#121212]">
            {`It is time to complete your Mental Balance Sheet.
              Use this template to list your personal assets (strengths) and
              liabilities (areas for improvement). Reflect carefully and do your
              best to create an accurate and truthful assessment of your current
              status.`}
          </p>
          <div className="col-span-12 mt-5">
            <div className="w-full w-100 rounded-t-[10px] h-full border flex border-[#A7C4D7] justify-between items-center bg-[#F9FDFF] px-8 py-3">
              <h2 className="font-bold my-5 text-[#121212] font-[17px] h-[24px] text-[17px]">
                High School Graduate Mental Balance Sheet{" "}
              </h2>
              {/* {!inWorkbook && view !== "faculty" && ( */}
              <div className="text-center">
                <button
                  onClick={onCancel}
                  className="rounded-[7px] w-[73px] h-[30px] font-[500] bg-transparent  text-[#B1CBDD] border border-[#B1CBDD]"
                >
                  Cancel
                </button>
                {loading ? (
                  <button className="bg-[#B1CBDD] rounded-[7px] w-[73px] h-[30px] text-white font-[500] mx-2 mt-3 cursor-wait">
                    loading
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[#0067B2] rounded-[7px] w-[73px] h-[30px] text-white font-[500] mx-2 mt-3"
                    onClick={onClickFormSubmission}
                  >
                    Save
                  </button>
                )}
              </div>
              {/* )} */}
            </div>
            {error && (
              <Alert severity="error" className="mt-3">
                Please fill this sheet
              </Alert>
            )}
            <div
              className="h-full border rounded-b-[10px] flex flex-col border-[#A7C4D7] justify-between items-start"
              style={{ textAlign: "center" }}
            >
              <div className="h-full w-full flex justify-between items-start">
                <div className="w-[50%] h-full py-4 border-r border-[#A7C4D7]">
                  <div className="py-3 flex flex-col justify-center items-center">
                    <div className="w-[80%] flex items-center justify-center text-[17px] text-brandBlue font-[600] h-[40px] rounded-[7px] p-3 bg-[#C9E5F3]">
                      Assets
                    </div>
                    <div className="w-[100%] my-4 h-full">
                      <SortableSheetList
                        data={finalValues?.c2Assets}
                        distance={1}
                        onRemoveList={onRemoveList}
                        type="c2Assets"
                      />
                      <form
                        onSubmit={(e) =>
                          onAddNewList(e, "c2Assets", assetValue)
                        }
                      >
                        <div className="w-[100%] h-full flex justify-center items-center my-3">
                          <div className="w-[80%] flex justify-center items-center h-full mt-4">
                            <div className="w-full">
                              <input
                                type="text"
                                placeholder=""
                                className="w-[100%] h-10 p-4 font-normal bg-white border-[#A7C4D7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A7C4D7] focus:border-transparent"
                                onChange={(e) => setAssetValue(e.target.value)}
                                value={assetValue}
                                required={true}
                              />
                            </div>
                            <button
                              type="submit"
                              className="bg-[#0067B2] rounded-[7px] w-[120px] h-[34px] text-white font-[500] mx-2"
                              onClick={(e) =>
                                onAddNewList(e, "c2Assets", assetValue)
                              }
                            >
                              Add New
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="py-3 flex flex-col justify-center items-center ">
                    <div className="w-[80%] flex items-center justify-center text-[17px] text-brandBlue font-[600] h-[40px] rounded-[7px] p-3 bg-[#C9E5F3]">
                      Experiential Knowledge
                    </div>
                    <div className="w-[100%] my-4 h-full">
                      <SortableSheetList
                        data={finalValues?.c2ExperientialKnowledge}
                        distance={1}
                        onRemoveList={onRemoveList}
                        type="c2ExperientialKnowledge"
                      />
                      <form
                        onSubmit={(e) =>
                          onAddNewList(
                            e,
                            "c2ExperientialKnowledge",
                            experientialKnowledgeValue
                          )
                        }
                      >
                        <div className="w-[100%] h-full flex justify-center items-center my-3">
                          <div className="w-[80%] flex justify-center items-center h-full mt-4">
                            <div className="w-full">
                              <input
                                type="text"
                                placeholder=""
                                className="w-[100%] h-10 p-4 font-normal bg-white border-[#A7C4D7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A7C4D7] focus:border-transparent"
                                onChange={(e) =>
                                  setExperientialKnowledgeValue(e.target.value)
                                }
                                value={experientialKnowledgeValue}
                                required={true}
                              />
                            </div>
                            <button
                              type="submit"
                              className="bg-[#0067B2] rounded-[7px] w-[120px] h-[34px] text-white font-[500] mx-2"
                            >
                              Add New
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="py-3 flex flex-col justify-center items-center ">
                    <div className="w-[80%] flex items-center justify-center text-[17px] text-brandBlue font-[600] h-[40px] rounded-[7px] p-3 bg-[#C9E5F3]">
                      Moral Compass
                    </div>
                    <div className="w-[100%] my-4 h-full">
                      <SortableSheetList
                        data={finalValues?.c2MoralCompass}
                        distance={1}
                        onRemoveList={onRemoveList}
                        type="c2MoralCompass"
                      />
                      <form
                        onSubmit={(e) =>
                          onAddNewList(e, "c2MoralCompass", moralCompassValue)
                        }
                      >
                        <div className="w-[100%] h-full flex justify-center items-center my-3">
                          <div className="w-[80%] flex justify-center items-center h-full mt-4">
                            <div className="w-full">
                              <input
                                type="text"
                                placeholder=""
                                className="w-[100%] h-10 p-4 font-normal bg-white border-[#A7C4D7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A7C4D7] focus:border-transparent"
                                onChange={(e) =>
                                  setMoralCompassValue(e.target.value)
                                }
                                value={moralCompassValue}
                                required={true}
                              />
                            </div>
                            <button
                              type="submit"
                              className="bg-[#0067B2] rounded-[7px] w-[120px] h-[34px] text-white font-[500] mx-2"
                            >
                              Add New
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="w-[50%] h-full py-4 flex flex-col justify-start">
                  <div className="py-3 flex flex-col justify-center h-fit items-center">
                    <div className="w-[80%] flex items-center justify-center text-[17px] text-brandBlue font-[600] h-[40px] rounded-[7px] p-3 bg-[#C9E5F3]">
                      Liabilities
                    </div>
                    <div className="w-[100%] my-4 h-full">
                      <SortableSheetList
                        data={finalValues?.c2Liabilities}
                        distance={1}
                        onRemoveList={onRemoveList}
                        type="c2Liabilities"
                      />
                      <form
                        onSubmit={(e) =>
                          onAddNewList(e, "c2Liabilities", liabilitiesValue)
                        }
                      >
                        <div className="w-[100%] h-full flex justify-center items-center my-3">
                          <div className="w-[80%] flex justify-center items-center h-full mt-4">
                            <div className="w-full">
                              <input
                                type="text"
                                placeholder=""
                                className="w-[100%] h-10 p-4 font-normal bg-white border-[#A7C4D7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A7C4D7] focus:border-transparent"
                                onChange={(e) =>
                                  setLiabilitiesValue(e.target.value)
                                }
                                value={liabilitiesValue}
                                required={true}
                              />
                            </div>
                            <button
                              type="submit"
                              className="bg-[#0067B2] rounded-[7px] w-[120px] h-[34px] text-white font-[500] mx-2"
                              onClick={() => {
                                setFinalValues;
                              }} //addLiabilities
                            >
                              Add New
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[17px] w-full font-[600] text-[#121212] no-margin">
            As you review your completed Mental Balance Sheet, you should
            identify the following:
            <ul className="my-2 p-0">
              <li>the primary assets you need to acquire in the short term </li>
              <li>
                weaknesses in your knowledge and experience that you can work on
                immediately.
              </li>
            </ul>
          </p>
          <p className="text-[17px] w-full font-[600] text-[#121212] no-margin">
            <span className="">
              Continuing to add assets to and remove liabilities from your
              Mental Balance Sheet will determine the shape of your future.
            </span>{" "}
            This fundamental strategy will improve your decisions and
            performance for the rest of your life.
          </p>
        </section>
      </div>
    </>
  );
};

export default WorkbookChapter2;

/*---> Styles <---*/
const fontCOlor = `
font-bold text-[17px] text-brandBlue m-2
`;

const sectionOneStyles = `
  text-[12px] text-brandBlue placeholder:text-[#A7C4D7] focus:placeholder:text-[#121212] focus:border-brandBlue border-[#A7C4D7] mb-5 focus:border-b-[2px] border-t-0 border-l-0 border-r-0 focus:bg-inputFocus w-[400px]
`;

const jobInputStyles = `
 text-[17px] text-center  text-[#0168B2]  placeholder:text-[#A7C4D7] placeholder:text-center focus:placeholder:text-[#121212] focus:border-brandBlue border-[#A7C4D7] mb-5  focus:border-b-[2px] border-t-0 border-l-0 border-r-0 focus:bg-inputFocus focus:outline-none w-[175px] mx-2 h-[32px]
`;

const sectionTwoStyles = `
 text-[12px] text-brandBlue  placeholder:text-[#A7C4D7] focus:placeholder:text-[#121212] focus:border-brandBlue border-[#A7C4D7] mb-5  focus:border-b-[2px] border-t-0 border-l-0 border-r-0 focus:bg-inputFocus focus:outline-none w-[218px]
`;

const sectionInputStyles = `
 text-[17px] text-center   text-[#0168B2]  placeholder:text-[#A7C4D7] placeholder:text-center focus:placeholder:text-[#121212] focus:border-brandBlue border-[#A7C4D7] mb-5  focus:border-b-[2px] border-t-0 border-l-0 border-r-0 focus:bg-inputFocus focus:outline-none w-[393px] mx-2 h-[32px]
`;
