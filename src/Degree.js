import React, { useState } from "react";

export default function Degree(props) {
  const [unit, setUnit] = useState("celsuis");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsuis");
  }

  function fahrenheit() {
   return Math.round((props.celsuis * 9) / 5 + 32);

  }

  if (unit === "celsuis") {
    return (
      <div className="degree">
        <a href="/" className="degrees">
          {Math.round(props.celsuis)}℃
        </a>{" "}
        |
        <a href="/" className="degrees" onClick={displayFahrenheit}>
          ℉
        </a>
      </div>
    );
  } else {
    return (
      <div className="degree">
        <a href="/" className="degrees" onClick={displayCelsius}>
          ℃
        </a>{" "}
        |
        <a href="/" className="degrees">
          {fahrenheit()}℉
        </a>
      </div>
    );
  }
}
