import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";
const HeroSection = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (search === "") delete router.query.search;
      else router.query.search = search;
      router.push(router);
    }
  };
  return (
    <div className="w-full blog_page_hero ">
      <div className="w-full mx-auto hero-mockup-new lg:mb-0">
        <div className="w-full p-5 lg:p-20">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="mt-6 lg:mt-0 lg:relative img">
              <h2 className="text-4xl font-extrabold text-brandBlue">
                FLEISCHER SCHOLARS BLOG
              </h2>
              <div className="relative w-full mt-16">
                <input
                  type="text"
                  placeholder=""
                  className="w-full h-10 pl-10 font-normal bg-white border-none rounded-xl"
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleSearch}
                />
                <AiOutlineSearch
                  className="absolute left-3 top-2.5"
                  color="#0067B2"
                  size={20}
                />
              </div>
              {/* <div className="my-3">
                <p className="text-sm font-normal text-brandBlack">
                  Recent Searches:
                  <button className="ml-2 text-brandOrangeGradientFrom">
                    Scholar
                  </button>
                  <button className="ml-2 text-brandOrangeGradientFrom">
                    , Curriculum
                  </button>
                </p>
              </div> */}
            </div>
            <div className="mt-5 lg:pl-10 lg:mt-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
