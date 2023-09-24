import { useMemo } from "react";
import Button from "../OrangeButton";

function FaqItem(props) {
  const { isOpened, isLastItem, data } = props;

  const title = useMemo(() => {
    if (data.attributes.lookup.data.attributes.name == "I_AM_A_UNIVERSITY") {
      return "I am a University";
    }
    if (data.attributes.lookup.data.attributes.name == "I_AM_A_PARENT") {
      return "I am a Parent";
    }
    if (data.attributes.lookup.data.attributes.name == "I_AM_A_STUDENT") {
      return "I am a Student";
    }
  }, [data]);

  return (
    <div>
      <div
        className={`${
          isOpened ? "hidden" : "block cursor-pointer"
        } w-[100%] min-h-[100px] h-auto p-[20px] flex justify-center flex-col bg-sky-100 ${
          isLastItem ? "border-b-0" : "border-b-2"
        } last:border-b-0  border-brandBlue items-center`}
        onClick={() => props.onRequestOpen()}
      >
        <div className="w-[85%] flex justify-between">
          <p className="text-[22px] font-semibold text-brandBlue bg-sky-100 ">
            {title}
          </p>
          <div className="cursor-pointer p-[7px]">
            <img src="/static/img/plusIcon.svg" />
          </div>
        </div>
      </div>
      <div
        className={`bg-brandBlue lg:min-h-[583px]  min-h-[799px] ${
          isOpened ? "block" : "hidden"
        } w-[100%] p-[15px]`}
      >
        <div
          className="flex justify-end w-[92.5%] p-[7px] h-[30px] cursor-pointer"
          onClick={() => props.onRequestHide()}
        >
          <img src="/static/img/minusIcon.svg" className="w-[30px]" />
        </div>
        <div className="mx-auto container">
          <div className="w-[100%] grid lg:grid-cols-2 gap-[40px] grid-flow-dense  mt-[40px]">
            <div className="grid grid-rows-[135px_100px_100px] h-[300px] order-2 lg:order-1 lg:w-[80%]">
              <div className="text-center lg:text-start">
                <div className="inline-grid lg:grid-cols-[184px_225px] items-end">
                  <h3 className="text-white text-[20px] font-thin ">
                    {data.attributes.value}
                  </h3>
                  <div className="w-[200px] bg-white my-[25px] lg:my-0 h-[2px] relative"></div>
                </div>
                <h1 className="text-white lg:text-[36px] text-[27px] font-semibold">
                  {title}
                </h1>
              </div>
              <p className="text-white w-[80%] mx-auto lg:w-[100%] lg:mx-0 line-clamp-4 text-center lg:text-start ">
                {data.attributes.value_1}
              </p>
              <div className="lg:w-[44%] w-[60%] mx-auto lg:mx-0  mt-[70px]">
                <Button
                  IconRight={"/static/img/angleRight.svg"}
                  as="a"
                  href={data.attributes.link}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div
              className={`relative lg:w-[350px] w-[252px] h-[286px] lg:h-[397px] m-auto order-1 lg:order-2 `}
            >
              <div className="w-[30px] flex justify-center items-center h-[30px] absolute bg-brandOrangeDark rounded-full top-[-15px] left-[-15px]">
                <img src="/static/img/graduation-cap.svg" className="w-[70%]" />
              </div>
              <img
                src="/static/img/studentsContactImage.png"
                className="object-cover w-[100%] h-[100%] rounded-md "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
