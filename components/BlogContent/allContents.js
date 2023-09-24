import React, { useState, useEffect } from "react";
import Shape from "../../static/img/elipse_orange.png";
import Shape1 from "../../static/img/Ellipse_bottom.png";
import Image from "next/image";
import CategoryBlog from "./categoryBlog";
import { useRouter } from "next/router";
const AllContents = ({ blogPosts }) => {
  const router = useRouter();
  const [category, setCategory] = useState("");

  useEffect(() => {
    router.push(router);
  }, [category]);

  const handleCategory = (category, activeTabValue) => {
    setCategory(category);
    setActiveTab(activeTabValue);
    if (category === "All") {
      delete router.query.category;
    } else {
      router.query.category = category;
    }
  };
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="w-full bg-icecream ">
        <div className="w-full mx-auto hero-mockup-new lg:mb-0">
          <div className="w-full px-5 lg:px-20">
            <ul>
              <li
                onClick={() => handleCategory("All", 0)}
                className={`inline-block py-5 md:mr-10 mr-3 md:text-xl text-sm hover:cursor-pointer  ${
                  activeTab == 0
                    ? "text-brandOrangeRed border-brandOrangeRed font-bold border-b-4"
                    : "font-normal text-silverLight1"
                }`}
              >
                ALL ARTICLES
              </li>
              <li
                onClick={() => handleCategory("Foundation News", 1)}
                className={`inline-block py-5 md:mr-10 mr-3 md:text-xl text-sm hover:cursor-pointer  ${
                  activeTab == 1
                    ? "text-brandOrangeRed border-brandOrangeRed font-bold border-b-4"
                    : "font-normal text-silverLight1"
                }`}
              >
                FOUNDATION NEWS
              </li>
              <li
                onClick={() => handleCategory("Scholar Stories", 2)}
                className={`inline-block py-5 md:mr-10 mr-3 md:text-xl text-sm hover:cursor-pointer  ${
                  activeTab == 2
                    ? "text-brandOrangeRed border-brandOrangeRed font-bold border-b-4"
                    : "font-normal text-silverLight1"
                }`}
              >
                SCHOLAR STORIES
              </li>
              <li
                onClick={() => handleCategory("Impact", 3)}
                className={`inline-block py-5 md:mr-10 mr-3 md:text-xl text-sm hover:cursor-pointer ${
                  activeTab == 3
                    ? "text-brandOrangeRed border-brandOrangeRed font-bold border-b-4"
                    : "font-normal text-silverLight1"
                }`}
              >
                IMPACT
              </li>
              <li
                onClick={() => handleCategory("Giving", 4)}
                className={`inline-block py-5 md:mr-10 mr-3 md:text-xl text-sm hover:cursor-pointer  ${
                  activeTab == 4
                    ? "text-brandOrangeRed border-brandOrangeRed font-bold border-b-4"
                    : "font-normal text-silverLight1"
                }`}
              >
                GIVING
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="w-full mx-auto hero-mockup-new lg:mb-0">
          <div className="relative w-full px-5 lg:px-20 lg:py-12">
            <div className="absolute top-0 right-0 -z-10">
              <Image src={Shape} className="" />
            </div>
            <div className="absolute left-0 -bottom-4 -z-10">
              <Image src={Shape1} className="" />
            </div>
            {blogPosts?.data?.length > 0 ? (
              <CategoryBlog blogPosts={blogPosts} />
            ) : (
              <h2 className="pt-8 ">No Blog Post Found</h2>
            )}

            {/* // )} */}
            {/* {activeTab == 1 && <CategoryBlog />}
            {activeTab == 2 && <CategoryBlog />}
            {activeTab == 3 && <CategoryBlog />}
            {activeTab == 4 && <CategoryBlog />} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllContents;
