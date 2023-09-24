import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import { formPath } from '../../apiPath';
import OrangeButton from "../NewMockupComponents/OrangeButton";
const Index = () => {
  const [formInitialValues, setFormInitialValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const formValidation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Please Provide valid email address')
      .required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });
  const submitHandler = (values) => {
    setError('');
    setSuccess('');
    setLoading(true);
    let data = {
      email: values.email,
      name: values.name,
      phone: values.phone,
      listUUID: '6b2fbd2e-a84d-46a1-ade8-0044fb905144',
      metaData: {
        message: values.message,
      },
    };
    axios
      .post(formPath, data)
      .then((res) => {
        setSuccess('Thank you for requesting more information.');
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  };
  return (

    <div className="bg-themeGray py-24">
      <div className="container mx-auto flex flex-wrap flex-col lg:flex-row px-4 xl:px-32">
        <div className="lg:w-1/2 w-full lg:pr-12 xl:pr-24 ">
          <img src="/static/img/contactlaptop.png" data-aos="fade-up" />
        </div>
        <div className="lg:w-1/2 w-full lg:pr-20" data-aos="fade-down">
          <h1 className="text-3xl lg:text-4xl text-brandBlue font-semibold mt-8 lg:mt-0">
            Send Us An Email
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
                <div className="mt-8 flex flex-col">
                  <label
                    className={`${errors.name && touched.name
                      ? 'text-red-500'
                      : !errors.name && touched.name
                        ? 'text-green-500'
                        : 'text-brandBlue'
                      } text-base  font-semibold`}
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={` ${errors.name && touched.name
                      ? 'border-red-500'
                      : !errors.name && touched.name
                        ? 'border-green-500'
                        : 'border-inputBorder'
                      }  focus:bg-inputFocus py-3 px-8 text-sm focus:outline-none rounded border placeholder-placeholderColor mt-2`}
                    placeholder="Type here"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <Alert severity="error" className="mt-3">
                      {errors.name}
                    </Alert>
                  )}
                </div>
                <div className="mt-8 flex flex-col">
                  <label
                    className={`${errors.email && touched.email
                      ? 'text-red-500'
                      : !errors.email && touched.email
                        ? 'text-green-500'
                        : 'text-brandBlue'
                      } text-base  font-semibold`}
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={` ${errors.email && touched.email
                      ? 'border-red-500'
                      : !errors.email && touched.email
                        ? 'border-green-500'
                        : 'border-inputBorder'
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
                <div className="mt-8 flex flex-col">
                  <label
                    className={`${errors.phone && touched.phone
                      ? 'text-red-500'
                      : !errors.phone && touched.phone
                        ? 'text-green-500'
                        : 'text-brandBlue'
                      } text-base  font-semibold`}
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={` ${errors.phone && touched.phone
                      ? 'border-red-500'
                      : !errors.phone && touched.phone
                        ? 'border-green-500'
                        : 'border-inputBorder'
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
                <div className="mt-8 flex flex-col">
                  <label
                    className={`${errors.message && touched.message
                      ? 'text-red-500'
                      : !errors.message && touched.message
                        ? 'text-green-500'
                        : 'text-brandBlue'
                      } text-base  font-semibold`}
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    rows="5"
                    name="message"
                    className={` ${errors.message && touched.message
                      ? 'border-red-500'
                      : !errors.message && touched.message
                        ? 'border-green-500'
                        : 'border-inputBorder'
                      }  focus:bg-inputFocus py-3 px-8 text-sm focus:outline-none rounded border placeholder-placeholderColor mt-2`}
                    placeholder="Type here"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  {errors.message && touched.message && (
                    <Alert severity="error" className="mt-3">
                      {errors.message}
                    </Alert>
                  )}
                </div>
                <OrangeButton as="button" type="submit" className="py-2 px-8 mt-8 transition text-[15px] h-[45px] text-white cursor-pointer flex justify-center items-center bg-gradient hover:bg-gradient-darken  py-2 px-8 rounded-3xl" >
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
