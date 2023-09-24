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
  
  module.exports = {
    getDateAndTime,
    getUserAgentAndOperatingSystem,
  };