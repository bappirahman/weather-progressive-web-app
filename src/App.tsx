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
  const search = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const data = await fetchWeater(query);
      setWeather(data.data);
      setQuery("");
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
      />
      {weather && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              src={` https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather icon"
              className="city-icon"
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
