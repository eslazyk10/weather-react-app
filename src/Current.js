import React from "react";

export default function Current(props) {
  return (
    <div className="Current">
      <ul>
        <li>Feels like: {props.value}°</li>
        <li>Humidity: {props.humidity}%</li>
        <li>Wind Speed: {props.speed} mph</li>
      </ul>
    </div>
  );
}