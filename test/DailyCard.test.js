import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyCard from '../lib/Components/DailyCard';
import weatherData from '../test_helpers/mockData';

describe('DailyCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DailyCard
      highT={weatherData.forecast.simpleforecast.forecastday.high.fahrenheit}
      lowT={day.low.fahrenheit}
      day={day.date.weekday}
      img={day.icon_url}
    />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a <p> tag with a className day', () => {
    console.log(wrapper.debug())
    expect(wrapper.find('p')).toBeDefined();
    expect(wrapper.find('p').text().toEqual('')
  })

})
