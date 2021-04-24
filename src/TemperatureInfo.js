import React from "react";
import DateTime from "./DateTime";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import TemperatureIcon from "./TemperatureIcon";

import "./Temperature.css";

export default function TemperatureInfo(props) {
  return (
    <div className="TemperatureInfo">
      <div className="main-card my-4">
        <div className="card-body pb-0">
          <h2 className="card-title">{props.data.city}</h2>
          <h6 className="card-subtitle mb-3">
            <DateTime date={props.data.date} />
          </h6>
          <TemperatureIcon code={props.data.icon} />
          <div className="main-card-degree">
            <span className="temperature">{props.data.temperature}</span>
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
                  {props.data.description}
                </span>
                <br />
                Humidity:{" "}
                <span className="humidity-percentage">
                  {props.data.humidity}
                </span>
                %
                <br />
                Wind: <span className="wind-speed">{props.data.wind}</span> m/s
              </div>
            </div>
            <div className="col">
              <div className="Sun">
                <br />
                <i className="fas fa-cloud-sun"></i> Sunrise:{" "}
                <span className="sunrise">
                  <Sunrise sunrise={props.data.sunrise} />
                </span>
                <br />
                <i className="fas fa-cloud-moon"></i> Sunset:{" "}
                <span className="sunset">
                  <Sunset sunset={props.data.sunset} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
