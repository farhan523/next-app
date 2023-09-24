import { strapiUrl } from "../../apiPath";
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from "react-share";
import moment from "moment";
const Index = ({ featuredBlog }) => {
  let currentUrl = typeof window !== "undefined" && window?.location?.href;
  return (
    <div className="flex flex-wrap">
      <div className="lg:w-1/2 bg-brandBlue flex  items-center py-16 px-4 lg:px-8 xl:px-12 xl:pl-40">
        <div data-aos="fade-down">
          <p className="uppercase text-white text-lg mb-4">fleischer scholars's blog</p>
          <h1 className="text-white text-4xl font-semibold">{featuredBlog?.title || ""}</h1>

          <p className="text-brandOrange text-lg mt-4 font-semibold">{moment(featuredBlog?.created_at).format("MMM D, YYYY")  }</p>
          <div className="flex mt-2">
            <TwitterShareButton url={currentUrl}>
              <i className="fa fa-twitter mr-3 text-white outline-none"></i>
            </TwitterShareButton>
            <FacebookShareButton url={currentUrl}>
              {" "}
              <i className="fa fa-facebook mr-3 text-white outline-none"></i>
            </FacebookShareButton>
            <EmailShareButton url={currentUrl}>
              <i className="fa fa-envelope mr-3 text-white"></i>
            </EmailShareButton>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="w-full lg:w-1/2  bg-themeGray flex items-center justify-center lg:p-12 p-4">
        <img src={strapiUrl + featuredBlog?.image?.url} />
      </div>
    </div>
  );
};
export default Index;
