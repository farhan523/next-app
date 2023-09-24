import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../store/user.reducer";
import StudentWorkbookFacultyPage from "../../components/pageComponents/NewMockup/StudentWorkbookFacultyPage";
import { fetchAPI } from "../../lib/api";
const StudentWorkbookFaculty = ({
  studentWorkbookReports,
  workBookContent,
  universities
}) => {
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
      <StudentWorkbookFacultyPage
        workBookContent={workBookContent}
        studentWorkbookReports={studentWorkbookReports}
        universities={universities}
      />
    </div>
  );
};

export default StudentWorkbookFaculty;

export async function getServerSideProps(context) {

  let studentReportResults = {};
  let statusObj = {}
  if (context.query.status) {
    statusObj.status = { $contains: context.query.status };
  }
  if (context.query.search || context.query.status || context.query.university) {
    studentReportResults = await fetchAPI("/workbook-reports", {
      filters: {
        $and: [
          context.query.search && {
            $or: [
              {
                userKey: {
                  username: {
                    $contains: context.query.search,
                  }
                }
              },
              {
                userKey: {
                  email: {
                    $contains: context.query.search,
                  }
                }
              },
            ]
           
          },
          context.query.status && {
            status: {
              $contains: context.query.status
            }
          },
          context.query.university && {
            userKey: {
              university: {
                id: {
                  $contains: context.query.university
                }
              }
            }
          }
        ],
        
      },
      populate: "*",
    });
  } else {
    studentReportResults = await fetchAPI("/workbook-reports", {
      populate: "*",
    });
  }

  const workBookContent = await fetchAPI("/workbook-chapters", {
    sort: ["tocNumber:asc"],
    populate: "*",
  });

  const universities = await fetchAPI("/universities", {
    sort: ["name:asc"],
  });

  return {
    props: { studentWorkbookReports: studentReportResults, workBookContent, universities },
  };
}
