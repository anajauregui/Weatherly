import React from 'react';
import DailyCard from './DailyCard'
import './TenDay.css'

export default function TenDay(props) {

    return (
      <div className="daily-card-holder">
        {props.children}
      </div>
    );
}
