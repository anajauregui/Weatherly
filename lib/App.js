import React from 'react';
import './App.css';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

// const weatherInfo = (state, city) => {
//   `http://api.wunderground.com/api/55b2d391d771ebbc/conditions/q/{state}/{user input city}.json`
// }

export default class App extends React.Component {

  constructor(props) {
    super(props)
    {/* this.state = {weatherData: []}
  }

  componentDidMount() {
    fetch('http://api.wunderground.com/api/55b2d391d771ebbc/conditions/q/CO/Denver.json')
    .then(data => data.json())
    .then(data => {
      this.setState({
        weatherData: data
      })
    })
  } */}
}

  render() {

    if (false) {
      return <p>loading...</p>
    }

    return (
      <div>
        <Search weatherData={this.state.weatherData}/>
        <CurrentWeather />
        <SevenHour />
        <TenDay />
      </div>
    );

  }
}
