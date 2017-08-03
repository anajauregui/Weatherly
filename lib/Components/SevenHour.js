import React from 'react';
import '../Styles/SevenHour.css';
import HourlyCard from './HourlyCard';

export default function SevenHour(props) {
  const filterdCards = props.hourlyForecast.filter((hour, i) => i < 7)

  const hourCards = filterdCards.map((hour, i) => {
    if (i < 7) {
      return <HourlyCard temp={hour.temp.english} time={hour.FCTTIME.civil} img={hour.icon_url} key={hour.FCTTIME.civil} />;
    }
  });

  return (
    <div className="hourly-card-holder">
      {hourCards}
    </div>
  );
}
