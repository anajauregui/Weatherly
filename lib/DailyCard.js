import React from 'react';

export default class DailyCard extends React.Component {

  render() {
    return (
      <div className="dailyWeather">
        <p className="day">Monday</p>
        <img src="?"/>
        <p className="high-temp">87 &#8457</p>
        <p className="low-temp">66 &#8457</p>
      </div>
    );
  }
}
