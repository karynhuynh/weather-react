import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row">
        <p className="col day">THURSDAY</p>
        <i className="fas fa-sun col forecast-icon"></i>
        <p className="col maxmin">
          <span>12</span>° / <span>6</span>°
        </p>
      </div>
      <div className="row">
        <p className="col day">FRIDAY</p>
        <i className="fas fa-cloud col forecast-icon"></i>
        <p className="col maxmin">
          <span>9</span>° / <span>7</span>°
        </p>
      </div>
      <div className="row">
        <p className="col day">SATURDAY</p>
        <i className="fas fa-cloud col forecast-icon"></i>
        <p className="col maxmin">
          <span>10</span>° / <span>6</span>°
        </p>
      </div>
      <div className="row">
        <p className="col day">SUNDAY</p>
        <i className="fas fa-sun col forecast-icon"></i>
        <p className="col maxmin">
          <span>8</span>° / <span>5</span>°
        </p>
      </div>
      <div className="row">
        <p className="col day">MONDAY</p>
        <i className="fas fa-cloud col forecast-icon"></i>
        <p className="col maxmin">
          <span>9</span>° / <span>6</span>°
        </p>
      </div>
    </div>
  );
}
