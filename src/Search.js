import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [city, setCity]= useState("")
  const apiKey = "5b8bfd096caf5847f3506db76bfb75ad";
  const unit= "metric"
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  function handleSubmit(event){
    event.preventDefault()

    axios.get(apiUrl).then(showWeather)
  }

  function changeCity(event){
    event.preventDefault()
    setCity(event.target.value)
  }
  
  function showWeather(response){
    console.log(response)
  }

  return (
    
    <div className="Search">
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
  );
}