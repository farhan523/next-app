import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import useDownloader from "react-use-downloader";

const Cards = ({ item, onClick }) => {
  const { download } = useDownloader();
  let fileURL = item?.attributes?.fileUpload?.data?.attributes?.url;
  let fileName = item?.attributes?.fileUpload?.data?.attributes?.name;
  return (
    <div className="flex my-3 rounded-lg download_card shadow-downLoadCard ">
      <div className="w-2/3 p-5">
        <small className="text-smallBrand text-[8px]">
          {item?.attributes?.downloadsCategory?.toUpperCase()}
        </small>
        <h2 className="text-xs font-bold text-brandBlackLight ">
          {item?.attributes?.displayName}
        </h2>
        <p className="text-brandBlackLight text-[10px] font-normal mt-5 mb-9">
          {item?.attributes?.shortDescription}
        </p>
        <div className="flex mb-2 buttons">
          <button
            className="bg-brandBlue rounded-md w-[87px] text-center p-1 text-white text-[8px] font-normal"
            onClick={onClick}
          >
            Details
          </button>
          {/* <button
            className="rounded-md bg-brandOrangeRed w-[87px]  py-1 px-2 text-white text-[8px] font-normal flex justify-between ml-5"
            onClick={() => download(fileURL, fileName)}
          >
            Download <AiOutlineDownload className="mt-[2px]" />
          </button> */}
        </div>
      </div>
      <div className="w-1/3 h-full">
        <img
          src={item?.attributes?.thumbnailImage?.data?.attributes?.url}
          className="object-cover w-full h-[180px] rounded-r-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cards;
