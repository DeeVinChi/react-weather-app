import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Form(props) {
  const [city, setCity] = useState(props.defaultLocation);
  const [data, setData] = useState({ ready: false });

  function getValue(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "c9c90c9d41381c966b92e97480461b42";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
  }

  function showTemp(response) {
    setData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  if (data.ready) {
    return (
      <div className="Form">
        <Weather info={data} />
        <form onSubmit={handleSubmit}>
          <div className="row mt-4">
            <div className="col-8">
              <input
                type="search"
                onChange={getValue}
                placeholder="Enter City"
                autoComplete="off"
                autoFocus="on"
                className="form-control shadow"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow"
              />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
