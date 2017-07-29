import React from 'react';
import './App.css';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import HourlyCard from './HourlyCard';
import DailyCard from './DailyCard';
import Trie from '../utils/Trie2.js'
import Locations from '../utils/Locations'
import API from '../utils/Api';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
                  ready: false,
                  weatherData: {},
                  trie: {}
                  }
  }

  componentDidMount() {
    const trie = new Trie()
    trie.populate(Locations)

    this.setState({
      trie: trie
    })
    if (localStorage.getItem('location')) {
      var parsedLocal = JSON.parse(localStorage.getItem('location'));
      this.getCityWeather(parsedLocal)
    }
  }

  getCityWeather(location) {
    //refactor setting location into own function
    // this.state.trie.insert(location);
    // this.state.trie.select(location);
    localStorage.setItem('location', JSON.stringify(location));
    fetch(API(location))
    .then(data => data.json())
    .then(data => {
      console.log("DATA", data);
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
    })
  }


  render() {
    // console.log(this.state.weatherData);

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

        {
          (!this.state.ready) &&
          <Search
          trie={this.state.trie}
          getApi={this.getCityWeather.bind(this)}/>
        }

        {
          (this.state.ready) &&
          <div>
            <CurrentWeather
            trie={this.state.trie}
            getNewLocation={this.getCityWeather.bind(this)}
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
          </div>
        }

      </div>
    )
  }
}

{/*weatherData={this.state.weatherData} THIS BELONGS IN SEARCH WITHIN RENDER() */}
