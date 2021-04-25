import React from "react";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  const apiKey = "563b8c646e928f0609edc6757e3848c7";
  const units = "metric";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response)
  }

  return (
    <div className="forecast">
      <div className="row">
        <p className="col day">THURSDAY</p>
        <i className="fas fa-cloud col forecast-icon"></i>
        <p className="col maxmin">
          <span className="max">12</span>° / <span className="min">6</span>°
        </p>
      </div>
      <div className="row">
        <p className="col day">FRIDAY</p>
        <i className="fas fa-cloud col forecast-icon"></i>
        <p className="col maxmin">
          <span className="max">9</span>° / <span className="min">7</span>°
        </p>
      </div>
      <div className="row">
        <p className="col day">SATURDAY</p>
        <i className="fas fa-cloud col forecast-icon"></i>
        <p className="col maxmin">
          <span className="max">10</span>° / <span className="min">6</span>°
        </p>
      </div>
      <div className="row">
        <p className="col day">SUNDAY</p>
        <i className="fas fa-sun col forecast-icon"></i>
        <p className="col maxmin">
          <span className="max">8</span>° / <span className="min">5</span>°
        </p>
      </div>
      <div className="row">
        <p className="col day">MONDAY</p>
        <i className="fas fa-cloud col forecast-icon"></i>
        <p className="col maxmin">
          <span className="max">9</span>° / <span className="min">6</span>°
        </p>
      </div>
    </div>
  );
}
