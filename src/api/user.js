import http from "@/libs/http.js";

const login = param => {
  return http({
    method: "post",
    url: http.adornUrl("/user/login"),
    data: param
  });
};

export {
    login
}