import React from 'react';
import '../Styles/DailyCard.css';

export default function DailyCard(props) {
  return (
    <div className="daily-weather">
      <p className="day">{props.day}</p>
      <img className="projected-weather-pic" src={props.img}/>
      <div className="tenDay-high-low">
        <p className="high-temp">{props.highT}&#8457;</p>
        <p className="low-temp">{props.lowT}&#8457;</p>
      </div>
    </div>
  );
}
