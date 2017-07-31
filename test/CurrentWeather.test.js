import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../Components/CurrentWeather';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />)
  })

  // afterEach(() => {
  //   localStorage.clear()
  // })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
