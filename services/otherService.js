import axiosInstance from "../axios/axios";
import axiosWeather from "../axios/weatherAxios";
import { useMyContext } from "../context/globalContext";

export const getAllData = async () => {
  try {
    const travel = await getTravel();
    const news = await getNews();
    const assistant = await getAssistant();
    const event = await getEvent();
    const comment = await getComment();
    const category = await getCategories();
    const tip = await getTip();
    // const additional = await getAdditional();
    return {
      category: category.data,
      travel: travel.data,
      news: news.data,
      event: event.data,
      comment: comment.data,
      assistant: assistant.data,
      tip: tip.data,
      // additional: additional.data,
    };
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};

export const getWeather = async () => {
  try {
    const response = await axiosWeather.get();
    // .catch((er) => console.log(er));
    return response?.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};
export const getSingle = async (id, thing) => {
  try {
    if (id && thing) {
      const response = await axiosInstance.get(`/${thing}/${id}`);
      return response?.data;
    }
    // .catch((er) => console.log(er));
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};
export const getSingleTravel = async (
  id
  // thing: "news" | "category" | "event" | "comment" | "travel"
) => {
  try {
    const response = await axiosInstance.get(`/travel/${id}`);
    // .catch((er) => console.log(er));
    return response?.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};
export const getCategories = async () => {
  try {
    const response = await axiosInstance.get(`/category`);
    return response?.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};

export const getNews = async () => {
  try {
    const response = await axiosInstance.get(`/news`);
    return response?.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};
export const getEvent = async () => {
  try {
    const response = await axiosInstance.get(`/event`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};
export const getComment = async () => {
  try {
    const response = await axiosInstance.get(`/comment`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};
export const getTravel = async () => {
  try {
    const response = await axiosInstance.get(`/travel`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};

export const getRegion = async () => {
  try {
    const response = await axiosInstance.get(`/subcategory`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};
export const getAssistant = async () => {
  try {
    const response = await axiosInstance.get(`/assistant`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};
export const getTip = async () => {
  try {
    const response = await axiosInstance.get(`/tip`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};
export const getAdditional = async () => {
  try {
    const response = await axiosInstance.get(`/additional`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
};
