import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function FunctionDay(props){
    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

        return days[day];
    }
    
    return(
        <div className="FunctionDay">
            <div className="Forecast-day">{day()}</div>
                    <WeatherIcon code={props.data.weather[0].icon} size={36} />
                    <div className="Forecast-temps">
                        <span className="Forecast-temp-max">{Math.round(props.data.temp.max)}°</span>
                        |
                        <span className="Forecast-temp-min">{Math.round(props.data.temp.min)}°</span>
                    </div>
        </div>
    )
}