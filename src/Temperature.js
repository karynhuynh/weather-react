import React from "react";

import "./Temperature.css";

export default function Temperature() {
  let mainWeather = {
    city: "San Francisco",
    date: "Tuesday, April 7, 2021 on 19:35",
    temperature: "11",
  };

  let weatherData = {
    description: "Cloudy",
    humidity: 30,
    wind: 7,
  };

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
          <h2 className="card-title">{mainWeather.city}</h2>
          <h6 className="card-subtitle mb-2">{mainWeather.date}</h6>
          <i className="fas fa-cloud main-card-icon"></i>
          <div className="main-card-degree">
            <span className="temperature">{mainWeather.temperature}</span>
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
                <span className="weather-description">
                  {weatherData.description}
                </span>
                <br />
                Humidity:{" "}
                <span className="humidity-percentage">
                  {weatherData.humidity}
                </span>
                %
                <br />
                Wind: <span className="wind-speed">{weatherData.wind}</span> m/s
              </div>
            </div>
            <div className="col">
              <div className="Sun">
                <br />
                <i className="fas fa-cloud-sun"></i> Sunrise:
                <span className="sunrise"> 07:10</span>
                <br />
                <i className="fas fa-cloud-moon"></i> Sunset:
                <span className="sunset"> 15:23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
