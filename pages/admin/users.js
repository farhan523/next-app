import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AllUsersPage from "../../components/pageComponents/NewMockup/AllUsersPage";
import { fetchAPI } from "../../lib/api";
import { getCurrentUser, getIsAuthenticated } from "../../store/user.reducer";

const AllUsers = ({ allUsers, universities, usaStates }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const currentUser = useSelector(getCurrentUser);
  const [render, setRender] = useState(false);

  const router = useRouter();
  const paramUniId = router.query.university;

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
    if (currentUser.accessLevel === "student") {
      router.push(`/dashboard`);
      return;
    }
    if (
      currentUser.accessLevel === "academic_partner" &&
      currentUser.university &&
      currentUser.university.id != paramUniId
    ) {
      router.push(`/admin/users?university=${currentUser?.university?.id}`);
    } else if (currentUser.id) {
      setRender(true);
    }
  }, [currentUser, paramUniId, setRender]);

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
        <AllUsersPage
          allUsers={allUsers}
          universities={universities}
          usaStates={usaStates}
        />
      )}
    </div>
  );
};

export default AllUsers;

export async function getServerSideProps(context) {
  let allUsers = {};
  let roleObj = {};

  if (context.query.role) {
    roleObj.role = { $contains: context.query.role };
  }

  if (
    context.query.search ||
    context.query.role ||
    context.query.university ||
    context.query.status
  ) {
    allUsers = await fetchAPI("/users", {
      filters: {
        $and: [
          context.query.search && {
            $or: [
              {
                username: {
                  $contains: context.query.search,
                },
              },
              {
                email: {
                  $contains: context.query.search,
                },
              },
            ],
          },
          context.query.role && {
            accessLevel: {
              $contains: context.query.role,
            },
          },
          context.query.university && {
            university: {
              id: context.query.university,
            },
          },
          context.query.status && {
            status: context.query.status,
          },
        ],
      },
      populate: "*",
    });
  } else {
    allUsers = await fetchAPI("/users", {
      populate: "*",
    });
  }

  const universities = await fetchAPI("/universities", {
    sort: ["name:asc"],
    populate: "*",
  });

  const usaStates = await fetchAPI("/usa-states", {
    sort: ["name:asc"],
    populate: "*",
  });

  return {
    props: {
      allUsers,
      universities,
      usaStates,
    },
  };
}
