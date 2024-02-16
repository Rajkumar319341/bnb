import axios from "axios";

var basicAuth = "Basic " + btoa("bnb_api".concat(":", "QSJNVBSNSBJHSTUHJSISIJSSEV"));
var today = new Date();
export const APIData = {
  api: "https://bnb.care4edu.com/bnb/",
  // api: "http://localhost:8083/c4e/",
  headers: { Authorization: basicAuth },
  url: "https://avinya.care4edu.com/",
  admin: "bnb_api",
  website: "https://avinya.care4edu.com/",
  date:
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(),
  orgName: "AVINYA ACADEMY",
  sessiondetails: JSON.parse(localStorage.getItem("sessiondetails")),
};
