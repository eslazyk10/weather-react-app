import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h2>
        <img
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49043/preview.svg"
          alt="Sunny"
        />
        {props.value}° <a href="/">F</a>|<a href="/">C</a>
      </h2>
    </div>
  );
}