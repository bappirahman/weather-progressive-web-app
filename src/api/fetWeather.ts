import axios from "axios";

const URL: string = import.meta.env.VITE_API_URL || "";
const API_KEY: string = import.meta.env.VITE_API_KEY || "";
const fetchWeater = async (query: string) => {
  const response = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return response;
};

export default fetchWeater;
