import React from "react";
export default function FormattedDate(props){
    console.log(props.date)
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[props.date.getDay()];
    let hour= props.date.getHours();
    let minute= props.date.getMinutes();
    

    if (minute < 10){
        minute= `0${minute}`
    }
    if (hour < 10){
        hour= `0${hour}`
    }
    
    return (`${day}, ${hour}:${minute}`)
}