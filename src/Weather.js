import React, { use, useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }
  function actualDate() {
    const date = new Date();
    const options = { weekday: "long" };
    const day = date.toLocaleDateString("en-US", options);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    if (hour < 10) {
      return `${day} 0${hour}:${minutes}`;
    }
    if (minutes < 10) {
      return `${day} ${hour}:0${minutes}`;
    } else {
      return `${day} ${hour}:${minutes}`;
    }
  }

  function citySubmit(event) {
    event.preventDefault();
    searchWithApi();
  }
  function citySearch(event) {
    setCity(event.target.value);
  }
  function searchWithApi() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=094780c710fa4efd669f0df8c3991927&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  return (
    <div className="Search-Show">
      <header>
        <form className="search-block d-flex" onSubmit={citySubmit}>
          <input
            type="search"
            placeholder="Enter a City..."
            required
            className="search-text"
            onChange={citySearch}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="Weather-Content">
          <div>
            <h1 className="City-name">{city}</h1>
            <p className="City-details">
              <span>{actualDate()}</span>,{" "}
              <span className="text-capitalize">{weather.description}</span>
              <br />
              Humidity: <strong>{weather.humidity}%</strong>, Wind:
              <strong> {weather.wind}km/h</strong>
            </p>
          </div>
          <div className="City-temperature">
            <span>
              <img src="" className="temperature-icone" />
            </span>
            <span className="actual-temperature">{weather.temperature}</span>
            <span className="temperature-celsius">°C</span>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </main>
    </div>
  );
}
