import { HouseIcon, HouseIconBlue } from "../../SvgIconsComponents/HouseIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiHash } from "react-icons/fi";
import {
  DashboardTrainingIcon,
  DashboardTrainingIconWhite,
} from "../../SvgIconsComponents/DashboardTrainingIcon";
import { BrandIcon, BrandIconWhite } from "../../SvgIconsComponents/BrandIcon";
import { UserIcon, UserIconWhite } from "../../SvgIconsComponents/UserIcon";
import { AudioIcon, AudioIconWhite } from "../../SvgIconsComponents/AudioIcon";
import {
  ProgamIcon,
  ProgamIconWhite,
} from "../../SvgIconsComponents/ProgramIcon";
import {
  CurriculumIcon,
  CurriculumIconWhite,
} from "../../SvgIconsComponents/CurriculumIcon";
import { getCurrentUser } from "../../../../store/user.reducer";
import { useSelector } from "react-redux";
import { fetchAPI, getWorkBookReportByUser } from "../../../../lib/api";
import { useEffect, useState } from "react";
import { FaWalking } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import { useTour } from "@reactour/tour";
import { Modal } from "react-responsive-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Logo from "../../../../static/allLogo/fleischer_logo.svg";
// import { FaWalking } from "react-icons/fa";
import OrangeButton from "../../../NewMockupComponents/OrangeButton";
import Image from "next/image";
import axios from "axios";

// const workBookContent = axios.get(
//   "https://api-dev.trustvardi.com/api/v1/workbook"
// );

const NEXT_PUBLIC_STRAPI_URL = "https://fs-strapi.herokuapp.com";

const Sidebar = ({ currentStep, stepsLength }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const currentUser = useSelector(getCurrentUser);
  const [workBookContent, setWorkBookContent] = useState([]);
  const [user, setUser] = useState(currentUser);
  const [completedLessons, setCompletedLessons] = useState([]);
  const userId = user && user.id;
  const router = useRouter();
  const [tocNumber, setTocNumber] = useState(null);
 
  const { setIsOpen } = useTour();

  const items = [
    {
      title: "Dashboard",
      link: "/dashboard",
      roles: ["student", "academic_partner", "admin"],
      innerLink: "",
      icon: (
        <>
          <HouseIcon className="hidden group-hover:block"></HouseIcon>
          <HouseIconBlue className="block group-hover:hidden " />
        </>
      ),
      Activeicon: (
        <>
          <HouseIcon></HouseIcon>
        </>
      ),
      isActive: true,
    },
    {
      title: "Training",
      link: "/training",
      roles: ["academic_partner", "admin"],
      innerLink: "/training/video-detail",
      icon: (
        <>
          <DashboardTrainingIconWhite className="hidden group-hover:block"></DashboardTrainingIconWhite>
          <DashboardTrainingIcon className="block group-hover:hidden "></DashboardTrainingIcon>
        </>
      ),
      Activeicon: (
        <>
          <DashboardTrainingIconWhite></DashboardTrainingIconWhite>
        </>
      ),
    },
    {
      title: "Watch",
      link: "/students/watch",
      roles: ["student"],
      innerLink: "/students/watch/video-detail",
      icon: (
        <>
          <DashboardTrainingIconWhite className="hidden group-hover:block"></DashboardTrainingIconWhite>
          <DashboardTrainingIcon className="block group-hover:hidden "></DashboardTrainingIcon>
        </>
      ),
      Activeicon: (
        <>
          <DashboardTrainingIconWhite></DashboardTrainingIconWhite>
        </>
      ),
    },
    {
      title: "Downloads",
      link: "/downloads",
      roles: ["academic_partner", "admin"],
      innerLink: "",
      icon: (
        <>
          <CurriculumIcon className="block group-hover:hidden "></CurriculumIcon>
          <CurriculumIconWhite className="hidden group-hover:block"></CurriculumIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <CurriculumIconWhite></CurriculumIconWhite>
        </>
      ),
    },
    {
      title: "Downloads",
      link: "/students/downloads",
      roles: ["student"],
      innerLink: "",
      icon: (
        <>
          <CurriculumIcon className="block group-hover:hidden "></CurriculumIcon>
          <CurriculumIconWhite className="hidden group-hover:block"></CurriculumIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <CurriculumIconWhite></CurriculumIconWhite>
        </>
      ),
    },
    {
      title: "My Workbook",
      link: "/students/workbook",
      roles: ["student"],
      innerLink: "",
      icon: (
        <>
          <ProgamIcon className="block mt-1 group-hover:hidden"></ProgamIcon>
          <ProgamIconWhite className="hidden mt-1 group-hover:block"></ProgamIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <ProgamIconWhite className="mt-1"></ProgamIconWhite>
        </>
      ),
    },
    {
      title: "Teachers Guide",
      link: `/academic-partners/teachers-guide`,
      roles: ["academic_partner"],
      innerLink: "",
      icon: (
        <>
          <ProgamIcon className="block mt-1 group-hover:hidden"></ProgamIcon>
          <ProgamIconWhite className="hidden mt-1 group-hover:block"></ProgamIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <ProgamIconWhite className="mt-1"></ProgamIconWhite>
        </>
      ),
    },
    {
      title: "Workbook",
      link: `/faculty/workbook/${
        user && user?.university && user?.university?.id
      }`,
      roles: ["academic_partner"],
      innerLink: "",
      icon: (
        <>
          <ProgamIcon className="block mt-1 group-hover:hidden"></ProgamIcon>
          <ProgamIconWhite className="hidden mt-1 group-hover:block"></ProgamIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <ProgamIconWhite className="mt-1"></ProgamIconWhite>
        </>
      ),
    },
    {
      title: "Workbook",
      link: `/admin/workbook`,
      roles: ["admin"],
      innerLink: "",
      icon: (
        <>
          <ProgamIcon className="block mt-1 group-hover:hidden"></ProgamIcon>
          <ProgamIconWhite className="hidden mt-1 group-hover:block"></ProgamIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <ProgamIconWhite className="mt-1"></ProgamIconWhite>
        </>
      ),
    },
    {
      title: "Student Wallet",
      link: "/students/student-wallet",
      roles: ["student"],
      innerLink: "",
      icon: (
        <>
          <CurriculumIcon className="block group-hover:hidden "></CurriculumIcon>
          <CurriculumIconWhite className="hidden group-hover:block"></CurriculumIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <CurriculumIconWhite></CurriculumIconWhite>
        </>
      ),
    },
    {
      title: "Mental Balance Sheet",
      link: "/students/mental-balance-sheet",
      roles: ["student"],
      innerLink: "",
      icon: (
        <>
          <ProgamIcon className="block mt-1 group-hover:hidden"></ProgamIcon>
          <ProgamIconWhite className="hidden mt-1 group-hover:block"></ProgamIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <ProgamIconWhite className="mt-1"></ProgamIconWhite>
        </>
      ),
    },
    {
      title: "Branding",
      link: "/branding-guidelines",
      roles: ["academic_partner", "admin"],
      innerLink: "",
      icon: (
        <>
          <BrandIcon className="block group-hover:hidden "></BrandIcon>
          <BrandIconWhite className="hidden group-hover:block"></BrandIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <BrandIconWhite className=""></BrandIconWhite>
        </>
      ),
    },
    {
      title: "Manage Users",
      link: `/admin/users?university=${
        user && user?.university && user?.university?.id
      }`,
      roles: ["academic_partner"],
      innerLink: "",
      icon: (
        <>
          <UserIcon className="block group-hover:hidden "></UserIcon>
          <UserIconWhite className="hidden group-hover:block"></UserIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <UserIconWhite className=""></UserIconWhite>
        </>
      ),
    },
    {
      title: "Manage Users",
      link: `/admin/users`,
      roles: ["admin"],
      innerLink: "",
      icon: (
        <>
          <UserIcon className="block group-hover:hidden "></UserIcon>
          <UserIconWhite className="hidden group-hover:block"></UserIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <UserIconWhite className=""></UserIconWhite>
        </>
      ),
    },
    {
      title: "Audio Book",
      link: "/students/listen",
      roles: ["student"],
      innerLink: "",
      icon: (
        <>
          <AudioIcon className="block group-hover:hidden "></AudioIcon>
          <AudioIconWhite className="hidden group-hover:block"></AudioIconWhite>
        </>
      ),
      Activeicon: (
        <>
          <AudioIconWhite className=""></AudioIconWhite>
        </>
      ),
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchAPI("/workbook-chapters", {
          sort: ["tocNumber:asc"],
          populate: "*",
        });
        setWorkBookContent(response);
        const workBookReportByUser = await getWorkBookReportByUser(userId);
        if (
          workBookReportByUser &&
          workBookReportByUser?.data &&
          workBookReportByUser?.data.length > 0
        ) {
          let workBookReportItem = workBookReportByUser?.data[0].attributes;
          let completedLessonsAPI = workBookReportItem.completedLessons
            ? JSON.parse(workBookReportItem.completedLessons)
            : [];
          if (!Array.isArray(completedLessonsAPI)) {
            // If parsed value is not an array, create a new array with the value
            completedLessonsAPI = [completedLessonsAPI];
          }
          // let unlockedLessonsAPI = JSON.parse(
          //   workBookReportItem.unlockedLessons
          // );
          setCompletedLessons(completedLessonsAPI);
          // setUnLockedLessons(unlockedLessonsAPI);
          // setWorkBookAPI(workBookReportItem);
        }
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [userId]);

  useEffect(() => {
    const storedTocNumber = localStorage.getItem("token");
    if (storedTocNumber) {
      setTocNumber(Number(storedTocNumber));
      // setOpen(true);
    }
  }, []);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

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

  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="fixed inset-0 flex items-center justify-center z-50 modal_bg">
          <div className="bg-white h-[230px] w-[500px] rounded-lg relative">
            <div
              className="absolute right-3 top-3 cursor-pointer"
              onClick={onCloseModal}
            >
              <AiOutlineCloseCircle size={25} className="text-brandBlue" />
            </div>
            <h2 className="flex justify-center my-6">
              <Image src={Logo} alt="Logo" width={300} h={350} />
            </h2>
            <div className="max-w-[470px] mx-auto mt-12">
              <div className="">
                <h2 className="mb-5 text-lg">
                  Do you want to continue the tour?
                </h2>
                <div className="flex justify-between ">
                  <div className="flex gap-3">
                    <OrangeButton
                      data-aos="fade-down"
                      className="mb-5 w-fit"
                      onClick={() => {
                        onCloseModal();
                        setIsOpen(true);
                      }}
                    >
                      <HiCheck size={20} /> Yes
                    </OrangeButton>

                    <OrangeButton
                      data-aos="fade-down"
                      className="mb-5 w-fit p-2"
                      onClick={onCloseModal}
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
                      Never Show Again
                    </OrangeButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="lg:p-10 p-2 bg-sky-200 lg:w-[25%] lg:h-[calc(100vh_-4010px)]  grid lg:grid-rows-[440px_1fr] lg:grid-cols-none items-center lg:items-start ">
        <div data-aos="fade-up">
          <ul className="flex flex-wrap justify-center lg:flex-col lg:gap-2 md:gap-4">
            {user &&
              user?.accessLevel &&
              items
                .filter((item) => item.roles.includes(user?.accessLevel))
                .map((item, index) => {
                  if (
                    item.title == "Mental Balance Sheet" &&
                    !completedLessons?.includes(2.4)
                  ) {
                    return (
                      <li
                        className={`flex transition group justify-between cursor-pointer font-bold gap-3 ${
                          router.asPath.includes(item.link)
                            ? `p-[12px] lg:bg-brandBlue lg:text-white rounded-md text-brandBlueDark ${item.title.replace(
                                /\s+/g,
                                ""
                              )}`
                            : `p-[12px] hover:bg-brandBlue text-brandBlue rounded-md hover:text-white  ${item.title.replace(
                                /\s+/g,
                                ""
                              )}`
                        }`}
                        key={index}
                      >
                        <Link
                          href={"/students/workbook?lessonId=2.4&&chapterId=2"}
                        >
                          <a
                           
                            className={`w-full flex transition group justify-between cursor-pointer font-bold gap-3 
                    `}
                          >
                            <div className="flex gap-1 lg:gap-2 items-center">
                              <div
                                className={`${
                                  router.asPath.includes(item.link)
                                    ? "fill-white"
                                    : "fill-white"
                                } group-hover:fill-white hidden lg:block`}
                              >
                                {router.asPath.includes(item.link)
                                  ? item.Activeicon
                                  : item.icon}
                              </div>
                              {/* <a className="">{item.title}</a> */}
                              {/* <span className="step-number">{index + 1}</span> */}
                              <span className="step-title">{item.title}</span>
                            </div>
                            <img
                              className="lg:hidden lg:group-hover:block hidden w-[7px]"
                              src="/static/img/angleRight.svg"
                            />
                            <img
                              src={`/static/img/${
                                router.asPath.includes(item.link)
                                  ? "angleRight.svg"
                                  : "arrow-right-blue.svg"
                              }`}
                              className="w-[7px] lg:block lg:group-hover:hidden  hidden"
                            />
                          </a>
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li
                      className={`flex transition group justify-between cursor-pointer font-bold gap-3 ${
                        router.asPath.includes(item.link)
                          ? `p-[12px] lg:bg-brandBlue lg:text-white rounded-md text-brandBlueDark ${item.title.replace(
                              /\s+/g,
                              ""
                            )}`
                          : `p-[12px] hover:bg-brandBlue text-brandBlue rounded-md hover:text-white ${item.title.replace(
                              /\s+/g,
                              ""
                            )}`
                      }`}
                      key={index}
                    >
                      <Link href={item.link}>
                        <a
                          className={`w-full flex transition group justify-between cursor-pointer font-bold gap-3 
                    `}
                        >
                          <div className="flex gap-1 lg:gap-2 items-center">
                            <div
                              className={`${
                                router.asPath.includes(item.link)
                                  ? "fill-white"
                                  : "fill-white"
                              } group-hover:fill-white hidden lg:block`}
                            >
                              {router.asPath.includes(item.link)
                                ? item.Activeicon
                                : item.icon}
                            </div>
                            {/* <a className="">{item.title}</a> */}
                            {/* <span className="step-number">{index + 1}</span> */}
                            <span className="step-title">{item.title}</span>
                          </div>
                          <img
                            className="lg:hidden lg:group-hover:block hidden w-[7px]"
                            src="/static/img/angleRight.svg"
                          />
                          <img
                            src={`/static/img/${
                              router.asPath.includes(item.link)
                                ? "angleRight.svg"
                                : "arrow-right-blue.svg"
                            }`}
                            className="w-[7px] lg:block lg:group-hover:hidden  hidden"
                          />
                        </a>
                      </Link>
                    </li>
                  );
                })}
          </ul>
        </div>

        <div
          className="flex justify-center flex-col text-brandBlue w-[70%] mx-auto gap-3 items-center text-center self-end"
          data-aos="fade-down"
        >
          <h3 className="font-medium text-md">Need some help?</h3>
          <p>We are here for you. Click below for assistance.</p>
          {typeof window !== "undefined" && (
            <button
              className="flex p-2 rounded-xl text-brandBlue justify-between bg-[#C8DDEB] gap-5"
              onClick={(e) => {
                window.location.href = "mailto:amandam@fleischer.org";
                e.preventDefault();
              }}
            >
              <img
                src="/static/img/questionMarkIcon.svg"
                className="w-[25px]"
              />
              Assistance
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const workBookContent = await fetchAPI("/workbook-chapters", {
    sort: ["tocNumber:asc"],
    populate: "*",
  });
  return {
    props: { workBookContent },
  };
}

export default Sidebar;
