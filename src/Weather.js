import React, { useState } from "react";

export default function Weather() {
  return (
    <div className="Search-Show">
      <header>
        <form className="search-block">
          <input
            type="search"
            placeholder="Enter a City..."
            required
            className="search-text"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="Weather-Content">
          <div>
            <h1 className="City-name"></h1>
            <p className="City-details">
              <span></span>, <span></span>
              <br />
              Humidity: <strong>%</strong>, Wind:
              <strong>km/h</strong>
            </p>
          </div>
          <div className="City-temperature">
            <span>
              <img src="" className="temperature-icone" />
            </span>
            <span className="actual-temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="temperature-celsius">
              <strong> Â°C </strong>
            </span>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </main>
    </div>
  );
}
