import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/Components/CurrentWeather';
import weatherData from '../test_helpers/mockData';

describe('CurrentWeather', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    const forecast = weatherData.forecast.simpleforecast.forecastday[0];

    wrapper = shallow(<CurrentWeather
      getNewLocation={mockFn}
      getApi={mockFn}
      place={weatherData.current_observation.display_location.full}
      currentWeatherImg={weatherData.current_observation.icon_url}
      condition={weatherData.current_observation.weather}
      day={forecast.date.weekday}
      dateMonth={forecast.date.month}
      dateDay={forecast.date.day}
      dateYear={forecast.date.year}
      temp={weatherData.current_observation.temp_f}
      highT={forecast.high.fahrenheit}
      lowT={forecast.low.fahrenheit}
      summary={weatherData.forecast.txt_forecast.forecastday[0].fcttext}
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render the Search compnonent', () => {
    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('Search')).toBeDefined();
  });

  it('should render an h2 with a className current-city to the DOM', () => {
    expect(wrapper.find('.current-city')).toBeDefined();
    expect(wrapper.find('.current-city').props().children).toEqual('Denver, CO');
  });

  it('should render an img to the DOM', () => {
    expect(wrapper.find('.weth-img')).toBeDefined();
    expect(wrapper.find('.weth-img').prop('src')).toBe('http://icons.wxug.com/i/c/k/clear.gif');
  });

  it('should render an h4 with a className of weather-desc', () => {
    expect(wrapper.find('.weather-desc')).toBeDefined();
    expect(wrapper.find('.weather-desc').props().children).toEqual('Clear');
  });

  it('should render a p with a className of day', () => {
    expect(wrapper.find('.day')).toBeDefined();
    expect(wrapper.find('.day').props().children).toEqual('Tuesday');
  });

  it('should render a p with a className of date', () => {
    expect(wrapper.find('.date')).toBeDefined();
    expect(wrapper.find('.date').text()).toEqual('8/1/2017');
  });

  it('should render an h1 with a className of current-temp', () => {
    expect(wrapper.find('.current-temp')).toBeDefined();
    expect(wrapper.find('.current-temp').text()).toEqual('83 ℉');
  });

  it('should render a p with a className of high', () => {
    expect(wrapper.find('.high')).toBeDefined();
    expect(wrapper.find('.high').text()).toEqual('High: 87 ℉');
  });

  it('should render a p with a className of low', () => {
    expect(wrapper.find('.low')).toBeDefined();
    expect(wrapper.find('.low').text()).toEqual('Low: 63 ℉');
  });

  it('should render a p with a className of weather-sum', () => {
    expect(wrapper.find('.weather-sum')).toBeDefined();
    expect(wrapper.find('.weather-sum').text()).toEqual('Sunny. High 87F. Winds NE at 5 to 10 mph.');
  });
});
