import React from "react";

import { useQuery, gql } from "@apollo/client";

//
const FORECAST_QUERY = gql`
  query CityWeatherQuery($cityName: String!) {
    CityWeather(name: $cityName) {
      name
      main {
        temp
      }
      weather {
        main
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
    const {
      CityWeather: {
        name,
        main: { temp },
      },
    } = data;
    const weatherInfo = data.CityWeather.weather[0].main;

    const currentDate = new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    console.log(currentDate);

    return (
      <div>
        <h1>Forecast</h1>
        <time className="current-time">{currentDate}</time>

        <h2>
          Weather in {name} {temp}
          {"\u00b0"}
        </h2>
        <h4>{weatherInfo}</h4>
      </div>
    );
  }

  return <h3>city not found</h3>;
};

export default Forecast;
