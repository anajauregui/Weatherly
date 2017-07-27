import React from 'react';
import './HourlyCard.css'

export default function HourlyCard(props) {

    return (
      <div className="hourly-weather">
        <img className="hourly-weather-pic" src="lib/icons8-Partly Cloudy Day-64.png"/>
        <p className="hour-temp">{Math.round(props.temp)}</p>
        <p className="hour">2pm</p>
      </div>
    );
}
