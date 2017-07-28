import React from 'react';
import './HourlyCard.css'

export default function HourlyCard(props) {

    return (
      <div className="hourly-weather">
        <img className="hourly-weather-pic" src={props.img}/>
        <p className="hour-temp">{props.temp}</p>
        <p className="hour">{props.hour}</p>
      </div>
    );
}
