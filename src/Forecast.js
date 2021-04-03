import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";
import axios from "axios";

export default function Forecast(props){
    function handleResponse(response){
        console.log(response.data);
    }

    console.log(props);
    
    let apiKey= "5b8bfd096caf5847f3506db76bfb75ad";
    let unit= "imperial";
    let latitude= props.coordinates.lat;
    let longitude=props.coordinates.lon;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
   
    axios.get(apiUrl).then(handleResponse);

    return(
        <div className="Forecast">
            <div className="row">
                <div className="col">
                    <div className="Forecast-day">Thurs</div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="Forecast-temps">
                        <span className="Forecast-temp-max">55°</span>
                        <span className="Forecast-temp-min">48°</span>
                    </div>
                </div>
            </div>
        </div>
    )

}