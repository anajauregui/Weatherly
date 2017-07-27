import React from 'react';
import './CurrentWeather.css'


export default function CurrentWeather(props)  {

    return (
      <section className="current-weather">
        <h2 className="current-city">{props.location}</h2>
        {/*this.weatherData.current_observation.weather*/}
        <div className="circle">
          <img src="lib/icons8-Partly Cloudy Day-64.png"/>
          <h4 className="weather-desc">{props.condition}</h4>
          <hr/>
          <div className="date-disp">
            <p className="day">{props.day}</p>
            <p className="date">{props.dateMonth}/{props.dateDay}/{props.dateYear}</p>
          </div>
          <h1 className="current-temp">{Math.round(props.temp)} &#8457;</h1>
        </div>
        <div className="high-low">
          <p className="high"><span>High:</span> {props.highT} &#8457;</p>
          <p className="low"><span>Low:</span> {props.lowT} &#8457;</p>
        </div>
        <p className="weather-sum">{props.summary}</p>
      </section>
    )
}
