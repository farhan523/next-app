import Image from "next/dist/client/image";
import { useEffect, useState } from "react";

const SortableItem = (props) => {
  return (
    <div className=" w-full border-b border-[#A7C4D7] flex justify-center flex-col items-center">
      <div className="w-[94%] h-full py-2 flex justify-between px-4 items-center">
        <div className="flex gap-4 items-center h-full">
          <div className="w-[20px] mt-2">
            <Image
              alt=""
              src={"/static/img/dragIcon.svg"}
              width={100}
              height={100}
            />
          </div>
          <div className="font-semibold text-left text-sm">
            {props.data && props.data}
          </div>
        </div>
        <div
          className={`cursor-pointer w-[20px]`}
          onClick={() => props.onRemoveList(props.type, props.ind)}
        >
          <Image
            alt=""
            src={"/static/img/collapseIcon.svg"}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

const SortableSheetList = ({ data, onRemoveList, type }) => {
  const [c2data, setC2Data] = useState([]);

  useEffect(() => {
    setC2Data(data);
  }, [data]);

  return (
    <div className="w-full h-full flex flex-col">
      {c2data?.map((value, ind) => {
        return (
          <SortableItem
            key={`item-${ind}`}
            ind={ind}
            data={value}
            onRemoveList={onRemoveList}
            type={type}
          />
        );
      })}
    </div>
  );
};
export default SortableSheetList;
