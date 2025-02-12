import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");

  function actualDate() {
    const date = new Date();
    const options = { weekday: "long" };
    const day = date.toLocaleDateString("en-US", options);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    if (minutes && hour < 10) {
      return `${day} 0${hour}:0${minutes}`;
    } else {
      return `${day} ${hour}:${minutes}`;
    }
  }
  function citySearch(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search-Show">
      <header>
        <form className="search-block">
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
              <span>{actualDate()}</span>, <span></span>
              <br />
              Humidity: <strong>%</strong>, Wind:
              <strong>km/h</strong>
            </p>
          </div>
          <div className="City-temperature">
            <span>
              <img src="" className="temperature-icone" />
            </span>
            <span className="actual-temperature"></span>
            <span className="temperature-celsius">°C</span>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </main>
    </div>
  );
}
