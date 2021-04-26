import React from "react";
import TemperatureIcon from "./TemperatureIcon";

import "./Forecast.css";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div className="ForecastDay">
      <div className="row">
        <p className="col day">{day()}</p>
        <div className="TemperatureIcon">
          <TemperatureIcon
            code={props.data.weather[0].icon}
            color="#000"
            size={25}
          />
        </div>
        <p className="col maxmin">
          <span className="max">{maxTemperature()}</span>{" "}
          <span className="min">{minTemperature()}</span>
        </p>
      </div>
    </div>
  );
}
