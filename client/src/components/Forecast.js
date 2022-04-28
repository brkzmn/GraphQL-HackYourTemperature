import React from "react";

import { useQuery, gql } from "@apollo/client";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsWind, BsSpeedometer } from "react-icons/bs";

//
const FORECAST_QUERY = gql`
  query CityWeatherQuery($cityName: String!) {
    CityWeather(name: $cityName) {
      name
      main {
        temp
        humidity
        feels_like
        pressure
      }
      weather {
        main
        icon
        description
      }
      wind {
        speed
      }
    }
  }
`;

const Forecast = ({ cityName, setShowForecast }) => {
  const { loading, error, data } = useQuery(FORECAST_QUERY, {
    variables: { cityName },
  });

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    console.log(error);
    return <h3>Error...! {error}</h3>;
  }

  if (data.CityWeather.name !== null) {
    const main = data.CityWeather.main;
    const weather = data.CityWeather.weather[0];
    const wind = data.CityWeather.wind;
    const currentDate = new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return (
      <div className={`forecast-container ${main.temp > 16 ? "warm" : "cold"}`}>
        <div className="degree-wrapper">
          <time className="current-time">{currentDate}</time>

          <h4>
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="weather-icon"
            />
            {weather.main}
          </h4>
          <span>{weather.description}</span>
          <h2>{data.CityWeather.name}</h2>
          <h1>
            {" "}
            {Math.floor(main.temp)}
            {"\u00b0"}
          </h1>
        </div>
        <div className="details-wrapper">
          <div className="detail-box">
            <WiHumidity className="detail-icon" />
            <p>humidity</p>
            <h4>{main.humidity} %</h4>
          </div>
          <div className="detail-box">
            <FaTemperatureHigh className="detail-icon" />
            <p>Feels like</p>
            <h4>
              {Math.floor(main["feels_like"])} {"\u00b0"}
            </h4>
          </div>

          <div className="detail-box">
            <BsWind className="detail-icon" />
            <p>Wind</p>
            <h4>{wind.speed} m/s</h4>
          </div>
          <div className="detail-box">
            <BsSpeedometer className="detail-icon" />
            <p>Pressure</p>
            <h4>{main.pressure} hPa</h4>
          </div>
        </div>
      </div>
    );
  }

  return <h3>city not found</h3>;
};

export default Forecast;
