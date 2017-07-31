import React from 'react';
import '../Styles/TenDay.css'
import DailyCard from './DailyCard'

export default function TenDay(props) {

    return (
      <div className="daily-card-holder">
        {props.children}
      </div>
    );
}
