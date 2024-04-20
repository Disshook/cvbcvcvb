import axios from "axios";

const axiosWeather = axios.create({
  baseURL:
    "https://api.weatherapi.com/v1/current.json?key=5f547b2f177f4802970131721231009&q=Ulaanbaatar&aqi=no", // Set your API base URL here
  timeout: 5000, // Set a timeout for requests (in milliseconds)
});

// Add an interceptor to include the Bearer token in the request headers
axiosWeather.interceptors.request.use(
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

export default axiosWeather;
