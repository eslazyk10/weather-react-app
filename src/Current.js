import React from "react";

import "./Current.css";

export default function Current(props) {
  return (
    <div className="Current">
      <h3>
        <img
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49043/preview.svg"
          alt="Sunny"
        />
        {props.temp}° <a href="/">F</a>|<a href="/">C</a>
      </h3>
      <ul>
        <li>Feels like: {props.value}°</li>
        <li>Humidity: {props.humidity}%</li>
        <li>Wind Speed: {props.speed} mph</li>
      </ul>
    </div>
  );
}