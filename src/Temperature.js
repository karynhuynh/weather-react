import React, { useState } from "react";
import axios from "axios";
import TemperatureInfo from "./TemperatureInfo";
import Forecast from "./Forecast";

import "./Temperature.css";

export default function Temperature(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function citySubmit(event) {
    event.preventDefault();
    search();
  }

  function citySearch(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "563b8c646e928f0609edc6757e3848c7";
    const units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Temperature">
        <div className="Search">
          <form onSubmit={citySubmit}>
            <div className="row">
              <div className="col-9 mt-3 mx-2">
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="Enter your city here..."
                  autoComplete="off"
                  autoFocus="on"
                  required
                  onChange={citySearch}
                />
              </div>
              <div className="col-2 d-flex mt-3">
                <button type="submit" className="btn btn-outline-dark mx-1">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <TemperatureInfo data={weatherData} />
        <hr />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
