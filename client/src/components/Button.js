import React from "react";

function Button({ setShowForecast }) {
  return (
    <div>
      <button
        class="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={() => {
          setShowForecast(true);
        }}
      >
        Submit
        <i class="material-icons right">cloud</i>
      </button>
    </div>
  );
}

export default Button;
