import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOne, setMobileMenuOne] = useState(false);
  const [mobileMenuTwo, setMobileMenuTwo] = useState(false);

  return (
    <>
      <div className="w-full hidden lg:block h-[106px]" >
        <header className="z-20 top-0 fixed w-full bg-white  px-4 xl:px-0">
          <nav className="container mx-auto flex justify-between items-end xl:px-32">
            <Link href="/">
              <a>
                <img src="/static/img/desktopLogo.svg" className="logo py-6" />
              </a>
            </Link>
            <ul className="flex">
              <li className="main-list py-6 ml-20">
                <Link href="/">
                  <a>
                    <span className="text-brandBlue  xl:text-base text-sm">
                      HOME
                    </span>
                  </a>
                </Link>
              </li>
              <li
                className="flex flex-col items-center main-list relative py-6 ml-20"
                onMouseEnter={() => setActiveMenu(1)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span
                  className={`${
                    activeMenu === 1 ? "text-brandOrange" : "text-brandBlue"
                  } xl:text-base text-sm`}
                >
                  ABOUT THE PROGRAM
                </span>
                {activeMenu === 1 ? (
                  <i
                    className="fa fa-angle-up"
                    style={{ color: "#fa9359" }}
                  ></i>
                ) : (
                  <i
                    className="fa fa-angle-down"
                    style={{ color: "#00477b" }}
                  ></i>
                )}
                {activeMenu === 1 && (
                  <ul className="bg-white ml-0 absolute header-absolute-list">
                    <li className="text-sm text-brandBlue text-center mb-4 uppercase">
                      <Link href="/program-information/students">
                        <a>Students</a>
                      </Link>
                    </li>
                    <li className="text-sm text-brandBlue text-center mb-4 uppercase">
                      <Link href="/program-information/parents">
                        <a>Parents</a>
                      </Link>
                    </li>
                    <li className="text-sm text-brandBlue text-center mb-4 uppercase">
                      <Link href="/program-information/university">
                        <a>universities</a>
                      </Link>
                    </li>
                    <li className="text-sm text-brandBlue text-center mb-4">
                      <Link href="/upcoming-sessions">
                        <a>UPCOMING SESSIONS</a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="flex flex-col items-center main-list  relative py-6 ml-20"
                onMouseEnter={() => setActiveMenu(2)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span
                  className={`${
                    activeMenu === 2 ? "text-brandOrange" : "text-brandBlue"
                  } xl:text-base text-sm`}
                >
                  RESOURCES
                </span>
                {activeMenu === 2 ? (
                  <i
                    className="fa fa-angle-up"
                    style={{ color: "#fa9359" }}
                  ></i>
                ) : (
                  <i
                    className="fa fa-angle-down"
                    style={{ color: "#00477b" }}
                  ></i>
                )}

                {activeMenu === 2 && (
                  <ul className="bg-white ml-0 absolute header-absolute-list">
                    <li className="text-sm text-brandBlue text-center mb-4 mt-4">
                      <Link href="/the-book">
                        <a>THE BOOK</a>
                      </Link>
                    </li>
                    <li className="text-sm text-brandBlue text-center mb-4 uppercase">
                      <Link href="/success-stories">
                        <a>SUCCESS STORIES</a>
                      </Link>
                    </li>
                    <li className="text-sm text-brandBlue text-center mb-4 uppercase">
                      <Link href="/gallery">
                        <a>GALLERY</a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="main-list py-6 ml-20">
                <Link href="/contact">
                  <span className="xl:text-base text-sm text-brandBlue">
                    CONTACT
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="bg-white py-6 relative lg:hidden">
        <div className="flex justify-between container mx-auto items-center px-4">
          <Link href="/">
            <a>
              <img
                src="/static/img/mobileLogo.svg"
                className="logo w-[158px]"
              />
            </a>
          </Link>
          {isOpen ? (
            <i
              className="fa fa-times text-brandOrange"
              style={{ fontSize: "20px" }}
              onClick={() => setIsOpen(!isOpen)}
            ></i>
          ) : (
            <i
              className="fa fa-bars text-brandBlue"
              onClick={() => setIsOpen(!isOpen)}
            ></i>
          )}
        </div>
        {isOpen && (
          <div
            className={`bg-white absolute right-0 left-0 pt-4 top-0 px-4 mt-[84.94px] z-20`}
          >
            <ul>
              <li className="mb-4">
                <Link href="/">
                  <a className="text-brandBlue text-base font-semibold ">
                    HOME
                  </a>
                </Link>
              </li>

              <li className="mb-4">
                <span
                  className={`${
                    mobileMenuOne ? "text-brandOrange" : "text-brandBlue"
                  }  text-base font-semibold`}
                  onClick={() => {
                    setMobileMenuOne(!mobileMenuOne), setMobileMenuTwo(false);
                  }}
                >
                  ABOUT THE PROGRAM{" "}
                  {mobileMenuOne ? (
                    <i
                      className="fa fa-angle-up"
                      style={{ color: "#fa9359", fontSize: "20px" }}
                    ></i>
                  ) : (
                    <i
                      className="fa fa-angle-down"
                      style={{ color: "#00477b", fontSize: "20px" }}
                    ></i>
                  )}
                </span>
                {mobileMenuOne && (
                  <ul>
                    <li>
                      <Link href="/program-information/students">
                        <a className="text-brandBlue text-xs uppercase">
                          Students
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/program-information/parents">
                        <a className="text-brandBlue text-xs uppercase">
                          Parents
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/program-information/university">
                        <a className="text-brandBlue text-xs uppercase">
                          universities
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/upcoming-sessions">
                        <a className="text-brandBlue text-xs">
                          UPCOMING SESSIONS
                        </a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mb-4">
                <span
                  className={`${
                    mobileMenuTwo ? "text-brandOrange" : "text-brandBlue"
                  }  text-base font-semibold`}
                  onClick={() => {
                    setMobileMenuTwo(!mobileMenuTwo), setMobileMenuOne(false);
                  }}
                >
                  RESOURCES{" "}
                  {mobileMenuTwo ? (
                    <i
                      className="fa fa-angle-up"
                      style={{ color: "#fa9359", fontSize: "20px" }}
                    ></i>
                  ) : (
                    <i
                      className="fa fa-angle-down"
                      style={{ color: "#00477b", fontSize: "20px" }}
                    ></i>
                  )}
                </span>
                {mobileMenuTwo && (
                  <ul>
                    <li>
                      <Link href="/the-book">
                        <a className="text-brandBlue text-xs">THE BOOK</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/success-stories">
                        <a className="text-brandBlue text-xs">
                          SUCCESS STORIES
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery">
                        <a className="text-brandBlue text-xs">GALLERY</a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mb-4">
                <Link href="/contact">
                  <a className="text-brandBlue text-base font-semibold ">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
