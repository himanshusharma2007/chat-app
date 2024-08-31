import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Check if we're not already on the login page
    //   if (window.location.pathname !== "/login") {
    //     window.location.href = "/login";
    //   }
    console.log("error in api fetching ",erro.message);

    }
    return Promise.reject(error);
  }
);

export default api;
