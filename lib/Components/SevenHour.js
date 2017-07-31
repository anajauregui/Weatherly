import React from 'react';
import '../Styles/SevenHour.css'
import HourlyCard from './HourlyCard'

export default function SevenHour (props) {

  return (
    <div className="hourly-card-holder">
      {props.children}
    </div>
  );
}
