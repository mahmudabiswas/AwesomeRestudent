import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./useAuth";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = UseAuth();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request inside by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.request.use(
    function (response) {
      return response;
    },
    async (err) => {
      const status = err.response.status;
      console.log("status code error inside the interceptor", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default UseAxiosSecure;
