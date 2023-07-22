import React, { useState } from "react";
import "../CSS/style.css";
const SearchForm = ({ getWeatherData }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData(city);
    setCity("");
  };

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="searchButton" onClick={handleSubmit}>
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
