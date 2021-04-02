import React, { useState } from "react";

export default function Temperature(props){
    const [unit, setUnit] = useState("fahrenheit");
    
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function celsiusTemp(){
        return Math.round((props.fahrenheit - 32) * 5 /9)
    }
    
    if (unit === "fahrenheit"){
    return(
        
        <span className="temperature">
            <span className="fahrenheit">
        {props.fahrenheit}°
        <a href="/" onClick={showFahrenheit}> F</a>
        </span>
        |
        <span className="celsius">
        <a href="/" onClick={showCelsius}>C</a>
        </span>
        </span>
    )
    } else{
        return (
        <span className="temperature">
            <span className="fahrenheit">
        {celsiusTemp()}°
        <a href="/" onClick={showFahrenheit}> F</a>
        </span>
        |
        <span className="celsius">
        <a href="/" onClick={showCelsius}>C</a>
        </span>
        </span>
    )
    }
}