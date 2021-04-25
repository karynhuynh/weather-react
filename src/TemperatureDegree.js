import React from "react";

export default function TemperatureDegree(props) {
  // const [unit, setUnit] = useState("celsius");

  // function showFahrenheit(event) {
  //   event.preventDefault();
  //   setUnit("fahrenheit");
  // }

  // function showCelsius(event) {
  //   event.preventDefault();
  //   setUnit("celsius");
  // }

  // if (unit === "celsius") {
  //   return (
  //     <div className="TemperatureDegree">
  //       <span className="temperature">{Math.round(props.celsius)}</span>{" "}
  //       <span className="units">
  //         °C |{" "}
  //         <a href="/" className="fahrenheit" onClick={showFahrenheit}>
  //           {" "}
  //           °F
  //         </a>
  //       </span>
  //     </div>
  //   );
  // } else {
  //   let fahrenheit = (props.celsius * 9) / 5 + 32;
  //   return (
  //     <div className="TemperatureDegree">
  //       <span className="temperature">{Math.round(fahrenheit)}</span>{" "}
  //       <span className="units">
  //         <a href="/" className="celsius" onClick={showCelsius}>
  //           °C{" "}
  //         </a>
  //         | °F
  //       </span>
  //     </div>
  //   );
  // }
  return (
    <div className="TemperatureDegree">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>{" "}
      <span className="units">°F</span>
    </div>
  );
}
