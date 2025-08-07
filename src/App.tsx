import { useState } from "react";
import "./App.css";
import fetchWeater from "./api/fetWeather";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
  };
  timezone: number;
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  sys: {
    country: string;
  };
}

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<WeatherData>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const search = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setLoading(true);
      setError("");
      try {
        const data = await fetchWeater(query);
        console.log("Received weather data:", data.data);
        setWeather(data.data);
        setQuery("");
      } catch (error) {
        console.error("Failed to fetch weather:", error);
        setError(
          "Failed to fetch weather data. Please check your API key and try again."
        );
        setWeather(undefined);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
        disabled={loading}
      />

      {loading && <div className="loading">Loading...</div>}

      {error && <div className="error">{error}</div>}

      {weather && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys?.country || "N/A"}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main?.temp || 0)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              src={`https://openweathermap.org/img/wn/${
                weather.weather?.[0]?.icon || "default"
              }@2x.png`}
              alt="Weather icon"
              className="city-icon"
            />
            <p>
              {weather.weather?.[0]?.description || "No description available"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
