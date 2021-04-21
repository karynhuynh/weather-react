import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const apiKey = `563b8c646e928f0609edc6757e3848c7`;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeather);

  function displayWeather(response) {
    alert(`the weather in ${props.city} is ${response.data.main.temp}`);
  }

  return <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
}
