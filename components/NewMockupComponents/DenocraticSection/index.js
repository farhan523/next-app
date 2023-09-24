import Image from "next/image";

const DenocraticSection = () => {
  return (
    <div className="bg-brandBlue h-fit mx-auto hero-mockup-new mt-5">
      <div className="w-[100%] h-[100%] flex lg:content-center lg:items-center flex-col lg:flex-row justify-evenly gap-10 mb-[50px] p-12">
        <div className="lg:min-h-[500px] lg:mx-0 mb-[70px] flex flex-col items-center px-4 lg:px-10 lg:mb-0 w-[100%]">
          <div className="w-full flex flex-col items-center mt-10 text-white">
            <p className="text-2xl">WHAT IS</p>
            <p className="text-4xl font-bold w-full text-center">
              DEMOCRATIC CAPITALISM?
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-10 xl:flex-row justify-evenly my-20">
            <div className="relative mb-8">
              <div className="grid grid-cols-[30px_280px] w-full items-start mb-[14px]">
                <h1 className="text-5xl text-brandOrangeGradientFrom font-extrabold mr-2">
                  1
                </h1>
                <div className="border-b-2 w-full border-brandOrange mb-[4px] pt-[15px] lg:pt-0 "></div>
              </div>
              <p className="flex flex-col absolute text-white left-10 w-[190px] lg:w-[280px] top-5 lg:top-2">
                A predominantly incentive driven market economy
              </p>
            </div>
            <div className="relative mb-16 lg:mb-10">
              <div className="grid grid-cols-[30px_280px] items-start mb-[14px]">
                <h1 className="text-5xl text-brandOrangeGradientFrom font-extrabold">
                  2
                </h1>
                <div className="border-b-2 w-full border-brandOrange mb-[4px] pt-[15px] lg:pt-0 "></div>
              </div>
              <p className="flex flex-col absolute text-white left-10 w-[190px] lg:w-[280px] top-5 lg:top-2">
                A government that respects the rights of the individual to life,
                liberty and the pursuit of happiness and
              </p>
            </div>
            <div className="relative mb-16 lg:mb-10">
              <div className="grid grid-cols-[30px_280px] items-start mb-[14px]">
                <h1 className="text-5xl text-brandOrangeGradientFrom font-extrabold">
                  3
                </h1>
                <div className="border-b-2 w-full border-brandOrange mb-[4px] pt-[15px] lg:pt-0 "></div>
              </div>
              <p className="flex flex-col absolute text-white left-10 w-[190px] lg:w-[280px] top-5 lg:top-2">
                A system of cultural institutions moved by the ideas of liberty,
                opportunity, and the inspiration of justice for all
              </p>
            </div>
          </div>

          <div className="lg:w-[50%] w-full flex justify-center text-center text-white">
            The above is metaphorically represented by the SPIRIT statue, a
            bronze sculpture created by Buck McCain and donated to Arizona State
            University in 2009. These horses, which rise up from the earth,
            reflect the indomitable spirit of America and the boundless
            opportunities freedom affords us.
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <Image
          src="/static/img/democramaticBg.png"
          layout="responsive"
          width={1920}
          height={450}
          className="object-cover"
        />
        <div className="absolute top-0 h-full flex bg-black bg-opacity-60 w-full justify-center items-center">
          <img
            src="/static/img/logoWhite.png"
            className="logo min-h-[57px] w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};
export default DenocraticSection;
