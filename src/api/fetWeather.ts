import axios from "axios";

const URL: string = import.meta.env.VITE_API_URL || "";
const API_KEY: string = import.meta.env.VITE_API_KEY || "";

const fetchWeater = async (query: string) => {
  try {
    // Debug: Log environment variables
    console.log("API URL:", URL);
    console.log("API KEY exists:", !!API_KEY);

    if (!URL || !API_KEY) {
      throw new Error(
        "Missing API configuration. Check your environment variables."
      );
    }

    const response = await axios.get(URL, {
      params: {
        q: query,
        units: "metric",
        APPID: API_KEY,
      },
    });

    // Debug: Log the response
    console.log("API Response:", response.data);

    return response;
  } catch (error) {
    console.error("Weather API Error:", error);
    throw error;
  }
};

export default fetchWeater;
