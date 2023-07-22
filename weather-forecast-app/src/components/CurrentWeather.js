// CurrentWeather.js
import React from "react";
import "../CSS/style.css";
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const CurrentWeather = ({ data, unit, setUnit }) => {

  const forecast_Data = data.forecast.forecastday;


  const handleUnitToggle = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  const date = data.location.localtime.slice(0,data.location.localtime.indexOf(" ")
  );



  return (
    <>
      <div id="toggleBtn">
        <button className="button-6" role="button" onClick={handleUnitToggle}>
          {unit === "C" ? "Switch to Fahrenheit" : "Switch to Celsius"}
        </button>
      </div>

      <div className="main container">
        <div className="row">
          <div className="col" id="weatherCard">
            <div className="col weather-panel ">
              <div id="topCol">
                <div className="col">
                  <h1>{data.location.name}</h1>
                  <span id="current-Date">{date}</span>
                  <p>
                    {" "}
                    <img src={`https:` + forecast_Data[0].day.condition.icon} />
                  </p>
                  <p id="weather-type">{data.current.condition.text}</p>
                </div>
                <div className="col" id="temperature">
                  <div className="h1 temperature">
                    <span id="current_Temp">
                      {unit === "C" ? data.current.temp_c : data.current.temp_f}
                      ° {unit === "C" ? "C" : "F"}
                    </span>
                  </div>
                  <div>
                    <span id="max-min">
                      {unit === "C"
                        ? forecast_Data[0].day.mintemp_c
                        : forecast_Data[0].day.mintemp_f}
                      ° /{" "}
                      {unit === "C"
                        ? forecast_Data[0].day.maxtemp_c
                        : forecast_Data[0].day.maxtemp_f}
                      °
                    </span>
                    <hr />
                    <span id="max-min">
                      <i className="fa fa-tint" aria-hidden="true"></i>{" "}
                      {data.current.humidity} | <i className="fa fa-flag"></i>{" "}
                      {data.current.wind_kph}kph |{" "}
                      <i className="fa fa-compass" aria-hidden="true"></i>{" "}
                      {data.current.wind_dir}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="col">
                <ul className="list-inline row forecast">
                  {forecast_Data.map((data, index) => (
                    <li className="col" key={index} id="forcastCol">
                      <h3 className="h5">{data.date}</h3>

                      <h3 className="h5">
                        {weekday[new Date(`${data.date}`).getDay()]}
                      </h3>
                      <img
                        src={`https:` + forecast_Data[index].day.condition.icon}
                      />
                      <p>{forecast_Data[index].day.condition.text}</p>
                      <p>
                        {unit === "C" ? data.day.avgtemp_c : data.day.avgtemp_f}
                        °
                      </p>
                    </li>
                  ))}
               
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
