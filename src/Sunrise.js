import React from "react";

export default function Sunrise(props) {
  console.log(props);
  let hours = props.sunrise.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.sunrise.getMinutes();
  if(minutes < 10) {
      minutes = `0${minutes}`
  }
  return `${hours}:${minutes}`;
}