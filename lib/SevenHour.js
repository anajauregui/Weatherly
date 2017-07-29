import React from 'react';
import HourlyCard from './HourlyCard'
import './SevenHour.css'

export default function SevenHour (props) {

  return (
    <div className="hourly-card-holder">
      {props.children}
    </div>
  );
}
