import React from 'react';
import DailyCard from './DailyCard'
import './TenDay.css'

export default class TenDay extends React.Component {
  constructor(props){
    super()
  }


  render() {
    return (
      <div className="daily-card-holder">
        <DailyCard temp={this.props.temp}/>
        <DailyCard temp={this.props.temp}/>
        <DailyCard temp={this.props.temp}/>
        <DailyCard temp={this.props.temp}/>
        <DailyCard temp={this.props.temp}/>
        <DailyCard temp={this.props.temp}/>
        <DailyCard temp={this.props.temp}/>
        <DailyCard temp={this.props.temp}/>
        <DailyCard temp={this.props.temp}/>
        <DailyCard temp={this.props.temp}/>
      </div>
    );
  }
}
