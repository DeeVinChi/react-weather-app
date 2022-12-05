import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Abuja",
    day: "Tues",
    date: "15:20PM",
    description: "Heavy Rain",
  };

  return (
    <div className="row">
      <div className="col-8">
        <h1 className="time pt-2 mt-2">{weatherData.day}</h1>
        <h2>{weatherData.date}</h2>
        <div className="location">{weatherData.city}</div>
      </div>
      <div className="col-4">
        <h3>
          <a href="/" className="degrees">
            7℃
          </a>{" "}
          |
          <a href="/" className="degrees">
            ℉
          </a>
        </h3>
        <div className="situation text-center pt-0">
          <ul>
            <li>description: {weatherData.description}</li>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
