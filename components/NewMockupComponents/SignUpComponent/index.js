import { useMutation } from "@apollo/client";
import { useRouter, } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import {
  getIsAuthenticated,
  setCurrentUser,
} from "../../../store/user.reducer";
import { image } from "../../../static/base64";
import get from "lodash/get";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { LOGIN_SCHEMA } from "./validationSchema";
import {
  registerUserAsStudent,
  registerUserAsStudentASU,
} from "../../../lib/api";

const SignupComponent = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState({
    type: "error",
    text: "This is an alert message",
    show: false,
  });

  const isAuthenticated = useSelector(getIsAuthenticated);
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated === true) {
      router.push("/dashboard");
    }
  }, [isAuthenticated]);

  
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push("/dashboard");
  //   }
  // }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: LOGIN_SCHEMA,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      handleSubmit(e);
    },
  });

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
    try {
      setLoading(true);
      setError(null);
      let body = {
        username: formik.values.firstName + " " + formik.values.lastName,
        email: formik.values.email,
        password: formik.values.password,
      };
      let response = null;
      if (type === "asu") {
        response = await registerUserAsStudentASU(body);
      } else {
        response = await registerUserAsStudent(body);
      }

      if (
        response &&
        response?.error &&
        response?.errorObj?.message === "Email or Username are already taken"
      ) {
        setSuccess(false);
        setLoading(false);
        setError(response?.errorObj?.message);
        return;
      }

      if (response && response?.data && response?.data?.jwt) {
        setSuccess(true);
        setLoading(false);
      } else {
        setSuccess(false);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (!formik.errors.email && !formik.errors.password) {
        onShowAlert(
          "error",
          "The email and password combination is not correct."
        );
      }
    }
  };

  const alertBox = (header, text) => {
    return (
      <AlertMessageContainer className="flex justify-start w-[380px] mt-[10px]">
        <AlertSymbolContainer src={image.alertRed} />
        <ErrorMessageText className="text-orange-600">
          The Email Address or Password entered is invalid. <br />
          Please try again.
        </ErrorMessageText>
      </AlertMessageContainer>
    );
  };

  if (success) {
    return (
      <>
        <div className="grid lg:grid-cols-2 justify-content-center items-start mt-[100px] before:contents-[''] before:absolute before:blur-[100px] rounded-full  before:bg-brandBlueLighten before:left-[0] before:top-[70px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1] ">
          <div className="flex items-center justify-center">
            <div className="">
              <div className="leading-10 text-center lg:text-start">
                <img
                  src="/static/img/confirmation-checkmark.png"
                  className="w-12 m-auto mb-2"
                />
                <h1 className="text-[35px] font-semibold xs:mb-2">
                  <span className="text-brandOrangeDark">Thanks</span> for
                  signing up.
                </h1>
                <p className="text-gray-500 md:ml-[5px] xs:leading-6">
                  Your account has been successfully setup. <br /> Click below
                  to sign in.
                </p>
              </div>
              {/* <form className="mt-[40px]"> */}
              <div className="w-[380px] mt-[30px] flex flex-col gap-[20px]">
                <button
                  className={`py-[10px] bg-brandBlue text-white w-[100%] hover:border-blue-500 hover:border-2 rounded-xl`}
                  onClick={() => router.push("/login")}
                >
                  Sign in
                </button>
              </div>
              {/* </form> */}
            </div>
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
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 justify-content-center items-start mt-[100px] before:contents-[''] before:absolute before:blur-[100px] rounded-full  before:bg-brandBlueLighten before:left-[0] before:top-[70px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1] ">
        <div className="flex items-center justify-center  mb-[30px]">
          <div className="">
            {type === "asu" ? (
              <div className="leading-10 text-center lg:text-start">
                <h1 className="text-[25px] font-semibold">
                  My Fleischer Scholars for ASU Students Signup
                </h1>
                <p className="text-gray-500 ml-[5px]">
                  Please enter your Name, Email and Password to signup.
                </p>
              </div>
            ) : (
              <div className="leading-10 text-center lg:text-start">
                <h1 className="text-[25px] font-semibold">
                  Register as Student
                </h1>
                <p className="text-gray-500 ml-[5px]">
                  Please enter your details
                </p>
              </div>
            )}
            <form className="mt-[40px]" onSubmit={handleSubmit}>
              {alert.show && alertBox("Alert", alert.text)}
              <div className="flex flex-col  items-start gap-6">
                {!formik.errors.firstName ? (
                  <div className="flex flex-col">
                    <label className="text-[15px] mb-[8px]">First Name</label>
                    <input
                      placeholder="Enter Your First Name"
                      type="text"
                      name="firstName"
                      value={formik.values.firstName}
                      className="p-3 w-[380px] border-[1px] border-gray-400 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2"
                      onChange={formik.handleChange}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <ErrorLabel className="text-[15px] mb-[8px]">
                      First Name
                    </ErrorLabel>
                    <input
                      placeholder="Enter Your First Name"
                      type="text"
                      name="firstName"
                      value={formik.values.firstName}
                      className="p-3 w-[380px] border-[1px] border-red-700 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2"
                      onChange={formik.handleChange}
                    />
                    <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                      <AlertSymbolContainer src={image.alertRed} />
                      <ErrorMessageText>
                        {formik.errors.firstName}
                      </ErrorMessageText>
                    </AlertMessageContainer>
                  </div>
                )}
                {!formik.errors.lastName ? (
                  <div className="flex flex-col">
                    <label className="text-[15px] mb-[8px]">Last Name</label>
                    <input
                      placeholder="Enter Your Last Name"
                      type="text"
                      name="lastName"
                      value={formik.values.lastName}
                      className="p-3 w-[380px] border-[1px] border-gray-400 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2"
                      onChange={formik.handleChange}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <ErrorLabel className="text-[15px] mb-[8px]">
                      Last Name
                    </ErrorLabel>
                    <input
                      placeholder="Enter Your Lasr Name"
                      type="text"
                      name="lastName"
                      value={formik.values.lastName}
                      className="p-3 w-[380px] border-[1px] border-red-700 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2"
                      onChange={formik.handleChange}
                    />
                    <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                      <AlertSymbolContainer src={image.alertRed} />
                      <ErrorMessageText>
                        {formik.errors.lastName}
                      </ErrorMessageText>
                    </AlertMessageContainer>
                  </div>
                )}
                {!formik.errors.email ? (
                  <div className="flex flex-col">
                    <label className="text-[15px] mb-[8px]">Email</label>
                    <input
                      placeholder="Enter Your Email"
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
                      <ErrorMessageText>{formik.errors.email}</ErrorMessageText>
                    </AlertMessageContainer>
                  </div>
                )}
                {/* <img
                  src="/static/img/eyeIcons.svg"
                  className="w-[25px] absolute right-2 top-[45px]"
                /> */}
                {!formik.errors.password ? (
                  <div className="flex flex-col relative">
                    <label className="text-[15px]  mb-[8px] ">Password</label>
                    <input
                      placeholder="Enter Your Password"
                      type="password"
                      name="password"
                      value={formik.values.password}
                      className="p-3 w-[380px] border-[1px] border-gray-400 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2 "
                      onChange={formik.handleChange}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col relative">
                    <ErrorLabel className="text-[15px] mb-[8px]">
                      Password
                    </ErrorLabel>
                    <input
                      placeholder="Enter Your Password"
                      type="password"
                      name="password"
                      value={formik.values.password}
                      className="p-3 w-[380px] border-[1px] border-red-700 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2 "
                      onChange={formik.handleChange}
                    />
                    <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                      <AlertSymbolContainer src={image.alertRed} />
                      <ErrorMessageText>
                        {formik.errors.password}
                      </ErrorMessageText>
                    </AlertMessageContainer>
                  </div>
                )}

                {!formik.errors.confirmPassword ? (
                  <div className="flex flex-col relative">
                    <label className="text-[15px]  mb-[8px] ">
                      Confirm Password
                    </label>
                    <input
                      placeholder="Enter Confirm Password"
                      type="password"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      className="p-3 w-[380px] border-[1px] border-gray-400 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2 "
                      onChange={formik.handleChange}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col relative">
                    <ErrorLabel className="text-[15px] mb-[8px]">
                      Confirm Password
                    </ErrorLabel>
                    <input
                      placeholder="Enter Confirm Password"
                      type="password"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      className="p-3 w-[380px] border-[1px] border-red-700 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2 "
                      onChange={formik.handleChange}
                    />
                    <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                      <AlertSymbolContainer src={image.alertRed} />
                      <ErrorMessageText>
                        {formik.errors.confirmPassword}
                      </ErrorMessageText>
                    </AlertMessageContainer>
                  </div>
                )}
              </div>
              {error && (
                <div className="flex justify-end w-[380px] mt-[10px]">
                  <p className="py-[10px] text-red-600">
                    You already have an account, please
                    <a
                      onClick={() => router.push("/login")}
                      className="text-blue-600 cursor-pointer pl-1 pr-1"
                    >
                      Login
                    </a> 
                    or
                    <a
                      onClick={() => router.push("/forgot-password")}
                      className="text-blue-600 cursor-pointer pl-1"
                    >
                       Reset your password here
                    </a>
                  </p>
                </div>
              )}

              <div className="w-[380px] mt-[30px] flex flex-col gap-[20px]">
                <button
                  className={`py-[10px] bg-brandBlue text-white w-[100%] hover:border-blue-500 hover:border-2 rounded-xl ${
                    loading && "disabled"
                  }`}
                  type="submit"
                  onClick={onSubmitForm}
                >
                  {loading ? "Loading..." : "Register"}
                </button>
              </div>
            </form>
          </div>
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

export default SignupComponent;
