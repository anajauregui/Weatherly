import React from 'react';
import '../Styles/App.css';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
// import HourlyCard from './HourlyCard';
// import DailyCard from './DailyCard';
import API from '../utils/Api';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      weatherData: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('location')) {
      const parsedLocal = localStorage.getItem('location');
      this.getCityWeather(parsedLocal);
    }
  }

  getCityWeather(location) {
    localStorage.setItem('location', location);
    fetch(API(location))
    .then(data => data.json())
    .then(data => {
      this.setState({
        ready: true,
        weatherData: {
          place: data.current_observation.display_location.full,
          currentWeatherImg: data.current_observation.icon_url,
          currentCondition: data.current_observation.weather,
          currentDay: data.forecast.simpleforecast.forecastday[0].date.weekday,

          currentDate: {
            month: data.forecast.simpleforecast.forecastday[0].date.month,
            day: data.forecast.simpleforecast.forecastday[0].date.day,
            year: data.forecast.simpleforecast.forecastday[0].date.year,
          },

          currentTemp: data.current_observation.temp_f,
          dailyHighTemp: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
          dailyLowTemp: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
          summary: data.forecast.txt_forecast.forecastday[0].fcttext,
          hourlyForecast: data.hourly_forecast,

          dailyForecast: data.forecast.simpleforecast.forecastday,
        },
      });
    })
    .catch(() => { alert('Please enter valid City and State or Zip'); })
  }

  render() {
    const { place, currentWeatherImg, currentCondition, currentDay, currentTemp, dailyHighTemp, dailyLowTemp, summary, hourlyForecast, dailyForecast } = this.state.weatherData;

    const { month, day, year } = this.state.weatherData.currentDate;

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
            currentWeatherImg={currentWeatherImg}
            condition={currentCondition}
            day={currentDay}
            dateMonth={month}
            dateDay={day}
            dateYear={year}
            temp={currentTemp}
            highT={dailyHighTemp}
            lowT={dailyLowTemp}
            summary={summary} />

            <SevenHour hourlyForecast={hourlyForecast}/>

            <TenDay dailyForecast={dailyForecast}/>

          </div>}

      </div>
    );
  }
}
