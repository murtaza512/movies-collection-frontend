import axios from "axios";
import { baseUrl } from "./constant/constant";

export const moviesHandler = async (url) => {
  try {
    const response = await axios.get(baseUrl + url);

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.response };
  }
};
