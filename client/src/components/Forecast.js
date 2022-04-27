import React from "react";

import { useQuery, gql } from "@apollo/client";

//
const FORECAST_QUERY = gql`
  query CityWeatherQuery($cityName: String!) {
    CityWeather(name: $cityName) {
      name
      main {
        temp
        humidity
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
  console.log(data.CityWeather.name);
  if (data.CityWeather.name !== null) {
    const main = data.CityWeather.main;
    const weather = data.CityWeather.weather[0];
    const wind = data.CityWeather.wind;

    console.log(data.CityWeather);

    const currentDate = new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    console.log(currentDate);

    return (
      <div className={`forecast-container ${main.temp > 16 ? "warm" : "cold"}`}>
        <h1>Forecast</h1>
        <time className="current-time">{currentDate}</time>

        <h2>
          Weather in {data.CityWeather.name} {main.temp}
          {"\u00b0"}
        </h2>
        <h4>humidity {main.humidity} %</h4>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather-icon"
        />
        <h4>main {weather.main}</h4>
        <h4>description{weather.description}</h4>
      </div>
    );
  }

  return <h3>city not found</h3>;
};

export default Forecast;
