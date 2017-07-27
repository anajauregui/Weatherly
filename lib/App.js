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

    if (!city) {
      console.log('no location entered');
      return 'no location entered'
    }
    console.log((API(city)));
    console.log(city);
    fetch(API(city))
    .then(data => data.json())
    .then(data => {
      this.setState({
        weatherData: {
          location: data.current_observation.display_location.full,
          currentCondition: data.current_observation.weather,
          currentDay: data.forecast.simpleforecast.forecastday[0].weekday,

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

  getCityWeather(city) {
    this.state.ready = true;
    this.componentDidMount(city);
    this.render();
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

            <SevenHour temp={this.state.weatherData.temp}/>
            <TenDay temp={this.state.weatherData.temp}/>
          </div>
        }

      </div>
    );
  }
}

{/*weatherData={this.state.weatherData} THIS BELONGS IN SEARCH WITHIN RENDER() */}
