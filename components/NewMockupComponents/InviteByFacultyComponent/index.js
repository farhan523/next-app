import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../../graphql/queries/user/queries";
import axios from "axios";
import {
  AlertBoxContainer,
  AlertHeader,
  AlertText,
  AlertButton,
  ErrorLabel,
  AlertMessageContainer,
  AlertSymbolContainer,
  ErrorMessageText,
} from "./styles";
import { AiOutlineLeft } from "react-icons/ai";
import {
  getIsAuthenticated,
  setCurrentUser,
} from "../../../store/user.reducer";
import { image } from "../../../static/base64";
import get from "lodash/get";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { INVITE_BY_FACULTY_SCHEMA } from "./validationSchema";
import { inviteUserAPI } from "../../../lib/api";
import { fetchAPI } from "../../../lib/api";
const InviteByFacultyComponent = ({ role, usaState, university }) => {
  const dispatch = useDispatch();
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [formloading, setFormLoading] = useState(false);
  const [universities, setUniversityOptions] = useState(null);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileIdState, setFileIdState] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const isAuthenticated = useSelector(getIsAuthenticated);
  const [alert, setAlert] = useState({
    type: "error",
    text: "This is an alert message",
    show: false,
  });

  const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!isAuthenticated) {
  //       router.push("/login");
  //     }
  //   }, 3000)

  // }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: INVITE_BY_FACULTY_SCHEMA,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      handleSubmit(e);
    },
  });

  const [login, { data, loading }] = useMutation(LoginUser);

  const onSubmitForm = () => {
    formik.handleSubmit();
  };

  const onShowAlert = (type, text) => {
    setAlert({
      type: type,
      text: text,
      show: true,
    });
  };

  const onCloseAlert = () => {
    setAlert({
      type: "",
      text: "",
      show: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      const response = await inviteUserAPI({
        email: formik.values.email,
        name: formik.values.name,
        usa_state: usaState,
        university: university,
        role: role,
        attachment: uploadResponse ? uploadResponse?.data[0] : null,
      });
      if (response && response?.data) {
        setFormLoading(false);
        setEmailSuccess(true);
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

  useEffect(() => {
    let user;
    let localUser = window.localStorage.getItem("user");
    if (localUser) {
      user = JSON.parse(localUser);
    } else {
      user = get(data, "login.user", null);
    }
    const token = get(data, "login.jwt", null);
    if (token && user) {
      window.localStorage.setItem("token", token);
      dispatch(setCurrentUser(user));
      toast.success("Login successful");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 300);
    }
    if (typeof window !== "undefined") {
    }
  }, [data]);

  const alertBox = (header, text) => {
    return (
      <AlertMessageContainer className="flex justify-start w-[380px] mt-[10px]">
        <AlertSymbolContainer src={image.alertRed} />
        <ErrorMessageText className="text-orange-600">
          The Email Address is invalid. <br />
          Please try again.
        </ErrorMessageText>
      </AlertMessageContainer>
    );
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 justify-content-center items-start mt-[100px] before:contents-[''] before:absolute before:blur-[100px] rounded-full  before:bg-brandBlueLighten before:left-[0] before:top-[70px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1] ">
        <div className="flex items-center justify-center ">
          {emailSuccess ? (
            <div className="flex flex-col">
              <img
                src="/static/img/confirmation-checkmark.png"
                className="w-12 m-auto"
              />
              <h2 className="py-8 text-xl">
                An invite email has been sent to {formik.values.email}!
              </h2>
              <button
                className="flex justify-right mt-10 text-base font-bold text-brandBlue"
                onClick={() => router.push("/dashboard")}
              >
                <AiOutlineLeft className="mt-1 mr-2" /> Go Back to Dashboard
              </button>
            </div>
          ) : (
            <div className="">
              <div className="leading-10 text-center lg:text-start">
                <h1 className="text-[35px] font-semibold">Invite User</h1>
                <p className="text-gray-500 ml-[5px]">
                  To invite a user, enter their name and email address below.
                </p>
                <button
                  className="flex justify-right mt-10 text-base font-bold text-brandBlue"
                  onClick={() => router.push("/dashboard")}
                >
                  <AiOutlineLeft className="mt-1 mr-2" /> Go Back to Dashboard
                </button>
              </div>
              <form className="mt-[40px]" onSubmit={handleSubmit}>
                {alert.show && alertBox("Alert", alert.text)}
                <div className="flex flex-col  items-start gap-6">
                  {!formik.errors.name ? (
                    <div className="flex flex-col">
                      <label className="text-[15px] mb-[8px]">Full Name</label>
                      <input
                        placeholder="Enter First and Last Name"
                        type="text"
                        name="name"
                        value={formik.values.name}
                        className="p-3 w-[380px] border-[1px] border-gray-400 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2"
                        onChange={formik.handleChange}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <ErrorLabel className="text-[15px] mb-[8px]">
                        Full Name
                      </ErrorLabel>
                      <input
                        placeholder="Enter First and Last Name"
                        type="text"
                        name="name"
                        value={formik.values.name}
                        className="p-3 w-[380px] border-[1px] border-red-700 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2"
                        onChange={formik.handleChange}
                      />

                      <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                        <AlertSymbolContainer src={image.alertRed} />
                        <ErrorMessageText>
                          {formik.errors.name}
                        </ErrorMessageText>
                      </AlertMessageContainer>
                    </div>
                  )}
                  {!formik.errors.email ? (
                    <div className="flex flex-col">
                      <label className="text-[15px] mb-[8px]">
                        Email Address
                      </label>
                      <input
                        placeholder="Enter Email Address to Invite"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        className="p-3 w-[380px] border-[1px] border-gray-400 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2"
                        onChange={formik.handleChange}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <ErrorLabel className="text-[15px] mb-[8px]">
                        Email
                      </ErrorLabel>
                      <input
                        placeholder="Enter Your Email"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        className="p-3 w-[380px] border-[1px] border-red-700 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2"
                        onChange={formik.handleChange}
                      />

                      <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                        <AlertSymbolContainer src={image.alertRed} />
                        <ErrorMessageText>
                          {formik.errors.email}
                        </ErrorMessageText>
                      </AlertMessageContainer>
                    </div>
                  )}

                  <div className="flex flex-col">
                    <input type="file" onChange={handleFileChange} />
                  </div>
                  {/* <img
                    src="/static/img/eyeIcons.svg"
                    className="w-[25px] absolute right-2 top-[45px]"
                  /> */}

                  {error && (
                    <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                      <AlertSymbolContainer src={image.alertRed} />
                      <ErrorMessageText>{error}</ErrorMessageText>
                    </AlertMessageContainer>
                  )}
                </div>
                <div className="w-[380px] mt-[30px] flex flex-col gap-[20px]">
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
        <div className="lg:grid grid-rows-[250px_300px] hidden ">
          <div className="justify-self-start">
            <img src="/static/img/desktopLogo.svg" className="w-[507.7px]" />
          </div>
          <div className="justify-self-end relative before:absolute before:content-[''] before:hidden lg:before:block before:blur-[150px] before:bg-brandBlueLighten before:w-[401px] before:z-[-1] before:right-[0] before:bottom-[0] before:h-[401px] before:rounded-full  ">
            <img
              src="/static/img/aboutHeroPatternImage.svg"
              className="xl:w-[510.72px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteByFacultyComponent;
