import React from 'react';

export default class HourlyCard extends React.Component {

  render() {
    return (
      <div className="hourlyWeather">
        <img src="?"/>
        <p className="hour">2pm</p>
        <p className="hour-temp">87 &#8457</p>
      </div>
    );
  }
}
