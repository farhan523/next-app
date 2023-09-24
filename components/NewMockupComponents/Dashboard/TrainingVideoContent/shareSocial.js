import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

import { Share } from "../../SvgIconsComponents/control";
import {
  EmailShareButton,
  //   FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperIcon,
  InstapaperShareButton,
} from "next-share";
const ShareSocial = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <button
        className="flex mt-2 text-sm font-medium ml-7 text-brandBlack"
        onClick={onOpenModal}
      >
        <span className="mr-1 ">
          <Share />
        </span>{" "}
        <span className="text-xs font-normal text-brandBlack">Share</span>
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="mt-5">
          <FacebookShareButton
            url={typeof window !== "undefined" && window.location.href}
            // quote={}
            // hashtag={""}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          {/* <InstapaperShareButton
            url={"https://github.com/next-share"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          >
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>
        </div> */}
        </div>
      </Modal>
    </div>
  );
};

export default ShareSocial;
