import React from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';

// const weatherInfo = (state, city) => {
//   `http://api.wunderground.com/api/55b2d391d771ebbc/conditions/q/{state}/{user input city}.json`
// }

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch('http://api.wunderground.com/api/55b2d391d771ebbc/conditions/q/CO/Denver.json')
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
        <h2>{this.state.weatherData.current_observation.display_location.full}</h2>
        <Search />
        <CurrentWeather />
      </div>
    );

  }
}
