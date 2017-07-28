import React from 'react';
import HourlyCard from './HourlyCard'
import './SevenHour.css'

export default function SevenHour (props) {

  return (
    <div className="hourly-card-holder">
      <HourlyCard temp={props.forecast[0].props.temp}
                  hour={props.forecast[0].props.time}
                  img={props.forecast[0].props.img} />
      <HourlyCard temp={props.forecast[1].props.temp}
                  hour={props.forecast[1].props.time}
                  img={props.forecast[1].props.img} />
      <HourlyCard temp={props.forecast[2].props.temp}
                  hour={props.forecast[2].props.time}
                  img={props.forecast[2].props.img} />
      <HourlyCard temp={props.forecast[3].props.temp}
                  hour={props.forecast[3].props.time}
                  img={props.forecast[3].props.img} />
      <HourlyCard temp={props.forecast[4].props.temp}
                  hour={props.forecast[4].props.time}
                  img={props.forecast[4].props.img}/>
      <HourlyCard temp={props.forecast[5].props.temp}
                  hour={props.forecast[5].props.time}
                  img={props.forecast[5].props.img} />
      <HourlyCard temp={props.forecast[6].props.temp}
                  hour={props.forecast[6].props.time}
                  img={props.forecast[6].props.img} />
    </div>
  );
}

// console.log('in hourclard ', props.forecast[0].FCTTIME.civil)
//
//   for (let i = 0; i <= 6; i++) {
//     console.log('count ', i);
//     <HourlyCard temp={props.forecast[i].temp.english} time={props.forecast[i].FCTTIME.civil} img={props.forecast[i].icon_url} />
//   }


    // props.forecast.map( (hour, i) => {
    //   if (i < 7) {
    //     console.log('in if');
    //     return <HourlyCard temp={hour.temp.english} time={hour.FCTTIME.civil} img={hour.icon_url} />
    //   }
    // })
