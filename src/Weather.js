import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

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
    setCity(event.target.value);
  }

  
  function handleResponse(response){
    
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      temperature: Math.round(response.data.main.temp),
      feel: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      currentCity: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description
    })
  }

  if (weatherData.ready){
  return (
    <div className="Weather">
      <WeatherInfo data={weatherData} />
      
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-9">
          
            <input id="Search-form" type="search" placeholder="Search a city..." onChange={changeCity} />
          </div>
        
          <div className="col-sm-3">
            <input id="Search-Btn" type="submit" value="Search" />
            </div>
          </div>
        
      </form>
      <Forecast coordinates={weatherData.coordinates}/>
      <p>Weather data provided by <a href="https://openweathermap.org/" target="blank" title="OpenWeather" className="weatherLink" >OpenWeather</a></p>
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
        color="rgba(21, 50, 96, 0.7)"
        height={150}
        width={150}
        
      />
      </div>
      )
  }
  }
