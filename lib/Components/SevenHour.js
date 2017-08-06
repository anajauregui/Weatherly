import React from 'react';
import '../Styles/SevenHour.css';
import HourlyCard from './HourlyCard';

export default function SevenHour(props) {
  const filteredCards = props.hourlyForecast.filter((hour, i) => i < 7)
  const hourCards = filteredCards.map((hour, i) => {
      return <HourlyCard
        temp={hour.temp.english}
        time={hour.FCTTIME.civil}
        img={hour.icon_url}
        key={hour.FCTTIME.civil} />;
  });

  return (
    <div className="hourly-card-holder">
      {hourCards}
    </div>
  );
}
