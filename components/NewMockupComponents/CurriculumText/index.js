import { useMemo } from "react";
import get from "lodash/get"

const CurriculumText = ({ data: recentUpdate }) => {
  const content = useMemo(() => {
    return get(recentUpdate, "updates.data[0]", null);
  }, [recentUpdate]);

  return (
    <div className="w-[100%]  lg:h-[50px] p-[20px] 2xl:gap-[215px]  lg:p-[0] text-white flex justify-around min-h-[60px] items-center  bg-gradient">
      <p className="w-[70%] 2xl:w-[60%] text-center 2xl:text-end  lg:line-clamp-none text-[16px] ">
        {content?.attributes?.description}
      </p>
      <a href={content?.attributes?.link} className="lg:cursor-pointer 2xl:w-[153px]  lg:font-semibold lg:flex lg:items-center lg:justify-end hidden ">
        Get Started {" "}
        <span className="ml-[7px]">
          <img src="/static/img/arrowRight.svg" />
        </span>{" "}
      </a>
    </div>
  );
};

export default CurriculumText;
