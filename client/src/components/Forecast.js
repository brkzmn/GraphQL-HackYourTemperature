import React from "react";
// import { gql } from "@apollo/client";
// import Query from "express/lib/middleware/query";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

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

const Forecast = ({ cityName }) => {
  const { loading, error, data } = useQuery(FORECAST_QUERY, {
    variables: { cityName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error...! </p>;
  }
  console.log(data);
  const {
    CityWeather: {
      name,
      main: { temp },
    },
  } = data;
  console.log(name, temp, "namee");

  return (
    <div>
      <h1>Forecast</h1>
      <h2>{name}</h2>
      <h2>{name}</h2>
      <h2>{name}</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default Forecast;
