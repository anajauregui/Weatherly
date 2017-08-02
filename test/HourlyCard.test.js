import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyCard from '../lib/Components/HourlyCard';
import weatherData from '../test_helpers/mockData.js';


describe('HourlyCard', () => {
  let wrapper;

  beforeEach(() => {
    let hour = weatherData.hourly_forecast[0];

    wrapper = shallow(
      <HourlyCard
      temp={hour.temp.english}
      time={hour.FCTTIME.civil}
      img={hour.icon_url} />
    )
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a img with a className of hourly-weather-pic', () => {
    expect(wrapper.find('.hourly-weather-pic')).toBeDefined();
    expect(wrapper.find('.hourly-weather-pic').prop('src')).toBe("http://icons.wxug.com/i/c/k/clear.gif")
  })

  it('should render a p with a className of hour-temp', () => {
    expect(wrapper.find('.hour-temp')).toBeDefined();
    expect(wrapper.find('.hour-temp').text()).toEqual("83 ℉")
  })

  it('should render a p with a className of hour', () => {
    expect(wrapper.find('.hour')).toBeDefined();
    expect(wrapper.find('.hour').text()).toEqual("12:00 PM")
  })
})
