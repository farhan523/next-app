import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  getCurrentUser,
  getIsAuthenticated,
} from "../../../store/user.reducer";
import StudentWorkbookFacultyPage from "../../../components/pageComponents/NewMockup/StudentWorkbookFacultyPage";
import { fetchAPI } from "../../../lib/api";
const StudentWorkbookFaculty = ({
  studentWorkbookReports,
  workBookContent,
  facultyId,
}) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const currentUser = useSelector(getCurrentUser);
  const router = useRouter();
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (
      isAuthenticated === false ||
      (typeof window !== "undefined" && !window.localStorage.token)
    ) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    setRender(false);
    if (currentUser.accessLevel === "academic_partner") {
      if (currentUser.university && currentUser.university.id != facultyId) {
        router.push(`/faculty/workbook/${currentUser?.university?.id}`);
      } else if (currentUser.id) {
        setRender(true);
      }
    }
    setRender(true);
  }, [currentUser, facultyId, setRender]);

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
      {render && (
        <StudentWorkbookFacultyPage
          workBookContent={workBookContent}
          studentWorkbookReports={studentWorkbookReports}
        />
      )}
    </div>
  );
};

export default StudentWorkbookFaculty;

export async function getServerSideProps(context) {
  const { facultyId } = context.params || {};
  let studentReportResults = {};
  let statusObj = {};
  if (context.query.status) {
    statusObj.status = { $contains: context.query.status };
  }
  if (context.query.search || context.query.status) {
    studentReportResults = await fetchAPI("/workbook-reports", {
      filters: {
        $and: [
          context.query.search && {
            $or: [
              {
                userKey: {
                  username: {
                    $contains: context.query.search,
                  },
                },
              },
              {
                userKey: {
                  email: {
                    $contains: context.query.search,
                  },
                },
              },
            ],
          },
          {
            userKey: {
              university: {
                id: facultyId,
              },
            },
          },
          context.query.status && {
            status: {
              $contains: context.query.status,
            },
          },
        ],
      },
      populate: "*",
    });
  } else {
    studentReportResults = await fetchAPI("/workbook-reports", {
      filters: {
        userKey: {
          university: {
            id: facultyId,
          },
        },
      },
      populate: "*",
    });
  }

  const workBookContent = await fetchAPI("/workbook-chapters", {
    sort: ["tocNumber:asc"],
    populate: "*",
  });

  return {
    props: {
      studentWorkbookReports: studentReportResults,
      workBookContent,
      facultyId,
    },
  };
}
