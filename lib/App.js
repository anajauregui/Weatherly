import React from 'react';
import './App.css';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
// import Key from './Key';
import API from './Api'

// const weatherInfo = (city) => `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/CO/${city}.json`


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {weatherData: {}}
  }

  componentDidMount() {
    fetch(API())
    .then(data => data.json())
    .then(data => {
      this.setState({
        weatherData: {
          currentDay: data.forecast.simpleforecast.forecastday[0].weekday,

          currentDate: {
                        month: data.forecast.simpleforecast.forecastday[0].date.month,
                        day: data.forecast.simpleforecast.forecastday[0].date.day,
                        year: data.forecast.simpleforecast.forecastday[0].date.year
                        },

          currentTemp: data.current_observation.temp_f,
          currentCondition: data.current_observation.weather,
          location: data.current_observation.display_location.full,
          dailyLowTemp: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
          dailyHighTemp: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
          summary: data.forecast.txt_forecast.forecastday[0].fcttext,
        }
      })
    })
  }

  getCityWeather(city) {
    console.log('getWeather ' + city);
  }

  render() {
    if (!this.state.weatherData) {
      return <p>loading...</p>
    }
    console.log(this.state);
    return (
      <div>

        <Search getApi={this.getCityWeather.bind(this)}/>
        <CurrentWeather temp={this.props.weatherData.temp}
        highT={this.props.weatherData.highT}
        lowT={this.props.weatherData.lowT}
        summary={this.props.weatherData.summary}/>

        <SevenHour temp={this.props.weatherData.temp}/>
        <TenDay temp={this.props.weatherData.temp}/>

      </div>
    );
  }
}

{/*weatherData={this.state.weatherData} THIS BELONGS IN SEARCH WITHIN RENDER() */}
