import React from "react";
import "./Weather.css";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Degree from "./Degree";

export default function Weather(props) {
  return (
    <div className="row">
      <div className="col-8">
        <div className="time pt-2 mt-2">
          <FormatDate date={props.info.date} />
        </div>
        <h1 className="location">{props.info.city} </h1>
        <div>
          <WeatherIcon code={props.info.icon} />
        </div>
      </div>
      <div className="col-4">
        <h3>
          <Degree celsuis={props.info.temperature} />
        </h3>
        <div className="situation text-center pt-0">
          <ul>
            <li>description: {props.info.description}</li>
            <li>Humidity: {props.info.humidity}% </li>
            <li>Wind: {props.info.wind}Km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
