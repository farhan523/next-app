import { useRouter } from "next/dist/client/router";
import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../../custom-hooks/useOutsideClick";
import BlueButton from "../BlueBotton";
import OrangeButton from "../OrangeButton";

const NavigationLinks = ({ links }) => {
  return (
    <>
      {links &&
        links.map(({ link, value_2, rich_content, value_3 }) => {
          return (
            <a href={link ?? "#"}>
              <div className="grid grid-cols-[80px_1fr] rounded-md cursor-pointer min-h-[118px] hover:bg-sky-100 p-[20px] ">
                <img src={value_3} className="w-[35px] h-[35px]" />
                <div className="grid grid-rows-2 text-brandBlue ">
                  <h4 className="text-[18px] line-clamp-1 h-fit font-semibold ">
                    {value_2}
                  </h4>
                  <p className="text-[13px] line-clamp-2">{rich_content}</p>
                </div>
              </div>
            </a>
          );
        })}
    </>
  );
};

const TopHeaderNavigationMenu = (props) => {
  const navigationleftData = [
    props.data?.contents?.data.filter(
      (data) => data.attributes.value === "top_header"
    )[0].attributes,
    props.data?.contents?.data.filter(
      (data) => data.attributes.value === "top_header"
    )[1].attributes,
  ];

  const navigationRigthData = [
    props.data?.contents?.data.filter(
      (data) => data.attributes.value === "top_header"
    )[2].attributes,
    props.data?.contents?.data.filter(
      (data) => data.attributes.value === "top_header"
    )[3].attributes,
  ];

  const mainDiv = useRef();
  useOutsideClick(mainDiv, function () {
    props.requestHide && props.requestHide();
  });

  return (
    <div ref={mainDiv} className="relative">
      <div
        className="w-[100%] lg:min-h-[431px] md:h-auto absolute z-10 bg-white top-[-25px] lg:block hidden"
        style={{
          boxShadow: `0px 4px 30px rgba(0, 0, 0, 0.11)`,
        }}
      >
        <div className="mx-auto container">
          <div className="grid min-height-[431px] lg:grid-cols-[1fr_325px] 2xl:gap-[190px] lg:gap-[90px]  md:grid-cols-[400px_325px] mx-auto  w-[88%] m-0 ">
            <div className="grid py-4 items-start lg:grid-cols-2 md:grid-cols-1 ">
              <div className="grid grid-col-2  items-center mx-auto ">
                <NavigationLinks links={navigationleftData}></NavigationLinks>
              </div>
              <div className="grid grid-col-3 items-center mx-auto ">
                <NavigationLinks links={navigationRigthData}></NavigationLinks>
              </div>
            </div>
            <div className="min-h-[431px] bg-sky-100 py-4 pt-[35px] px-10">
              <h3 className="mb-4 cursor-pointer text-brandBlue text-[15px] font-semibold h-fit line-clamp-1">
                Resources
              </h3>
              <div className="mb-12">
                <a
                  href="/upcoming-sessions"
                  className="block py-[7px] text-[13px] text-brandBlue hover:underline cursor-pointer"
                >
                  Upcoming sessions
                </a>
                <a
                  href="/the-book"
                  className="block py-[7px] text-[13px] text-brandBlue hover:underline cursor-pointer"
                >
                  The Book
                </a>
                <a
                  href="/success-stories"
                  className="block py-[7px] text-[13px] text-brandBlue hover:underline cursor-pointer"
                >
                  Success stories
                </a>
                <a
                  href="/gallery"
                  className="block py-[7px] text-[13px] text-brandBlue hover:underline cursor-pointer"
                >
                  Gallery
                </a>
                <a
                  href="/contact"
                  className="block py-[7px] text-[13px] text-brandBlue hover:underline cursor-pointer"
                >
                  Contact Us
                </a>
              </div>
              <div className="mt-[50px]">
                <img src="/static/img/logo.png" className="cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopHeaderNavigationMenuMobile = (props) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const navigationleftData = [
    props.data?.contents?.data.filter(
      (data) => data.attributes.value === "top_header"
    )[0].attributes,
    props.data?.contents?.data.filter(
      (data) => data.attributes.value === "top_header"
    )[1].attributes,
  ];

  const navigationRigthData = [
    props.data?.contents?.data.filter(
      (data) => data.attributes.value === "top_header"
    )[2].attributes,
    props.data?.contents?.data.filter(
      (data) => data.attributes.value === "top_header"
    )[3].attributes,
  ];
  return (
    <div
      className={`bg-icecream ${
        !show ? "opacity-1 visible" : "opacity-0 invisible"
      }  absolute h-fit right-0 w-[90%] top-[127px] transition z-10 bottom-0 lg:hidden`}
    >
      <div className="py-4 px-8 ">
        <h4 className="text-[#90A0AA] font-thin text-[12px]">
          Fleischer Scholars
        </h4>

        <div className="grid grid-cols-2">
          <a
            href="/"
            className="text-brandBlue cursor-pointer active:underline hover:text-brandBlueDark font-bold text-[14px] py-3"
          >
            Home
          </a>
          <a
            href="/upcoming-sessions"
            className="text-brandBlue cursor-pointer hover:text-brandBlueDark font-bold text-[14px] py-3"
          >
            Upcoming Sessions
          </a>
          <a
            href="/upcoming-sessions#applySection"
            className="text-brandBlue cursor-pointer active:underline hover:text-brandBlueDark font-bold text-[14px] py-3"
          >
            Apply Now
          </a>
        </div>

        <h4 className="text-[#90A0AA] font-thin text-[12px] mt-4 mb-2">
          Navigate Fleischer Scholars
        </h4>
        {[...navigationleftData, ...navigationRigthData].map(
          ({ value_2, value_3, link }) => {
            return (
              <a className="active:underline">
                <div className="flex items-center py-3">
                  <img src={value_3} width={14} height={14} className="mr-2" />
                  <h4 className="text-[12px] text-brandBlue  font-semibold ">
                    <a href={link}>{value_2}</a>
                  </h4>
                </div>
              </a>
            );
          }
        )}

        <h4 className="text-[#90A0AA] font-thin text-[12px] mt-4 mb-2">
          My Fleischer Scholars
        </h4>
        <div className="w-full flex flex-col justify-center">
          <h4 className="text-brandBlue font-bold mb-3">
            Are you a Fleischer Scholar?
          </h4>
          <span className="text-brandBlue text-xs w-[90%] mb-3">
            Login to your My Fleischer Scholars account to get started!
          </span>
          <OrangeButton
            className="w-[228px] my-4 text-[12px]"
            IconRight={"/static/img/login.svg"}
            href="/login"
            iconClassName="w-[18px]"
          >
            Login for Students
          </OrangeButton>
          {/*<BlueButton
            className="w-[228px] text-[12px] whitespace-nowrap rounded-3xl"
            onClick={() => router.push("/signup")}
          >
            Get Started for Students
          </BlueButton>*/}
        </div>

        <div className="w-full mt-5 p-2 flex flex-col justify-center">
          <h4 className="text-brandBlue font-bold mb-3">
            Are you an Academic Partner?
          </h4>
          <span className="text-brandBlue mb-2 text-xs w-[90%]">
            Academic partners who have received an invitation may login below
          </span>
          <OrangeButton
            className="w-[228px] my-2 text-[12px]"
            href="/login"
            iconClassName="w-[18px]"
          >
            Login for Academic Partners
          </OrangeButton>
        </div>
      </div>
      <div className="bg-icecreamDark">
        <div className=" py-4  px-8">
          <div className="text-[#90A0AA] font-thin text-[12px] mt-4 mb-2">
            <h4>Explore more</h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="/program-information/university"
              className="text-brandBlue cursor-pointer active:underline hover:text-brandBlueDark font-bold text-[12px] py-3"
            >
              University Partners
            </a>

            <a
              href="/gallery"
              className="text-brandBlue cursor-pointer active:underline hover:text-brandBlueDark font-bold text-[12px] py-3"
            >
              The Gallery
            </a>
            <a
              href="/success-stories"
              className="text-brandBlue cursor-pointer active:underline hover:text-brandBlueDark font-bold text-[12px] py-3"
            >
              Success Stories
            </a>
            <a
              href="/the-book"
              className="text-brandBlue cursor-pointer active:underline hover:text-brandBlueDark font-bold text-[12px] py-3"
            >
              The Book
            </a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-brandBlue my-4"></div>
        <div className=" py-4  px-8">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="/about"
              className="text-brandBlue cursor-pointer active:underline hover:text-brandBlueDark font-normal text-[12px] py-3"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-brandBlue cursor-pointer active:underline hover:text-brandBlueDark font-normal text-[12px] py-3"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-[100%] flex justify-center p-4">
          <img src={"/static/img/logo.png"} className="w-[140px]" />
        </div>
      </div>
    </div>
  );
};

export default TopHeaderNavigationMenu;
