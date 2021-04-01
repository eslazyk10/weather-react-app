import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  let [city, setCity]= useState("");
  let [weatherData, setWeatherData] = useState({ ready: false });
  
  const apiKey = "5b8bfd096caf5847f3506db76bfb75ad";
  const unit= "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

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
      ready: true,
      temperature: Math.round(response.data.main.temp),
      feel: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      currentCity: response.data.name,
      date: "Thursday 12:00",
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`,
      description: response.data.weather[0].description
    })
  }

  if (weatherData.ready){
  return (
    <div className="Weather">
    <div className="row">
        <div className="col-6">
      <h1 className="Current-City">{weatherData.currentCity}</h1>
          <h2 className="Current-Day-Time">{weatherData.date}</h2>
          <h2 className="text-capitalize">{weatherData.description}</h2>
          
        </div>
    <div className="col-6">
       <h3>
        <img
          src={weatherData.iconUrl}
          alt={""}
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
  }else {
    const apiKey = "5b8bfd096caf5847f3506db76bfb75ad";
    const unit= "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="Loader">
      <h1>"Loading.."</h1>
    <Loader
        type="Puff"
        color="#153260"
        height={300}
        width={300}
        
      />
      </div>
      )
  }
  }
