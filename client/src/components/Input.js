import React from "react";

function Input({ cityName, setCityName }) {
  const handleChange = (e) => {
    e.preventDefault();
    setCityName(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div class="row">
      <div class="input-field col s12">
        <input id="cityInput" type="text" class="validate" value={cityName} />
        <label for="cityInput">Enter a city onChange={handleChange}</label>
      </div>
    </div>
  );
}

export default Input;
