import React from 'react';
import './App.css';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Key from './Key';
import Background from './Background';

const weatherInfo = (city) =>  `http://api.wunderground.com/api/${Key}/conditions/q/CO/${city}.json`


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {weatherData: []}
  }

  componentDidMount() {
    fetch(weatherInfo())
    .then(data => data.json())
    .then(data => {
      this.setState({
        weatherData: data
      })
    })
  }

  render() {
console.log(this.state.weatherData);
    if (!this.state.weatherData) {
      return <p>loading...</p>
    }

    return (
      <div>

        {/*<Background/>*/}
         {/*<Search />*/}
        <CurrentWeather temp={this.props.weatherData.temp}
        highT={this.props.weatherData.highT}
        lowT={this.props.weatherData.lowT}
        summary={this.props.weatherData.summary}/>

        {/*<SevenHour temp={this.props.weatherData.temp}/>*/}
        <TenDay temp={this.props.weatherData.temp}/>
      </div>
    );
  }
}

{/*weatherData={this.state.weatherData} THIS BELONGS IN SEARCH WITHIN RENDER() */}
