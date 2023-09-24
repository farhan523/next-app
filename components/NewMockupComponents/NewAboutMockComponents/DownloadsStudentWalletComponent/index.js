function DownloadsStudentWalletComponent() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center content-center my-[70px] ml-[20px] mr-[20px] 2xl:ml-[100px] lg:mr-[0px] sm:ml-[50px] ">
      <div data-aos="fade-down">
        <div className=" flex flex-col items-center justify-center ">
          <div className="w-[80%] mx-auto "></div>
          <div data-aos="fade-down">
            <div className="grid lg:grid-cols-[343px_200px]  items-center mb-[20px]">
              <h2 className="text-brandBlue text-[25px] font-[300] ">
                WHAT IS STUDENT WALLET
              </h2>
              <div className="border-b-2 border-brandBlue w-[100%] mt-[10px] "></div>
            </div>
            <div className="items-center">
              <div className="mb-[20px]">
                <h1 className="text-brandBlue lg:text-[35px] text-[23px]  uppercase font-[700] ">
                  studentwallet.org
                </h1>
              </div>
              <div className="lg:w-[100%] ">
                <p className="text-[15px] text-brandBlack font-inter font-normal">
                  <span className="font-semibold">StudentWallet.org</span> is
                  the{" "}
                  <span className="font-semibold">
                    Fleischer Scholars Programs'
                  </span>{" "}
                  proprietary scholarship search engine which is FREE to use
                </p>
                <p className=" lg:w-[55%] mt-[15px] text-[15px]">
                  Scholars are encouraged to apply for scholarships with the
                  goal of graduating from college{" "}
                  <span className="font-semibold">DEBT-FREE!</span>
                </p>
              </div>
            </div>
            <div className="lg:mt-[150px] items-center lg:items-left mt-[50px] mb-[150px] lg:mt-[50px] mb-[150px] lg:mb-0 flex flex-col lg:flex-row gap-[15px] lg:gap-[34px]  2xl:w-[100%] xl:w-[100%] lg:w-[100%] sm:w-[100%]  lg:min-h-[53px] lg:h-auto h-[53px] ">
              <a target="_blank" href=" https://www.studentwallet.org/">
                <button className="p-[13px] px-20 font-[400] flex gap-[15px]  justify-evenly items-center w-[202px]  text-white text-[15px] bg-[#88B830] rounded-xl">
                  StudentWallet.org
                  <img src="/static/img/mi_external-link.svg" />
                </button>
              </a>

              <div className="lg:border-l-2 lg:border-brandBlue"></div>
              <div className=" flex lg:justify-evenly gap-[10px] w-[66%] sm:w-[60%] md:w-[50%] lg:w-[48%] xl:w-[50%] 2xl:w-[43%]  h-[42px] ">
                <a
                  className="flex w-[100%]  items-center p-[11px] bg-[#000000] rounded-xl "
                  target="_blank"
                  href="https://apps.apple.com/us/app/studentwallet-org/id1619977680"
                >
                  <button className="flex">
                    <img
                      src="/static/img/AppleIcon.svg"
                      className="w-[15%] sm:w-auto"
                    />
                    <div className="ml-[8px] text-white text-start">
                      <h4 className="text-[6px]">Download on the</h4>
                      <h1 className="font-semibold md:text-[12px] text-[10px] ">
                        App Store
                      </h1>
                    </div>
                  </button>
                </a>

                <a
                  className="flex p-[11px] w-[100%] items-center bg-[#000000] rounded-xl "
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.studentwallet&hl=en_US&gl=US"
                >
                  <button className="flex">
                    <img
                      src="/static/img/GooglePlayIcon.svg"
                      className="w-[15%] sm:w-auto"
                    />
                    <div className="ml-[8px] text-white text-start">
                      <h4 className="text-[6px]">Download on the</h4>
                      <h1 className="font-semibold md:text-[12px] text-[10px] ">
                        Play Store
                      </h1>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  w-[100%] h-auto gap-[30px] justify-items-end ">
        <div data-aos="fade-up">
          <div className="flex justify-evenly mx-auto items-center lg:w-[70%] w-[85%] ">
            <span className="p-2 mx-auto justify-center">
              <img src="/static/img/desktopLogo.svg" />
            </span>
            <span className="p-2 w-[45%] border-l-2 border-brandBlue">
              <img
                src="/static/img/StudentsWalletsLogo.png"
                className="mx-auto"
              />
            </span>
          </div>
          <div className="w-[60%] mx-auto mt-[30px] relative before:absolute before:content-[''] before:blur-[150px] before:bg-brandBlueLighten lg:before:w-[200px] before:w-[250px] before:h-[250px] before:z-[-1] lg:before:h-[501px] before:rounded-full ">
            <div className=" hidden md:block  border-[8px] border-brandBlue w-[70px] h-[70px] absolute rounded-2xl z-[-1] top-[50px] left-[15px]"></div>
            <img src="/static/img/PhoneImage.png" />
            <div className="hidden md:block  border-[8px] border-brandOrangeLighten w-[70px] h-[70px] absolute rounded-2xl z-[-1] bottom-[40px] right-[160px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadsStudentWalletComponent;
