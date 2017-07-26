import React from 'react';
import DailyCard from './DailyCard'
import './TenDay.css'

export default class TenDay extends React.Component {
  constructor(props){
    super()
  }


  render() {
    return (
      <div>
        <DailyCard temp={this.props.temp}/>

      </div>
    );
  }
}
