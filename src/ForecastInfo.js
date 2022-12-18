import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastInfo(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function showDate() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} size={55} />
      </div>
      <div className="day">{showDate()}</div>
      <div className="degree">
        <span>{maxTemp()}</span>/<span>{minTemp()}</span>
      </div>
    </div>
  );
}
