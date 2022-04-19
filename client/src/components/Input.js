import React from "react";

function Input({ cityName, setCityName, setShowForecast }) {
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setCityName(e.target.value);
  //   console.log(cityName, "cityname");
  // };
  return (
    <div class="row">
      <div class="input-field col s12">
        <input
          id="cityInput"
          type="text"
          class="validate"
          value={cityName}
          onChange={(e) => {
            // e.preventDefault();
            setCityName(e.target.value);
            setShowForecast(false);
            console.log(cityName, "cityyyyname");
          }}
        />
        <label for="cityInput">Enter a city</label>
      </div>
    </div>
  );
}

export default Input;
