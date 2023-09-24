import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { AiOutlineDownload } from "react-icons/ai";
import Cards from "./cards";
import DetailCard from "./detailCard";
import { useRouter } from "next/router";

const DownloadPageDetail = ({ downloadsData, type }) => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(0);
  const [filteredDownloads, setFilteredDownloads] = useState(downloadsData);
  const [show, setShow] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  const [downloadCategory, setDownloadCategory] = useState("");

  useEffect(() => {
    setItemInfo({});
    setShow(false);
    router.push(router);
  }, [downloadCategory]);

  const handleDownloadCategory = (category, activeTabValue) => {
    setDownloadCategory(category);
    setActiveButton(activeTabValue);
    if (category === "All") {
      setFilteredDownloads(downloadsData);
      // delete router.query.downloadCategory;
    } else {
      const filtereredData = downloadsData.filter((item) => {
        return item.attributes.downloadsCategory === category;
      });
      setFilteredDownloads(filtereredData);
      // router.query.downloadCategory = category;
    }
  };
  let audioExist = downloadsData.filter((downloadItem) => {
    return downloadItem.attributes.downloadsCategory === "audio";
  });

  let videoExist = downloadsData.filter((downloadItem) => {
    return downloadItem.attributes.downloadsCategory === "video";
  });

  let pdfExist = downloadsData.filter((downloadItem) => {
    return downloadItem.attributes.downloadsCategory === "pdf";
  });

  let tags = [];

  if (audioExist && audioExist.length > 0)
    tags.push({ id: "audio", name: "Audio Files" });
  if (videoExist && videoExist.length > 0)
    tags.push({ id: "video", name: "Videos" });
  if (pdfExist && pdfExist.length > 0) tags.push({ id: "pdf", name: "PDFs" });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  const onClickItemDetail = (item) => {
    setItemInfo(item);
    setShow(true);
  };

  const onClickItemDetailRemove = () => {
    setItemInfo({});
    setShow(false);
  };

  return (
    <div className="relative w-full p-4 md:p-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className={`ml-0 lg:ml-7 hidden lg:block `}>
          {type !== "student-wallet" && (
            <h2 className="mt-5 text-3xl font-semibold text-brandBlack md:mt-0">
              Downloads
            </h2>
          )}

          {type === "student-wallet" && (
            <h2 className="mb-8 text-xl font-medium text-brandBlue1">
              Downloads
            </h2>
          )}
          {type !== "student-wallet" && (
            <div className="all_categories_slider my-14">
              <Carousel responsive={responsive}>
                <button
                  className={`p-3 mr-3 text-sm font-normal rounded-lg  ${
                    activeButton == 0
                      ? "text-white rounded-lg bg-brandBlue1 "
                      : "text-brandBlack bg-icecream hover:bg-brandBlue1 hover:text-white"
                  } `}
                  onClick={() => {
                    handleDownloadCategory("All", 0);
                  }}
                >
                  All
                </button>
                {tags &&
                  tags.length > 0 &&
                  tags.map((item, index) => {
                    return (
                      <button
                        key={index}
                        className={`p-3 mr-3 text-sm font-normal rounded-lg ${
                          activeButton == index + 1
                            ? "text-white rounded-lg bg-brandBlue1 "
                            : "text-brandBlack bg-icecream hover:bg-brandBlue1 hover:text-white"
                        } `}
                        onClick={() => {
                          handleDownloadCategory(item.id, index + 1);
                        }}
                      >
                        {item.name}
                      </button>
                    );
                  })}
              </Carousel>
            </div>
          )}

          {filteredDownloads.map((item, index) => {
            return (
              <Cards item={item} onClick={() => onClickItemDetail(item)} />
            );
          })}
        </div>
        {show && (
          <div className="relative hidden lg:block">
            <div className="sticky top-5">
              <DetailCard
                item={itemInfo}
                onClick={() => onClickItemDetailRemove()}
              />
            </div>
          </div>
        )}

        {/* Mobile Version */}

        <div className="block lg:hidden">
          {show == false && (
            <div className={`ml-0 lg:ml-7`}>
              <h2 className="mt-5 text-3xl font-semibold text-brandBlack md:mt-0">
                Downloads
              </h2>
              {type !== "student-wallet" && (
                <div className="all_categories_slider my-14">
                  <Carousel responsive={responsive}>
                    <button
                      className={`p-3 mr-3 text-sm font-normal rounded-lg  ${
                        activeButton == 0
                          ? "text-white rounded-lg bg-brandBlue1 "
                          : "text-brandBlack bg-icecream hover:bg-brandBlue1 hover:text-white"
                      } `}
                      onClick={() => {
                        setActiveButton(0);
                      }}
                    >
                      All
                    </button>
                    {tags &&
                      tags.length > 0 &&
                      tags.map((item, index) => {
                        return (
                          <button
                            key={index}
                            className={`p-3 mr-3 text-sm font-normal rounded-lg ${
                              activeButton == index + 1
                                ? "text-white rounded-lg bg-brandBlue1 "
                                : "text-brandBlack bg-icecream hover:bg-brandBlue1 hover:text-white"
                            } `}
                            onClick={() => {
                              handleDownloadCategory(item.id, index + 1);
                            }}
                          >
                            {item.name}
                          </button>
                        );
                      })}
                  </Carousel>
                </div>
              )}

              {filteredDownloads.map((item, index) => {
                return (
                  <Cards item={item} onClick={() => onClickItemDetail(item)} />
                );
              })}
            </div>
          )}
        </div>

        {show && (
          <div className="block lg:hidden">
            <DetailCard
              item={itemInfo}
              onClick={() => onClickItemDetailRemove()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadPageDetail;
