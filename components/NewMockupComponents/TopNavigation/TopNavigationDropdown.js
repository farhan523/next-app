import { useRef } from "react";
import { useOutsideClick } from "../../../custom-hooks/useOutsideClick";

const TopHeaderDropdown = (props) => {
  const mainDiv = useRef();
  useOutsideClick(mainDiv, function () {
    props.requestHide && props.requestHide();
  });
  return (
    <div
      ref={mainDiv}
      className="py-[15px] grid grid-cols-1  bg-brandBlue shadow-xl gap-[55px] relative  min-h-[307px] w-[260px] lg:block hidden"
    >
      <div className="">
        <a href="/program-information/students">
          <div className="p-2 px-4 hover:bg-brandBlueDark grid grid-cols-2 cursor-pointer items-center mx-auto">
            <h3 className="text-white text-[15px]">Students</h3>
            <img src="/static/img/angleRight.svg" className="ml-auto w-[9px]" />
          </div>
        </a>
        <a href="/program-information/parents">
          <div className="p-2 px-4 hover:bg-brandBlueDark grid grid-cols-2  cursor-pointer items-center mx-auto">
            <h3 className="text-white text-[15px] ">Parents</h3>
            <img src="/static/img/angleRight.svg" className="ml-auto w-[9px] " />
          </div>
        </a>
        <a href="/program-information/university">
          <div className="p-2 px-4 hover:bg-brandBlueDark grid grid-cols-2  cursor-pointer items-center mx-auto">
            <h3 className="text-white text-[15px] ">Universities</h3>
            <img src="/static/img/angleRight.svg" className="ml-auto w-[9px] " />
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopHeaderDropdown;
