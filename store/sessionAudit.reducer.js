import { createSlice } from "@reduxjs/toolkit";
import {getDateAndTime} from "../helpers"

const initialState = {
  user_id: null,
  browser: null,
  operatingSystem: null,
  ipAddress:null,
  sessionTime: {
    joinTime: null,
    leaveTime: null,
  },
  activityLogs: [],
};

function setStateInLocalStorage(state, propertyToUpdate) {
  let existingState = localStorage.getItem("logs");
  if (existingState) existingState = JSON.parse(existingState);
  else {
    localStorage.setItem("logs", JSON.stringify(state));
    return;
  }

  if (propertyToUpdate == "activityLogs")
    existingState.activityLogs.push(
      state.activityLogs[state.activityLogs.length - 1]
    );
  else if (propertyToUpdate == "joinTime")
    existingState.sessionTime.joinTime = state.sessionTime.joinTime;
  else existingState[propertyToUpdate] = state[propertyToUpdate];
  existingState.sessionTime.leaveTime = state.sessionTime.leaveTime;
  localStorage.setItem("logs", JSON.stringify(existingState));
}

const sessionAuditSlice = createSlice({
  name: "sessionAudit",
  initialState,
  reducers: {
    logActivity: (state, action) => {
      state.activityLogs = [...state.activityLogs, action.payload];
      state.sessionTime.leaveTime = getDateAndTime();
      setStateInLocalStorage(state, "activityLogs");
    },
    setUserId: (state, action) => {
      state.user_id = action.payload;
      state.sessionTime.leaveTime = getDateAndTime()
      setStateInLocalStorage(state, "user_id");
    },
    setBrowser: (state, action) => {
      state.browser = action.payload;
      state.sessionTime.leaveTime = getDateAndTime()
      setStateInLocalStorage(state, "browser");
    },
    setOperatingSystem: (state, action) => {
      state.operatingSystem = action.payload;
      state.sessionTime.leaveTime = getDateAndTime()
      setStateInLocalStorage(state, "operatingSystem");
    },
    setSessionJoinTime: (state, action) => {
      state.sessionTime.joinTime = action.payload;
      state.sessionTime.leaveTime = getDateAndTime()
      setStateInLocalStorage(state, "joinTime");
    },
    setSessionLeaveTime: (state, action) => {
      state.sessionTime.leaveTime = action.payload;
    },
    setIpAddress:(state,action) =>{
      state.ipAddress = action.payload;
      state.sessionTime.leaveTime = getDateAndTime()
      setStateInLocalStorage(state, "joinTime");
    }
  },
});

export default sessionAuditSlice.reducer;

export const {
  logActivity,
  setUserId,
  setBrowser,
  setOperatingSystem,
  setSessionJoinTime,
  setSessionLeaveTime,
} = sessionAuditSlice.actions;