function getUserAgentAndOperatingSystem() {
    // Get the user agent string
    var userAgent = navigator.userAgent;
  
    // Check for the operating system
    let os;
    if (userAgent.match(/Windows/)) {
      os = "Windows";
    } else if (userAgent.match(/Macintosh/)) {
      os = "Macintosh";
    } else if (userAgent.match(/Linux/)) {
      os = "Linux";
    } else if (userAgent.match(/Android/)) {
      os = "Android";
    } else if (userAgent.match(/iOS/)) {
      os = "iOS";
    } else {
      os = "Unknown";
    }
  
    // Check for the browser
    var browser;
    if (userAgent.match(/Firefox/)) {
      browser = "Firefox";
    } else if (userAgent.match(/Chrome/)) {
      browser = "Chrome";
    } else if (userAgent.match(/Safari/)) {
      browser = "Safari";
    } else if (userAgent.match(/Edge/)) {
      browser = "Edge";
    } else if (userAgent.match(/IE/)) {
      browser = "Internet Explorer";
    } else {
      browser = "Unknown";
    }
  
    return { os, browser };
  }
  
  function getDateAndTime() {
    let today = new Date();
    let date =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    return dateTime;
  }
  
  function parseCustomDateString(dateString) {
    const parts = dateString.split(/[ :]/); // Split by ' ' and ':'
    const date = parts[0].split(/[-]/);
    const year = parseInt(date[0]);
    const month = parseInt(date[1]) - 1; // Months are 0-based in JavaScript
    const day = parseInt(date[2]);
    const hour = parseInt(parts[1]);
    const minute = parseInt(parts[2]);
    const second = parseInt(parts[3]);
    console.log("date",parts,"and",date)
    return new Date(year, month, day, hour, minute, second);
  }
  
  function toISODateString(date) {
    return date.toISOString();
  }

  module.exports = {
    getDateAndTime,
    getUserAgentAndOperatingSystem,
    parseCustomDateString,
    toISODateString
  };