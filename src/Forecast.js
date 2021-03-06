import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import Loader from "react-loader-spinner";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    
    if (loaded){
        return(
        <div className="Forecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if (index < 6){
                    return (
                    <div className="col-sm-2" key={index}>
                        <ForecastDay data={dailyForecast}/>
                    </div>
                    );
                    } else{
                        return null;
                    }
                })}
                
            </div>
        </div>
    );
    } else{
        
    let apiKey= "5b8bfd096caf5847f3506db76bfb75ad";
        let unit= "imperial";
        let latitude= props.coordinates.lat;
        let longitude=props.coordinates.lon;
        let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
   
        axios.get(apiUrl).then(handleResponse);

        return (
            <div className="Forecast-loader">
            <p>"Loading.."</p>
            <Loader
            type="ThreeDots"
            color="rgba(21, 50, 96, 0.7)"
            height={50}
            width={50}
            />
            </div>
        );
    }
}