import React from 'react';
import './HourlyCard.css'

export default class HourlyCard extends React.Component {

  render() {
    return (
      <div className="hourly-weather">
        <img src="?"/>
        <p className="hour">2pm</p>
        <p className="hour-temp">{this.props.temp}</p>
      </div>
    );
  }
}
