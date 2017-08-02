// import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect, jest } from 'jest';
import DailyCard from '../lib/Components/DailyCard';
import weatherData from '../test_helpers/mockData';

describe('DailyCard', () => {
  let wrapper;
  const day = weatherData.forecast.simpleforecast.forecastday[0];

  beforeEach(() => {
    wrapper = shallow(<DailyCard
      highT={day.high.fahrenheit}
      lowT={day.low.fahrenheit}
      day={day.date.weekday}
      img={day.icon_url}
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a <p> tag with a className day', () => {
    expect(wrapper.find('.day')).toBeDefined();
    expect(wrapper.find('.day').text()).toEqual('Tuesday');
  });

  it.skip('should render an image displaying the current weather', () => {
    console.log(wrapper.find('.projected-weather-pic').debug());
    expect(wrapper.find('.projected-weather-pic')).toBeDefined();
    expect(wrapper.find('.projected-weather-pic').text()).toEqual(<img className="projected-weather-pic" src="http://icons.wxug.com/i/c/k/clear.gif" />);
  });

  it('should render a <p> tag with a className high-temp', () => {
    expect(wrapper.find('.high-temp')).toBeDefined();
    expect(wrapper.find('.high-temp').text()).toEqual('87℉');
  });

  it('should render a <p> tag with a className low-temp', () => {
    expect(wrapper.find('.low-temp')).toBeDefined();
    expect(wrapper.find('.low-temp').text()).toEqual('63℉');
  });
});
