import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyCard from '../lib/Components/HourlyCard';
import weatherData from '../test_helpers/mockData.js';

describe('HourlyCard', () => {
  let wrapper;

  beforeEach(() => {
    let hour = weatherData.hourly_forecast[0];

    wrapper = shallow(<HourlyCard
      temp={hour.temp.english} time={hour.FCTTIME.civil} img={hour.icon_url} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it.skip('should render a img with a className of hourly-weather-pic', () => {
    expect(wrapper.find('.hourly-weather-pic')).toBeDefined();
    expect(wrapper.find('.hourly-weather-pic').text()).toEqual()
  })

  it('should render a p with a className of hour-temp', () => {
    console.log('nnnnnnnnnNNNNNNNN ', wrapper.find('.hour-temp').debug());
    expect(wrapper.find('.hour-temp')).toBeDefined();
    expect(wrapper.find('.hour-temp').text()).toEqual("83 ℉")
  })
})
