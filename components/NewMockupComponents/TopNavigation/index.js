import { useRouter } from "next/router";
import { useEffect, useState, useCallback, useRef } from "react";
// import { useSelector } from "react-redux";
import { useLoginDropdown } from "../../../custom-hooks/useLoginDropdown";
// import { getIsAuthenticated } from "../../../store/user.reducer";
import TopLoginDropdown from "./TopLoginDropdown";
import TopNavigationDropdowndown from "./TopNavigationDropdown";

const TopNavigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const divEl = useRef();
  const [y, setY] = useState();
  const router = useRouter();
  // const [user, setUser] = useState(false);
  const { user, loginDropdown } = useLoginDropdown();
  const [adminInpersonation, setAdminInpersonation] = useState(false);
  const [adminUser, setAdminUser] = useState({});

  const backToAdmin = () => {
    window.localStorage.setItem("user", JSON.stringify(adminUser));
    window.localStorage.removeItem("adminUser");
    window.location.href = "/admin/users";
  };
  // const isAuthenticated = useSelector(getIsAuthenticated);

  // const handleNavigation = useCallback(
  //   (e) => {
  //     const window = e.currentTarget;
  //     if (y > window.scrollY) {
  //       divEl.current.setAttribute(
  //         "style",
  //         `height: 65px;opacity: 1;overflow: hidden; transition: height 0.2s ease-in-out;`
  //       );
  //     } else if (y < window.scrollY) {
  //       divEl.current.setAttribute(
  //         "style",
  //         `height: 0px;opacity: 1;overflow: hidden; transition: all 0.2s ease-in-out;`
  //       );
  //     }
  //     setY(window.scrollY);
  //   },
  //   [y]
  // );

  // useEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.localStorage.getItem("adminUser")
    ) {
      setAdminInpersonation(true);
      setAdminUser(JSON.parse(window.localStorage.getItem("adminUser")));
    }
  }, []);

  return (
    <>
      <div
        ref={divEl}
        className="lg:cursor-pointer min-h-[65px] lg:bg-blue-100 w-full transitionlg:bg-sky-100 lg:flex lg:flex-col justify-between items-center hidden"
      >
        {adminInpersonation && (
          <div className="bg-white lg:flex justify-end items-center w-full h-[34px] border-b-[1px] px-10 border-lightGray">
            <a
              className="text-sm text-brandBlue underline"
              onClick={backToAdmin}
            >
              back to admin
            </a>
          </div>
        )}
        <div className="lg:bg-blue-100 lg:flex justify-between items-center w-full">
          {" "}
          <div>
            <a href="/">
              <div className="py-[10px] flex justify-center items-center border-r-[1.5px]  border-brandBlue text-brandBlue ">
                <h3 className="text-sm font-medium text-[11px] mx-6">
                  BY FLEISCHER SCHOLARS FOUNDATION
                </h3>
              </div>
            </a>
          </div>
          {/* <div className="whitespace-nowrap  flex items-center 2xl:w-[87%] 2xl:gap-[80px] justify-center gap-10 brandBlue text-[12px]">
          <a
            href="/program-information/university"
            className="cursor-pointer font-medium text-center text-brandBlue hover:text-brandBlueDark"
          >
            University Partners
          </a>
          <a className="cursor-pointer font-medium text-center text-brandBlue hover:text-brandBlueDark">
            My Fleischer Scholars
          </a>
          <a
            href="/contact"
            className="cursor-pointer font-medium text-center text-brandBlue hover:text-brandBlueDark"
          >
            Contact Us
          </a>
        </div> */}
          {/* <div
          className="cursor-pointertext-[14px] min-h-[65px] w-[260px]  bg-brandBlue border-brandBlue text-white flex justify-center items-center "
          onClick={(e) => {
            setShowDropdown(!showDropdown);
          }}
        >
          <a className="flex items-center justify-between w-[70%] text-[14px] font-semibold">
            Explore
            <span>
              <img src="/static/img/angleDown.svg" className="w-[20px]" />
            </span>
          </a>
        </div> */}
          {loginDropdown ? (
            <div
              className="cursor-pointertext-[14px] min-h-[65px] w-[260px] border bg-brandBlue border-brandBlue text-white flex justify-center items-center "
              onClick={(e) => {
                setShowDropdown(!showDropdown);
              }}
            >
              <a className="flex items-center justify-between w-[70%] text-[14px] font-semibold">
                My Fleischer Scholars
                <span>
                  <img src="/static/img/angleDown.svg" className="w-[20px]" />
                </span>
              </a>
            </div>
          ) : user ? (
            <div
              className="cursor-pointertext-[14px] min-h-[65px] w-[200px] border bg-brandBlue border-brandBlue text-white flex justify-center items-center "
              onClick={(e) => {
                router.push("/dashboard");
              }}
            >
              <a className="flex items-center justify-center w-full text-[14px] font-semibold">
                My Fleischer Scholars
              </a>
            </div>
          ) : (
            <> </>
          )}
        </div>
      </div>
      {showDropdown && (
        <div className="absolute z-10 right-0">
          {/* <TopNavigationDropdowndown
            requestHide={() => {
              setTimeout(() => {
                setShowDropdown(false);
              }, 150);
            }}
          ></TopNavigationDropdowndown> */}
          <TopLoginDropdown
            requestHide={() => {
              setTimeout(() => {
                setShowDropdown(false);
              }, 150);
            }}
          ></TopLoginDropdown>
        </div>
      )}
    </>
  );
};

export default TopNavigation;
