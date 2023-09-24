import React from "react";

const LogoDesignThree = () => {
  return (
    <div>
      <div className="p-4 md:pb-0 md:pt-0 md:p-11 bg-[#E5F0F7]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
          <div className="md:border-r md:border-[#BABABA]">
            <h2 className="text-[#121212] text-xl font-bold md:pt-11 pt-4">
              03 Brand Colors
            </h2>
            <div className="md:mt-[7rem] mt-5 h-auto md:h-[500px]">
              <h2 className="text-[#121212] text-3xl font-black">
                FLEISCHER SCHOLARS BLUE
              </h2>
              <p className="text-[#121212] text-[13px] font-normal pr-4 mt-4">
                Green Blue is the core color of Fleischer Scholars, it’s the one
                color that holds most brand equity and which current users
                assocciate with the brand.
              </p>
            </div>
          </div>
          <div className="col-span-3 ">
            <h1 className="text-[#121212] text-[18px] font-normal md:pt-11 pt-4">
              Color Palette, Color Pairings
            </h1>
            <div className="md:mt-[7rem] mt-5 h-auto md:h-[380px]  text-center">
              <img
                src="/static/img/branding-page-blue.png"
                className="w-full h-full m-auto"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
          <div className="md:border-r md:border-[#BABABA]">
            <div className="md:mt-[7rem] mt-5 h-auto md:h-[500px]">
              <h2 className="text-[#121212] text-3xl font-black">
                BRAND <br />
                COLOR PALETTE
              </h2>
              <p className="text-[#121212] text-[13px] font-normal pr-4 mt-4">
                The brand color palette is meant to bridge marketing
                communications and product interface in order to enhance
                familiarity and visual recognition.
              </p>
              <p className="text-[#121212] text-[13px] font-normal pr-4 mt-4">
                The Blue, and Bittersweet Orange are closely tied to the colors
                you see in our web, and also are main brand colors.
              </p>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="md:mt-[7rem] mt-5 h-auto md:h-[930px]  text-center">
              <img
                src="/static/img/branding-page-color-palette.png"
                className="w-full h-full pb-[100px] m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDesignThree;
