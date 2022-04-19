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
    }
  }
`;

const Forecast = ({ cityName, setShowForecast }) => {
  const { loading, error, data } = useQuery(FORECAST_QUERY, {
    variables: { cityName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error...! </p>;
  }
  console.log(data.CityWeather.name);
  if (data.CityWeather.name !== null) {
    const {
      CityWeather: {
        name,
        main: { temp },
      },
    } = data;

    return (
      <div>
        <h1>Forecast</h1>
        <h2>{name}</h2>
        <h2>{temp}</h2>
      </div>
    );
  }

  return <div>city not found</div>;
};

export default Forecast;
