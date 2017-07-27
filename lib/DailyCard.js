import React from 'react';
import './DailyCard.css';

export default function DailyCard(props)  {


    return (
      <div className="daily-weather">
        <p className="day">Monday</p>
        <img className="projected-weather-pic" src="lib/icons8-Partly Cloudy Day-64.png"/>
        <div className="tenDay-high-low">
          <p className="high-temp">{props.highT}&#8457;</p>
          <p className="low-temp">{props.lowT}&#8457;</p>
        </div>
      </div>
    );

}
