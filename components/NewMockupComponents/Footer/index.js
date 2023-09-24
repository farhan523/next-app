import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-4 bg-icecream">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[200px_1fr_200px] p-10    lg:gap-x-[60px] ">
          {/* icons and footer */}
          <div className="w-[80%] mx-auto lg:mx-0 lg:w-[100%] ">
            <img
              src="/static/img/desktopLogo.svg"
              className="mx-auto mb-6 logo lg:mx-0 "
            />
            <div className="flex lg:justify-between justify-center lg:w-[40%]  ">
              <div className="flex">
                <a
                  href="https://www.facebook.com/fleischerscholarsprogram"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-brandBlue"
                >
                  <FaFacebookF color="white" />
                </a>
                <a
                  href="https://www.instagram.com/fleischerscholars/"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 ml-2 rounded-full bg-brandBlue"
                >
                  <FaInstagram color="white" />
                </a>
              </div>

              {/*<a
                href="https://www.instagram.com/fleischerscholars/"
                target="_blank"
              >
                <img src="/static/img/instagramIconCircle.svg" className="" />
              </a>*/}
            </div>
          </div>
          {/* icons and footer */}
          {/* center links */}
          <div className="text-center flex lg:justify-evenly flex-col  lg:flex-row lg:mt-[17px] mt-[25px] ">
            <a
              href="/upcoming-sessions"
              className="inline-block text-[15px] font-thin uppercase text-brandBlue cursor-pointer hover:underline mb-[10px] lg:mb-0  lg:mr-2"
            >
              Upcoming sessions
            </a>
            <a
              href="/about"
              className="inline-block text-[15px] font-thin uppercase text-brandBlue cursor-pointer hover:underline  mb-[10px] lg:mb-0  lg:mr-2"
            >
              About
            </a>
            <a
              href="/success-stories"
              className="inline-block text-[15px] font-thin uppercase text-brandBlue cursor-pointer hover:underline  mb-[10px] lg:mb-0  lg:mr-2"
            >
              success stories
            </a>
            <a
              href="/the-book"
              className="inline-block text-[15px] font-thin uppercase text-brandBlue cursor-pointer hover:underline  mb-[10px] lg:mb-0  lg:mr-2"
            >
              the book
            </a>
          </div>

          {/* center links */}
          {/* contact and address */}
          <div className="lg:mt-[17px] mt-[25px]  mx-auto lg:gap-y-[20px] items-center">
            <a
              href="/contact"
              className="inline-block w-full mx-auto mb-5 font-thin text-center uppercase cursor-pointer lg:mx-0 text-brandBlue hover:underline lg:mr-2 2xl:text-start lg:text-start"
            >
              Contact us
            </a>
          </div>
          {/* contact and address */}
        </div>
      </div>
      <p className="mb-12 italic text-center line text-brandBlue">
        The Fleischer Scholars Foundation is a non-profit, tax-exempt
        organization under Section 501(c)(3) of the Internal Revenue Code.
      </p>
      {/* line */}
      <div className="w-full border-b-[1px] border-brandBlue border-solid"></div>
      {/* line */}
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr_1fr_1fr] items-center justify-center py-5">
          {/* terms */}
          <div className="flex justify-between flex-col items-center lg:flex-row w-[70%] mx-auto mb-[25px] lg:mb-0 ">
            <a
              className="mr-2 text-brandBlue font-inter  font-light text-[11px] leading-5"
              href="/terms-of-service"
            >
              Terms of Service
            </a>
            <a
              className=" text-brandBlue  font-inter font-light leading-5 text-[11px]"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
          </div>
          {/* terms */}
          {/* attribution */}
          <div className="text-center">
            <a className="font-bold text-[11px] font-inter leading-5 text-[#0067B2] cursor-pointer">
              © 2023 FLEISCHER SCHOLARS FOUNDATION. ALL RIGHTS RESERVED
            </a>
          </div>
          {/* attribution */}
          {/* belongs */}
          <div className="text-center lg:text-right ">
            <a
              className="text-[#0067B2] text-opacity-25 font-inter leading-5 text-[11px] font-bold"
              target={"_blank"}
              href="https://business.solveonline.com"
            >
              BY SOLVEONLINE FOR BUSINESS [INNOVATION]
            </a>
          </div>
          {/* belongs */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
