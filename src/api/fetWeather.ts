import axios from "axios";

const URL: string = process.env.API_URL || "";
const API_KEY: string = process.env.API_KEY || "";
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
