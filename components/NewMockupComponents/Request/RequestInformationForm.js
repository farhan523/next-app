import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";
import OrangeButton from "../OrangeButton";
import BlueButton from "../BlueBotton";
import { submitRequestForm } from "../../../lib/api";
import Modal from "react-responsive-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getNafFormSubmitted,
  setNafFomrSubmitted,
} from "../../../store/nafForm.reducer";

const RequestInformationForm = () => {
  const [open, setOpen] = useState(false);

  const isNafFormSubmitted = useSelector(getNafFormSubmitted);

  const dispatch = useDispatch();
  const [formInitialValues, setFormInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // areYou: "",
    // haveYouEver: "",
    // message: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formValidation = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Please Provide valid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    // message: Yup.string().required("Message is required"),
  });
  const submitHandler = async (values, { resetForm }) => {
    setError("");
    setSuccess("");
    setLoading(true);
    let formSubmissionData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      // areYou: values.areYou,
      // haveYouEver: values.haveYouEver,
      // metaData: {
      //   message: values.message,
      // },
    };

    try {
      const response = await submitRequestForm(formSubmissionData);
      if (response.status === 200) {
        // Reset the form
        setLoading(false);
        resetForm();
        setOpen(true);
        setSuccess(
          "Thank you for requesting more information about Fleischer Scholars. A member of our team will be in touch as soon as possible."
        );
        dispatch(setNafFomrSubmitted(true));
      }
    } catch (error) {
      console.log("ERROR IS FORM SUBMISSOIN", error);
    }
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      {" "}
      {!isNafFormSubmitted && (
        <div className="w-full" id="requestInfo">
          <h1 className="text-xl text-center flex md:justify-start justify-center lg:text-2xl mt-8 lg:mt-0">
            Request more Information
          </h1>
          <Formik
            initialValues={formInitialValues}
            onSubmit={submitHandler}
            validationSchema={formValidation}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className="mt-10">
                <div className="w-full flex flex-col justify-between lg:flex-row">
                  <div className="mt-8 lg:w-[48%] flex flex-col">
                    <label
                      className={`${
                        errors.firstName && touched.firstName
                          ? "text-red-500"
                          : !errors.firstName && touched.firstName
                          ? "text-green-500"
                          : ""
                      } text-base`}
                      htmlFor="firstName"
                    >
                      First Name <span className="text-brandBlue">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={` ${
                        errors.firstName && touched.firstName
                          ? "border-red-500"
                          : !errors.firstName && touched.firstName
                          ? "border-green-500"
                          : "border-inputBorder"
                      }  focus:bg-inputFocus py-3 px-8 text-sm focus:outline-none rounded border placeholder-placeholderColor mt-2`}
                      placeholder="Type here"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    {errors.firstName && touched.firstName && (
                      <Alert severity="error" className="mt-3">
                        {errors.firstName}
                      </Alert>
                    )}
                  </div>
                  <div className="mt-8 lg:w-[48%] flex flex-col">
                    <label
                      className={`${
                        errors.lastName && touched.lastName
                          ? "text-red-500"
                          : !errors.lastName && touched.lastName
                          ? "text-green-500"
                          : ""
                      } text-base`}
                      htmlFor="lastName"
                    >
                      Last Name <span className="text-brandBlue">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={` ${
                        errors.lastName && touched.lastName
                          ? "border-red-500"
                          : !errors.lastName && touched.lastName
                          ? "border-green-500"
                          : "border-inputBorder"
                      }  focus:bg-inputFocus py-3 px-8 text-sm focus:outline-none rounded border placeholder-placeholderColor mt-2`}
                      placeholder="Type here"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    {errors.lastName && touched.lastName && (
                      <Alert severity="error" className="mt-3">
                        {errors.lastName}
                      </Alert>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between lg:flex-row">
                  <div className="mt-8 lg:w-[48%] flex flex-col">
                    <label
                      className={`${
                        errors.email && touched.email
                          ? "text-red-500"
                          : !errors.email && touched.email
                          ? "text-green-500"
                          : ""
                      } text-base`}
                      htmlFor="email"
                    >
                      Email <span className="text-brandBlue">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className={` ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : !errors.email && touched.email
                          ? "border-green-500"
                          : "border-inputBorder"
                      }  focus:bg-inputFocus py-3 px-8 text-sm focus:outline-none rounded border placeholder-placeholderColor mt-2`}
                      placeholder="Type here"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <Alert severity="error" className="mt-3">
                        {errors.email}
                      </Alert>
                    )}
                  </div>
                  <div className="mt-8 lg:w-[48%] flex flex-col">
                    <label
                      className={`${
                        errors.phone && touched.phone
                          ? "text-red-500"
                          : !errors.phone && touched.phone
                          ? "text-green-500"
                          : ""
                      } text-base`}
                      htmlFor="phone"
                    >
                      Phone Number <span className="text-brandBlue">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={` ${
                        errors.phone && touched.phone
                          ? "border-red-500"
                          : !errors.phone && touched.phone
                          ? "border-green-500"
                          : "border-inputBorder"
                      }  focus:bg-inputFocus py-3 px-8 text-sm focus:outline-none rounded border placeholder-placeholderColor mt-2`}
                      placeholder="Type here"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    {errors.phone && touched.phone && (
                      <Alert severity="error" className="mt-3">
                        {errors.phone}
                      </Alert>
                    )}
                  </div>
                </div>

                {/* <div className="w-full flex flex-col justify-between lg:flex-row">
                <div className="mt-8 lg:w-[48%] flex flex-col">
                  <label className="text-[15px] mb-[4px]">Are you a...</label>
                  <select
                    name="areYou"
                    onChange={handleChange}
                    value={values.areYou}
                    className="focus:bg-inputFocus py-3 px-8 text-sm focus:outline-none rounded border placeholder-placeholderColor mt-2"
                  >
                    <option
                      value=""
                      selected
                      disabled
                      hidden
                      className="text-placeholderColor"
                    >
                      Please Select
                    </option>
                    {areYouOptions &&
                      areYouOptions?.map((val) => {
                        return <option value={val?.name}>{val?.label}</option>;
                      })}
                  </select>
                </div>
                <div className="mt-8 lg:w-[48%] flex flex-col">
                  <label className="text-[15px] mb-[4px]">
                    Have you ever...
                  </label>
                  <select
                    name="haveYouEver"
                    onChange={handleChange}
                    value={values.haveYouEver}
                    className="focus:bg-inputFocus py-3 px-8 text-sm focus:outline-none rounded border placeholder-placeholderColor mt-2"
                  >
                    <option
                      value=""
                      selected
                      disabled
                      hidden
                      className="text-placeholderColor"
                    >
                      Please Select
                    </option>
                    {areYouOptions &&
                      areYouOptions?.map((val) => {
                        return <option value={val?.name}>{val?.label}</option>;
                      })}
                  </select>
                </div>
              </div> */}

                {/* <div className="mt-8 flex flex-col">
                  <label
                    className={`${
                      errors.message && touched.message
                        ? "text-red-500"
                        : !errors.message && touched.message
                        ? "text-green-500"
                        : ""
                    } text-base flex justify-between items-end mb-2`}
                    htmlFor="message"
                  >
                    <span className="w-52">
                      Requesting Information Regarding
                    </span>
                    <span className="text-placeholderColor">Optional</span>
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    rows="5"
                    firstName="message"
                    className={` ${
                      errors.message && touched.message
                        ? "border-red-500"
                        : !errors.message && touched.message
                        ? "border-green-500"
                        : "border-inputBorder"
                    }  focus:bg-inputFocus py-3 px-8 text-sm focus:outline-none rounded border placeholder-placeholderColor mt-2`}
                    placeholder="Text area"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  {errors.message && touched.message && (
                    <Alert severity="error" className="mt-3">
                      {errors.message}
                    </Alert>
                  )}
                </div> */}
                <div className="w-full flex justify-center">
                  <BlueButton
                    as="button"
                    type="submit"
                    className="mt-12 transition px-4 text-[12px] md:text-[15px] h-[45px] text-white cursor-pointer flex justify-center items-center hover:bg-gradient-darken  py-2 md:px-14 rounded-xl"
                  >
                    {loading ? "Submitting" : "Request More Information"}
                  </BlueButton>
                </div>
              </form>
            )}
          </Formik>
          {error && (
            <Alert severity="error" className="mt-3">
              {error}
            </Alert>
          )}
        </div>
      )}
      <Modal
        open={open}
        onClose={onCloseModal}
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
          <div className="h-[300px] lg:h-[40%] w-[80%] lg:w-[50%] flex flex-col relative items-center justify-center bg-white rounded-lg">
            <h1 className="text-[20px] font-bold text-center text-brandBlue">
              {success}
            </h1>
            <button
              className="absolute z-20 h-10 w-10 rounded-full top-0 right-4 bg-[#0067B2] text-white font-[500]  mx-2 mt-5"
              onClick={() => onCloseModal()}
            >
              X
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default RequestInformationForm;
