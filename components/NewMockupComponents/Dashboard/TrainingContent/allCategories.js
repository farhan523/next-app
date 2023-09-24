import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useRouter } from "next/router";
const AllCategories = () => {
  const router = useRouter();
  const tags = ["About the Program"];
  const [activeButton, setActiveButton] = useState(0);
  const [category, setActiveCategory] = useState({
    categoryOrientation: false,
    categoryProgram: false,
    categoryFramework: false,
    categoryHowTo: false,
  });

  useEffect(() => {
    let modifiedRouter = handleQueryParams();
    router.push(modifiedRouter);
  }, [category]);

  const handleQueryParams = () => {
    if (category.categoryOrientation)
      router.query.categoryOrientation = category.categoryOrientation;
    else delete router.query.categoryOrientation;
    if (category.categoryProgram)
      router.query.categoryProgram = category.categoryProgram;
    else delete router.query.categoryProgram;
    if (category.categoryFramework)
      router.query.categoryFramework = category.categoryFramework;
    else delete router.query.categoryFramework;
    if (category.categoryHowTo)
      router.query.categoryHowTo = category.categoryHowTo;
    else delete router.query.categoryHowTo;
    return router;
  };

  const setActiveCategoryFilter = (item) => {
    if (item === "Orientation") {
      setActiveCategory((prevState) => ({
        ...prevState,
        categoryOrientation: true,
        categoryProgram: false,
        categoryFramework: false,
        categoryHowTo: false,
      }));
    }

    if (item === "About the Program") {
      setActiveCategory((prevState) => ({
        ...prevState,
        categoryOrientation: false,
        categoryProgram: true,
        categoryFramework: false,
        categoryHowTo: false,
      }));
    }

    if (item === "The Framework") {
      setActiveCategory((prevState) => ({
        ...prevState,
        categoryOrientation: false,
        categoryProgram: false,
        categoryFramework: true,
        categoryHowTo: false,
      }));
    }

    if (item === "How") {
      setActiveCategory((prevState) => ({
        ...prevState,
        categoryOrientation: false,
        categoryProgram: false,
        categoryFramework: false,
        categoryHowTo: true,
      }));
    }

    if (item === "All") {
      setActiveCategory((prevState) => ({
        ...prevState,
        categoryOrientation: false,
        categoryProgram: false,
        categoryFramework: false,
        categoryHowTo: false,
      }));
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <div className="mx-2 my-4 all_categories_slider">
      <Carousel responsive={responsive}>
        <button
          className={`p-3 mr-3 text-sm font-normal rounded-lg  ${
            activeButton == 0
              ? "text-white rounded-lg bg-brandBlue1 "
              : "text-brandBlack bg-icecream hover:bg-brandBlue1 hover:text-white"
          } `}
          onClick={() => {
            setActiveCategoryFilter("All"), setActiveButton(0);
          }}
        >
          All
        </button>
        {tags.map((item, index) => {
          return (
            <button
              key={index}
              className={`p-3 mr-3 text-sm font-normal rounded-lg ${
                activeButton == index + 1
                  ? "text-white rounded-lg bg-brandBlue1 "
                  : "text-brandBlack bg-icecream hover:bg-brandBlue1 hover:text-white"
              } `}
              onClick={() => {
                setActiveCategoryFilter(item), setActiveButton(index + 1);
              }}
            >
              {item}
            </button>
          );
        })}
      </Carousel>
      {/* <div className="relative py-3 my-3 all_categories">

                <div className="relative flex my-3 inner_all_categoreies">

                    <button className='p-3 mr-3 text-sm font-normal text-white rounded-lg bg-brandBlue1 '>
                        All
                    </button>
                    {tags.map((item, index) => {
                        return (
                            <button key={index} className='p-3 mr-3 text-sm font-normal rounded-lg text-brandBlack bg-brandBorder hover:bg-brandBlue1 hover:text-white'>
                                {item}
                            </button>
                        )
                    })}

                </div>
                <button className='absolute flex justify-center invisible w-5 h-5 align-middle rounded-full md:visible right-1 top-7 bg-icecream'>
                    <BiChevronRight className='' color='#0067B2' size={20} />
                </button>
            </div> */}
    </div>
  );
};

export default AllCategories;
