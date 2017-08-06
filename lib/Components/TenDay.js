import React from 'react';
import '../Styles/TenDay.css';
import DailyCard from './DailyCard';

export default function TenDay(props) {
  const dayCards = props.dailyForecast.map((day, i) => {
      return <DailyCard
        key={day.period}
        highT={day.high.fahrenheit}
        lowT={day.low.fahrenheit}
        day={day.date.weekday}
        img={day.icon_url} />;
  });

  return (
    <div className="daily-card-holder">
      {dayCards}
    </div>
  );
}
