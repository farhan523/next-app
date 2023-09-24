const CurriculumCard = ({ title, index, description, img, list }) => {
  return (
    <div className="mx-auto w-[213px]  grid grid-rows-[55px_187px_16px]  cursor-pointer   rounded relative h-[273px] shadow-2xl mt-10 pt-4 ">
      {/* <div className="absolute flex justify-center items-center  top-[-10px] bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo w-[32px] rounded-full left-[35px] h-[32px] shadow  mx-auto ">
        <div className="bg-white z-10 w-[26px] flex justify-center items-center h-[26px] rounded-full ">
          <span className="m-auto text-transparent bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo bg-clip-text font-bold ">
            {index + 1}
          </span>
        </div>
      </div> */}
      <div className="h-20 bg-slate-500 w-[184px] mx-auto  rounded">
        <img
          src={`/static/img/${img}`}
          className="w-[100%] h-[100%] object-cover rounded"
        />
      </div>
      <div className="w-[80%] mx-auto mt-[45px]">
        {typeof title == "object" ? (
          <p className="text-[17px] font-[800] ">
            {title.upperTitle}
            {title.spanItem ? (
              <>
                <br />
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo">
                  {title.spanItem}
                </span>
              </>
            ) : (
              ""
            )}
            <br />
            {title.lowerTitle}
          </p>
        ) : (
          <p className="text-[17px] text-brandBlack   font-[800] "> {title}</p>
        )}
        {description ? (
          <p className="text-[17px] mt-[13px] text-start">{description}</p>
        ) : (
          ""
        )}
        {list ? (
          <ul className="list-disc ml-[14px] text-[15px] ">
            {list.map((items) => {
              return <li>{items}</li>;
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="bg-gradient-to-r from-brandOrangeGradientFrom to-brandOrangeGradientTo w-[100%] h-[15px] items-end  "></div>
    </div>
  );
};

export default CurriculumCard;
