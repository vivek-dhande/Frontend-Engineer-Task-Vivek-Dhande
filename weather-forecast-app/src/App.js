
import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import CurrentWeather from "./components/CurrentWeather";

const API_KEY = "c01525eec9d64b8e999163815232107";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("C"); // 'C' for Celsius, 'F' for Fahrenheit

  const getWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=6&aqi=no&alerts=no`
      );
  
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  return (
    <div>
      <SearchForm getWeatherData={getWeatherData} />
      {weatherData && (
        <div>
          <CurrentWeather data={weatherData} unit={unit} setUnit={setUnit} />
        </div>
      )}
    </div>
  );
};

export default App;
