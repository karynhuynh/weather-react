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
    <div className="ForecastDay py-1">
      <div className="row text-center">
        <div className="TemperatureIcon col px-0 pt-1">
          <TemperatureIcon
            code={props.data.weather[0].icon}
            color="#666666"
            size={37}
          />
        </div>
        <p className="col day mb-0">
          {day()}
          <p className="col maxmin">
            <span className="max">{maxTemperature()}</span>{" "}
            <span className="min">{minTemperature()}</span>
          </p>
        </p>
      </div>
    </div>
  );
}
