import React from "react";

function Button({ setShowForecast }) {
  return (
    <div className="btn-wrapper">
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={() => {
          setShowForecast(true);
        }}
      >
        Submit
        <i className="material-icons right">cloud</i>
      </button>
    </div>
  );
}

export default Button;
