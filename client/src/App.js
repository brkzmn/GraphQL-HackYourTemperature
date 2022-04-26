import Input from "./components/Input";
import Button from "./components/Button";
import { GrGraphQl } from "react-icons/gr";

import "./App.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Forecast from "./components/Forecast";
import { useState } from "react";
// import { set } from "express/lib/application";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [cityName, setCityName] = useState(undefined);
  const [showForecast, setShowForecast] = useState(false);

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h1>HackYourTemperature-GraphQL</h1>
        <GrGraphQl className="logo" />
        <Input
          cityName={cityName}
          setCityName={setCityName}
          setShowForecast={setShowForecast}
        />
        <Button setShowForecast={setShowForecast} />
        {showForecast && (
          <Forecast cityName={cityName} setShowForecast={setShowForecast} />
        )}
      </ApolloProvider>
    </div>
  );
}

export default App;
