import React from "react";

export default function FunctionDay(props){
    return(
        <div className="FunctionDay">
            <div className="Forecast-day">{forecast[0].dt}</div>
                    <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
                    <div className="Forecast-temps">
                        <span className="Forecast-temp-max">{Math.round(forecast[0].temp.max)}°</span>
                        |
                        <span className="Forecast-temp-min">{Math.round(forecast[0].temp.min)}°</span>
                    </div>
        </div>
    )
}