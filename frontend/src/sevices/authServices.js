import api from "./api";

export const signupUser = async (fullName, userName, password, gender, email) => {
    console.log("sign up user called")
  let response = await api.post("/auth/signup", {
    fullName,
    userName,
    password,
    gender,
    email,
  });
  return response;
};
export const loginUser = async (password, email) => {
  let response = await api.post("/auth/login", {
    password,
    email,
  });
  return response;
};
export const logoutUser = async () => {
  let response = await api.get("/auth/logout",);
  return response;
};
