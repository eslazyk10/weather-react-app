import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [city, setCity]= useState("")
  const [ready, setReady]= useState(false)
  let [temperature, setTemperature] = useState("")
  const apiKey = "5b8bfd096caf5847f3506db76bfb75ad";
  const unit= "metric"
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  function handleSubmit(event){
    event.preventDefault()

    axios.get(apiUrl).then(handleResponse)
  }

  function changeCity(event){
    event.preventDefault()
    setCity(event.target.value)
  }
  
  function handleResponse(response){
    console.log(response)
    setTemperature(Math.round(response.data.main.temp))
    setReady(true)
  }

  if(ready){
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
      {temperature}
    </div>
  );
  }else

  return "Loading.."
}