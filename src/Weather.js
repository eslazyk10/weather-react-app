import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  let [city, setCity]= useState("");
  let [currentCity, setCurrentCity] = useState("Nashville");
  let [temperature, setTemperature] = useState("70");
  let [feel, setFeel] = useState("72");
  let [humidity, setHumidity] = useState("52");
  let [windSpeed, setWindSpeed] = useState("8");
  
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
    setCurrentCity(response.data.name);
    setTemperature(Math.round(response.data.main.temp));
    setFeel(Math.round(response.data.main.feels_like));
    setHumidity(response.data.main.humidity);
    setWindSpeed(Math.round(response.data.wind.speed));
    
  }


  return (
    <div className="Weather">
    <div className="row">
        <div className="col-6">
      <h1 className="Current-City">{currentCity}</h1>
          <h2 className="Current-Day-Time">Thursday</h2>
          <h2 className="Current-Condition">Sunny</h2>
          
        </div>
    <div className="col-6">
       <h3>
        <img
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49043/preview.svg"
          alt="Sunny"
        />
        {" "}{temperature}° <a href="/">F</a>|<a href="/">C</a>
      </h3>
      <ul>
        <li>Feels like: {feel}°</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind Speed: {windSpeed} mph</li>
      </ul>
    </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-5">
            <input id="Search-form" type="search" placeholder="Search a city" autoFocus="on" onChange={changeCity} />
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
