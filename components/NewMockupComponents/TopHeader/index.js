import { useState } from "react";
import TopHeaderNavigationMenu, {
  TopHeaderNavigationMenuMobile,
} from "./TopHeaderNavigationMenu";
import { homePageContent } from "../../../graphql/queries/content/queries";
import { useQuery } from "@apollo/client";

const TopHeader = () => {
  const { data: contentData } = useQuery(homePageContent);

  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const setHomeButtonClickedInLocalStorage = () => {
    localStorage.setItem("homeButtonClicked", "1");
  };

  if (!contentData) return <></>;
  return (
    <>
      <div className="flex lg:flex-col lg:justify-center justify-between items-center pl-8 pr-8">
        <div className="flex lg:w-[100%] justify-center my-[35px] sm:pl-12">
          <a href="/">
            <img
              src="/static/img/desktopLogo.svg"
              className="logo min-h-[57px] w-[240px]"
            />
          </a>
        </div>
        <div
          className="lg:hidden p-3 cursor-pointer sm:pr-12"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <img src="/static/img/cross.svg" />
          ) : (
            <img src="/static/img/iconBurger.svg" />
          )}
        </div>
        <div className="lg:h-10 hidden lg:mb-[35px] lg:text-brandBlue lg:font-semibold lg:w-[74%] lg:flex lg:items-center lg:justify-evenly ">
          <a
            onClick={setHomeButtonClickedInLocalStorage}
            href="/"
            className="text-[15px] font-semibold hover:text-brandOrange border-solid border-b-2 border-b-transparent cursor-pointer h-10 grid items-center"
          >
            HOME
          </a>
          <a
            onClick={(e) => {
              setShowMegaMenu(!showMegaMenu);
            }}
            className={`hover:text-brandOrange text-[15px] font-semibold cursor-pointer h-10 grid items-center   border-solid border-b-2 ${
              showMegaMenu
                ? "border-b-brandOrange text-brandOrangeGradientTo"
                : "border-b-transparent"
            }`}
          >
            ABOUT FLEISCHER SCHOLARS
          </a>
          <a
            href="/upcoming-sessions"
            className="text-[15px] font-semibold hover:text-brandOrange border-solid border-b-2 border-b-transparent cursor-pointer h-10 grid items-center"
          >
            UPCOMING SESSIONS
          </a>
          <a
            href="/blog"
            className="text-[15px] font-semibold hover:text-brandOrange border-solid border-b-2 border-b-transparent cursor-pointer h-10 grid items-center"
          >
            BLOG
          </a>
        </div>
      </div>
      {showMegaMenu && (
        <TopHeaderNavigationMenu
          data={contentData}
          requestHide={() => {
            setTimeout(() => {
              setShowMegaMenu(false);
            }, 250);
          }}
        ></TopHeaderNavigationMenu>
      )}
      {mobileMenu && (
        <TopHeaderNavigationMenuMobile
          data={contentData}
        ></TopHeaderNavigationMenuMobile>
      )}
    </>
  );
};

export default TopHeader;
