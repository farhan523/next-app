import OrangeButton from "../OrangeButton";
import Image from "next/image";

const NafWorkbookSection = () => {
  return (
    <div className="lg:container h-fit mx-auto hero-mockup-new mt-10">
      <div className="w-[100%] h-[100%] flex lg:content-center lg:items-center flex-col lg:flex-row justify-between gap-10 mb-[50px] p-12">
        <div className="lg:min-h-[500px] lg:w-[40%] lg:mx-0 mb-[70px] lg:mb-0 w-[100%]">
          <div className="grid lg:grid-cols-[157px_220px] mb-[14px]">
            <h1 className="text-2xl text-brandBlue w-full text-center lg:text-left">
              THE BOOK
            </h1>
            <div className="border-b-2 w-full border-brandBlue mb-[4px] pt-[15px] lg:pt-0 "></div>
          </div>
          <p className="text-[35px] text-brandBlue text-center lg:text-left leading-[40px] mb-[60px]">
            BUILDING YOUR{" "}
            <span className="font-bold">MENTAL BALANCE SHEET</span>
          </p>
          <div className="flex lg:w-[80%] flex-col gap-6 text-center lg:text-left">
            <p className="font-bold">Building Your Mental Balance Sheet</p>
            <p>
              I have always believed we will never achieve the American dream
              until we figure out how to get these people who are less
              privileged economically into the mainstream.
            </p>
            <p>
              {" "}
              To illustrate his story, Morton Fleischer, Founder of Fleischer
              Scholars, wrote Building Your Mental Balance Sheet, a book written
              specifically for young students.
            </p>
          </div>

          <div className="lg:w-[44%] w-[70%] mx-auto lg:mx-0 mt-[100px]">
            <OrangeButton
              IconRight={"/static/img/angleRight.svg"}
              as="a"
              href={"/naf#requestInfo"}
            >
              Learn More
            </OrangeButton>
          </div>
        </div>
        <div className="lg:min-h-[500px] lg:w-[40%] lg:mx-0 mb-[70px] lg:mb-0 w-[100%] flex justify-center">
          <Image
            src={"/static/img/nafGoals.png"}
            width={500}
            height={500}
            className="w-[80%] h-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default NafWorkbookSection;
