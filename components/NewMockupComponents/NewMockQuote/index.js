import { useEffect } from "react";

function NewMockQuotes() {
  return (
    <div className="bg-brandBlue w-[100%] lg:min-h-[81px] min-h-[71px]  h-auto lg:py-4 py-2 ">
      <div className="mx-auto flex justify-center items-center container text-center  ">
        <p className="text-white text-[15px] lg:w-[95%]  lg:line-clamp-none  w-[95%] font-semibold leading-8">
          "Partnering with the University of LaVerne and Northern Arizona
          University is a step in our expansion plan to teach youngsters about
          the “Three-Legged Stool” -
          <br className="hidden xl:block" />a mind-training program which teaches them not “what” to think,
          but rather “HOW” to think, become Master Adaptive Learners and achieve
          success” &nbsp;&nbsp;&nbsp; -Morton Fleischer
        </p>
      </div>
    </div>
  );
}

export default NewMockQuotes;
