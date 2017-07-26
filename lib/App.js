import React from 'react';
import './App.css';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
// import Key from './Key';
import API from './Api'
import Background from './Background';

// const weatherInfo = (city) => `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/CO/${city}.json`

// console.log(API);
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {weatherData: []}
  }
  // console.log(props);

  componentDidMount() {
    fetch(API())
    .then(data => data.json())
    .then(data => {
      this.setState({
        weatherData: data
      })
    })
  }

  render() {
    if (!this.state.weatherData) {
      return <p>loading...</p>
    }

    return (
      <div>
        <Search />
        <CurrentWeather weatherData={this.state.weatherData} />
        {/*<SevenHour />
        <TenDay />*/}
      </div>
    );
  }
}

{/*weatherData={this.state.weatherData} THIS BELONGS IN SEARCH WITHIN RENDER() */}
