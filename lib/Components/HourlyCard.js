import React from 'react';
import '../Styles/HourlyCard.css'

export default function HourlyCard(props) {

    return (
      <div className="hourly-weather">
        <img className="hourly-weather-pic" src={props.img}/>
        <p className="hour-temp">{props.temp} &#8457;</p>
        <p className="hour">{props.time}</p>
      </div>
    );
}
  
