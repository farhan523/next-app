import { useMemo } from "react";
import get from "lodash/get"

const NewsUpdate = ({ data: recentUpdate }) => {
  const content = useMemo(() => {
    return get(recentUpdate, "updates.data[1]", null);
  }, [recentUpdate]);

  if (!content) return <></>;

  return (
    <div className="w-[100%]  lg:h-[50px] p-[20px] 2xl:gap-[215px]  lg:p-[0] text-white flex justify-evenly min-h-[60px] items-center  bg-gradient">
      <p className="2xl:w-[80%] 2xl:w-[70%] text-center 2xl:text-end  lg:line-clamp-none text-[15px] ">
        {content?.attributes?.description}
      </p>
      <a
        className="lg:cursor-pointer 2xl:w-[183px] lg:font-semibold lg:flex lg:items-center hidden "
        href={content?.attributes?.link}
        target="_blank"
      >
        View Update
        <span className="ml-[7px]">
          <img src="/static/img/arrowRight.svg" />
        </span>{" "}
      </a>
    </div>
  );
};
export default NewsUpdate;
