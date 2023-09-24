import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import useDownloader from "react-use-downloader";
import { AiOutlineEye } from "react-icons/ai";
import LoadingButton from "../../../LoadingButton/LoadingButton";

const DetailCard = ({ item, onClick }) => {

  const { download, isInProgress } = useDownloader();
  let fileURL = item?.attributes?.fileUpload?.data?.attributes?.url;
  let fileName = item?.attributes?.fileUpload?.data?.attributes?.name;
  let fileType = item?.attributes?.fileUpload?.data?.attributes?.ext;
  function handleClick() {
    typeof window !== "undefined" && window.open(fileURL, "_blank");
  }

  var audioFile = item?.attributes?.fileUpload?.data?.attributes?.url;

  return (
    <div>
      <div className="img_detail">
        <div className="relative w-full w- h-[300px]">
          <img
            src={
              item?.attributes?.featuredImage?.data?.attributes?.url
                ? item?.attributes?.featuredImage?.data?.attributes?.url
                : item?.attributes?.thumbnailImage?.data?.attributes?.url
            }
            className="object-cover w-full h-full rounded-lg shadow-imagCard"
            alt=""
          />

          <div className="w-[37px] h-[37px] block ">
            <div
              className="w-[37px] h-[37px] rounded-full bg-[#D8D8D8] flex justify-center items-center absolute top-4 left-4 hover:cursor-pointer "
              onClick={onClick}
            >
              <BsArrowLeftShort color="#0067B2" size={18} />
            </div>
          </div>

          <div className="block w-full">
            <audio id="song" class="block w-full absolute bottom-[-60px]" controls src={audioFile}>
              <source src={audioFile} type="audio/mp3" />
            </audio>
          </div>

        </div>

        <div className="mt-20 detail_text">
          <h2 className="mb-5 text-2xl font-semibold text-brandBlackLight">
            {item?.attributes?.displayName}
          </h2>
          <p className="text-brandBlackLight text-[10px] font-normal mb-0">
            {item?.attributes?.longDescription}
          </p>
        </div>

        {isInProgress ? (
          <LoadingButton
            loaderColor={"fill-brandOrangeRed"}
            borderColor={"border-brandOrangeRed"}
          />
        ) : (
          <button
            className="rounded-lg bg-brandOrangeRed mt-4 py-2 px-5 text-white text-[13px] font-normal flex justify-between w-[140px]"
            onClick={() => download(fileURL, fileName)}
          >
            Download
            <AiOutlineDownload className="mt-[2px]" />
          </button>
        )}
      </div>
      {fileType && fileType === ".pdf" && (
        <div className="mt-4">
          <p className="text-[#4F8EBC] font-light text-[13px]">
            Preview feature for this document is available.
          </p>
          <button
            className="rounded-lg bg-brandBlue mt-4  py-2 px-5 text-white text-[13px] font-normal flex justify-between w-[140px]"
            onClick={handleClick}
          >
            Preview
            <AiOutlineEye className="mt-[2px]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailCard;
