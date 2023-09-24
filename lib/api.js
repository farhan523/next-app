import axios from "axios";
import qs from "qs";
import http from "./http";
import { READ_ONLY_TOKEN } from "./http";
const NEXT_PUBLIC_STRAPI_URL = "https://fs-strapi.herokuapp.com";
// const NEXT_PUBLIC_STRAPI_URL = "http://localhost:1337";

export function getStrapiURL(path = "") {
  return `${NEXT_PUBLIC_STRAPI_URL}${path}`;
}

// export function getStrapiURL2(path = "") {
//   return `${NEXT_PUBLIC_STRAPI_URL2}${path}`;
// }
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  //Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;
  let response;
  //Trigger API call
  response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

export async function getCurrentUserAPI() {
  let token = typeof window !== "undefined" && window.localStorage.token;
  if (!token) return { auth: false };
  try {
    const user = await http.get("/api/users/me/?populate=*", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user;
  } catch (e) {
    return { auth: false };
  }
}

export async function updateUser(userId, body) {
  try {
    const user = await axios.put(
      `${NEXT_PUBLIC_STRAPI_URL}/api/users/${userId}`,
      body
    );
    return user;
  } catch (e) {
    return { auth: false };
  }
}

export async function inviteUserAPI(body) {
  try {
    const registerUserResponse = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
      {
        username: body.name,
        email: body.email,
        password: "testpassword",
        usa_state: Number(body.usa_state),
        university: Number(body.university),
        accessLevel:
          body?.role && body.role === "student"
            ? "student"
            : "academic_partner",
        status: "Pending Invite",
      }
    );
    if (
      registerUserResponse &&
      registerUserResponse?.data &&
      registerUserResponse?.data?.jwt
    ) {
      let response = await axios.post(
        `${NEXT_PUBLIC_STRAPI_URL}/api/profile/invite`,
        {
          username: body.name,
          email: body.email,
          jwt: registerUserResponse?.data?.jwt,
          attachment: body.attachment,
          accessLevel:
            body?.role && body.role === "student"
              ? "student"
              : "academic_partner",
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      return response;
    }
  } catch (e) {
    console.log("FORGET FATAL ERROR", e.message);
    return { error: true };
  }
}

export async function reinvitationUser(body) {
  try {
    let response = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/profile/invite`,
      {
        username: body.name,
        email: body.email,
        jwt: body.jwt,
        attachment: body.attachment ? body.attachment : null,
        accessLevel:
          body?.role && body.role === "student"
            ? "student"
            : "academic_partner",
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    return response;
  } catch (e) {
    console.log("FORGET FATAL ERROR", e.message);
    return { error: true };
  }
}

export async function registerUserAsStudent(body) {
  try {
    const registerUserAsStudentResponse = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
      {
        username: body.username,
        email: body.email,
        password: body.password,
        accessLevel: "student",
      }
    );
    return registerUserAsStudentResponse;
  } catch (e) {
    return { error: true, message: e.message, errorObj: e.response.data.error };
  }
}

export async function changePasswordAPI(body, code) {
  // try {
  // const user = await http.get("/api/users/me/?populate=*", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  //   return user;
  // } catch (e) {
  //   return { auth: false };
  // }
  try {
    const user = await http.get("/api/users/me/?populate=*", {
      headers: {
        Authorization: `Bearer ${code}`,
      },
    });

    if (user?.data?.status === "Cancelled") {
      return { error: true, message: "Your invitation has been cancelled" };
    }
    const changePasswordResponse = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/auth/change-password`,
      body,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${code}`,
        },
      }
    );

    if (
      changePasswordResponse &&
      changePasswordResponse?.data &&
      changePasswordResponse?.data?.jwt
    ) {
      const userId = user?.data?.id;

      const updateUserResponse = await axios.put(
        `${NEXT_PUBLIC_STRAPI_URL}/api/users/${userId}`,
        {
          status: "Active",
        }
      );
    }

    return changePasswordResponse;
  } catch (e) {
    console.log("FORGET FATAL ERROR", e.message);
    return { error: true };
  }
}

export async function forgetPasswordAPI(body) {
  try {
    // const isEmailExists = await fetchAPI("/users", {
    //   filters: {
    //     email: {
    //       $eq: body.email,
    //     },
    //   },
    // });
    // if (isEmailExists.length === 0)
    //   return {
    //     success: 0,
    //     message: "Email is not registerd, try again with a registered email",
    //   };
    const forgetPasswordResponse = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/auth/forgot-password`,
      body
    );
    return forgetPasswordResponse;
  } catch (e) {
    console.log("FORGET FATAL ERROR", e.message);
    return { error: true };
  }
}

export async function resetPasswordAPI(body) {
  try {
    const forgetPasswordResponse = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/auth/reset-password`,
      body
    );
    return forgetPasswordResponse;
  } catch (e) {
    console.log("FORGET FATAL ERROR", e.message);
    return { error: true };
  }
}

export async function storeWorkbookResponse(dataObj) {
  if (dataObj && dataObj?.userId === "undefined") return;
  // Check if workbook report for a particular user is already there
  const workBookReportFound = await fetchAPI(`/workbook-reports`, {
    filters: { userId: dataObj.userId },
  });
  let data = {};
  if (dataObj && dataObj?.userId) data.userId = dataObj.userId;
  data.userKey = dataObj.userId;
  if (dataObj && dataObj?.completedLessonsJSON)
    data.completedLessons = dataObj.completedLessonsJSON;
  if (dataObj && dataObj?.unlockedLessonsJSON)
    data.unlockedLessons = dataObj.unlockedLessonsJSON;
  if (dataObj && dataObj?.chapter && dataObj?.values)
    data[dataObj.chapter] = dataObj.values;
  if (dataObj && dataObj?.status) data.status = dataObj.status;

  if (
    workBookReportFound &&
    workBookReportFound?.data &&
    workBookReportFound?.data?.length === 0
  ) {
    const workBookResponse = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/workbook-reports`,
      {
        data: data,
      }
    );
    return workBookResponse;
  } else {
    const workBookResponseUpdate = await axios.put(
      `${NEXT_PUBLIC_STRAPI_URL}/api/workbook-reports/${workBookReportFound?.data[0].id}`,
      {
        data: data,
      }
    );
    return workBookResponseUpdate;
  }
  // const workBookResponse = await axios.post(
  //   `${NEXT_PUBLIC_STRAPI_URL}/api/workbook-report`,
  //   body
  // );
}

export async function storeTeacherGuideWorkbookResponse(dataObj) {
  if (dataObj && dataObj?.userId === "undefined") return;
  // Check if workbook report for a particular user is already there
  const workBookReportFound = await fetchAPI(
    `/teachers-guide-workbook-reports`,
    {
      filters: { userid: dataObj.userId },
    }
  );
  let data = {};
  if (dataObj && dataObj?.userId) data.userid = dataObj.userId;
  data.userKey = dataObj.userId;
  if (dataObj && dataObj?.completedLessonsJSON)
    data.completedLessons = dataObj.completedLessonsJSON;
  if (dataObj && dataObj?.unlockedLessonsJSON)
    data.unlockedLessons = dataObj.unlockedLessonsJSON;
  if (dataObj && dataObj?.chapter && dataObj?.values)
    data[dataObj.chapter] = dataObj.values;
  if (dataObj && dataObj?.status) data.status = dataObj.status;

  if (
    workBookReportFound &&
    workBookReportFound?.data &&
    workBookReportFound?.data?.length === 0
  ) {
    const workBookResponse = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/teachers-guide-workbook-reports`,
      {
        data: data,
      }
    );
    return workBookResponse;
  } else {
    const workBookResponseUpdate = await axios.put(
      `${NEXT_PUBLIC_STRAPI_URL}/api/teachers-guide-workbook-reports/${workBookReportFound?.data[0].id}`,
      {
        data: data,
      }
    );
    return workBookResponseUpdate;
  }
  // const workBookResponse = await axios.post(
  //   `${NEXT_PUBLIC_STRAPI_URL}/api/workbook-report`,
  //   body
  // );
}

export async function getWorkBookReportByUser(userId) {
  const workBookReportByUser = await fetchAPI(`/workbook-reports`, {
    filters: { userId: userId },
  });
  return workBookReportByUser;
}

export async function getTeachersGuideByUser(userId) {
  const teachersGuideReportByUser = await fetchAPI(
    `/teachers-guide-workbook-reports`,
    {
      filters: { userid: userId },
    }
  );
  s;
  return teachersGuideReportByUser;
}

export async function updateUserUSAState(userId, usa_state, university) {
  const updateUserResponse = await axios.put(
    `${NEXT_PUBLIC_STRAPI_URL}/api/users/${userId}`,
    {
      usa_state: Number(usa_state),
      university: Number(university),
    }
  );
  return updateUserResponse;
}

export async function registerUserAsStudentASU(body) {
  try {
    // Check if email already exists

    const registerUserAsStudentResponse = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
      {
        username: body.username,
        email: body.email,
        password: body.password,
        accessLevel: "student",
        usa_state: 1,
        university: 1,
      }
    );

    return registerUserAsStudentResponse;
  } catch (e) {
    return { error: true, message: e.message, errorObj: e.response.data.error };
  }
}

export async function submitRequestForm(body) {
  try {
    const formSubmissionResponse = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/form-submissions`,
      {
        data: {
          submissions: JSON.stringify(body),
        },
      }
    );
    if (formSubmissionResponse && formSubmissionResponse?.data) {
      return formSubmissionResponse;
    }
  } catch (e) {
    console.log("FORGET FATAL ERROR", e.message);
    return { error: true };
  }
}


export async function createLoginAudit(body) {
  try {
    const requestData = {
      data: body,
    };
    
    const LoginAudit = await axios.post(
      `${NEXT_PUBLIC_STRAPI_URL}/api/login-audits`,
      requestData
    );
    return LoginAudit;
  } catch (e) {
    console.log("error",e)
    return { error: true, message: e.message, errorObj: e?.response?.data?.error };
  }
}