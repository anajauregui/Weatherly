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
    this.state = {
                  ready: false,
                  weatherData: {},
                  }
  }

  componentDidMount(city) {
    //need for local storage
  }

  getCityWeather(city) {
    fetch(API(city))
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({
        ready: true,
        weatherData: {
          location: data.current_observation.display_location.full,
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
        }
      })
    })
  }

  render() {

    if (!this.state.weatherData) {
      return <p>loading...</p>
    }
console.log(this.state.weatherData);
    return (
      <div>

        {
          (!this.state.ready) &&
          <Search getApi={this.getCityWeather.bind(this)}/>
        }

        {
          (this.state.ready) &&
          <div>
            <CurrentWeather
            getNewLocation={this.getCityWeather.bind(this)}
            location={this.state.weatherData.location}
            condition={this.state.weatherData.currentCondition}
            day={this.state.weatherData.currentDay}
            dateMonth={this.state.weatherData.currentDate.month}
            dateDay={this.state.weatherData.currentDate.day}
            dateYear={this.state.weatherData.currentDate.year}
            temp={this.state.weatherData.currentTemp}
            highT={this.state.weatherData.dailyHighTemp}
            lowT={this.state.weatherData.dailyLowTemp}
            summary={this.state.weatherData.summary} />

            <SevenHour temp={this.state.weatherData.currentTemp}

            />

            <TenDay highT={this.state.weatherData.dailyHighTemp}
            lowT={this.state.weatherData.dailyLowTemp}/>
          </div>
        }

      </div>
    );
  }
}

{/*weatherData={this.state.weatherData} THIS BELONGS IN SEARCH WITHIN RENDER() */}
