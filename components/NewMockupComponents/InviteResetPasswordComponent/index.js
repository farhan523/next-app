import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../../graphql/queries/user/queries";
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
import { INVITE_USER_SCHEMA } from "./validationSchema";
import {
  changePasswordAPI,
  fetchAPI,
  updateUserUSAState,
} from "../../../lib/api";

const InviteRestPasswordComponent = ({ usaStates }) => {
  const dispatch = useDispatch();
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [error, setError] = useState("");
  const isAuthenticated = useSelector(getIsAuthenticated);
  const [universities, setUniversityOptions] = useState(null);
  const [alert, setAlert] = useState({
    type: "error",
    text: "This is an alert message",
    show: false,
  });

  const router = useRouter();
  const { query } = useRouter();
  // useEffect(() => {
  //   if (!query.code) {
  //     router.push("/login");
  //   }
  // }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: INVITE_USER_SCHEMA,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      const code = query.code;
      // if (formik.values.usaState) {
      //   const userUpdateResponse = await updateUserUSAState(
      //     userId,
      //     formik.values.usaState
      //   );

      // }
      let body = {
        currentPassword: "testpassword",
        password: formik.values.password,
        passwordConfirmation: formik.values.passwordConfirmation,
      };
      const response = await changePasswordAPI(body, code);
      if (response && response?.data && response?.data?.jwt) {
        setResetPasswordSuccess(true);
      } else if(response?.message) {
        setError(response?.message);
      } else {
        setError("Link is expired");
      }
    } catch (error) {
      console.log("ERROR", error);
      if (!formik.errors.passwordConfirmation && !formik.errors.password) {
        onShowAlert("error", "The password combination is not correct.");
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
  }, [data]);

  const alertBox = (header, text) => {
    return (
      <AlertMessageContainer className="flex justify-start w-[380px] mt-[10px]">
        <AlertSymbolContainer src={image.alertRed} />
        <ErrorMessageText className="text-orange-600">
          Password is invalid <br />
          Please try again.
        </ErrorMessageText>
      </AlertMessageContainer>
    );
  };

  if (resetPasswordSuccess) {
    return (
      <>
        <div className="grid lg:grid-cols-2 justify-content-center items-start mt-[100px] before:contents-[''] before:absolute before:blur-[100px] rounded-full  before:bg-brandBlueLighten before:left-[0] before:top-[70px] before:rounded-b-full before:rounded-l-full  before:w-[260px] before:min-h-[260px] before:z-[-1] ">
          <div className="flex items-center justify-center ">
            <div className="">
              <div className="leading-10 text-center lg:text-start">
                <img
                  src="/static/img/confirmation-checkmark.png"
                  className="w-12 m-auto mb-2"
                />
                <h1 className="text-[35px] font-semibold xs:mb-2">
                  <span className="text-brandOrangeDark">Thanks</span> for
                  setting your password.
                </h1>
                <p className="text-gray-500 md:ml-[5px] xs:leading-6">
                  Your password has been successfully setup. <br /> Click below
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
        <div className="flex items-center justify-center ">
          <div className="">
            <div className="leading-10 text-center lg:text-start">
              <img className="pb-4" src={"static/img/welcome-hand.png"} />
              <h1 className="text-[35px] font-semibold mb-2">
                <span className="text-brandOrangeDark">Welcome</span> to
                Fleischer Scholars
              </h1>
              <p className="text-gray-500 ml-[5px] xs:leading-6">
                Please choose your state and password below to get started!
              </p>
            </div>
            <form className="mt-[40px]" onSubmit={handleSubmit}>
              {alert.show && alertBox("Alert", alert.text)}
              <div className="flex flex-col  items-start gap-6">
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

                {!formik.errors.passwordConfirmation ? (
                  <div className="flex flex-col relative">
                    <label className="text-[15px]  mb-[8px] ">
                      Confirm Password
                    </label>
                    <input
                      placeholder="Confirm Your Password"
                      type="password"
                      name="passwordConfirmation"
                      value={formik.values.passwordConfirmation}
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
                      placeholder="Confirm your Password"
                      type="password"
                      name="passwordConfirmation"
                      value={formik.values.passwordConfirmation}
                      className="p-3 w-[380px] border-[1px] border-red-700 placeholder-gray-400 rounded-xl hover:border-blue-500 hover:border-2 "
                      onChange={formik.handleChange}
                    />
                    <AlertMessageContainer className="flex justify-start w-[320px] mt-[10px]">
                      <AlertSymbolContainer src={image.alertRed} />
                      <ErrorMessageText>
                        {formik.errors.passwordConfirmation}
                      </ErrorMessageText>
                    </AlertMessageContainer>
                  </div>
                )}

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
                    loading && "disabled"
                  }`}
                  type="submit"
                  onClick={onSubmitForm}
                >
                  {loading ? "Loading..." : "Set Password"}
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

export default InviteRestPasswordComponent;
