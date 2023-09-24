import OrangeButton from "../OrangeButton";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Alert } from "@material-ui/lab";
import { useState } from "react";
import RequestInformationForm from "./RequestInformationForm";
import { useSelector } from "react-redux";
import { getNafFormSubmitted } from "../../../store/nafForm.reducer";

const RequestSection = () => {
  const isNafFormSubmitted = useSelector(getNafFormSubmitted);

  return (
    <div className="lg:px-24 lg:py-20 pb-[0px] lg:h-fit min-h-[500px] h-auto mx-auto hero-mockup-new bg-sky-100">
      <div className="w-[100%] h-[100%] flex lg:content-center lg:items-center flex-col lg:flex-row justify-evenly gap-10 p-12">
        <div
          className={`lg:min-h-[500px] ${
            isNafFormSubmitted
              ? "lg:w-[100%] flex justify-center"
              : "lg:w-[48%]"
          } lg:mx-0 mb-[70px] lg:mb-0  w-[100%]`}
        >
          <div data-aos="fade-down">
            <div className="text-center lg:text-start w-fit fade-down">
              <div className="lg:w-[80%]">
                <div className="grid lg:grid-cols-[143px_220px] mb-[14px]">
                  <h1 className="text-brandBlue text-xl font-thin">
                    WHAT IS THE
                  </h1>
                  <div className="border-b-2 w-full border-brandBlue mb-[4px] pt-[15px] lg:pt-0 "></div>
                </div>
                <h2 className="text-[35px] font-bold leading-[40px] text-brandBlue flex flex-col mb-[60px]">
                  FLEISCHER SCHOLARS{" "}
                  <h2>
                    PROGRAM <span className="font-thin">AND </span>WHAT DO WE
                    OFFER?
                  </h2>
                </h2>
              </div>
              <div className="text-[#002E4E] text-[15px] lg:w-[70%] font-light lg:mb-[50px] flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Fleischer Scholars Program</p>
                  <p>
                    Provides scholars the tools needed to learn how to think
                    critically, and provides them with reflections and exercises
                    on how to be better prepared for successful completion of
                    high school and post-secondary certifications or programs.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">MIND ROADMAP for success </p>
                  <p>
                    A model to learn how to think more critically by using the
                    Building Your Mental Balance Sheet book.
                  </p>
                </div>
              </div>
              {/* <OrangeButton
                className="lg:w-[250px]"
                IconRight={"/static/img/angleRight.svg"}
                href="/about"
              >
                Learn More
              </OrangeButton> */}
            </div>
          </div>
        </div>
        <div className="h-fit lg:min-h-[500px] lg:w-[48%] lg:mx-0 w-[100%] ">
          <RequestInformationForm />
        </div>
      </div>
    </div>
  );
};
export default RequestSection;
