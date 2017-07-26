import React from 'react';
import './DailyCard.css';

export default class DailyCard extends React.Component {

  render() {
    return (
      <div className="daily-weather">
        <p className="day">Monday</p>
        <img src="?"/>
        <p className="high-temp">{this.props.temp}</p>
        <p className="low-temp">66 &#8457;</p>
      </div>
    );
  }
}
