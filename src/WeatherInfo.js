import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return (
<div className="WeatherInfo">
    <div className="row">
        <div className="col-6">
      <h1 className="Current-City">{props.data.currentCity}</h1>
          <h2 className="Current-Day-Time">
            <FormattedDate date={props.data.date}/>
          </h2>
          <h2 className="text-capitalize">{props.data.description}</h2>
          
        </div>
    <div className="col-6">
       <h3>
         <span className="Icon">
        <WeatherIcon code= {props.data.icon} alt={props.data.description}/>
        </span>
        {" "}
        <Temperature fahrenheit={props.data.temperature}/>
        
      </h3>
      <ul>
        <li>Feels like: {props.data.feel}°</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind Speed: {props.data.windSpeed} mph</li>
      </ul>
    </div>
    </div>
    </div>
    )
}