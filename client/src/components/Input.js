import React from "react";

function Input({ cityName, setCityName, setShowForecast }) {
  return (
    <div className=" input-field col s12 m9 l10">
      <input
        id="cityInput"
        type="text"
        className="validate"
        value={cityName}
        onChange={(e) => {
          setCityName(e.target.value);
          setShowForecast(false);
        }}
      />
      <label htmlFor="cityInput">Enter a city</label>
    </div>
  );
}

export default Input;
