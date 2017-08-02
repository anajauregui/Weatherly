import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/Components/SevenHour';
import weatherData from '../test_helpers/mockData.js';
import HourlyCard from '../lib/Components/HourlyCard'



describe('SevenHour', () => {
  let wrapper;

  const hourCards = (weatherData.hourly_forecast || []).map( (hour, i) => {

    if (i < 7) {
      return <HourlyCard temp={hour.temp.english} time={hour.FCTTIME.civil} img={hour.icon_url} key={hour.FCTTIME.civil} />
    }
  })

  beforeEach(() => {

    wrapper = shallow(
      <SevenHour hourlyForecast={weatherData.hourly_forecast}/>
    )
  })

  it('should exist', () => {

    expect(wrapper).toBeDefined()
  })

  it('should render 7 hourly weather cards', () => {
    expect(wrapper.find("HourlyCard").length).toEqual(7);
    expect(wrapper.find("HourlyCard")).toBeDefined();
  })
})
