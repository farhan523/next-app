import React from "react";

const ChapterAudioMobileCard = () => {
  return (
    <div className="relative h-[195px] w-[313px] ">
      <div className="overflow-hidden h-full shadow-lg rounded-[10px]">
        <img
          src="../../../../static/img/articlaes_img.webp"
          className=""
          alt="Card Image 1"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-[10px]"></div>
        <div className="absolute inset-0 p-4">
          <span className="text-[10px] font-normal text-[#FF6957] mb-2">
            Business
          </span>
          <h2 className="text-[18px] text-white font-bold ">
            Developing Your Mental Balance Sheet..
          </h2>
          <p className="text-[11px] text-white py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <div>
            <button className="h-[22px] w-[22px] bg-brandOrangeGradientFrom flex items-center justify-center text-white rounded-full">
              <BsPlayFill size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterAudioMobileCard;
