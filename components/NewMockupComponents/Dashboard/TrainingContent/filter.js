import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchAPI } from "../../../../lib/api";
const Filter = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState({
    entryLevel: false,
    intermediateLevel: false,
    expertLevel: false,
    onSite: false,
    categoryOrientation: false,
    categoryProgram: false,
    categoryFramework: false,
    categoryHowTo: false,
    courseEducation: false,
    courseStudents: false,
    courseLeadership: false,
    courseHowTo: false,
  });

  const [count, setCount] = useState({
    entryLevelCount: 0,
    intermediateLevelCount: 0,
    expertLevelCount: 0,
    categoryOrientationCount: 0,
    categoryProgramCount: 0,
    categoryFrameworkCount: 0,
    categoryHowToCount: 0,
    courseEducationCount: 0,
    courseStudentsCount: 0,
    courseLeadershipCount: 0,
    courseHowToCount: 0,
    onSiteLocationCount: 0,
  });

  const calculateCount = (
    trainingExperienceLevelCount,
    trainingCategoryCount,
    trainingCourseCount,
    trainingLocationCount
  ) => {
    const entryLevelCount =
      trainingExperienceLevelCount?.data[0]?.attributes?.training_videos?.data
        ?.length;
    const intermediateLevelCount =
      trainingExperienceLevelCount?.data[1]?.attributes?.training_videos?.data
        ?.length;
    const expertLevelCount =
      trainingExperienceLevelCount?.data[2]?.attributes?.training_videos?.data
        ?.length;
    const categoryOrientationCount =
      trainingCategoryCount?.data[4]?.attributes?.training_videos?.data?.length;
    const categoryProgramCount =
      trainingCategoryCount?.data[5]?.attributes?.training_videos?.data?.length;
    const categoryFrameworkCount =
      trainingCategoryCount?.data[6]?.attributes?.training_videos?.data?.length;
    const categoryHowToCount =
      trainingCategoryCount?.data[3]?.attributes?.training_videos?.data?.length;
    const courseEducationCount =
      trainingCourseCount?.data[0]?.attributes?.training_videos?.data?.length;
    const courseStudentsCount =
      trainingCourseCount?.data[1]?.attributes?.training_videos?.data?.length;
    const courseLeadershipCount =
      trainingCourseCount?.data[2]?.attributes?.training_videos?.data?.length;
    const courseHowToCount =
      trainingCourseCount?.data[3]?.attributes?.training_videos?.data?.length;
    const onSiteLocationCount =
      trainingLocationCount?.data[0]?.attributes?.training_videos?.data?.length;

    setCount({
      entryLevelCount,
      intermediateLevelCount,
      expertLevelCount,
      categoryOrientationCount,
      categoryProgramCount,
      categoryFrameworkCount,
      categoryHowToCount,
      courseEducationCount,
      courseStudentsCount,
      courseLeadershipCount,
      courseHowToCount,
      onSiteLocationCount,
    });
  };

  useEffect(() => {
    (async () => {
      const trainingExperienceLevelCount = await fetchAPI(
        "/training-experience-levels",
        {
          populate: "*",
        }
      );
      const trainingCategoryCount = await fetchAPI("/training-categories", {
        populate: "*",
      });

      const trainingCourseCount = await fetchAPI("/training-courses", {
        populate: "*",
      });

      const trainingLocationCount = await fetchAPI("/training-locations", {
        populate: "*",
      });

      calculateCount(
        trainingExperienceLevelCount,
        trainingCategoryCount,
        trainingCourseCount,
        trainingLocationCount
      );
    })();
  }, []);

  useEffect(() => {
    let modifiedRouter = handleQueryParams();
    router.push(modifiedRouter);
  }, [isChecked]);

  const handleQueryParams = () => {
    if (isChecked.entryLevel) router.query.entryLevel = isChecked.entryLevel;
    else delete router.query.entryLevel;
    if (isChecked.intermediateLevel)
      router.query.intermediateLevel = isChecked.intermediateLevel;
    else delete router.query.intermediateLevel;
    if (isChecked.expertLevel) router.query.expertLevel = isChecked.expertLevel;
    else delete router.query.expertLevel;
    if (isChecked.onSite) router.query.onSite = isChecked.onSite;
    else delete router.query.onSite;
    if (isChecked.categoryOrientation)
      router.query.categoryOrientation = isChecked.categoryOrientation;
    else delete router.query.categoryOrientation;
    if (isChecked.categoryProgram)
      router.query.categoryProgram = isChecked.categoryProgram;
    else delete router.query.categoryProgram;
    if (isChecked.categoryFramework)
      router.query.categoryFramework = isChecked.categoryFramework;
    else delete router.query.categoryFramework;
    if (isChecked.categoryHowTo)
      router.query.categoryHowTo = isChecked.categoryHowTo;
    else delete router.query.categoryHowTo;
    if (isChecked.courseEducation)
      router.query.courseEducation = isChecked.courseEducation;
    else delete router.query.courseEducation;
    if (isChecked.courseStudents)
      router.query.courseStudents = isChecked.courseStudents;
    else delete router.query.courseStudents;
    if (isChecked.courseLeadership)
      router.query.courseLeadership = isChecked.courseLeadership;
    else delete router.query.courseLeadership;
    if (isChecked.courseHowTo) router.query.courseHowTo = isChecked.courseHowTo;
    else delete router.query.courseHowTo;
    return router;
  };

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setIsChecked((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const clearAll = () => {
    setIsChecked({
      entryLevel: false,
      intermediateLevel: false,
      expertLevel: false,
      onSite: false,
      categoryOrientation: false,
      categoryProgram: false,
      categoryFramework: false,
      categoryHowTo: false,
      courseEducation: false,
      courseStudents: false,
      courseLeadership: false,
      courseHowTo: false,
    });
  };

  const clearExperienceLevelFilters = () => {
    setIsChecked((prevState) => ({
      ...prevState,
      entryLevel: false,
      intermediateLevel: false,
      expertLevel: false,
    }));
  };

  const clearCategoriesFilters = () => {
    setIsChecked((prevState) => ({
      ...prevState,
      categoryOrientation: false,
      categoryProgram: false,
      categoryFramework: false,
      categoryHowTo: false,
    }));
  };

  const clearLocationFilters = () => {
    setIsChecked((prevState) => ({
      ...prevState,
      onSite: false,
    }));
  };

  const clearCourseFilters = () => {
    setIsChecked((prevState) => ({
      ...prevState,
      courseEducation: false,
      courseStudents: false,
      courseLeadership: false,
      courseHowTo: false,
    }));
  };

  return (
    <div className="p-8 rounded-lg md:p-3 xl:p-8 bg-icecream filter_screen">
      <div className="flex justify-between pb-4 border-b border-brandBlue ">
        <h2 className="text-xl font-medium text-brandBlue">Filter By</h2>
        <button
          className="mt-1 text-xs font-normal text-brandOrangeGradientFrom"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
      <div className="px-1 pb-4 border-b border-brandBlue">
        <div className="flex justify-between ">
          <h2 className="mt-4 text-sm font-medium text-brandBlue">
            Experience Level
          </h2>
          <button
            className="mt-4 text-xs font-normal text-brandOrangeGradientFrom"
            onClick={clearExperienceLevelFilters}
          >
            Clear
          </button>
        </div>
        <div className="flex mt-2">
          <input
            type="checkbox"
            name="entryLevel"
            id="entryLevel"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.entryLevel}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            Entry Level
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.entryLevelCount})
          </span>
        </div>
        <div className="flex mt-2">
          <input
            type="checkbox"
            name="intermediateLevel"
            id="intermediateLevel"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.intermediateLevel}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            Intermediate
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.intermediateLevelCount})
          </span>
        </div>
        <div className="flex mt-2 mb-4">
          <input
            type="checkbox"
            name="expertLevel"
            id="expertLevel"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.expertLevel}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            Expert
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.expertLevelCount})
          </span>
        </div>
      </div>
      <div className="px-1 pb-4 border-b border-brandBlue">
        <div className="flex justify-between ">
          <h2 className="mt-4 text-sm font-medium text-brandBlue">Location</h2>
          <button
            className="mt-4 text-xs font-normal text-brandOrangeGradientFrom"
            onClick={clearLocationFilters}
          >
            Clear
          </button>
        </div>
        <div className="flex mt-2">
          <input
            type="checkbox"
            name="onSite"
            id="onSite"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.onSite}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            On Site
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.onSiteLocationCount})
          </span>
        </div>
        <div className="mt-4 mb-4">
          <input
            type="text"
            className="w-full pl-2 bg-white border-none rounded-md h-7"
            placeholder="Search by location"
          />
        </div>
      </div>
      <div className="px-1 pb-4 border-b border-brandBlue">
        <div className="flex justify-between ">
          <h2 className="mt-4 text-sm font-medium text-brandBlue">
            Categories
          </h2>
          <button
            className="mt-4 text-xs font-normal text-brandOrangeGradientFrom"
            onClick={clearCategoriesFilters}
          >
            Clear
          </button>
        </div>
        <div className="flex mt-2">
          <input
            type="checkbox"
            name="categoryOrientation"
            id="categoryOrientation"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.categoryOrientation}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            Orientation
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.categoryOrientationCount})
          </span>
        </div>
        <div className="flex mt-2">
          <input
            type="checkbox"
            name="categoryProgram"
            id="categoryProgram"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.categoryProgram}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            About the Program
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.categoryProgramCount})
          </span>
        </div>
        <div className="flex mt-2">
          <input
            type="checkbox"
            name="categoryFramework"
            id="categoryFramework"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.categoryFramework}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            The Framework
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.categoryFrameworkCount})
          </span>
        </div>
        <div className="flex mt-2 mb-4">
          <input
            type="checkbox"
            name="categoryHowTo"
            id="categoryHowTo"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.categoryHowTo}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">TBD</p>
          <span className="mt-1 text-xs font-normal text-silver">(0)</span>
        </div>
      </div>
      <div className="px-1 pb-4 border-b border-brandBlue">
        <div className="flex justify-between ">
          <h2 className="mt-4 text-sm font-medium text-brandBlue">Course</h2>
          <button
            className="mt-4 text-xs font-normal text-brandOrangeGradientFrom"
            onClick={clearCourseFilters}
          >
            Clear
          </button>
        </div>
        <div className="flex mt-2">
          <input
            type="checkbox"
            name="courseEducation"
            id="courseEducation"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.courseEducation}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            Education
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.courseEducationCount})
          </span>
        </div>
        <div className="flex mt-2">
          <input
            type="checkbox"
            name="courseStudents"
            id="courseStudents"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.courseStudents}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            Students
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.courseStudentsCount})
          </span>
        </div>
        <div className="flex mt-2">
          <input
            type="checkbox"
            name="courseLeadership"
            id="courseLeadership"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.courseLeadership}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            Leadership
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.courseLeadershipCount})
          </span>
        </div>
        <div className="flex mt-2 mb-4">
          <input
            type="checkbox"
            name="courseHowTo"
            id="courseHowTo"
            className="w-4 h-4 mt-1 mr-2 bg-white border-none rounded"
            onChange={handleChange}
            checked={isChecked.courseHowTo}
          />
          <p className="mt-1 mr-2 text-xs font-normal text-brandBlack">
            How-To
          </p>
          <span className="mt-1 text-xs font-normal text-silver">
            ({count.courseHowToCount})
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
