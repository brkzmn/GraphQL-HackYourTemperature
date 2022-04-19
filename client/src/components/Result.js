import React from "react";
import Forecast from "./Forecast";

function Result({ cityName }) {
  return (
    <div>
      <Forecast cityName={cityName} />
    </div>
  );
}

export default Result;
