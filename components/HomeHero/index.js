import { useState } from "react";
import Link from "next/link";
import ReactPlayer from 'react-player/youtube'

const HomeHero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:pt-6 xl:pt-20 homeHero flex items-center relative">
      {/* Overlay over the section */}
      <div className="overlay bg-black absolute inset-0 opacity-60" />
      <div className="mx-auto container flex flex-col lg:flex-row px-4 lg:px-32 py-20 xl:py-0  lg:py-32">
        <div className="lg:w-1/2 w-full z-10 relative" data-aos="fade-up">
          <p className="text-white text-xl mb-2 ">WHAT IS THE</p>
          <p className="text-5xl text-white ">Fleischer Scholars Program?</p>
          <div
            className={`customSelect bg-white w-full md:w-2/3 mt  -16 relative ${!isOpen ? "rounded-lg" : "rounded-tl-lg rounded-tr-lg"
              }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="items-center flex justify-between py-5 rounded-lg px-8 cursor-pointer">
              <p className="text-brandBlue text-base">LEARN MORE</p>
              {!isOpen ? (
                <i
                  className="fa fa-angle-down"
                  style={{
                    color: "#0067b2",
                    cursor: "pointer",
                    fontSize: "25px",
                  }}
                ></i>
              ) : (
                <i
                  className="fa fa-angle-up"
                  style={{
                    color: "#0067b2",
                    cursor: "pointer",
                    fontSize: "25px",
                  }}
                ></i>
              )}
            </div>
            {isOpen && (
              <div className="absolute right-0 left-0 bg-white rounded-bl-lg rounded-br-lg">
                <Link href="/program-information/students">
                  <a>
                    <div className="px-8 pt-6 pb-4 cursor-pointer option text-brandBlue hover:text-white">
                      <p className=" text-base uppercase">I am a Student</p>
                    </div>
                  </a>
                </Link>
                <Link href="/program-information/parents">
                  <a>
                    <div className="px-8 pt-6 pb-4 cursor-pointer option text-brandBlue hover:text-white">
                      <p className=" text-base uppercase">I am a Parent</p>
                    </div>
                  </a>
                </Link>
                <Link href="/program-information/university">
                  <a>
                    <div className="px-8 pt-6 pb-4 cursor-pointer option rounded-bl-lg rounded-br-lg text-brandBlue hover:text-white">
                      <p className=" text-base uppercase hover:text-white">
                        I am a University
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <div className="z-2 relative">
            <ReactPlayer
              className='react-player'
              url={'https://www.youtube.com/embed/fDdbcfXVTro'}
              light={'/static/img/studentHeader.png'}
              playing={true}
              controls={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeHero;
