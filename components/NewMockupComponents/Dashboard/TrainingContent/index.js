import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import Videos from "./videos";
import Articles from "./articles";
import Filter from "./filter";
import AllCategories from "./allCategories";
import { useRouter } from "next/router";
import Shape from "../../../../static/img/Ellipse_blue.svg";
import Image from "next/image";

const TrainingContent = ({ videos, articles, role }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("new");
  const [searchState, setSearchState] = useState(false);
  useEffect(() => {
    router.query.sortBy = sortBy;
    router.push(router);
  }, [sortBy]);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      router.query.search = search;
      router.push(router);
    }
  };
  return (
    <div className={`relative w-full p-2 ${role === 'student-wallet' ? 'mt-2 ml-12' : 'mt-12'}md:p-5`}>
      {role !== "student-wallet" && (
        <div className="absolute right-0 -z-10 -top-40">
          <Image src={Shape} className="" />
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="col-span-3 md:ml-7">
          {role === 'student-wallet' ? (
            <h2 className="mt-8 pt-8 pb-8 text-3xl font-semibold text-brandBlack md:mt-0">
              Student Wallet
          </h2>
          ) : role === 'student' ? (
            <h2 className="mt-8 pt-8 pb-8 text-3xl font-semibold text-brandBlack md:mt-0">
            Watch
        </h2>
          ) : (
            <h2 className="mt-8 pt-8 pb-8 text-3xl font-semibold text-brandBlack md:mt-0">
            Training
        </h2>
          )}
        {/* <h2 className="mt-8 pt-8 pb-8 text-3xl font-semibold text-brandBlack md:mt-0">
          {role !== "student" && role !== 'student-wallet' ? "Training" : "Watch" }
        </h2> */}
          {/* <div className="p-4 mx-2 rounded-lg bg-icecream">
            <h3 className="mt-3 mb-8 text-xl text-brandBlue1 brandBlue1">
              Search Videos
            </h3>
            <div className="grid grid-cols-1 md:gap-4 md:grid-cols-4">
              <div className="col-span-3">
                <div className="relative w-full">
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
              </div>
              <div className="relative w-full">
                <select
                  name="sortBy"
                  className="w-full h-10 mt-2 font-normal bg-white border-none md:mt-0 text-brandBlack rounded-xl"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="new">Newest</option>
                  <option value="old">Oldest</option>
                </select>
              </div>
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
          {/* </div> */}
          {role !== "student-wallet" && <AllCategories />}
          {/* all Tags goes here */}
          {/* <div className="block mx-2 md:hidden">
            <Filter />
          </div> */}
          <Videos videos={videos} role={role} />
          {/* <Articles articles={articles} /> */}
        </div>
        {/* <div className="hidden md:block"><Filter /></div> */}
      </div>
      {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script> */}
    </div>
  );
};

export default TrainingContent;
