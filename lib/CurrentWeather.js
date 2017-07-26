import React from 'react';
import './CurrentWeather.css'


export default class CurrentWeather extends React.Component {

  render() {
    return (
      <section className="current-weather">
        <h2 className="current-city">Denver, CO</h2>
        {/*this.weatherData.current_observation.weather*/}
        <div className="circle">
          <img src="lib/icons8-Partly Cloudy Day-64.png"/>
          <h4 className="weather-desc">Partly Cloudy</h4>
          <hr/>
          <div className="date-disp">
            <p className="day">Tuesday</p>
            <p className="date">7/25/2017</p>
          </div>
          <h1 className="current-temp">{this.props.temp} &#8457;</h1>
        </div>
        <div className="high-low">
          <p className="high"><span>High:</span> {this.props.highT} &#8457;</p>
          <p className="low"><span>Low:</span> {this.props.lowT} &#8457;</p>
        </div>
        <p className="weather-sum">{this.props.summary}</p>
      </section>
    )
  }
}
