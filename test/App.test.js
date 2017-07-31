import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/Components/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render the Welcome component', () => {
    expect(wrapper.find("Welcome").length).toEqual(1)
    expect(wrapper.find("Welcome")).toBeDefined()
  })

  it('should render the CurrentWeather component', () => {

    wrapper.setState({
      ready: true,
      weatherData: {
        currentDate: {
          month: 'June',
          day: 'Monday',
          year: 2017
        }
      }
    })

    expect(wrapper.find("CurrentWeather").length).toEqual(1)
    expect(wrapper.find("CurrentWeather")).toBeDefined()
  })

  it('should render the SevenHour component', () => {

    wrapper.setState({
      ready: true,
      weatherData: {
        currentDate: {
          month: 'June',
          day: 'Monday',
          year: 2017
        }
      }
    })

    expect(wrapper.find("SevenHour").length).toEqual(1)
    expect(wrapper.find("SevenHour")).toBeDefined()
  })

  it('should render the TenDay component', () => {

    wrapper.setState({
      ready: true,
      weatherData: {
        currentDate: {
          month: 'June',
          day: 'Monday',
          year: 2017
        }
      }
    })

    expect(wrapper.find("TenDay").length).toEqual(1)
    expect(wrapper.find("TenDay")).toBeDefined()
  })

  it('initially should have a state of ready set to false', () => {
    expect(wrapper.state().ready).toEqual(false)
  })

  it('initially should have a state of weatherData set to an empyt array', () => {
    expect(wrapper.state().weatherData).toEqual([])
  })

  it('should retrieve data from local storage on mount', () => {
    const weatherData = [
      {day: 'Tuesday', clouds: 'yes', rain: 'yes'},
      {day: 'Wednesday', clouds: 'partly', rain: 'no'}
    ]

    localStorage.setItem('location', JSON.stringify(weatherData))

    const mockFn = jest.fn()
    wrapper.instance().getCityWeather = mockFn
    wrapper.instance().componentDidMount()
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
