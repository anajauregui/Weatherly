import React from 'react';
import DailyCard from './DailyCard'
import './TenDay.css'

export default class TenDay extends React.Component {
  constructor(props){
    super()
  }


  render() {
    const dailyForecast = [];

    return (
      <div className="daily-card-holder">
        <DailyCard
          highT={this.props.highT}
          lowT={this.props.lowT}
        />
        <DailyCard
          highT={this.props.highT}
          lowT={this.props.lowT}
        />
        <DailyCard
          highT={this.props.highT}
          lowT={this.props.lowT}
        />
        <DailyCard
          highT={this.props.highT}
          lowT={this.props.lowT}
        />
        <DailyCard
          highT={this.props.highT}
          lowT={this.props.lowT}
        />
        <DailyCard
          highT={this.props.highT}
          lowT={this.props.lowT}
        />
        <DailyCard
          highT={this.props.highT}
          lowT={this.props.lowT}
        />
        <DailyCard
          highT={this.props.highT}
          lowT={this.props.lowT}
        />
        <DailyCard
          highT={this.props.highT}
          lowT={this.props.lowT}
        />
        <DailyCard
          highT={this.props.highT}
          lowT={this.props.lowT}
        />

      </div>
    );
  }
}
