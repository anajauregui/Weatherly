import React from 'react';
import HourlyCard from './HourlyCard'
import './SevenHour.css'

export default class SevenHour extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const hourlyForecast = [];

    return (
      <div className="hourly-card-holder">
        <HourlyCard temp={this.props.temp}/>
        <HourlyCard temp={this.props.temp}/>
        <HourlyCard temp={this.props.temp}/>
        <HourlyCard temp={this.props.temp}/>
        <HourlyCard temp={this.props.temp}/>
        <HourlyCard temp={this.props.temp}/>
        <HourlyCard temp={this.props.temp}/>

      </div>
    );
  }
}
