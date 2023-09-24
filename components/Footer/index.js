import Link from "next/link";

const Index = () => {
  return (
    <footer className="py-20 bg-themeGray px-4 xl:px-0">
      <div className="container flex mx-auto flex-col lg:flex-row flex-wrap justify-between lg:items-center xl:px-32">
        <div className="w-full mb-8 lg:mb-0 md:w-3/12">
          <img
            className="mb-8 hidden lg:block"
            src="/static/img/desktopLogo.svg"
          />
          <img
            className="mb-8 w-full lg:hidden"
            src="/static/img/mobileLogo.svg"
          />
          {/* <b className="text-brandBlue">
           ADDRESS HERE
          </b> */}
        </div>
        <div className="lg:w-8/12 w-full">
          <div className="sm:flex lg:justify-end items-center justify-center sm:justify-start hidden ">
            <a href="#" className="mr-8">
              <img src="/static/img/twitterIcon.svg" />
            </a>
            <a href="#">
              <img src="/static/img/facebookIcon.svg" />
            </a>
          </div>
          <ul className="flex justify-between sm:pt-12 flex-wrap">
            <li className="mb-4 lg:mb-0">
              <Link href="/upcoming-sessions">
                <a className="uppercase text-brandBlue text-sm md:mr-3 xl:mr-0">
                  Upcoming Sessions
                </a>
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link href="/success-stories">
                <a className="uppercase text-brandBlue text-sm md:mr-3 xl:mr-0">
                  Success Stories
                </a>
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link href="/the-book">
                <a className="uppercase text-brandBlue text-sm md:mr-3 xl:mr-0">
                  The Book
                </a>
              </Link>
            </li>
            <li className="mb-4 lg:mb-0 md:mr-3 xl:mr-0">
              <Link href="/contact">
                <a className="uppercase text-brandBlue text-sm">Contact</a>
              </Link>
            </li>
          </ul>
          <div className="sm:hidden lg:justify-end items-center justify-center sm:justify-start flex ">
            {/*<a
              href="https://instagram.com/fleischerscholars/"
              target="_blank"
              className="mr-8"
            >
              <img src="/static/img/instagramIcon.svg" />
          </a>*/}
            <a
              href="https://facebook.com/fleischerscholarsprogram"
              target="_blank"
            >
              <img src="/static/img/facebookIcon.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto xl:px-32 mt-6">
        <div className="w-full flex items-center justify-between flex-col md:flex-row">
          <b className="text-brandBlue text-xs text-center md:text-left mb-4 md:mb-0">
            &copy; 2023 FLEISCHER FOUNDATION. ALL RIGHTS RESERVED
          </b>
          <a href="https://business.solveonline.com" target="_blank">
            <p className="text-xs text-gray-300 text-center md:text-left">
              BY SOLVEONLINE FOR BUSINESS [INNOVATION]
            </p>
          </a>
        </div>
        <div className="w-full flex items-center flex-col md:flex-row mt-4">
          <Link href="/terms-of-service">
            <a className="md:mr-6 text-brandBlue text-xs">Terms of Service</a>
          </Link>

          <Link href="/privacy-policy">
            <a className="text-brandBlue text-xs">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Index;