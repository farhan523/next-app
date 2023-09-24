import dynamic from "next/dynamic";
import "../styles/globals.css";
import "aos/dist/aos.css";
import "react-responsive-modal/styles.css";
import "react-multi-carousel/lib/styles.css";
import "../components/NewMockupComponents/UniversitiesOfferingProgram/styles.css";
import { ApolloProvider, useQuery } from "@apollo/client";
import { client } from "../graphql/client/index";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store/store";
import HomePageComponent from "../components/pageComponents/NewMockup/HomePageComponent";
import { getUserAgentAndOperatingSystem, getDateAndTime } from "../helpers";
dynamic(() => import("flowbite/dist/flowbite.js"), {
  ssr: false,
});

import Head from "next/head";
import { useEffect, useState } from "react";
import { currentLoggedInQuery } from "../graphql/queries/user/queries";
import { setCurrentUser, getCurrentUser } from "../store/user.reducer";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { getCurrentUserAPI } from "../lib/api";
import {
  setUserId,
  setBrowser,
  setOperatingSystem,
  setSessionJoinTime,
  logActivity,
  setIpAddress
} from "../store/sessionAudit.reducer";

function MyApp({ Component, pageProps }) {
  // const {
  //   data: currentLoggedInQueryData,
  //   error,
  //   loading,
  // } = useQuery(currentLoggedInQuery, {});
  const [allowedRoute, setAllowedRoute] = useState(true);
  // const userInfo = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    // if (loading) return;

   
    if (
      localStorage.getItem("tabsOpen") == 0 &&
      performance.getEntriesByType("navigation")[0].type == "navigate" &&
      (window.history.length == 2 || localStorage.getItem("previousTab") == "/login") &&
      !localStorage.getItem("homeButtonClicked") &&
      localStorage.getItem("token")
    ) {
      console.log("data send",localStorage.getItem("logs"));
      localStorage.removeItem("logs");
    }
    
    (async () => {
      let user;
      let localUser = window.localStorage.getItem("user");
      if (localUser) {
        user = JSON.parse(localUser);
      } else {
        let currentUser = await getCurrentUserAPI();
        user = currentUser?.data;
      }
      if (user && user?.id) {
        dispatch(
          setCurrentUser({
            isAuthenticated: true,
            user: { ...user },
          })
        );

        if (
          user &&
          user?.data?.accessLevel === "student" &&
          router.route.startsWith("/downloads")
        )
          setAllowedRoute(false);
        if (
          user &&
          user?.data?.accessLevel === "student" &&
          router.route.startsWith("/training")
        )
          setAllowedRoute(false);
        if (
          user &&
          user?.data?.accessLevel === "student" &&
          router.route.startsWith("/invite-user")
        )
          setAllowedRoute(false);
        if (
          user &&
          user?.data?.accessLevel === "academic_partner" &&
          router.route.startsWith("/invite-user")
        )
          setAllowedRoute(false);
        // if (router.route.startsWith("/login")) router.push("/dashboard");
      }

      if ((!localStorage.getItem("logs") || JSON.parse(localStorage.getItem("logs")).user_id == null ) && localStorage.getItem("token")) {
        const { os, browser } = getUserAgentAndOperatingSystem();
        const dateTime = getDateAndTime();
        dispatch(setUserId(user.id));
        dispatch(setBrowser(browser));
        dispatch(setOperatingSystem(os));
        dispatch(setSessionJoinTime(dateTime));
        let ipAddress = await fetch("/api/hello")
        ipAddress = await ipAddress.json();
        console.log("ipaddress",ipAddress.ip)
        dispatch(setIpAddress(ipAddress.ip))
      }
    })();
    // if (currentLoggedInQueryData && currentLoggedInQueryData.me) {
    //   dispatch(
    //     setCurrentUser({
    //       isAuthenticated: true,
    //       user: { ...currentLoggedInQueryData.me },
    //     })
    //   );
    //   if (router.route.startsWith("/login")) router.push("/dashboard");
    // } else {
    //   if (router.route.startsWith("/dashboard")) router.push("/login");
    // }

    if (window.history.length > 2) localStorage.removeItem("homeButtonClicked");

    // Check if this is the first tab
    if (localStorage.getItem("tabsOpen") === null) {
      localStorage.setItem("tabsOpen", "1");
    } else {
      // Increment the count of open tabs
      let tabsOpen = parseInt(localStorage.getItem("tabsOpen"));
      tabsOpen++;
      localStorage.setItem("tabsOpen", tabsOpen.toString());
    }

    // Event listener for tab close
    const onTabClose = () => {
      let tabsOpen = parseInt(localStorage.getItem("tabsOpen"));
      localStorage.setItem("previousTab",router.pathname)
      tabsOpen--;

      if (tabsOpen === 0) {
        // All tabs have been closed
        // Add your logic here
      }

      localStorage.setItem("tabsOpen", tabsOpen.toString());
    };

    window.addEventListener("beforeunload", onTabClose);

    if(router.pathname == "/" && localStorage.getItem("token"))
        dispatch(logActivity(`user has visited the home route`));
    else if(localStorage.getItem("token"))
        dispatch(logActivity(`user has visited the route, ${router.pathname}`))
    
        return () => {
          // Cleanup the event listener when the component unmounts
          window.removeEventListener("beforeunload", onTabClose);
    
        };
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {allowedRoute ? (
        <Component {...pageProps} />
      ) : (
        <HomePageComponent {...pageProps} />
      )}
    </>
  );
}

const AppContainer = (props) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MyApp {...props} /> <Toaster position="bottom-center" />
      </Provider>
    </ApolloProvider>
  );
};

export default AppContainer;
