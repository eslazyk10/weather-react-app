import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  let [city, setCity]= useState("");
  let [weatherData, setWeatherData] = useState({});
  
  const apiKey = "5b8bfd096caf5847f3506db76bfb75ad";
  const unit= "imperial";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  function handleSubmit(event){
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }

  function changeCity(event){
    event.preventDefault();
    setCity(event.target.value);
  }
  
  function handleResponse(response){
    console.log(response.data);
    
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      feel: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      currentCity: response.data.name,
      iconUrl: "https://d29fhpw069ctt2.cloudfront.net/icon/image/49043/preview.svg"
    })
  }


  return (
    <div className="Weather">
    <div className="row">
        <div className="col-6">
      <h1 className="Current-City">{weatherData.currentCity}</h1>
          <h2 className="Current-Day-Time">Thursday</h2>
          <h2 className="Current-Condition">Sunny</h2>
          
        </div>
    <div className="col-6">
       <h3>
        <img
          src={weatherData.iconUrl}
          alt={weatherData.description}
        />
        {" "}{weatherData.temperature}° <a href="/">F</a>|<a href="/">C</a>
      </h3>
      <ul>
        <li>Feels like: {weatherData.feel}°</li>
        <li>Humidity: {weatherData.humidity}%</li>
        <li>Wind Speed: {weatherData.windSpeed} mph</li>
      </ul>
    </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-5">
            <input id="Search-form" type="search" placeholder="Search a city" autoFocus="off" onChange={changeCity} />
          </div>
        
          <div className="col-7">
            <input id="Search-Btn" type="submit" value="Search" />

            <input id="Location-Btn" type="submit" value="Current Location" />
          </div>
        </div>
      </form>
    </div>
    </div>
  );
  }
