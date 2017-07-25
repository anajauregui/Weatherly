import React from 'react';
import './App.css';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Key from './Key'

// const weatherInfo = (state, city) => {
//   `http://api.wunderground.com/api/key/conditions/q/{state}/{user input city}.json`
// }

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {weatherData: []}
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/q/CO/${city}.json`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        weatherData: data
      })
    })
  }


  render() {
console.log('hi');
    if (!this.state.weatherData) {
      return <p>loading...</p>
    }

    return (
      <div>
         <Search
         city={this.search}/>
        {/*<CurrentWeather />*/}
        {/*<SevenHour />
        <TenDay />*/}
      </div>
    );

  }
}

{/*weatherData={this.state.weatherData} THIS BELONGS IN SEARCH WITHIN RENDER() */}
