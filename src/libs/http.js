import axios from "axios";

const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

http.adornUrl = actionName => {
  return (
    (process.env.NODE_ENV == "production" ? process.env.ROOT : "/apis/") +
    actionName
  );
};

export default http
