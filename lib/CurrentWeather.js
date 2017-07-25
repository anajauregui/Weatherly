import React from 'react';
import './CurrentWeather.css'


export default class CurrentWeather extends React.Component {

  render() {
    return (
      <section className="current-weather">
        {/* current location */}
        <h2>Denver, CO</h2>
        {/* current condition */}
        {/*this.weatherData.current_observation.weather*/}
        <div className="circle">
          <img src="lib/icons8-Partly Cloudy Day-64.png"/>
          <h4>Partly Cloudy</h4>
          <hr/>
          {/* date */}
          <div className="date-disp">
            <p className="day">Tuesday</p>
            <p className="date">7/25/2017</p>
          </div>
          <h1>87 &#8457;</h1>
        </div>
        {/* high and low */}
        <div className="high-low">
          <p className="high">High: 90 &#8457;</p>
          <p className="low">Low: 67 &#8457;</p>
        </div>
        {/* summary */}
        <p>Partly Cloudy with a chance of meat balls</p>
      </section>
    )
  }
}
