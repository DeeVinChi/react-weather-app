import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  function showForecast(response) {}

  let apiKey = "c9c90c9d41381c966b92e97480461b42";
  let lat = props.coordinate.lat;
  let lon = props.coordinate.lon;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
  axios.get(url).then(showForecast);
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="icon">
            <WeatherIcon code="03n" size={55} />
          </div>
          <div className="day">Wed</div>
          <div className="degree">
            <span>14℃</span>/<span>11℃</span>
          </div>
        </div>
      </div>
    </div>
  );
}
