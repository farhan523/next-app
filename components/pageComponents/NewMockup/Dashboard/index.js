import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  getIsAuthenticated,
  getCurrentUser,
} from "../../../../store/user.reducer";
import CurriculumText from "../../../NewMockupComponents/CurriculumText";
import MainContent from "../../../NewMockupComponents/Dashboard/MainContent";
import Sidebar from "../../../NewMockupComponents/Dashboard/Sidebar";
import UserNavBar from "../../../NewMockupComponents/Dashboard/UserNavBar";
import Footer from "../../../NewMockupComponents/Footer";
import TopNavigation from "../../../NewMockupComponents/TopNavigation";
import { TourProvider } from "@reactour/tour";
import { FacultySteps, StudentSteps } from "./steps";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import axios from "axios";
import { useTour } from "@reactour/tour";
import { BiArrowBack } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import Modal from "react-responsive-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import OrangeButton from "../../../NewMockupComponents/OrangeButton";
import { HiCheck } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";
import Logo from "../../../../static/allLogo/fleischer_logo.svg";

const NEXT_PUBLIC_STRAPI_URL = "https://fs-strapi.herokuapp.com";

const DashboardPageComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsLength, setStepsLength] = useState(0);
  const [open, setOpen] = useState(false);

  // const onOpenModal = () => setOpen(true);
  // const handleCloseModal = () => setOpen(false);
  const [studentsStepsLength, setStudentStepsLength] = useState(null);
  const userInfo = useSelector(getCurrentUser);
  const [user, setUser] = useState(userInfo);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const router = useRouter();

  const { setIsOpen } = useTour();

  const handleWalkthroughClick = () => {
    setOpen(true);
  };

  const handleStartClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  // const disableBody = (target) => disableBodyScroll(target)
  // const enableBody = (target) => enableBodyScroll(target)

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  // UPDATING WALK THROUGH

  const updateUserWalkthrough = async () => {
    try {
      const updatedUser = {
        ...userInfo,
        walkthrough: true,
      };

      const url = ` ${NEXT_PUBLIC_STRAPI_URL}/api/users/${userInfo.id}`;

      const response = await axios.put(url, updatedUser);
    } catch (error) {
      console.error("Error updating user walkthrough:", error.message);
    }
    setOpen(false);
  };

  // UPDATING WALK THROUGH STEPS
  const updateWalkthroughSteps = async () => {
    try {
      const updatedUser = {
        ...userInfo,
        walkthrough_current_step: currentStep + 1, // Update walkthrough_current_step with the new step
      };

      const url = `${NEXT_PUBLIC_STRAPI_URL}/api/users/${userInfo.id}`;

      const response = await axios.put(url, updatedUser);
    } catch (error) {
      console.error("Error updating user step:", error.message);
    }
  };

  useEffect(() => {
    updateWalkthroughSteps();
  }, [currentStep]);

  // useEffect(() => {
  //   if (currentStep + 1 === StudentSteps.length || currentStep + 1 === FacultySteps.length) {
  //     updateUserWalkthrough();
  //     setIsOpen(false)
  //     // setCurrentStep(0)
  //   }
  // }, [currentStep]);

  useEffect(() => {
    const incrementedStep = currentStep;
    localStorage.setItem("currentStep", incrementedStep.toString());
  }, [currentStep]);

  useEffect(() => {
    // Load the currentStep from local storage
    const storedStep = localStorage.getItem("currentStep");
    if (storedStep) {
      setCurrentStep(parseInt(storedStep, 10));
    }
  }, []);

  return (
    <>
      <div className="relative lg:fixed w-full top-0 bg-white z-20">
        <TopNavigation></TopNavigation>
      </div>
      <div className="lg:mb-[65px]"></div>
      <div>
        <UserNavBar></UserNavBar>
      </div>
      {userInfo && userInfo?.accessLevel && (
        <TourProvider
          steps={
            userInfo?.accessLevel === "academic_partner"
              ? FacultySteps
              : userInfo?.accessLevel === "student"
              ? StudentSteps
              : null
          }
          afterOpen={() => disableBodyScroll(document.body)}
          beforeClose={() => enableBodyScroll(document.body)}
          currentStep={currentStep}
          setCurrentStep={() => {
            if (userInfo?.accessLevel === "academic_partner") {
              if (currentStep === FacultySteps.length - 1) {
                // setCurrentStep(currentStep)
                setCurrentStep(currentStep);
              } else {
                setCurrentStep(currentStep + 1);
              }
            }
            if (userInfo?.accessLevel === "student") {
              if (currentStep === StudentSteps.length - 1) {
                // setCurrentStep(currentStep)
                setCurrentStep(currentStep);
              } else {
                setCurrentStep(currentStep + 1);
              }
            }
          }}
          onClickClose={({ setIsOpen }) => {
            if (userInfo?.accessLevel === "academic_partner") {
              if (currentStep === FacultySteps.length - 1) {
                // setCurrentStep(currentStep)
                updateUserWalkthrough();
                setIsOpen(false);
              } else {
                setIsOpen(false);
                setCurrentStep(currentStep);
              }
            }
            if (userInfo?.accessLevel === "student") {
              if (currentStep === StudentSteps.length - 1) {
                // setCurrentStep(currentStep)
                updateUserWalkthrough();
                setIsOpen(false);
              } else {
                setIsOpen(false);
                setCurrentStep(currentStep);
              }
            }
          }}
          prevButton={({ steps }) => {
            const first = currentStep === 0;
            return (
              <button
                aria-label="Go to previous step"
                onClick={() => {
                  if (!first) {
                    setCurrentStep((s) => s - 1);
                  } else {
                    setCurrentStep(0);
                  }
                  localStorage.setItem("currentStep", currentStep.toString());
                }}
              >
                <BiArrowBack size={19} style={{ color: "#fa9359" }} />
              </button>
            );
          }}
          badgeContent={({ totalSteps }) => currentStep + 1 + "/" + totalSteps}
          // padding={{
          //   popover: [5, 15],
          //   wrapper: 0
          // }}
          styles={{
            popover: (base) => ({
              ...base,
              "--reactour-accent": "#fa9359",
              borderRadius: "12px",
            }),
            // badge: (base) => ({ ...base, left: 'auto', right: '-0.8125em' }),
            controls: (base) => ({ ...base, marginTop: 20 }),
            close: (base) => ({ ...base, right: 8, left: "auto", top: 8 }),
          }}
        >
          <div className="lg:flex">
            <Sidebar
              role={userInfo && userInfo?.accessLevel}
              currentStep={currentStep}
              stepsLength={stepsLength}
              open={open}
              setOpen={setOpen}
            />
            <MainContent
              role={userInfo && userInfo?.accessLevel}
              open={open}
              setOpen={setOpen}
              currentStep={currentStep}
              onWalkthroughClick={handleWalkthroughClick}
            />
            <Modal open={open} onClose={() => setOpen(false)} center>
              <div className="fixed inset-0 flex items-center justify-center z-50 modal_bg">
                <div className="bg-white h-[230px] w-[500px] rounded-lg relative">
                  <div
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <AiOutlineCloseCircle
                      size={25}
                      className="text-brandBlue"
                    />
                  </div>
                  <h2 className="flex justify-center my-6">
                    <Image src={Logo} alt="Logo" width={300} h={350} />
                  </h2>
                  <div className="max-w-[470px] mx-auto mt-12">
                    <div className="">
                      <h2 className="mb-5 text-lg">
                        Do you want to to take a tour?
                      </h2>
                      <div className="flex justify-between ">
                        <div className="flex gap-3">
                          <OrangeButton
                            data-aos="fade-down"
                            className="mb-5 w-fit"
                            onClick={() => {
                              // handleCloseModal()
                              setIsOpen(true);
                            }}
                          >
                            <HiCheck size={20} /> Yes
                          </OrangeButton>

                          <OrangeButton
                            data-aos="fade-down"
                            className="mb-5 w-fit p-2"
                            onClick={() => setOpen(false)}
                          >
                            <RiCloseFill size={20} /> No
                          </OrangeButton>
                        </div>
                        <div>
                          <OrangeButton
                            data-aos="fade-down"
                            className="mb-5 w-fit"
                            onClick={() => {
                              updateUserWalkthrough();
                            }}
                          >
                            Never Show again
                          </OrangeButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </TourProvider>
      )}

      <Footer></Footer>
    </>
  );
};

export default DashboardPageComponent;
