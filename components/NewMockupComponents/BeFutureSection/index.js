import Image from "next/image";

const BeFutureSection = () => {
  return (
    <>
      <div className="bg-[#39AF4F] flex justify-center min-h-[180px] items-center mx-auto hero-mockup-new mt-10">
        <div className="lg:w-[50%] px-10 h-full items-center lg:px-0 flex flex-col md:flex-row justify-between">
          <Image src={"/static/img/nafLogo.svg"} width={160} height={160} />
          <p className="text-lg w-full md:w-[70%] lg:text-start text-center lg:w-[68%] text-white mb-8 md:mb-0">
            At NAF, we don’t just talk the talk – we walk the walk. To deliver
            effectively on our mission, we draw on our core values in all that
            we do.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeFutureSection;
