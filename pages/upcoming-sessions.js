import { useState } from "react";
import Sessions from "../components/pageComponents/UpcomingSessions";
import Head from "next/head";
import { useEffect } from "react";
import Logo from "../static/allLogo/fleischer_logo.svg"
import Image from "next/image";
import { fetchAPI } from "../lib/api";
import { useFormik } from "formik";
import * as Yup from "yup"
import Cookies from "universal-cookie";


const Index = ({ usaStates }) => {
  const [showModal, setShowModal] = useState(false)
  const [formloading, setFormLoading] = useState(false);

  const cookies = new Cookies();
  const selectedUsaState = cookies.get("selectedUsaState");

  useEffect(() => {
    setShowModal(true)
  }, [])


  const validationSchema = Yup.object({
    usaState: Yup.string().required("Required *"),
  });

  const formik = useFormik({
    initialValues: {
      usaStates: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      cookies.set("selectedUsaState", values.usaState);
      setFormLoading(true)
      setShowModal(false)
    }
  })

  return (
    <>
      <Head>
        <meta property="og:site_name" content="Fleischer Scholars Program" />
        <meta
          property="og:title"
          content="Upcoming Sessions - Fleischer Scholars Program"
        />
        <meta
          property="og:url"
          content="https://fleischerscholars.com/upcoming-sessions"
        />
        <meta property="og:type" content="article" />
        <title>Upcoming Sessions - Fleischer Scholars Program</title>
      </Head>
      {showModal && <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray">
        <div className="bg-white h-[450px] w-[500px] rounded-lg">
          <h2 className="flex justify-center my-6">
            <Image src={Logo} alt="Logo" width={300} h={350} />
          </h2>
          <div className="max-w-[400px] m-auto">

            <p className="text-[22px] font-bold text-brandBlue">View Upcoming Sessions</p>
            <form>
              <div className="flex flex-col my-14 relative">
                <label className="text-[15px] mb-[8px]">
                  Select your State
                </label>
                <div className="customArrow">
                  <select
                    name="usaState"
                    className="border-2 h-12 border-brandBlueLighten pl-3 rounded-xl w-fit usaStateDropDown"
                    value={formik.values.usaState}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="" selected disabled hidden>
                      Select your State
                    </option>
                    {usaStates &&
                      usaStates?.data &&
                      usaStates?.data?.map((usaState) => {
                        return (
                          <option key={usaState.id} value={usaState?.id}>
                            {usaState?.attributes?.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                {formik.touched.usaState && formik.errors.usaState && (
                  <div className="text-[#c81e1e]">{formik.errors.usaState}</div>
                )}
              </div>
              <div className="w-[380px] mt-[40px] flex flex-col gap-[20px]">
                <button
                  className={`py-[10px] bg-brandBlue text-white px-10 rounded-xl w-fit ${formloading && "disabled"
                    }`}
                  type="submit"
                  onClick={formik.handleSubmit}
                >
                  Continue
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>}

      <Sessions selectedUsaState={selectedUsaState} />
    </>
  );
};


export async function getServerSideProps() {
  const usaStates = await fetchAPI("/usa-states", {
    sort: ["name:asc"],
    populate: "*",
  });

  return {
    props: { usaStates },
  };
}

export default Index;

