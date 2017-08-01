import React from 'react';
import '../Styles/CurrentWeather.css'
import Search from './Search';

export default function CurrentWeather(props) {

    return (
      <section className="current-weather">
        <Search getApi={props.getApi}/>
        <h2 className="current-city">{props.place}</h2>
        <div className="circle">
          <img src={props.currentWeatherImg}/>
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
