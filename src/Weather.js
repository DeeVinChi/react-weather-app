import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });

  function showTemp(response) {
    setData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (data.ready) {
    return (
      <div className="row">
        <div className="col-8">
          <h1 className="time pt-2 mt-2">wed</h1>
          <h2>15:00</h2>
          <div className="location">{data.city} </div>
        </div>
        <div className="col-4">
          <h3>
            <a href="/" className="degrees">
              {Math.round(data.temperature)}℃
            </a>{" "}
            |
            <a href="/" className="degrees">
              ℉
            </a>
          </h3>
          <div className="situation text-center pt-0">
            <ul>
              <li>description: {data.description}</li>
              <li>Humidity: {data.humidity}% </li>
              <li>Wind: {data.wind}Km/h </li>
              <li>
                <img src={data.icon} alt={data.description} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c9c90c9d41381c966b92e97480461b42";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultLocation}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
    console.log(url);

    return "Loading...";
  }
}
