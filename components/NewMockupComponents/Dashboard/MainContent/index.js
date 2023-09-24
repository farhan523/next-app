import { useRouter } from "next/router";
import BlueButton from "../../BlueBotton";
import OrangeButton from "../../OrangeButton";
import { useTour } from "@reactour/tour";
import { Modal } from "react-responsive-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Logo from "../../../../static/allLogo/fleischer_logo.svg";
// import { FaWalking } from "react-icons/fa";
import Image from "next/image";
import { HiCheck } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { useEffect, useState } from "react";

const adminSteps = [
  {
    title: "Invite Other Faculty Members",
    description:
      "Invite other faculty members to My Fleischer Scholars as an Academic Partner.",
    step: 1,
  },
  {
    title: "Learn More About Fleischer Scholars",
    description: "Watch videos about the program to learn more.",
    step: 2,
  },
  {
    title: "Download Assets",
    description:
      "Download videos, PDFs, audio files, branding assets and more.",
    step: 3,
  },
];
const academicSteps = [
  {
    title: "Let's Start",
    description: "Let's take a tour to the Dashboard.",
    step: 1,
  },
  {
    title: "Invite Other Faculty Members",
    description:
      "Invite other faculty members to My Fleischer Scholars as an Academic Partner.",
    step: 2,
  },
  {
    title: "Learn More About Fleischer Scholars",
    description: "Watch videos about the program to learn more.",
    step: 3,
  },
  {
    title: "Download Assets",
    description:
      "Download videos, PDFs, audio files, branding assets and more.",
    step: 4,
  },
];

const studentSteps = [
  {
    title: "Let's Start",
    description: "Let's take a tour to the Dashboard.",
    step: 1,
  },
  {
    title: "Learn More",
    description: "Watch videos about the program to learn more.",
    step: 2,
  },

  {
    title: "Fleischer Scholars Workbook",
    description:
      "Complete the My Fleischer Scholars workbook. Here you will also complete your Mental Balance Sheet.",
    step: 3,
  },
  {
    title: "Downloads",
    description:
      "Fleischer Scholars materials are available to download directly from the Downloads page. ",
    step: 4,
  },
  {
    title: "StudentWallet",
    description:
      "Join StudentWallet and mine for scholarships for a step towards graduating debt-free!",
    step: 5,
  },
];

const MainContent = ({ role, currentStep }) => {
  const [startClicked, setStartClicked] = useState(false);
  const [learnMoreClick, setLearnMoreClick] = useState(false);
  const [startWorkbook, setStartWorkbook] = useState(false);
  const [download, setDownload] = useState(false);
  const [studentWallet, setStudentWallet] = useState(false);
  const [open, setOpen] = useState(false);

  // FACULTY STATES
  const [startFacultyClicked, setFacultyStartClicked] = useState(false);
  const [inviteFacultyClick, setInviteFacultyClick] = useState(false);
  const [inviteStudentClick, setInviteStudentClick] = useState(false);
  const [facuktyLearnMoreClick, setFacuktyLearnMoreClick] = useState(false);
  const [facultyDownloadClick, setFacultyDownloadClick] = useState(false);

  const router = useRouter();

  const { setIsOpen } = useTour();

  const neverShowMe = () => {
    localStorage.setItem("startClicked", JSON.stringify(true));
    setStartClicked(true);
    setOpen(false);
  };
  const neverShowMeFaculty = () => {
    localStorage.setItem("startFacultyClicked", JSON.stringify(true));
    setFacultyStartClicked(true);
    setOpen(false);
  };

  useEffect(() => {
    if (currentStep === 5) {
      localStorage.setItem("startClicked", JSON.stringify(true));
      setStartClicked(true);
      setOpen(false);
    }
  }, [currentStep]);

  // START CLICK
  useEffect(() => {
    const storedStartClicked = localStorage.getItem("startClicked");
    if (storedStartClicked) {
      setStartClicked(JSON.parse(storedStartClicked));
    }
  }, []);

  // LEARN MORE CLICK
  useEffect(() => {
    const storedLearnMoreClick = localStorage.getItem("learnMoreClick");
    if (storedLearnMoreClick) {
      setLearnMoreClick(JSON.parse(storedLearnMoreClick));
    }
  }, []);

  // WORKBOOK CLICK
  useEffect(() => {
    const storedStartWorkbook = localStorage.getItem("startWorkbook");
    if (storedStartWorkbook) {
      setStartWorkbook(JSON.parse(storedStartWorkbook));
    }
  }, []);

  // DOWNLOAD CLICK
  useEffect(() => {
    const storedDownload = localStorage.getItem("download");
    if (storedDownload) {
      setDownload(JSON.parse(storedDownload));
    }
  }, []);

  // STUDENTWALLET CLICK
  useEffect(() => {
    const storedStudentWallet = localStorage.getItem("studentWallet");
    if (storedStudentWallet) {
      setStudentWallet(JSON.parse(storedStudentWallet));
    }
  }, []);

  // FACULTY PARTNER VIEW
  useEffect(() => {
    if (currentStep === 5) {
      localStorage.setItem("startFacultyClicked", JSON.stringify(true));
      setFacultyStartClicked(true);
      setOpen(false);
    }
  }, [currentStep]);

  // FACUTLY START CLICK
  useEffect(() => {
    const storedStartClicked = localStorage.getItem("startFacultyClicked");
    if (storedStartClicked) {
      setFacultyStartClicked(JSON.parse(storedStartClicked));
    }
  }, []);

  // FACULTY INVITE CLICK
  useEffect(() => {
    const storedInviteFacultyClick = localStorage.getItem("inviteFacultyClick");
    if (storedInviteFacultyClick) {
      setInviteFacultyClick(JSON.parse(storedInviteFacultyClick));
    }
  }, []);

  // FACULTY STUDENT INVITE CLICK
  useEffect(() => {
    const storedInviteStudentClick = localStorage.getItem("inviteStudentClick");
    if (storedInviteStudentClick) {
      setInviteStudentClick(JSON.parse(storedInviteStudentClick));
    }
  }, []);

  // FACULTY LEARN MORE CLICK
  useEffect(() => {
    const storedFacuktyLearnMoreClick = localStorage.getItem(
      "facuktyLearnMoreClick"
    );
    if (storedFacuktyLearnMoreClick) {
      setFacuktyLearnMoreClick(JSON.parse(storedFacuktyLearnMoreClick));
    }
  }, []);

  // FACULTY DOWNLOAD CLICK
  useEffect(() => {
    const storedFacuktyDownloadClick = localStorage.getItem(
      "facultyDownloadClick"
    );
    if (storedFacuktyDownloadClick) {
      setFacultyDownloadClick(JSON.parse(storedFacuktyDownloadClick));
    }
  }, []);

  const updateUserWalkthrough = async () => {
    try {
      const updatedUser = {
        ...user,
        walkthrough: true,
      };

      const url = ` ${NEXT_PUBLIC_STRAPI_URL}/api/users/${user.id}`;

      const response = await axios.put(url, updatedUser);

      setUser(response.data);
    } catch (error) {
      console.error("Error updating user walkthrough:", error.message);
    }
    setOpen(false);
  };

  const AdminView = () => {
    return (
      <div className=" mt-[30px] relative  before:contents-[''] before:absolute before:blur-[100px] before:bg-brandBlueLighten before:right-[0] before:top-[-120px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1]">
        <div className="2xl:w-[50%] xl:w-[70%] w-[80%] mx-auto">
          <div className="mt-[15px]">
            <div>
              <h1 className="ml-2 text-xl font-medium text-brandBlue1">
                {" "}
                Welcome to My Fleischer Scholars for Academic Partners
              </h1>
            </div>
          </div>
          <div className="grid lg:grid-cols-[50px_1fr]  mt-[60px] ">
            <div className="hidden md:block">
              <div className="border-l-[1px] border-brandBlue h-[90%]	"></div>
            </div>
            <div>
              {adminSteps.map((items, index) => {
                return (
                  <div className=" mb-[20px] relative">
                    <div
                      className={`hidden md:flex absolute ${
                        items.isActive
                          ? "bg-brandBlue text-white"
                          : "bg-white text-brandBlue "
                      } items-center justify-center left-[-75px] text-[24px] font-semibold w-[50px] h-[50px] rounded-full border-[2px] border-brandBlue`}
                    >
                      {index + 1}
                    </div>
                    <h2 className="text-xl font-medium text-brandBlue1">
                      {items.title}
                    </h2>
                    <p className="text-sm font-normal text-brandBlack">
                      {items.description}
                    </p>
                    {items.step === 1 ? (
                      <div className="md:p-10 p-1">
                        <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                          <BlueButton
                            IconRight={"/static/img/external-link.svg"}
                            className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                            onClick={() => router.push("/invite-user")}
                          >
                            Invite Faculty Member(s)
                          </BlueButton>
                          <BlueButton
                            IconRight={"/static/img/external-link.svg"}
                            className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                            onClick={() => router.push("/students/invite-user")}
                          >
                            Invite Students
                          </BlueButton>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {items.step === 2 ? (
                      <div className="md:p-10 p-1">
                        <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                          <BlueButton
                            IconRight={"/static/img/external-link.svg"}
                            className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                            onClick={() => router.push("/training")}
                          >
                            About the Program
                          </BlueButton>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {items.step === 3 ? (
                      <div className="md:p-10 p-1">
                        <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                          <BlueButton
                            IconRight={"/static/img/external-link.svg"}
                            className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                            onClick={() => router.push("/downloads")}
                          >
                            Downloads
                          </BlueButton>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </div>
    );
  };

  const AcademicPartnerView = () => {
    return (
      <>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          center
          showCloseIcon={false}
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
              backgroundColor: "none !important",
            },
          }}
        >
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white h-[230px] w-[500px] rounded-lg relative">
              <div
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <AiOutlineCloseCircle size={25} className="text-brandBlue" />
              </div>
              <h2 className="flex justify-center my-6">
                <Image src={Logo} alt="Logo" width={300} h={350} />
              </h2>
              <div className="max-w-[470px] mx-auto mt-12">
                <div className="">
                  <h2 className="mb-5 text-lg">Do you want to take a tour?</h2>
                  <div className="flex justify-between ">
                    <div className="flex gap-3">
                      <OrangeButton
                        data-aos="fade-down"
                        className="mb-5 w-fit"
                        onClick={() => {
                          setOpen(false);
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
                        onClick={() => neverShowMeFaculty()}
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
        <div className=" mt-[30px] relative  before:contents-[''] before:absolute before:blur-[100px]   before:bg-brandBlueLighten before:right-[0] before:top-[-120px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1]">
          <div className="2xl:w-[50%] xl:w-[70%] w-[80%] mx-auto">
            <div className="mt-[15px]">
              <div>
                <h1 className="ml-2 text-xl font-medium text-brandBlue1">
                  {" "}
                  Welcome to My Fleischer Scholars for Academic Partners
                </h1>
              </div>
            </div>
            <div className="grid lg:grid-cols-[50px_1fr]  mt-[60px] ">
              <div className="hidden md:block">
                <div className="border-l-[1px] border-brandBlue h-[90%]	"></div>
              </div>
              <div>
                {academicSteps.map((items, index) => {
                  return (
                    <div className=" mb-[20px] relative">
                      <div
                        className={`hidden md:flex absolute ${
                          ((items.step === 1 || currentStep === 6) &&
                            startFacultyClicked) ||
                          (items.step === 2 && inviteFacultyClick) ||
                          (items.step === 2 && inviteStudentClick) ||
                          (items.step === 3 && facuktyLearnMoreClick) ||
                          (items.step === 4 && facultyDownloadClick)
                            ? "bg-brandBlue text-white"
                            : "bg-white text-brandBlue "
                        } items-center justify-center left-[-75px] text-[24px] font-semibold w-[50px] h-[50px] rounded-full border-[2px] border-brandBlue`}
                      >
                        {index + 1}
                      </div>
                      <h2
                        className={`text-xl font-medium text-brandBlue1 ${
                          (items.step === 1 && startFacultyClicked) ||
                          (items.step === 2 && inviteFacultyClick) ||
                          (items.step === 2 && inviteStudentClick) ||
                          (items.step === 3 && facuktyLearnMoreClick) ||
                          (items.step === 4 && facultyDownloadClick)
                            ? "line-through"
                            : ""
                        }`}
                      >
                        {items.title}
                      </h2>
                      <p className="text-sm font-normal text-brandBlack">
                        {items.description}
                      </p>
                      {items.step === 1 ? (
                        <div className="md:p-10 p-1">
                          <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                            <OrangeButton
                              // IconRight={"/static/img/external-link.svg"}
                              className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	rounded-[12px]"
                              onClick={() => {
                                setOpen(true);
                              }}
                            >
                              Let's Start
                            </OrangeButton>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {items.step === 2 ? (
                        <div className="md:p-10 p-1">
                          <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                            <BlueButton
                              IconRight={"/static/img/external-link.svg"}
                              className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                              onClick={() => {
                                router.push(
                                  "/academic-partners/invite-faculty"
                                );
                                localStorage.setItem(
                                  "inviteFacultyClick",
                                  JSON.stringify(true)
                                );
                                setInviteFacultyClick(true);
                              }}
                            >
                              Invite Faculty Member(s)
                            </BlueButton>
                            <BlueButton
                              IconRight={"/static/img/external-link.svg"}
                              className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                              onClick={() => {
                                router.push(
                                  "/academic-partners/invite-student"
                                );
                                localStorage.setItem(
                                  "inviteStudentClick",
                                  JSON.stringify(true)
                                );
                                setInviteStudentClick(true);
                              }}
                            >
                              Invite Students
                            </BlueButton>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {items.step === 3 ? (
                        <div className="md:p-10 p-1">
                          <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                            <BlueButton
                              IconRight={"/static/img/external-link.svg"}
                              className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                              onClick={() => {
                                router.push("/training");
                                localStorage.setItem(
                                  "facuktyLearnMoreClick",
                                  JSON.stringify(true)
                                );
                                setFacuktyLearnMoreClick(true);
                              }}
                            >
                              About the Program
                            </BlueButton>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {items.step === 4 ? (
                        <div className="md:p-10 p-1">
                          <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                            <BlueButton
                              IconRight={"/static/img/external-link.svg"}
                              className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                              onClick={() => {
                                router.push("/downloads");
                                localStorage.setItem(
                                  "facultyDownloadClick",
                                  JSON.stringify(true)
                                );
                                setFacultyDownloadClick(true);
                              }}
                            >
                              Downloads
                            </BlueButton>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>AOS.init();</script>
        </div>
      </>
    );
  };

  const StudentView = () => {
    return (
      <>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          center
          showCloseIcon={false}
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
              backgroundColor: "none !important",
            },
          }}
        >
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white h-[230px] w-[500px] rounded-lg relative">
              <div
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <AiOutlineCloseCircle size={25} className="text-brandBlue" />
              </div>
              <h2 className="flex justify-center my-6">
                <Image src={Logo} alt="Logo" width={300} h={350} />
              </h2>
              <div className="max-w-[470px] mx-auto mt-12">
                <div className="">
                  <h2 className="mb-5 text-lg">Do you want to take a tour?</h2>
                  <div className="flex justify-between ">
                    <div className="flex gap-3">
                      <OrangeButton
                        data-aos="fade-down"
                        className="mb-5 w-fit"
                        onClick={() => {
                          setOpen(false);
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
                        onClick={() => neverShowMe()}
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
        <div className=" mt-[30px] relative  before:contents-[''] before:absolute before:blur-[100px]   before:bg-brandBlueLighten before:right-[0] before:top-[-120px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1]">
          <div className="2xl:w-[60%] xl:w-[80%] w-[80%] mx-auto">
            <div className="mt-[15px]">
              {/* <div data-aos="fade-down"> */}
              <h1 className="ml-2 text-xl font-medium text-brandBlue1">
                Welcome to My Fleischer Scholars
              </h1>
              {/* </div> */}
            </div>
            <div className="grid lg:grid-cols-[50px_1fr]  mt-[60px] ">
              <div className="hidden md:block">
                <div className="border-l-[1px] border-brandBlue h-[90%]	"></div>
              </div>
              <div>
                {studentSteps.map((items, index) => {
                  return (
                    <div className=" mb-[20px] relative">
                      <div
                        className={`hidden md:flex absolute ${
                          ((items.step === 1 || currentStep === 6) &&
                            startClicked) ||
                          (items.step === 2 && learnMoreClick) ||
                          (items.step === 3 && startWorkbook) ||
                          (items.step === 4 && download) ||
                          (items.step === 5 && studentWallet)
                            ? "bg-brandBlue text-white"
                            : "bg-white text-brandBlue "
                        } items-center justify-center left-[-75px] text-[24px] font-semibold w-[50px] h-[50px] rounded-full border-[2px] border-brandBlue`}
                      >
                        {index + 1}
                      </div>
                      {/* <h2 className="text-xl font-medium text-brandBlue1"> */}
                      <h2
                        className={`text-xl font-medium text-brandBlue1 ${
                          (items.step === 1 && startClicked) ||
                          (items.step === 2 && learnMoreClick) ||
                          (items.step === 3 && startWorkbook) ||
                          (items.step === 4 && download) ||
                          (items.step === 5 && studentWallet)
                            ? "line-through"
                            : ""
                        }`}
                      >
                        {items.title}
                      </h2>
                      <p className="text-sm font-normal text-brandBlack">
                        {items.description}
                      </p>
                      {items.step === 1 ? (
                        <div className="md:p-10 p-1">
                          <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                            <OrangeButton
                              // IconRight={"/static/img/external-link.svg"}
                              className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	rounded-[12px]"
                              onClick={() => {
                                setOpen(true);
                              }}
                            >
                              Let's Start
                            </OrangeButton>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {items.step === 2 ? (
                        <div className="md:p-10 p-1">
                          <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                            <BlueButton
                              IconRight={"/static/img/external-link.svg"}
                              className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                              onClick={() => {
                                router.push("/students/watch");
                                localStorage.setItem(
                                  "learnMoreClick",
                                  JSON.stringify(true)
                                );
                                setLearnMoreClick(true);
                              }}
                            >
                              Click Here to Watch
                            </BlueButton>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {items.step === 3 ? (
                        <div className="md:p-10 p-1">
                          <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                            <BlueButton
                              IconRight={"/static/img/external-link.svg"}
                              className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                              onClick={() => {
                                router.push("/students/workbook");
                                localStorage.setItem(
                                  "startWorkbook",
                                  JSON.stringify(true)
                                );
                                setStartWorkbook(true);
                              }}
                            >
                              Start My Workbook
                            </BlueButton>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {items.step === 4 ? (
                        <div className="md:p-10 p-1">
                          <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                            <BlueButton
                              IconRight={"/static/img/external-link.svg"}
                              className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                              onClick={() => {
                                router.push("/students/downloads");
                                localStorage.setItem(
                                  "download",
                                  JSON.stringify(true)
                                );
                                setDownload(true);
                              }}
                            >
                              Downloads
                            </BlueButton>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {items.step === 5 ? (
                        <div className="md:p-10 p-1">
                          <div className="flex flex-col md:flex-row 2xl:max-w-[590px] max-w-[500px] gap-5 justify-between ">
                            <BlueButton
                              IconRight={"/static/img/external-link.svg"}
                              className="max-w-[350px]  2xl:text-[15px] text-[13px] whitespace-nowrap	"
                              onClick={() => {
                                router.push("/students/watch/video-detail/5");
                                localStorage.setItem(
                                  "studentWallet",
                                  JSON.stringify(true)
                                );
                                setStudentWallet(true);
                              }}
                            >
                              Learn more about StudentWallet
                            </BlueButton>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>AOS.init();</script>
        </div>
      </>
    );
  };

  if (role === "student") {
    return <StudentView />;
  } else if (role === "academic_partner") {
    return <AcademicPartnerView />;
  } else if (role === "admin") {
    return <AdminView />;
  } else {
    return <h1>Loading...</h1>;
  }
};

export default MainContent;
