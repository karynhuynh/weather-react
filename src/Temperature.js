import React, { useState } from "react";
import axios from "axios";
import DateTime from "./DateTime";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

import "./Temperature.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: <i className="fas fa-cloud main-card-icon"></i>,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Temperature">
        <div className="Search">
          <form>
            <div className="row">
              <div className="col-8 mt-3 mx-1">
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="Enter your city here..."
                  autoComplete="off"
                  autoFocus="on"
                  required
                />
              </div>
              <div className="col-2 d-flex mt-3">
                <button type="submit" className="btn btn-outline-dark mx-1">
                  <i className="fas fa-search"></i>
                </button>
                <button type="submit" className="btn btn-outline-dark mx-1">
                  <i className="fas fa-map-marker-alt"></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="main-card my-4">
          <div className="card-body">
            <h2 className="card-title">{weatherData.city}</h2>
            <h6 className="card-subtitle mb-2">
              <DateTime date={weatherData.date} />
            </h6>
            {weatherData.icon}
            <div className="main-card-degree">
              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">
                <a href="/" className="active celsius">
                  {" "}
                  °C
                </a>{" "}
                |
                <a href="/" className="fahrenheit">
                  {" "}
                  °F
                </a>
              </span>
            </div>
          </div>
          <div className="main-card-text">
            <div className="row">
              <div className="col">
                <div className="WDescription">
                  <br />
                  <span className="text-capitalize">
                    {weatherData.description}
                  </span>
                  <br />
                  Humidity:{" "}
                  <span className="humidity-percentage">
                    {weatherData.humidity}
                  </span>
                  %
                  <br />
                  Wind: <span className="wind-speed">
                    {weatherData.wind}
                  </span>{" "}
                  m/s
                </div>
              </div>
              <div className="col">
                <div className="Sun">
                  <br />
                  <i className="fas fa-cloud-sun"></i> Sunrise:{" "}
                  <span className="sunrise">
                    <Sunrise sunrise={weatherData.sunrise} />
                  </span>
                  <br />
                  <i className="fas fa-cloud-moon"></i> Sunset:{" "}
                  <span className="sunset">
                    <Sunset sunset={weatherData.sunset} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "563b8c646e928f0609edc6757e3848c7";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
