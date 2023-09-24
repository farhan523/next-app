import { useRouter } from "next/dist/client/router";
import { useRef } from "react";
import { useOutsideClick } from "../../../custom-hooks/useOutsideClick";
import BlueButton from "../BlueBotton";
import OrangeButton from "../OrangeButton";

const TopLoginDropdown = (props) => {
  const router = useRouter();
  const mainDiv = useRef();
  useOutsideClick(mainDiv, function () {
    props.requestHide && props.requestHide();
  });
  return (
    <div
      ref={mainDiv}
      className="py-[15px] grid grid-cols-1 border border-opacity-20 border-brandBlue1 bg-brandBlue shadow-xl gap-[55px] relative  min-h-[450px] w-[340px] lg:block hidden"
    >
      <div className="w-full p-2 flex flex-col justify-center items-center text-white">
        <h1 className="font-bold mb-3">Are you a Fleischer Scholar?</h1>
        <span className=" text-white text-center text-xs w-[60%] mb-3">
          Login to your My Fleischer Scholars account to get started!
        </span>
        <OrangeButton
          className="lg:w-[270px] my-4 "
          IconRight={"/static/img/login.svg"}
          href="/login"
          iconClassName="w-[18px]"
        >
          Login for Students
        </OrangeButton>
        {/* <button
          className="max-w-[350px] lg:w-[270px] 2xl:text-[15px] transition h-[45px] cursor-pointer  flex justify-center items-center text-[13px] whitespace-nowrap rounded-3xl bg-white text-brandBlue"
          onClick={() => router.push("/signup")}
        >
          Get Started for Students
        </button> */}
      </div>

      <div className="w-full flex items-center justify-center my-5">
        <div className="w-[80%] h-[1px] bg-sky-200" />
      </div>

      <div className="w-full p-2 flex flex-col justify-center items-center">
        <h1 className=" text-white tont-bold mb-3">
          Are you an Academic Partner?
        </h1>
        <span className=" text-white text-center text-xs w-[70%]">
          Academic partners who have received an invitation may login below
        </span>
        <OrangeButton
          className="lg:w-[270px] my-6 text-xs"
          href="/login"
          iconClassName="w-[18px]"
        >
          Login for Academic Partners
        </OrangeButton>
      </div>

      <div className="w-[100%] flex justify-center p-4">
        <img src={"/static/img/logoWhite.png"} className="w-[140px]" />
      </div>
    </div>
  );
};

export default TopLoginDropdown;
