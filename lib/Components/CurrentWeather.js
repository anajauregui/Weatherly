import React from 'react';
import '../Styles/CurrentWeather.css';
import Search from './Search';

export default function CurrentWeather(props) {

  const { getApi, place, currentWeatherImg, condition, day, dateMonth, dateDay, dateYear, temp, highT, lowT, summary } = props

  return (
    <section className="current-weather">
      <Search getApi={getApi}/>
      <h2 className="current-city">{place}</h2>
      <div className="circle">
        <img className="weth-img" src={`../../assets/${currentWeatherImg}.png`}/>
        <h4 className="weather-desc">{condition}</h4>
        <hr/>
        <div className="date-disp">
          <p className="day">{day}</p>
          <p className="date">{dateMonth}/{dateDay}/{dateYear}</p>
        </div>
        <h1 className="current-temp">{Math.round(temp)} &#8457;</h1>
      </div>
      <div className="high-low">
        <p className="high"><span>High:</span> {highT} &#8457;</p>
        <p className="low"><span>Low:</span> {lowT} &#8457;</p>
      </div>
      <p className="weather-sum">{summary}</p>
    </section>
  );
}
