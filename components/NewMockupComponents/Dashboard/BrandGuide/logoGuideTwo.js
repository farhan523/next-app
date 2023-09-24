import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import useDownloader from "react-use-downloader";
const LogoGuideTwo = () => {
  const { download } = useDownloader();

  // svg file
  let fileURL = "static/allLogo/fleischer_logo.svg";
  let fileName = "fleischer_logo.svg";
  // pdf file
  let pdfFileURL = "static/allLogo/fleischer_logo.pdf";
  let pdfFileName = "fleischer_logo.pdf";

  // eps file
  let epsFileURL = "static/allLogo/fleischer_logo.eps";
  let epsFileName = "fleischer_logo.eps";

  return (
    <div>
      <div className="p-4 md:pb-0 md:p-11">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
          <div className="md:border-r md:border-[#BABABA]">
            <h2 className="text-[#121212] text-xl font-bold">02 Logo Guide</h2>
            <div className="md:mt-[7rem] mt-5 h-auto md:h-[500px]">
              <h2 className="text-[#121212] text-3xl font-black">THE LOGO</h2>
              <p className="text-[#121212] text-[13px] font-normal pr-4 mt-4">
                The Fleischer Scholars logo consists of two elements; the icon
                (Horses) and the wordmark. It’s an instantly recognizable brand
                element and should be represented consistently throughout our
                product and marketing efforts. The logo should always try to
                exist with the symbol and wordmark together. In no way should
                the logo be modified' distorted' or redrawn.
              </p>
            </div>
          </div>
          <div className="col-span-3 ">
            <h1 className="text-[#121212] text-[18px] font-normal">
              Meaning, Logo, Symbol, Wordmark
            </h1>
            <div className="md:mb-[7rem] mb-5 h-auto md:h-[400px]  text-center">
              <img
                src="/static/img/branding-page-the-logo.png"
                className="m-auto"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
          <div className="md:border-r md:border-[#BABABA]">
            <div className="md:mt-[7rem] mt-5 h-auto md:h-[500px]">
              <h2 className="text-[#121212] text-3xl font-black">
                LOGO ON A <br />
                BACKGROUND
              </h2>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="md:mt-[7rem] mt-5 h-auto md:h-[650px]  text-center">
              <img
                src="/static/img/branding-page-logo-on-background.png"
                className="w-full h-full m-auto"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
          <div className="md:border-r md:border-[#BABABA]">
            <div className="md:mt-[7rem] mt-5 h-auto md:h-[500px]">
              <h2 className="text-[#121212] text-3xl font-black">
                LOGO COLOR
                <br />
                USAGE
              </h2>
              <p className="text-[#121212] text-[13px] font-normal pr-4 mt-4">
                The default version of the Fleischer Scholars logo uses our
                primary brand color Blue and Orange. It can be used only in a
                horizontal configuration.
              </p>
              <p className="text-[#121212] text-[13px] font-normal pr-4 mt-4">
                However, the logo can live with different colors. Here, you will
                find an overview of possible color combinations.
              </p>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="md:mt-[7rem] mt-5 h-auto md:h-[550px]  text-center">
              <img
                src="/static/img/branding-page-color-usage.jpeg"
                className="m-auto"
              />
              <div className="mt-5 md:mt-[80px] text-center">
                <h3 className="text-[#121212] text-[20px] font-semibold">
                  Download our logo in <br />
                  PDF, SVG or EPS
                </h3>
                <div className="flex justify-center mt-5 md:mt-[22px]">
                  <button
                    className="rounded-[12px] download_btn_brand md:mr-[22px] mr-[10px]  py-2 px-5 text-white text-[7px] md:text-[13px] font-normal flex justify-between "
                    onClick={() => download(pdfFileURL, pdfFileName)}
                  >
                    Download PDF
                    <AiOutlineDownload className="mt-[2px] ml-3" />
                  </button>
                  <button
                    className="rounded-[12px] bg-brandOrangeRed md:mr-[22px] mr-[10px]  py-2 px-5 text-white text-[7px] md:text-[13px] font-normal flex justify-between "
                    onClick={() => download(fileURL, fileName)}
                  >
                    Download SVG
                    <AiOutlineDownload className="mt-[2px] ml-3" />
                  </button>
                  <button
                    className="rounded-[12px] bg-brandOrangeRed   py-2 px-5 text-white text-[7px] md:text-[13px] font-normal flex justify-between "
                    onClick={() => download(epsFileURL, epsFileName)}
                  >
                    Download EPS
                    <AiOutlineDownload className="mt-[2px] ml-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGuideTwo;
