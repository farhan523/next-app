import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import { formPath } from "../../apiPath";
import OrangeButton from "../NewMockupComponents/OrangeButton";
const Index = ({ formImage }) => {
  const [formInitialValues, setFormInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formValidation = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Please Provide valid email address")
      .required("Email is required"),
  });
  const submitHandler = (values) => {
    setError("");
    setSuccess("");
    setLoading(true);
    let data = {
      email: values.email,
      name: values.firstName + " " + values.lastName,
      phone: "",
      listUUID: "6b2fbd2e-a84d-46a1-ade8-0044fb905144",
      metaData: {},
    };
    axios
      .post(formPath, data)
      .then((res) => {
        setSuccess("Thank you for requesting more information.");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  };
  return (
    <div className="bg-themeGray ">
      <div className="container mx-auto px-12 xl:px-32 flex flex-wrap border-b border-brandBorder py-24">
        <div className="lg:w-1/2 w-full lg:pr-12 xl:pr-12 flex justify-center">
          {/* <div className="" style={{
          backgroundImage: `url(${'/static/img/homeform.png'})`,
        }}>

          </div> */}
          <div className="w-10/12">
            <img
              src={formImage ? formImage : "/static/img/homeform.png"}
              data-aos="fade-up"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0" data-aos="fade-down">
          <h1 className="text-3xl lg:text-5xl text-brandBlue font-semibold">
            Get More Information
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
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row  mt-8 justify-between">
                  <div className="flex flex-col w-full lg:w-5/12">
                    <label
                      className={`${
                        errors.firstName && touched.firstName
                          ? "text-red-500"
                          : !errors.firstName && touched.firstName
                          ? "text-green-500"
                          : "text-brandBlue"
                      } text-base  font-semibold`}
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={`${
                        errors.firstName && touched.firstName
                          ? "border-red-500"
                          : !errors.firstName && touched.firstName
                          ? "border-green-500"
                          : "border-inputBorder"
                      } focus:bg-inputFocus py-3  px-8 text-sm focus:outline-none rounded border  placeholder-placeholderColor mt-2`}
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
                  <div className="flex flex-col w-full lg:w-5/12 mt-8 lg:mt-0">
                    <label
                      className={`${
                        errors.lastName && touched.lastName
                          ? "text-red-500"
                          : !errors.lastName && touched.lastName
                          ? "text-green-500"
                          : "text-brandBlue"
                      } text-base  font-semibold`}
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={`${
                        errors.lastName && touched.lastName
                          ? "border-red-500"
                          : !errors.lastName && touched.lastName
                          ? "border-green-500"
                          : "border-inputBorder"
                      } focus:bg-inputFocus py-3  px-8 text-sm focus:outline-none rounded border  placeholder-placeholderColor mt-2`}
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
                <div className="flex flex-col w-full mt-8 ">
                  <label
                    className={`${
                      errors.email && touched.email
                        ? "text-red-500"
                        : !errors.email && touched.email
                        ? "text-green-500"
                        : "text-brandBlue"
                    } text-base  font-semibold`}
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={`${
                      errors.email && touched.email
                        ? "border-red-500"
                        : !errors.email && touched.email
                        ? "border-green-500"
                        : "border-inputBorder"
                    } focus:bg-inputFocus py-3  px-8 text-sm focus:outline-none rounded border  placeholder-placeholderColor mt-2`}
                    placeholder="Type here"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <Alert severity="error" className="mt-3 mb-2">
                      {errors.email}
                    </Alert>
                  )}
                </div>

                <OrangeButton as="button" className="mt-8" type="submit">
                  {loading ? "Submitting" : "SUBMIT"}
                </OrangeButton>
              </form>
            )}
          </Formik>
          {error && (
            <Alert severity="error" className="mt-3">
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" className="mt-3">
              {success}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};
export default Index;
