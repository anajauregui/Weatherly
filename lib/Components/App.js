import React from 'react';
import '../Styles/App.css';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import HourlyCard from './HourlyCard';
import DailyCard from './DailyCard';
import API from '../utils/Api';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
                  ready: false,
                  weatherData: {},
                  }
  }

  componentDidMount() {
    if (localStorage.getItem('location')) {
      var parsedLocal = localStorage.getItem('location');
      this.getCityWeather(parsedLocal)
    }
  }

  getCityWeather(location) {

    localStorage.setItem('location', location);
    fetch(API(location))
    .then(data => data.json())
    .then(data => {
      console.log('made api call');
      this.setState({
        ready: true,
        weatherData: {
          place: data.current_observation.display_location.full,
          currentCondition: data.current_observation.weather,
          currentDay: data.forecast.simpleforecast.forecastday[0].date.weekday,

          currentDate: {
                        month: data.forecast.simpleforecast.forecastday[0].date.month,
                        day: data.forecast.simpleforecast.forecastday[0].date.day,
                        year: data.forecast.simpleforecast.forecastday[0].date.year
                        },

          currentTemp: data.current_observation.temp_f,
          dailyHighTemp: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
          dailyLowTemp: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
          summary: data.forecast.txt_forecast.forecastday[0].fcttext,
          hourlyForecast: data.hourly_forecast,

          dailyForecast: data.forecast.simpleforecast.forecastday
        }
      })
    }).catch( () => {alert("Please enter valid City and State")})
  }

  render() {

    const {place, currentCondition, currentDay, currentTemp, dailyHighTemp, dailyLowTemp, summary, hourlyForecast, dailyForecast} = this.state.weatherData;


    const hourCards = (hourlyForecast || []).map( (hour, i) => {
      if (i < 7) {
        return <HourlyCard temp={hour.temp.english} time={hour.FCTTIME.civil} img={hour.icon_url} key={hour.FCTTIME.civil} />
      }
    })

    const dayCards = (dailyForecast || []).map( (day, i) => {
      if (i < 10) {
        return <DailyCard key={day.period} highT={day.high.fahrenheit} lowT={day.low.fahrenheit} day={day.date.weekday} img={day.icon_url} />
      }
    })

    return (
      <div>

        {(!this.state.ready) &&
          <Welcome
          getApi={this.getCityWeather.bind(this)}/>}

        {(this.state.ready) &&
          <div>
            <CurrentWeather
            getNewLocation={this.getCityWeather.bind(this)}
            getApi={this.getCityWeather.bind(this)}
            place={place}
            condition={currentCondition}
            day={currentDay}
            dateMonth={this.state.weatherData.currentDate.month}
            dateDay={this.state.weatherData.currentDate.day}
            dateYear={this.state.weatherData.currentDate.year}
            temp={currentTemp}
            highT={dailyHighTemp}
            lowT={dailyLowTemp}
            summary={summary} />

            <SevenHour>
              {hourCards}
            </SevenHour>

            <TenDay>
              {dayCards}
            </TenDay>
          </div>}

      </div>
    )
  }
}
