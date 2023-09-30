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
import { getUserAgentAndOperatingSystem, getDateAndTime, parseCustomDateString, toISODateString } from "../helpers";
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
import { getCurrentUserAPI,createLoginAudit,getLoginAuditById,updateLoginAudit } from "../lib/api";
import useDebounce from "../helpers/useDebounce"
import {
  setUserId,
  setBrowser,
  setOperatingSystem,
  setSessionJoinTime,
  logActivity,
  setIpAddress,
  setSessionLeaveTime,
  setStateToInitial
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
  const debouncedRouterPathname = useDebounce(router.pathname, 300);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(()=>{

    let logs = localStorage.getItem("logs");
    if(logs)
        logs = JSON.parse(logs);
    if (
      (localStorage.getItem("tabsOpen") == 0 || localStorage.getItem("tabsOpen") == 1) &&
      performance.getEntriesByType("navigation")[0].type == "navigate" &&
      (window.history.length == 2 || localStorage.getItem("previousTab") == "/login") &&
      !localStorage.getItem("homeButtonClicked") &&
      localStorage.getItem("token")
    ) {

      if(logs){

        let body = {};
        
        if(logs.activityLogs.length != 0 && logs.user_id != null){
          
          body.user_id = JSON.parse(logs.user_id);
          body.user = {id:JSON.parse(logs.user_id)};
          body.browser = logs.browser;
          body.operatingSystem = logs.operatingSystem;
          body.ipAddress = logs.ipAddress;
          let parsedJoinTime = parseCustomDateString(logs.sessionTime.joinTime)
          let parsedLeaveTime = parseCustomDateString(logs.sessionTime.leaveTime)
          const isoJoinTime = toISODateString(parsedJoinTime);
          const isoLeaveTime = toISODateString(parsedLeaveTime);
          body.joinTime = new Date(isoJoinTime);
          body.leaveTime = new Date(isoLeaveTime);
          let diff = body.leaveTime - body.joinTime;

          let hours = Math.floor(diff / 3600000);
          let minutes = Math.floor((diff % 3600000) / 60000);
          let seconds = Math.floor((diff % 60000) / 1000);
          logs.activityLogs[0] = `${logs.activityLogs[0]} and has spent ${hours} hours and ${minutes} minutes and ${seconds} seconds`
          body.activityLogs = JSON.stringify(logs.activityLogs);
          let currentLog = logs.activityLogs[0];
          
          (async function(){
            let logid = localStorage.getItem("logid");
            logid = +logid;
            let existingLog = await getLoginAuditById(logid);
            let activityLogs = JSON.parse(existingLog.data.data.attributes.activityLogs);
            activityLogs.push(currentLog);
            activityLogs = JSON.stringify(activityLogs);
            updateLoginAudit(logid,activityLogs,body.leaveTime)

        })()
          
      // body = {
      //   user_id: 1,
      //   browser: 'Chrome',
      //   operatingSystem: 'Windows 10',
      //   ipAddress: '192.168.0.1',
      //   joinTime: new Date('2023-09-24T10:00:00Z'),
      //   leaveTime: new Date('2023-09-24T11:00:00Z'),
      //   activityLogs: { log1: 'Activity 1', log2: 'Activity 2' },
      // }

      
    }

  }
          logs = null;
          console.log("logid removed here")
          localStorage.removeItem("logs");
          localStorage.removeItem("logid")

}

    if(logs && logs.activityLogs.length != 0 && logs.user_id != null){
        let body = {};
        body.user = {id:JSON.parse(logs.user_id)};
        body.user_id = JSON.parse(logs.user_id);
        body.browser = logs.browser;
        body.operatingSystem = logs.operatingSystem;
        body.ipAddress = logs.ipAddress;
        let parsedJoinTime = parseCustomDateString(logs.sessionTime.joinTime)
        let parsedLeaveTime = parseCustomDateString(getDateAndTime())
        const isoJoinTime = toISODateString(parsedJoinTime);
        const isoLeaveTime = toISODateString(parsedLeaveTime);
        body.joinTime = new Date(isoJoinTime);
        body.leaveTime = new Date(isoLeaveTime);
        let diff = body.leaveTime - body.joinTime;

        let hours = Math.floor(diff / 3600000);
        let minutes = Math.floor((diff % 3600000) / 60000);
        let seconds = Math.floor((diff % 60000) / 1000);

        logs.activityLogs[0] = `${logs.activityLogs[0]} and has spent ${hours} hours and ${minutes} minutes and ${seconds} seconds`
        body.activityLogs = JSON.stringify(logs.activityLogs);
        let currentLog = logs.activityLogs[0];
        if(!localStorage.getItem("logid"))
            createLoginAudit(body)
          else{
            (async function(){
                let logid = localStorage.getItem("logid");
                logid = +logid;
                let existingLog = await getLoginAuditById(logid);
                let activityLogs = JSON.parse(existingLog.data.data.attributes.activityLogs);
                activityLogs.push(currentLog);
                activityLogs = JSON.stringify(activityLogs);
                updateLoginAudit(logid,activityLogs,body.leaveTime)
            })()
          }
        logs.activityLogs = [];
        logs.sessionTime.joinTime = getDateAndTime();
        logs.sessionTime.leaveTime = getDateAndTime();
        localStorage.setItem("logs",JSON.stringify(logs))
    }

    if (window.history.length > 2) localStorage.removeItem("homeButtonClicked");

      if(router.pathname == "/" && localStorage.getItem("token"))
      dispatch(logActivity(`user has visited the home route`));
      else if(localStorage.getItem("token"))
      dispatch(logActivity(`user has visited the route, ${router.pathname}`))
    
    console.log("route change happen")
    if(!localStorage.getItem("token")){
      localStorage.removeItem("logs");
      localStorage.removeItem("logid")
      dispatch(setStateToInitial())
    }
    localStorage.setItem("previousTab",router.pathname)
  },[debouncedRouterPathname])

  useEffect(() => {
    // if (loading) return;
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
        dispatch(setIpAddress(ipAddress.ip))

        let logs = localStorage.getItem("logs");
        logs = JSON.parse(logs)
        console.log("logs",logs)
        let body = {};
        body.user = {id:JSON.parse(logs.user_id)};
        body.user_id = JSON.parse(logs.user_id);
        body.browser = logs.browser;
        body.operatingSystem = logs.operatingSystem;
        body.ipAddress = logs.ipAddress;
        let parsedJoinTime = parseCustomDateString(logs.sessionTime.joinTime)
        let parsedLeaveTime = parseCustomDateString(getDateAndTime())
        const isoJoinTime = toISODateString(parsedJoinTime);
        const isoLeaveTime = toISODateString(parsedLeaveTime);
        body.joinTime = new Date(isoJoinTime);
        body.leaveTime = new Date(isoLeaveTime);
        let diff = body.leaveTime - body.joinTime;

        let hours = Math.floor(diff / 3600000);
        let minutes = Math.floor((diff % 3600000) / 60000);
        let seconds = Math.floor((diff % 60000) / 1000);

        let logToSend = `user has visited the route ${router.pathname == "/" ? "home" : router.pathname} and has spent ${hours} hours and ${minutes} minutes and ${seconds} seconds`
        body.activityLogs = JSON.stringify([logToSend]);
      
        await createLoginAudit(body);
        dispatch(setSessionJoinTime(dateTime));
      
       
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
    const onTabClose = (e) => {
      
      let tabsOpen = parseInt(localStorage.getItem("tabsOpen"));
      localStorage.setItem("previousTab",router.pathname)
      tabsOpen--;

      if (localStorage.getItem("logs")) {
        // dispatch(setSessionLeaveTime(getDateAndTime()));
        // All tabs have been closed
        // Add your logic here
       
        let logs = localStorage.getItem("logs")
        logs = JSON.parse(logs);
        if(logs && logs.activityLogs.length != 0 && logs.user_id != null && localStorage.getItem("token")){
          localStorage.setItem("beforeCloseRun",true)
          let body = {};
          body.user = {id:JSON.parse(logs.user_id)};
          body.user_id = JSON.parse(logs.user_id);
          body.browser = logs.browser;
          body.operatingSystem = logs.operatingSystem;
          body.ipAddress = logs.ipAddress;
          let parsedJoinTime = parseCustomDateString(logs.sessionTime.joinTime)
          let parsedLeaveTime = parseCustomDateString(getDateAndTime())
          const isoJoinTime = toISODateString(parsedJoinTime);
          const isoLeaveTime = toISODateString(parsedLeaveTime);
          body.joinTime = new Date(isoJoinTime);
          body.leaveTime = new Date(isoLeaveTime);
          let diff = body.leaveTime - body.joinTime;
  
          let hours = Math.floor(diff / 3600000);
          let minutes = Math.floor((diff % 3600000) / 60000);
          let seconds = Math.floor((diff % 60000) / 1000);
  
          logs.activityLogs[0] = `${logs.activityLogs[0]} and has spent ${hours} hours and ${minutes} minutes and ${seconds} seconds`
          body.activityLogs = JSON.stringify(logs.activityLogs);
          let currentLog = logs.activityLogs[0];
          if(!localStorage.getItem("logid"))
              createLoginAudit(body)
            else{
              (async function(){
                  let logid = localStorage.getItem("logid");
                  logid = +logid;
                  let activityLogs = JSON.parse(localStorage.getItem("previousdatabaselogs"));
                  activityLogs.push(currentLog);
                  activityLogs = JSON.stringify(activityLogs);
                  localStorage.setItem("sendedLogs",activityLogs)
                  await updateLoginAudit(logid,activityLogs,body.leaveTime)
                  localStorage.setItem("logupdated","true")
              })()
            }
          localStorage.removeItem("logs");
          localStorage.removeItem("logid")
      }
      }

      localStorage.setItem("tabsOpen", tabsOpen.toString());
    };

    window.addEventListener("beforeunload", onTabClose);
 
        return () => {
          // Cleanup the event listener when the component unmounts
          window.removeEventListener("beforeunload", onTabClose);
    
        };
  }, []);
  
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
