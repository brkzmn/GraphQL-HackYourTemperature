import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Result from "./components/Result";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import Forecast from "./components/Forecast";
import { useState } from "react";
import { set } from "express/lib/application";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [cityName, setCityName] = useState(undefined);
  return (
    <ApolloProvider client={client}>
      <h1>HackYourTemperature-GraphQL</h1>
      <Input cityName={cityName} setCityName={setCityName} />
      <Button setCityName={setCityName} />

      <Forecast cityName={cityName} setCityName={setCityName} />
    </ApolloProvider>
  );
}

export default App;
