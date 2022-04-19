import React from "react";

function Input({ cityName, setCityName, setShowForecast }) {
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="cityInput"
          type="text"
          className="validate"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
            setShowForecast(false);
            console.log(cityName, "cityyyyname");
          }}
        />
        <label htmlFor="cityInput">Enter a city</label>
      </div>
    </div>
  );
}

export default Input;
