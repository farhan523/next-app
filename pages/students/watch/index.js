import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../../store/user.reducer";
import TrainingPage from "../../../components/pageComponents/NewMockup/TrainingPage";
import { fetchAPI } from "../../../lib/api";
const Watch = ({ videos, articles }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const router = useRouter();
  useEffect(() => {
    if (
      isAuthenticated === false ||
      (typeof window !== "undefined" && !window.localStorage.token)
    ) {
      router.push("/login");
    }
  }, [isAuthenticated]);
  return (
    <div>
      <Head>
        <meta
          property="og:site_name"
          content="Fleischer Scholars Program login"
        />
        <meta property="og:title" content="Login" />
        <meta property="og:url" content="https://fleischerscholars.com/" />
        <meta property="og:type" content="website" />
        <title>Fleischer Scholars Training Program</title>
      </Head>
      <TrainingPage videos={videos} articles={articles} role="student" />
    </div>
  );
};

export async function getServerSideProps(context) {
  // const router = useRouter();
  let trainingExperienceFilters = [];
  if (context.query.entryLevel)
    trainingExperienceFilters.push({ title: { $contains: "Entry Level" } });
  if (context.query.intermediateLevel)
    trainingExperienceFilters.push({ title: { $contains: "Intermediate" } });
  if (context.query.expertLevel)
    trainingExperienceFilters.push({ title: { $contains: "Expert" } });

  let trainingCategoriesFilters = [];
  // if (context.query.cateogryEductation)
  //   trainingCategoriesFilters.push({ title: { $contains: "Education" } });
  if (context.query.categoryOrientation)
    trainingCategoriesFilters.push({ title: { $contains: "Orientation" } });
  // if (context.query.categoryStudents)
  //   trainingCategoriesFilters.push({ title: { $contains: "Students" } });
  if (context.query.categoryProgram)
    trainingCategoriesFilters.push({
      title: { $contains: "About the Program" },
    });
  // if (context.query.cateogryLeadership)
  //   trainingCategoriesFilters.push({ title: { $contains: "Leadership" } });
  if (context.query.categoryFramework)
    trainingCategoriesFilters.push({ title: { $contains: "The Framework" } });
  if (context.query.categoryHowTo)
    trainingCategoriesFilters.push({ title: { $contains: "How-To" } });

  let trainingCoursesFilters = [];
  if (context.query.courseEductation)
    trainingCoursesFilters.push({ title: { $contains: "Education" } });
  if (context.query.courseStudents)
    trainingCoursesFilters.push({ title: { $contains: "Students" } });
  if (context.query.courseLeadership)
    trainingCoursesFilters.push({ title: { $contains: "Leadership" } });
  if (context.query.courseHowTo)
    trainingCoursesFilters.push({ title: { $contains: "How-To" } });

  let trainingLocationFilters = [];
  if (context.query.onSite) trainingLocationFilters.push({ title: "On Site" });

  let searchObj = {};
  if (context.query.search)
    searchObj.title = { $contains: context.query.search };

  let sortBy = "publishedAt:desc";
  if (context.query.sortBy) {
    if (context.query.sortBy === "new") sortBy = "publishedAt:desc";
    if (context.query.sortBy === "old") sortBy = "publishedAt:asc";
  }
  const videos = await fetchAPI("/training-videos", {
    filters: {
      $and: [
        {accessLevel: {
          $eq: 'student'
        }},
        {
          training_experience_levels: {
            $or: trainingExperienceFilters,
          },
        },
        {
          training_categories: {
            $or: trainingCategoriesFilters,
          },
        },
        {
          training_courses: {
            $or: trainingCoursesFilters,
          },
        },
        {
          training_locations: {
            $or: trainingLocationFilters,
          },
        },
        searchObj,
      ],
    },
    sort: [sortBy],
    populate: "*",
  });
  const articles = await fetchAPI("/training-articles", {
    filters: {
      $and: [
        {
          training_experience_levels: {
            $or: trainingExperienceFilters,
          },
        },
        {
          training_categories: {
            $or: trainingCategoriesFilters,
          },
        },
        {
          training_courses: {
            $or: trainingCoursesFilters,
          },
        },
        {
          training_locations: {
            $or: trainingLocationFilters,
          },
        },
        searchObj,
      ],
    },
    sort: [sortBy],
    populate: "*",
  });
  return {
    props: { videos, articles }, // will be passed to the page component as props
  };
}

export default Watch;
