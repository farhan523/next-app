import { useMutation } from "@apollo/client";
import axios from "axios";
import { useFormik } from "formik";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../../../graphql/queries/user/queries";
import {
  fetchAPI,
  inviteUserAPI,
  reinvitationUser,
  updateUser,
} from "../../../../lib/api";
import Logo from "../../../../static/allLogo/fleischer_logo.svg";
import {
  getCurrentUser,
  getIsAuthenticated,
} from "../../../../store/user.reducer";
import {
  AlertMessageContainer,
  ErrorLabel,
  ErrorMessageText,
} from "../../InviteByFacultyComponent/styles";
import { INVITE_BY_FACULTY_SCHEMA } from "../../InviteByFacultyComponent/validationSchema";
import { FORGET_PASSWORD_SCHEMA } from "../../InviteUserComponent/validationSchema";
import OrangeButton from "../../OrangeButton";
import { ArrowDown } from "../../SvgIconsComponents/ArrowDown";
import { ExportIcon } from "../../SvgIconsComponents/ExportIcon";
import RefreshIcon from "../../SvgIconsComponents/RefreshIcon";
import { UserIcon } from "../../SvgIconsComponents/UserIcon";
import ConfirmationModal from "../../../ConfirmationModal";

const AllUsersContent = ({
  allUsers,
  universities,
  allUsersData,
  usaStates,
}) => {
  const csvLinkRef = useRef(null);
  const inviteRef = useRef(null);

  const currentUser = useSelector(getCurrentUser);
  const [lessonStatesLength, setLessonStatesLength] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 10;
  const router = useRouter();
  const [newStModalOpen, setnewStModalOpen] = useState(false);
  const [universitiesOptions, setUniversityOptions] = useState(null);
  const [modalItem, setModalItem] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportRole, setExportRole] = useState(null);
  const [exportUniversityId, setExportUniveristyId] = useState(null);
  const [exportableDataState, setExportableData] = useState(null);
  const [dataByType, setExportDataByType] = useState(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [formloading, setFormLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [reinviteLoading, setReinviteLoading] = useState(false);
  const [cancellInviteLoading, setCancellInviteLoading] = useState(false);
  const [reinviteModal, setReinviteModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [onReinviteConfirm, setOnReinviteConfirm] = useState(false);
  const [onCancelInviteConfirm, setOnCancelInviteConfirm] = useState(false);
  const [alert, setAlert] = useState({
    type: "error",
    text: "This is an alert message",
    show: false,
  });

  const dispatch = useDispatch();

  const [login, { data, loading }] = useMutation(LoginUser);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmitForm = (e) => {
    formik.handleSubmit(e);
  };

  const onShowAlert = (type, text) => {
    setAlert({
      type: type,
      text: text,
      show: true,
    });
  };

  const isAuthenticated = useSelector(getIsAuthenticated);

  const formik = useFormik({
    initialValues:
      currentUser?.accessLevel === "admin"
        ? {
            name: "",
            email: "",
            usaState: "",
            university: "",
          }
        : {
            name: "",
            email: "",
          },
    validationSchema:
      currentUser?.accessLevel === "admin"
        ? FORGET_PASSWORD_SCHEMA
        : INVITE_BY_FACULTY_SCHEMA,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => handleSubmit(),
  });

  const handleSubmit = async () => {
    // e.preventDefault();
    setError("");
    setFormLoading(true);
    let fileId;
    let uploadResponse = null;
    try {
      if (selectedFile) {
        let file = new FormData();
        file.append("files", selectedFile);
        uploadResponse = await axios.post(
          "https://fs-strapi.herokuapp.com/api/upload",
          file
        );
      }

      const data = {
        email: formik.values.email,
        name: formik.values.name,
        usa_state: formik.values.usaState
          ? Number(formik.values.usaState)
          : currentUser?.usa_state?.id
          ? currentUser?.usa_state?.id
          : 1,
        university: formik.values.university
          ? Number(formik.values.university)
          : currentUser?.university?.id
          ? currentUser?.university?.id
          : 1,
        role: modalItem,
        attachment: uploadResponse ? uploadResponse?.data[0] : null,
      };

      const response = await inviteUserAPI(data);
      if (response && response?.data) {
        setFormLoading(false);
        setEmailSuccess(true);
        router.push(router);
      } else {
        setFormLoading(false);
        setError("Email is already registered");
      }
    } catch (error) {
      setFormLoading(false);
      if (!formik.errors.email) {
        onShowAlert(
          "error",
          "The email and password combination is not correct."
        );
      }
    }
  };

  const onReinviteUser = async (user) => {
    setReinviteLoading(true);

    try {
      const loginResponse = await login({
        variables: {
          email: user.email,
          password: "testpassword",
        },
      });

      if (loginResponse?.data) {
        const body = {
          username: user.username,
          email: user.email,
          jwt: loginResponse?.data?.login?.jwt,
          accessLevel: user.accessLevel,
        };
        const response = await reinvitationUser(body);
        if (response && response?.data) {
          setReinviteLoading(false);
          setReinviteModal(true);
          setOnReinviteConfirm(false);
        }
      }
    } catch (error) {
      setReinviteLoading(false);
      console.log("ERROR IN REINVITE", error);
    }
  };

  const onCancelledInvite = async (user) => {
    setCancellInviteLoading(true);
    try {
      const body = {
        status: "Cancelled",
      };
      const updateUserResponse = await updateUser(user.id, body);
      if (updateUserResponse && updateUserResponse?.data) {
        window.location.reload();
      }
    } catch (error) {
      setCancellInviteLoading(false);
      console.log("ERROR IN CANCELLED INVITE", error);
    }
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      if (!searchKey && router.query.search) {
        delete router.query.search;
        router.push(router);
      } else if (!searchKey) {
        return;
      } else {
        router.query.search = searchKey;
        router.push(router);
      }
    }
  };

  const handleFilterByRole = (e) => {
    if (e.target.value === "All") {
      delete router.query.role;
      router.push(router);
    } else {
      router.query.role = e.target.value;
      router.push(router);
    }
  };

  const handleFilterByStatus = (e) => {
    if (e.target.value === "All") {
      delete router.query.status;
      router.push(router);
    } else {
      router.query.status = e.target.value;
      router.push(router);
    }
  };

  const handleFilterByUniversity = (e) => {
    if (e.target.value === "All") {
      delete router.query.university;
      router.push(router);
    } else {
      router.query.university = e.target.value;
      router.push(router);
    }
  };

  const filterExportByRole = async (e) => {
    const role = e.target.value;
    if (role === "All") {
      setExportRole(null);
    } else {
      setExportRole(role);
    }

    // const StatusFilteredData = await fetchData(status !== "All" ? status : null, null)
  };

  const filterExportByUniversity = async (e) => {
    const university = e.target.value;
    if (university === "All") {
      setExportUniveristyId(null);
    } else {
      setExportUniveristyId(university);
    }
  };

  const fetchData = async () => {
    let allUsers = {};
    if (currentUser && currentUser.accessLevel === "academic_partner") {
      setExportUniveristyId(currentUser?.university?.id);
      if (exportRole) {
        allUsers = await fetchAPI("/users", {
          filters: {
            $and: [
              exportRole && {
                accessLevel: {
                  $contains: exportRole,
                },
              },
              {
                university: {
                  id: currentUser?.university?.id,
                },
              },
            ],
          },
          populate: "*",
        });
      } else {
        allUsers = await fetchAPI("/users", {
          filters: {
            $and: [
              {
                university: {
                  id: currentUser?.university?.id,
                },
              },
            ],
          },
          populate: "*",
        });
      }
    } else if (exportRole && exportUniversityId) {
      allUsers = await fetchAPI("/users", {
        filters: {
          $and: [
            exportRole && {
              accessLevel: {
                $contains: exportRole,
              },
            },
            exportUniversityId && {
              university: {
                id: exportUniversityId,
              },
            },
          ],
        },
        populate: "*",
      });
    } else if (exportUniversityId) {
      allUsers = await fetchAPI("/users", {
        filters: {
          $and: [
            exportUniversityId && {
              university: {
                id: exportUniversityId,
              },
            },
          ],
        },
        populate: "*",
      });
    } else {
      allUsers = await fetchAPI("/users", {
        populate: "*",
      });
    }

    const selectedExportData = allUsers.map((user) => {
      return {
        Student: user.username || "Not Found",
        Role: user.accessLevel || "Not Found",
        Email: user.email || "Not Found",
        University: user.university?.name || "Not Found",
        State: user.usa_state?.name || "Not Found",
      };
    });

    return selectedExportData;
  };

  const exportDataType = (e) => {
    const exportDataValue = e.target.value;
    setExportDataByType(exportDataValue);
  };

  // EXPORT PDF FUNCTION
  function handleExportPDF(exportData) {
    const pdf = new jsPDF({
      orientation: "l",
      unit: "pt",
      format: "a4",
    });

    const exportPdfTableData = [];
    exportData.forEach((user) => {
      const row = [
        user.Student || "Not Found",
        user.Role || "Not Found",
        user.Email || "Not Found",
        user.University || "Not Found",
        user.State || "Not Found",
      ];
      exportPdfTableData.push(row);
    });

    autoTable(pdf, {
      head: [["Student", "Role", "Email", "University", "State"]],
      body: exportPdfTableData,
    });
    pdf.save("Users-Data.pdf");
  }

  // EXPORT CSV

  const handleExportClick = async () => {
    let exportData;
    try {
      exportData = await fetchData();
    } catch (e) {
      console.log("ERROR IN EXPORT DATA", e);
    }

    if (exportData) {
      const selectedData = exportData.map((user) => {
        return [
          user.Student,
          user.Role,
          user.Email,
          user.University,
          user.State,
        ];
      });

      const headers = ["Student", "Role", "Email", "University", "State"];

      const csvData = [headers, ...selectedData];

      if (dataByType === "detailed" && csvLinkRef && csvLinkRef.current) {
        csvLinkRef.current.link.click();
      } else if (dataByType === "simple") {
        handleExportPDF(exportData);
      }

      setExportableData(csvData);
    }
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = allUsers?.slice(offset, offset + PER_PAGE);

  const pageCount = Math.ceil(allUsers?.length / PER_PAGE);

  const handleUniversityOptions = async (usaStateId) => {
    const universityOptions = await fetchAPI("/universities", {
      filters: {
        usa_state: {
          id: {
            $eq: usaStateId,
          },
        },
      },
    });
    if (
      universityOptions &&
      universityOptions?.data &&
      universityOptions?.data?.length > 0
    ) {
      setUniversityOptions(universityOptions);
    }
  };

  const loginAs = (user) => {
    const admin = window.localStorage.getItem("adminUser");
    if (admin && user) {
      window.localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/dashboard";
    } else if (user) {
      window.localStorage.setItem("adminUser", JSON.stringify(currentUser));
      window.localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/dashboard";
    }
  };

  const inviteModalFn = (role) => {
    setModalItem(role);
    setnewStModalOpen(true);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (inviteRef.current && !inviteRef.current.contains(e.target)) {
        setShowInviteModal(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [setShowInviteModal]);

  return (
    <div className="workbook w-full mx-6 my-10">
      <div className="flex justify-between">
        {/* <h2 className="text-4xl font-bold text-brandBlue ">
          Students Workbook
        </h2> */}
        <h2 className="mt-5 text-3xl font-bold text-brandBlue md:mt-0 pb-10">
          Manage Users
        </h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4 justify-between w-full">
          <div>
            <div className="flex border-[1px] h-12 w-[384px] border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl">
              <p className="text-4xl mr-4 text-brandBlue">⌕</p>
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="border-0 bg-transparent focus:border-0 focus:shadow-none focus:outline-none active:border-0 active:shadow-none active:outline-none w-full pl-0"
                onChange={(e) => setSearchKey(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
          </div>
          <div className="flex gap-4">
            {currentUser && currentUser.accessLevel === "admin" && (
              <div className="border-[1px] border-[#E3EEF5] bg-[#EFF6FB] rounded-[10px] cursor-pointer">
                <select
                  name="university"
                  onChange={handleFilterByUniversity}
                  className="border-[1px] h-12 border-[#E3EEF5] bg-[#EFF6FB] pl-3 rounded-[10px] cursor-pointer"
                >
                  <option value="All">Filter by University</option>
                  {universities &&
                    universities?.data &&
                    universities?.data?.map((university) => {
                      return (
                        <option value={university?.id}>
                          {university?.attributes?.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            )}

            <div className="relative w-[150px] h-fit" ref={inviteRef}>
              <div
                name="role"
                onClick={() => {
                  setShowInviteModal(!showInviteModal);
                  formik.setValues({
                    name: "",
                    email: "",
                    usaState: "",
                    university: "",
                  });
                }}
                className="border-[1px] h-12 cursor-pointer border-[#E3EEF5] bg-[#EFF6FB] px-5 rounded-[10px] flex items-center justify-between"
              >
                Invite New
                <ArrowDown width={13} height={13} />
              </div>
              {showInviteModal && (
                <div
                  className={`absolute z-50 transition-all ease-in-out duration-300 top-[120%] right-0 w-[360px] border-1 border-[#E3EEF5] bg-[#EFF6FB] rounded-[10px]`}
                >
                  <div
                    name="role"
                    onClick={() => inviteModalFn("student")}
                    className="border-[1px] border-[#E3EEF5] hover:bg-[#EFF6FB] w-full h-12 cursor-pointer bg-white px-3 py-8 rounded-t-xl flex justify-between gap-2 items-center"
                  >
                    <div className="flex flex-col gap-1">
                      <p className="">Invite new Student via Email</p>
                      <p className="text-xs text-[#AEAEAE]">
                        Invite more workspace collaborator via email
                      </p>
                    </div>
                    <div className="-rotate-90 h-full flex justify-center items-center">
                      <ArrowDown width={12} height={12} />
                    </div>
                  </div>
                  <div
                    name="role"
                    onClick={() => inviteModalFn("academic_partner")}
                    className="border-[1px] border-[#E3EEF5] hover:bg-[#EFF6FB] w-full h-12 cursor-pointer bg-white px-3 py-8 rounded-b-xl flex justify-between gap-2 items-center"
                  >
                    <div className="flex flex-col gap-1">
                      <p className="">Invite new Academic Partner via Email</p>
                      <p className="text-xs text-[#AEAEAE]">
                        Invite more workspace collaborator via email
                      </p>
                    </div>
                    <div className="-rotate-90 h-full flex justify-center items-center">
                      <ArrowDown width={12} height={12} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {showExportModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50 modal_bg">
                <div className="bg-white h-[350px] w-[500px] rounded-lg relative">
                  <div
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={() => setShowExportModal(false)}
                  >
                    <AiOutlineCloseCircle
                      size={25}
                      className="text-brandBlue"
                    />
                  </div>
                  <h2 className="flex justify-center my-6">
                    <Image src={Logo} alt="Logo" width={300} h={350} />
                  </h2>
                  <div className="max-w-[400px] m-auto">
                    <form>
                      <div className="flex flex-col gap-4 relative">
                        <div>
                          <select
                            name="status"
                            onChange={filterExportByRole}
                            className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
                          >
                            <option value="All">Role: All</option>
                            <option value="student">Student</option>
                            <option value="academic_partner">
                              Academic Partner
                            </option>
                            <option value="admin">Admin</option>
                          </select>
                        </div>
                        {currentUser && currentUser.accessLevel === "admin" && (
                          <div>
                            <select
                              name="university"
                              onChange={filterExportByUniversity}
                              className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
                            >
                              <option value="All">Filter by University</option>
                              {universities &&
                                universities?.data &&
                                universities?.data?.map((university) => {
                                  return (
                                    <option value={university?.id}>
                                      {university?.attributes?.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        )}
                        <div>
                          <select
                            name="status"
                            onChange={exportDataType}
                            className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
                          >
                            <option value="">Export Data By:</option>
                            <option value="simple">PDF Export</option>
                            <option value="detailed">Excel Export</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-between my-4">
                        <button
                          type="button"
                          onClick={() => handleExportClick()}
                          className="cursor-pointer px-8 py-3 w-fit text-white bg-blue-600 uppercase rounded-lg"
                        >
                          Export Data
                        </button>
                      </div>
                      {exportableDataState && (
                        <CSVLink
                          data={exportableDataState}
                          filename="users-data.csv"
                          className="hidden"
                          ref={csvLinkRef}
                          target="_blank"
                        />
                      )}
                    </form>
                  </div>
                </div>
              </div>
            )}

            <div className="">
              <OrangeButton
                data-aos="fade-down"
                className="rounded-md w-fit"
                onClick={() => setShowExportModal(true)}
                // onClick={handleExportPDF}
              >
                Export
                <ExportIcon className="ml-5" />
              </OrangeButton>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        {currentPageData ? (
          <div className="my-8">
            <table className="m-0 w-full" id="studentsData">
              <thead className="mb-5">
                <tr className="text-left">
                  <th className="text-gray text-sm font-medium pt-3 pb-5">
                    Student
                  </th>
                  <th className="text-gray text-sm font-medium pt-3 pb-5">
                    <select
                      className="w-[150px] !p-0 text-sm"
                      onChange={handleFilterByStatus}
                    >
                      <option value="All" className="w-fit">
                        Status
                      </option>
                      <option value="Active">Active</option>
                      <option value="Pending Invite">Pending Invite</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </th>
                  <th className="text-gray text-xs font-medium pt-3 pb-5 flex gap-2">
                    <select
                      className="w-[150px] !p-0 text-sm"
                      onChange={handleFilterByRole}
                    >
                      <option value="All" className="w-fit">
                        Role
                      </option>
                      <option value="student">Student</option>
                      <option value="academic_partner">Academic Partner</option>
                      <option value="admin">Admin</option>
                    </select>
                  </th>
                  <th className="text-gray text-sm font-medium pt-3 pb-5">
                    Email
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="font-normal text-xs">
                {currentPageData &&
                  currentPageData?.length > 0 &&
                  currentPageData?.map((user, userIdx) => {
                    return (
                      <Fragment key={userIdx}>
                        <tr className="h-16 border-t-[1px] border-lightGray">
                          <td className="py-[5px]">
                            <div className="flex items-center">
                              <UserIcon />
                              <p className="font-semibold text-brandBlueDark text-sm">
                                {user?.username}
                              </p>
                            </div>
                          </td>
                          <td className="py-[8px]">
                            <p
                              className={`flex gap-2 items-center ${
                                user.status === "Pending Invite"
                                  ? "text-yellow-400"
                                  : user.status === "Cancelled"
                                  ? "text-red-400"
                                  : "text-green-400"
                              }`}
                            >
                              {user.status ?? "Active"}{" "}
                              {user.status === "Pending Invite" && (
                                <p className="flex gap-2">
                                  {reinviteLoading ? (
                                    <span className="p-1 bg-white shadow-sm rounded-md">
                                      ...
                                    </span>
                                  ) : (
                                    <span
                                      className="p-1 cursor-pointer bg-white shadow-sm rounded-md"
                                      onClick={() => {
                                        setOnReinviteConfirm(true);
                                        setSelectedUser(user);
                                        setUserEmail(user.email);
                                      }}
                                    >
                                      <RefreshIcon />
                                    </span>
                                  )}
                                  {cancellInviteLoading ? (
                                    <span className="p-1 bg-white shadow-sm rounded-md">
                                      ...
                                    </span>
                                  ) : (
                                    <span
                                      className="p-1 cursor-pointer bg-white shadow-sm rounded-md"
                                      onClick={() => {
                                        setOnCancelInviteConfirm(true);
                                        setSelectedUser(user);
                                        setUserEmail(user.email);
                                      }}
                                    >
                                      <AiOutlineClose
                                        size={14}
                                        className="text-brandBlue"
                                      />
                                    </span>
                                  )}
                                </p>
                              )}
                            </p>
                          </td>
                          <td className="py-[8px]">
                            <div className="p-2 border-[1px] flex gap-2 items-center border-[#E3EEF5] bg-[#EFF6FB] hover:bg-[#E4EFF5] cursor-pointer w-fit rounded-[6px] text-md">
                              <span className="capitalize">
                                {user?.accessLevel === "student"
                                  ? "Student"
                                  : user?.accessLevel === "academic_partner"
                                  ? "Academic Partner"
                                  : user?.accessLevel}
                              </span>
                              <TooltipItem
                                position="top"
                                content={
                                  <div className="w-fit">
                                    <div className="w-full relative py-2 border-b border-b-[#E3EEF5] mr-8 flex flex-col gap-1">
                                      <p className="text-[#AEAEAE] text-xs">
                                        Role
                                      </p>
                                      <p className="capitalize">
                                        {user?.accessLevel === "student"
                                          ? "Student"
                                          : user?.accessLevel ===
                                            "academic_partner"
                                          ? "Academic Partner"
                                          : user?.accessLevel}
                                      </p>
                                      <div className="absolute right-0 top-4 w-2 h-2 rounded-full bg-[#FBBE61]"></div>
                                    </div>
                                    <div className="w-full relative py-2 border-b border-b-[#E3EEF5] mr-8 flex flex-col gap-1">
                                      <p className="text-[#AEAEAE] text-xs">
                                        Features
                                      </p>
                                      <p className="capitalize">
                                        {user?.accessLevel === "student"
                                          ? "Workbook, Mental Balance Sheet, StudentWallet"
                                          : user?.accessLevel ===
                                            "academic_partner"
                                          ? `Teachers Guide, Materials ${
                                              user.university == null
                                                ? ""
                                                : `, Student Data for ${user.university.name}`
                                            }`
                                          : `Full Access to All Features and Data`}
                                      </p>
                                      <div className="absolute right-0 top-4 w-2 h-2 rounded-full bg-[#0167AF]"></div>
                                    </div>
                                    <div className="w-full relative py-2 border-b border-b-[#E3EEF5] mr-8 flex flex-col gap-1">
                                      <p className="text-[#AEAEAE] text-xs">
                                        Data Access
                                      </p>
                                      <p className="capitalize">
                                        {user?.accessLevel === "student"
                                          ? `${
                                              user.university == null
                                                ? "Restricted Access, No University/School Associated"
                                                : `Associated with ${user.university.name}`
                                            }`
                                          : user?.accessLevel ===
                                            "academic_partner"
                                          ? `${
                                              user.university == null
                                                ? "Restricted Access, No University/School Associated"
                                                : `Access to ${user.university.name} data only`
                                            }`
                                          : "Full access to All Data"}
                                      </p>
                                      <div className="absolute right-0 top-4 w-2 h-2 rounded-full bg-[#46D768]"></div>
                                    </div>
                                  </div>
                                }
                              >
                                <span className="px-[5.5px] rounded-[3px] h-fit bg-transparent border-[2px] border-brandBlueLighten text-brandBlueLighten cursor-pointer">
                                  i
                                </span>
                              </TooltipItem>
                            </div>
                          </td>
                          <td>{user?.email}</td>
                          <td className=" py-4 flex justify-end">
                            <button
                              disabled={user.status === "Cancelled"}
                              className={`bg-brandBlue py-2 px-4 text-white rounded-lg ${
                                user.status === "Cancelled" && "opacity-60"
                              }`}
                              onClick={() => loginAs(user)}
                            >
                              Login As
                            </button>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="pt-8 ">No Users Found</h2>
        )}
      </div>
      {newStModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 modal_bg">
          <div className="bg-white h-fit pt-3 pb-5 w-fit max-h-[98vh] overflow-y-auto rounded-lg relative">
            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => {
                setnewStModalOpen(false);
                setEmailSuccess(false);
              }}
            >
              <AiOutlineCloseCircle size={25} className="text-brandBlue" />
            </div>
            <h2 className="flex justify-center my-6">
              <Image src={Logo} alt="Logo" width={300} h={350} />
            </h2>

            {emailSuccess ? (
              <div className="flex flex-col py-3 px-5 items-center">
                <img
                  src="/static/img/confirmation-checkmark.png"
                  className="w-12 m-auto"
                />
                <h2 className="py-8 text-sm">
                  An invite email has been sent to {formik.values.email}!
                </h2>
              </div>
            ) : (
              <div className="py-3 px-5">
                <div className="leading-10">
                  <h1 className="text-2xl font-semibold">
                    {modalItem === "student"
                      ? "Invite New Student"
                      : "Invite New Academic Partner"}
                  </h1>
                  <p className="text-gray-500 text-xs">
                    To invite a user, enter their name and email address below.
                  </p>
                </div>

                <form className="mt-[40px]" onSubmit={(e) => handleSubmit(e)}>
                  {alert.show && (
                    <AlertMessageContainer className="flex justify-start w-[380px] mt-[10px]">
                      {/* <AlertSymbolContainer src={image.alertRed} /> */}
                      <ErrorMessageText className="text-orange-600">
                        The Email Address is invalid. <br />
                        Please try again.
                      </ErrorMessageText>
                    </AlertMessageContainer>
                  )}
                  <div className="flex flex-col  items-start gap-6">
                    {!formik.errors.name ? (
                      <div className="flex flex-col w-full">
                        <label className="text-[15px] mb-[8px]">
                          Full Name
                        </label>
                        <div className="w-full h-fit rounded-xl border-[1.5px] border-lightGray hover:border-blue-500 hover:border-1">
                          <input
                            placeholder="Enter First and Last Name"
                            type="text"
                            name="name"
                            value={formik.values.name}
                            className="p-3 w-full placeholder-gray-400 rounded-xl"
                            onChange={formik.handleChange}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col w-full">
                        <ErrorLabel className="text-[15px] mb-[8px]">
                          Full Name
                        </ErrorLabel>
                        <div className="w-full h-fit rounded-xl border-[1.5px] border-red-700 hover:border-blue-500 hover:border-1">
                          <input
                            placeholder="Enter First and Last Name"
                            type="text"
                            name="name"
                            value={formik.values.name}
                            className="p-3 w-full placeholder-gray-400 rounded-xl"
                            onChange={formik.handleChange}
                          />
                        </div>

                        <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                          {/* <AlertSymbolContainer src={image.alertRed} /> */}
                          <ErrorMessageText>
                            {formik.errors.name}
                          </ErrorMessageText>
                        </AlertMessageContainer>
                      </div>
                    )}
                    {!formik.errors.email ? (
                      <div className="flex flex-col w-full">
                        <label className="text-[15px] mb-[8px]">
                          Email Address
                        </label>
                        <div className="w-full h-fit rounded-xl border-[1.5px] border-lightGray hover:border-blue-500 hover:border-1">
                          <input
                            placeholder="Enter Email Address to Invite"
                            type="email"
                            name="email"
                            value={formik.values.email}
                            className="p-3 w-full placeholder-gray-400 rounded-xl"
                            onChange={formik.handleChange}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col w-full">
                        <ErrorLabel className="text-[15px] mb-[8px]">
                          Email
                        </ErrorLabel>
                        <div className="w-full h-fit rounded-xl border-[1.5px] border-red-700 hover:border-blue-500 hover:border-1">
                          <input
                            placeholder="Enter Your Email"
                            type="email"
                            name="email"
                            value={formik.values.email}
                            className="p-3 w-full placeholder-gray-400 rounded-xl"
                            onChange={formik.handleChange}
                          />
                        </div>

                        <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                          {/* <AlertSymbolContainer src={image.alertRed} /> */}
                          <ErrorMessageText>
                            {formik.errors.email}
                          </ErrorMessageText>
                        </AlertMessageContainer>
                      </div>
                    )}

                    <div className="w-full flex justify-between gap-4">
                      {currentUser?.accessLevel == "admin" &&
                        (formik.errors.usaState ? (
                          <div className="flex flex-col">
                            <ErrorLabel className="text-[15px] mb-[8px]">
                              State
                            </ErrorLabel>
                            <select
                              name="usaState"
                              onChange={(e) => {
                                formik.handleChange(e);
                                handleUniversityOptions(e.target.value);
                              }}
                              // value={formik.values.usaState}
                              className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
                            >
                              <option value="" selected disabled hidden>
                                Select your State
                              </option>
                              {usaStates &&
                                usaStates?.data &&
                                usaStates?.data?.map((usaState) => {
                                  return (
                                    <option value={usaState?.id}>
                                      {usaState?.attributes?.name}
                                    </option>
                                  );
                                })}
                            </select>
                            <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                              {/* <AlertSymbolContainer src={image.alertRed} /> */}
                              <ErrorMessageText>
                                {formik.errors.usaState}
                              </ErrorMessageText>
                            </AlertMessageContainer>
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <label className="text-[15px] mb-[8px]">
                              Select State
                            </label>
                            <select
                              name="usaState"
                              onChange={(e) => {
                                formik.handleChange(e);
                                handleUniversityOptions(e.target.value);
                              }}
                              // value={formik.values.usaState}
                              className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
                            >
                              <option value="" selected disabled hidden>
                                Select your State
                              </option>
                              {usaStates &&
                                usaStates?.data &&
                                usaStates?.data?.map((usaState) => {
                                  return (
                                    <option value={usaState?.id}>
                                      {usaState?.attributes?.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        ))}
                      {currentUser?.accessLevel == "admin" &&
                        (formik.errors.university ? (
                          <div className="flex flex-col">
                            <ErrorLabel className="text-[15px] mb-[8px]">
                              University
                            </ErrorLabel>
                            <select
                              name="university"
                              onChange={formik.handleChange}
                              // value={formik.values.usaState}
                              className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
                            >
                              <option value="" selected disabled hidden>
                                Select your University
                              </option>
                              {universities &&
                                universities?.data &&
                                universities?.data?.map((university) => {
                                  return (
                                    <option value={university?.id}>
                                      {university?.attributes?.name}
                                    </option>
                                  );
                                })}
                            </select>
                            <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                              {/* <AlertSymbolContainer src={image.alertRed} /> */}
                              <ErrorMessageText>
                                {formik.errors.university}
                              </ErrorMessageText>
                            </AlertMessageContainer>
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <label className="text-[15px] mb-[8px]">
                              Select University
                            </label>
                            <select
                              name="university"
                              onChange={formik.handleChange}
                              // value={formik.values.usaState}
                              className="border-[1px] h-12 border-brandBlueLight bg-brandBlueLight pl-3 rounded-xl	"
                            >
                              <option value="" selected disabled hidden>
                                Select your University
                              </option>
                              {universitiesOptions &&
                                universitiesOptions?.data &&
                                universitiesOptions?.data?.map((university) => {
                                  return (
                                    <option value={university?.id}>
                                      {university?.attributes?.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        ))}
                    </div>

                    <div className="flex flex-col">
                      <input type="file" onChange={handleFileChange} />
                    </div>

                    {error && (
                      <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                        {/* <AlertSymbolContainer src={image.alertRed} /> */}
                        <ErrorMessageText>{error}</ErrorMessageText>
                      </AlertMessageContainer>
                    )}
                  </div>
                  <div className="w-full mt-[30px] flex flex-col gap-[20px]">
                    <button
                      className={`py-[10px] bg-brandBlue text-white w-[100%] hover:border-blue-500 hover:border-2 rounded-xl ${
                        formloading && "disabled"
                      }`}
                      type="submit"
                      onClick={onSubmitForm}
                    >
                      {formloading ? "Loading..." : "Send Invite Link"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
      {reinviteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 modal_bg">
          <div className="bg-white h-fit pt-3 pb-5 w-fit max-h-[98vh] overflow-y-auto rounded-lg relative">
            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => {
                setReinviteModal(false);
                setUserEmail("");
              }}
            >
              <AiOutlineCloseCircle size={25} className="text-brandBlue" />
            </div>
            <h2 className="flex justify-center my-6">
              <Image src={Logo} alt="Logo" width={300} h={350} />
            </h2>

            <div className="flex flex-col py-3 px-5 items-center">
              <img
                src="/static/img/confirmation-checkmark.png"
                className="w-12 m-auto"
              />
              <h2 className="py-8 text-sm">
                An invite email has been sent to {userEmail}!
              </h2>
            </div>
          </div>
        </div>
      )}
      {onReinviteConfirm && (
        <ConfirmationModal
          text={`Are you sure you want to resend a new invitation email to`}
          onConfirm={() => onReinviteUser(selectedUser)}
          subHeading={userEmail}
          loading={reinviteLoading}
          onCancel={() => {
            setOnReinviteConfirm(false);
            setReinviteLoading(false);
          }}
        />
      )}
      {onCancelInviteConfirm && (
        <ConfirmationModal
          text={`Are you sure you want to cancel an invitation to`}
          onConfirm={() => onCancelledInvite(selectedUser)}
          subHeading={userEmail}
          loading={cancellInviteLoading}
          onCancel={() => {
            setOnCancelInviteConfirm(false);
            setCancellInviteLoading(false);
          }}
        />
      )}
    </div>
  );
};

export default AllUsersContent;

const TooltipItem = ({ children, content, position, role }) => {
  return (
    <div className="w-fit">
      <div>
        <div className="group w-fit relative inline-block">
          <button className="bg-primary inline-flex rounded">{children}</button>
          <div
            className={` ${
              (position === "right" &&
                `absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2`) ||
              (position === "top" &&
                `absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2`) ||
              (position === "left" &&
                `absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2`) ||
              (position === "bottom" &&
                `absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2`)
            } mb-4 whitespace-nowrap rounded bg-[#EFF6FB] border-[1px] border-[#E3EEF5] hidden group-hover:flex pt-[6px] px-4 text-sm opacity-0 group-hover:opacity-100`}
          >
            <span
              className={` ${
                (position === "right" &&
                  `left-[-3px] top-1/2 -translate-y-1/2`) ||
                (position === "top" &&
                  `bottom-[-3px] left-1/2 -translate-x-1/2`) ||
                (position === "left" &&
                  `right-[-3px] top-1/2 -translate-y-1/2`) ||
                (position === "bottom" &&
                  `top-[-3px] left-1/2 -translate-x-1/2`)
              } absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-[#EFF6FB] border-[1px] border-[#E3EEF5]`}
            ></span>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
