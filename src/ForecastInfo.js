import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastInfo(props) {
  return (
    <div>
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} size={55} />
      </div>
      <div className="day">{props.data.dt}</div>
      <div className="degree">
        <span>{props.data.temp.max}</span>/<span>{props.data.temp.min}</span>
      </div>
    </div>
  );
}
