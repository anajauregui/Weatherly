import React from 'react';
import '../Styles/SevenHour.css'
import HourlyCard from './HourlyCard'

export default function SevenHour (props) {

  const hourCards = (props.hourlyForecast || []).map( (hour, i) => {
    if (i < 7) {
      return <HourlyCard temp={hour.temp.english} time={hour.FCTTIME.civil} img={hour.icon_url} key={hour.FCTTIME.civil} />
    }
  })

  return (
    <div className="hourly-card-holder">
      {hourCards}
    </div>
  );
}
