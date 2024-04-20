import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://emt.tanuweb.cloud/api/v1", // Set your API base URL here
  // timeout: 5000, // Set a timeout for requests (in milliseconds)
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from wherever you store it (e.g., localStorage)
    const token = localStorage.getItem("token");

    // If a token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Set Content-Type to application/json
    // config.headers["Content-Type"] = "multipart/form-data";

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
