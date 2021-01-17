import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API,
  params: {
    apikey: process.env.REACT_APP_API_KEY
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Accept": "application/json"
  },
});
