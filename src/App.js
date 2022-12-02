import "./App.css";
import Form from "./Form";
import Footer from "./Footer";

export default function App() {
  let weatherData = {
    city: "Abuja",
    day: "Tues",
    date: "15:20PM",
    description: "Heavy Rain Fall",
  };

  return (
    <div className="App container body">
      <div className="row">
        <div className="col-8">
          <h1 className="time pt-2 mt-2">{weatherData.day}</h1>
          <h2>{weatherData.date}</h2>
          <div className="location">{weatherData.city}</div>
        </div>
        <div className="col-4">
          <h3>
            <div>
              <img src="" alt="" />
            </div>
            <span className="current-degree text-center pt-0 pb-0"></span>
            <span className="degree-sign">
              <a href="/" className="degrees">
                ℃
              </a>{" "}
              |
              <a href="/" className="degrees">
                ℉
              </a>
            </span>
          </h3>
          <div className="situation text-center pt-0">
            {weatherData.description},
          </div>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
}
