import React from 'react';
import './App.css';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import HourlyCard from './HourlyCard'
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

  componentDidMount() {
    if (localStorage.getItem('city')) {
      var parsedLocal = JSON.parse(localStorage.getItem('city'));
      this.getCityWeather(parsedLocal)
    }
  }

  getCityWeather(city) {
    localStorage.setItem('city', JSON.stringify(city));
    fetch(API(city))
    .then(data => data.json())
    .then(data => {
      // console.log(data);
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
          hourlyForecast: data.hourly_forecast

        }
      })
    })
  }


  render() {
    // console.log(this.state.weatherData);

    const {location, currentCondition, currentDay, currentTemp, dailyHighTemp, dailyLowTemp, summary, hourlyForecast} = this.state.weatherData;


    const hourCards = (hourlyForecast || []).map( (hour, i) => {
      if (i < 7) {
        return <HourlyCard temp={hour.temp.english} time={hour.FCTTIME.civil} img={hour.icon_url} key={hour.FCTTIME.civil} />
      }
    })

    console.log('hoisoiadfsiasdf ', hourCards)



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
            location={location}
            condition={currentCondition}
            day={currentDay}
            dateMonth={this.state.weatherData.currentDate.month}
            dateDay={this.state.weatherData.currentDate.day}
            dateYear={this.state.weatherData.currentDate.year}
            temp={currentTemp}
            highT={dailyHighTemp}
            lowT={dailyLowTemp}
            summary={summary} />

            <SevenHour forecast={hourCards} />
            <TenDay highT={dailyHighTemp}
                    lowT={dailyLowTemp}/>
          </div>
        }

      </div>
    );
  }
}

{/*weatherData={this.state.weatherData} THIS BELONGS IN SEARCH WITHIN RENDER() */}
