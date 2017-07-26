import React from 'react';
import HourlyCard from './HourlyCard'
import './SevenHour.css'

export default class SevenHour extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="hourly-card-holder">
        <HourlyCard temp={this.props.temp}/>
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
        <HourlyCard />
      </div>
    );
  }
}
