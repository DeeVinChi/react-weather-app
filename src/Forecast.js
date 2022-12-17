import axios from "axios";
import React, { useState } from "react";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [info, setInfo] = useState(null);

  function showForecast(response) {
    setInfo(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <ForecastInfo data={info[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c9c90c9d41381c966b92e97480461b42";
    let lat = props.coordinate.lat;
    let lon = props.coordinate.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);

    return null;
  }
}
