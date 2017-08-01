import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/Components/TenDay';
import weatherData from '../test_helpers/mockData';
import DailyCard from '../lib/Components/DailyCard'

describe('TenDay', () => {
  let wrapper;

  const dayCards = (weatherData.forecast.simpleforecast.forecastday || []).map( (day, i) => {
    if (i < 10) {
      return <DailyCard key={day.period} highT={day.high.fahrenheit} lowT={day.low.fahrenheit} day={day.date.weekday} img={day.icon_url} />
    }
  })

  beforeEach(() => {
    wrapper = shallow(
      <TenDay>
        {dayCards}
      </TenDay>)
  })


  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render 10 daily weather cards to the DOM', () => {
    expect(wrapper.find('DailyCard').length).toEqual(10)
    expect(wrapper.find('DailyCard')).toBeDefined()
  })

})
