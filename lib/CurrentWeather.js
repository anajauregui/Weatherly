import React from 'react';


export default class CurrentWeather extends React.Component {

  render() {
    return (
      <section id="current-weather">
        {/* current location */}
        <h2>Denver, CO</h2>
        {/* current condition */}
        {/*this.weatherData.current_observation.weather*/}
        <div id="circle">
          <h4>Partly Cloudy</h4>
          {/* date */}
          <p>Tuesday</p>
          <p>7/25/2017</p>
          <h1>87 &#8457;</h1>
        </div>
        {/* high and low */}
        <div id="high-low">
          <p>High: 90 &#8457;</p>
          <p>Low: 67 &#8457;</p>
        </div>
        {/* summary */}
        <p>Partly Cloudy with a chance of meat balls</p>
      </section>
    )
  }
}
