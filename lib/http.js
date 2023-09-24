import axios from "axios";
const NEXT_PUBLIC_STRAPI_URL = "https://fs-strapi.herokuapp.com";
export default axios.create({
  baseURL: `${NEXT_PUBLIC_STRAPI_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});
